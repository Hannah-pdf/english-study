/* TOEIC 850+ — 학습 화면
   내용(toeic.enc)은 비밀번호로 암호화되어 있고, 이 기기에서 한 번 열면 기억합니다. */
(() => {
const { setNav, render, esc, store, chev, check, $ } = window.UI;
let D = null;               // 복호화된 데이터
const PW_KEY = 'toeic.pw';

/* ── 암호 해제 ── */
const b64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
async function decrypt(pw) {
  const enc = await fetch('toeic.enc?v=1').then(r => r.json());
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pw), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: b64(enc.salt), iterations: enc.iter, hash: 'SHA-256' },
    base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(enc.iv) }, key, b64(enc.ct));
  return JSON.parse(new TextDecoder().decode(plain));
}
async function ensure() {
  if (D) return true;
  const pw = store.get(PW_KEY, null);
  if (!pw) return false;
  try { D = await decrypt(pw); return true; } catch { store.set(PW_KEY, null); return false; }
}
function lockScreen(after) {
  setNav({ back: { href: '#/', label: '홈' }, title: 'TOEIC 850+' });
  render(`
    <div class="lock">
      <div class="lock-ic"><svg viewBox="0 0 24 24"><path d="M7 10V7a5 5 0 0 1 10 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1zm2 0h6V7a3 3 0 0 0-6 0v3z"/></svg></div>
      <h1>TOEIC 850+</h1>
      <p>강의 자료라 비밀번호로 잠겨 있어요.<br>이 기기에서 한 번만 입력하면 돼요.</p>
      <form id="lf"><input id="pw" type="password" autocomplete="current-password" placeholder="비밀번호" enterkeyhint="go"><button class="lock-go" type="submit">열기</button></form>
      <p class="lock-err" id="err"></p>
    </div>`, 1);
  $('#lf').onsubmit = async e => {
    e.preventDefault();
    const pw = $('#pw').value; if (!pw) return;
    $('#err').textContent = '여는 중…';
    try { D = await decrypt(pw); store.set(PW_KEY, pw); after(); }
    catch { $('#err').textContent = '비밀번호가 맞지 않아요'; $('#pw').select(); }
  };
}

/* ── 공통 ── */
const fmt = s => esc(s).replace(/⟦/g, '<b>').replace(/⟧/g, '</b>');
const fmtAns = s => esc(s).replace(/⟦([^⟧]*)⟧/g, '<button class="ans" type="button">$1</button>');
const set = k => new Set(store.get(k, []));
const saveSet = (k, s) => store.set(k, [...s]);
const row = (href, ic, color, title, sub, done) =>
  `<a class="row" href="${href}"><span class="ic c-${color}${ic.length > 4 ? ' long' : ''}">${esc(ic)}</span><span class="t"><b>${esc(title)}</b><small>${esc(sub)}</small></span>${done ? check : ''}${chev}</a>`;
const back = { href: '#/toeic', label: 'TOEIC' };
function bindAns(root = document) {
  root.querySelectorAll('.ans').forEach(b => b.onclick = e => { e.stopPropagation(); b.classList.toggle('show'); });
}
function seg(items, cur, base) {
  return `<div class="seg">${items.map(([k, label]) => `<button data-k="${k}" class="${k === cur ? 'on' : ''}">${label}</button>`).join('')}</div>`;
}
function bindSeg(fn) { document.querySelectorAll('.seg button').forEach(b => b.onclick = () => fn(b.dataset.k)); }
const allWords = () => [
  ...D.rcVoca.flatMap(d => d.items.map(i => ({ f: i[0], b: i[1], src: `RC DAY ${d.day}` }))),
  ...D.lcVoca.filter(d => d.day < 10).flatMap(d => d.items.map(i => ({ f: i[0], b: i[1], src: `LC DAY ${d.day}` }))),
];

/* ── TOEIC 홈 ── */
function home() {
  const done = set('t.done'), known = set('t.known');
  const words = allWords();
  const kn = words.filter(w => known.has(w.f)).length;
  const rc = D.lessons.filter(l => l.part === 'RC'), lc = D.lessons.filter(l => l.part === 'LC');
  const notes = store.get('t.notes', []).length;
  const C = 2 * Math.PI * 29, pct = done.size / D.lessons.length;
  setNav({ back: { href: '#/', label: '홈' }, title: 'TOEIC 850+' });
  render(`
    <h1 class="large">TOEIC 850+</h1>
    <p class="lead">강의노트 · 단어 · 패러프레이징 · 오답노트</p>
    <div class="hero">
      <svg class="ring" viewBox="0 0 66 66"><circle class="bg" cx="33" cy="33" r="29"/><circle class="fg t" cx="33" cy="33" r="29" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}" transform="rotate(-90 33 33)"/></svg>
      <div><h2>강의 ${done.size} / ${D.lessons.length}</h2><p>외운 단어 ${kn} / ${words.length}개</p></div>
    </div>
    <div class="group-list">
      ${row('#/toeic/today', '20', 'orange', '오늘의 단어 20', '매일 바뀌는 RC·LC 단어 카드')}
      ${row('#/toeic/note', '✎', 'red', '내 오답노트', `퀴즈 형태로 적고 가려서 외우기 · ${notes}개`)}
    </div>
    <div class="sec-h">RC</div>
    <div class="group-list">
      ${row('#/toeic/l/RC', 'P5·6', 'blue', 'RC 강의노트', `750+ 강의 필기 ${rc.length}강 · 빈칸 정답 가리기`)}
      ${row('#/toeic/v/rc', 'RC', 'indigo', 'RC 어휘 15일', `${D.rcVoca.reduce((a, d) => a + d.items.length, 0)}단어 · 품사와 뜻`)}
      ${row('#/toeic/verbs', 'V+', 'purple', '동사 빈출 어휘', `${D.verbs.length}개 동사 · 연어 예문`)}
    </div>
    <div class="sec-h">LC</div>
    <div class="group-list">
      ${row('#/toeic/l/LC', 'P1-4', 'green', 'LC 강의노트', `750+ 강의 필기 ${lc.length}강`)}
      ${row('#/toeic/p1', 'P1', 'teal', 'PART 1 어휘', '기본 동사 30 · 직업 · 상황별')}
      ${row('#/toeic/pp', '=', 'pink', 'PART 3·4 패러프레이징', `3세트 ${D.para.reduce((a, p) => a + p.items.length, 0)}쌍 · 퀴즈`)}
      ${row('#/toeic/v/lc', 'LC', 'mint', 'LC 어휘 10일', `${D.lcVoca.reduce((a, d) => a + d.items.length, 0)}단어`)}
      ${row('#/toeic/pv', '0721', 'cyan', '파트별 빈출 단어', '0721–0800 · PART 1~4')}
    </div>
    <p class="foot">자료: 박혜원 POWER TOEIC / ETS 단기공략 750+ 강의 필기 · 개인 학습용 (외부 공유 금지 자료라 잠겨 있어요)</p>
  `, 1);
}

/* ── 강의노트 ── */
function lessonList(part) {
  const done = set('t.done');
  const L = D.lessons.filter(l => l.part === part);
  setNav({ back, title: `${part} 강의노트` });
  render(`<h1 class="large">${part} 강의노트</h1><p class="lead">ETS 단기공략 750+ 필기 (1~25강)</p>
    <div class="group-list">${L.map(l => row(`#/toeic/l/${l.no}`, String(l.no).padStart(2, '0'), part === 'RC' ? 'blue' : 'green',
      l.title.replace(/\s*\((RC|LC)[^)]*\)\s*$/, ''), (l.title.match(/\((RC|LC)[^)]*\)/) || [''])[0].replace(/[()]/g, ''), done.has(l.no))).join('')}</div>`, 2);
}
function blocksHTML(blocks) {
  let h = '', inList = false;
  const close = () => { if (inList) { h += '</ul>'; inList = false; } };
  for (const [t, x, n] of blocks) {
    if (t === 'li' || t === 'bu') {
      if (!inList) { h += '<ul class="lx">'; inList = true; }
      h += `<li>${t === 'li' ? `<i>${n}</i>` : '<i>•</i>'}<span>${fmt(x)}</span></li>`; continue;
    }
    close();
    const whole = /^⟦[^⟦⟧]*⟧$/.test(x);
    if (t === 'h' || whole) h += `<h4 class="lh">${fmt(x.replace(/⟦|⟧/g, ''))}</h4>`;
    else if (t === 'ex') h += `<p class="ex">${fmtAns(x)}</p>`;
    else h += /\(⟦|\/ ⟦/.test(x) ? `<p class="ex">${fmtAns(x)}</p>` : `<p>${fmt(x)}</p>`;
  }
  close();
  return h;
}
function lesson(no) {
  const l = D.lessons.find(x => x.no === +no); if (!l) return home();
  const done = set('t.done');
  const sameP = D.lessons.filter(x => x.part === l.part), i = sameP.indexOf(l), next = sameP[i + 1];
  const unit = (l.title.match(/\((RC|LC)[^)]*\)/) || [''])[0];
  setNav({ back: { href: `#/toeic/l/${l.part}`, label: `${l.part} 노트` }, title: `${l.no}강`, act: '<button id="showAll" type="button">정답</button>' });
  const quiz = l.quiz.map((q, k) => `
    <section class="card quiz">
      <h3><span class="qmark">Q</span>${esc(q.title)}</h3>
      ${q.q.map(x => `<p class="qq">${fmt(x.replace(/⟦|⟧/g, ''))}</p>`).join('')}
      <button class="pbtn reveal" data-k="${k}" type="button">정답 보기</button>
      <div class="qa" id="qa${k}" hidden>${q.a.map(x => `<p>${fmt(x)}</p>`).join('')}</div>
    </section>`).join('');
  const tips = l.tips.length ? `<details class="card tips"><summary>교재 문제별 TIP <span class="mute">(교재 쪽수 기준)</span></summary>
    ${l.tips.map(([t, x]) => t === 'h' ? (x ? `<h4>${esc(x)}</h4>` : '') : `<p>${fmt(x)}</p>`).join('')}</details>` : '';
  render(`
    <div class="ch-head"><span class="ic ${l.part === 'RC' ? 'c-blue' : 'c-green'}">${String(l.no).padStart(2, '0')}</span><div><h1>${fmt(l.title.replace(/\s*\((RC|LC)[^)]*\)\s*$/, ''))}</h1><p>Lesson ${l.no} · ${l.part} ${esc(unit)}</p></div></div>
    ${l.body.length ? `<p class="hintbar">회색 칸은 정답이에요. 탭하면 보이고, 오른쪽 위 <b>정답</b>을 누르면 한꺼번에 보여요.</p><section class="card lesson">${blocksHTML(l.body)}</section>` : '<p class="hintbar">이 강은 실전 문제풀이 강의라 교재 문제별 TIP 위주예요.</p>'}
    ${quiz}${tips}
    <button class="donebtn ${done.has(l.no) ? 'on' : ''}" id="done" type="button">${done.has(l.no) ? '✓ 복습 완료' : '복습 완료로 표시'}</button>
    ${next ? `<div class="group-list" style="margin-top:12px">${row(`#/toeic/l/${next.no}`, String(next.no).padStart(2, '0'), l.part === 'RC' ? 'blue' : 'green', next.title.replace(/\s*\((RC|LC)[^)]*\)\s*$/, ''), '다음 강')}</div>` : ''}
  `, 3);
  bindAns();
  let all = false;
  $('#showAll').onclick = () => { all = !all; document.querySelectorAll('.ans').forEach(b => b.classList.toggle('show', all)); $('#showAll').textContent = all ? '가리기' : '정답'; };
  document.querySelectorAll('.reveal').forEach(b => b.onclick = () => { const a = $('#qa' + b.dataset.k); a.hidden = !a.hidden; b.textContent = a.hidden ? '정답 보기' : '정답 숨기기'; });
  $('#done').onclick = () => { const d = set('t.done'); d.has(l.no) ? d.delete(l.no) : d.add(l.no); saveSet('t.done', d); const b = $('#done'); b.classList.toggle('on', d.has(l.no)); b.textContent = d.has(l.no) ? '✓ 복습 완료' : '복습 완료로 표시'; };
}

/* ── 단어 카드 / 목록 (공용) ── */
function cardDeck(words, key) {
  const known = set('t.known');
  let onlyUnknown = store.get('t.onlyUnknown', false);
  let list = onlyUnknown ? words.filter(w => !known.has(w.f)) : words.slice();
  let i = 0;
  const html = `
    <div class="deckbar"><span id="cnt"></span><label class="sw"><input type="checkbox" id="ou" ${onlyUnknown ? 'checked' : ''}><span></span>모르는 것만</label></div>
    <div class="flash" id="fc"><div class="inner"><div class="face front"><small id="fsrc"></small><p id="ff" class="en"></p><em class="tap">탭해서 뜻 보기</em></div><div class="face back"><small>뜻</small><p id="fb"></p></div></div></div>
    <div class="fc-nav"><button class="pbtn no" id="no" type="button">몰라요</button><button class="pbtn" id="shuf" type="button">섞기</button><button class="pbtn yes" id="yes" type="button">알아요</button></div>`;
  const mount = () => {
    const fc = $('#fc');
    const show = () => {
      fc.classList.remove('flip');
      if (!list.length) { $('#ff').textContent = '모두 외웠어요 🎉'; $('#fb').textContent = '"모르는 것만"을 끄면 전체를 다시 볼 수 있어요'; $('#fsrc').textContent = ''; $('#cnt').textContent = '0개 남음'; return; }
      const w = list[i % list.length];
      setTimeout(() => { $('#ff').textContent = w.f; $('#fb').textContent = w.b; $('#fsrc').textContent = (w.src || '') + (known.has(w.f) ? ' · 외움' : ''); }, 120);
      $('#cnt').textContent = `${(i % list.length) + 1} / ${list.length}`;
    };
    fc.onclick = () => fc.classList.toggle('flip');
    $('#yes').onclick = () => { if (!list.length) return; const w = list[i % list.length]; known.add(w.f); saveSet('t.known', known); if (onlyUnknown) { list.splice(i % list.length, 1); } else i++; show(); };
    $('#no').onclick = () => { if (!list.length) return; const w = list[i % list.length]; known.delete(w.f); saveSet('t.known', known); i++; show(); };
    $('#shuf').onclick = () => { for (let k = list.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [list[k], list[j]] = [list[j], list[k]]; } i = 0; show(); };
    $('#ou').onchange = e => { onlyUnknown = e.target.checked; store.set('t.onlyUnknown', onlyUnknown); list = onlyUnknown ? words.filter(w => !known.has(w.f)) : words.slice(); i = 0; show(); };
    let sx = 0; fc.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
    fc.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 60) { dx > 0 ? $('#yes').click() : $('#no').click(); } });
    show();
  };
  return { html, mount };
}
function wordList(words, hideDefault = false) {
  const known = set('t.known');
  const html = `<div class="bar-btns"><button class="pbtn" id="hide" type="button">${hideDefault ? '뜻 보이기' : '뜻 가리기'}</button></div>
    <div class="group-list vlist ${hideDefault ? 'hidden' : ''}" id="vl">${words.map((w, k) => `<button class="vrow" type="button" data-k="${k}">
      <span class="vf">${esc(w.f)}${known.has(w.f) ? ' <i class="kd">✓</i>' : ''}</span><span class="vb">${esc(w.b)}</span></button>`).join('')}</div>`;
  const mount = () => {
    const vl = $('#vl');
    $('#hide').onclick = () => { vl.classList.toggle('hidden'); vl.querySelectorAll('.vrow').forEach(r => r.classList.remove('open')); $('#hide').textContent = vl.classList.contains('hidden') ? '뜻 보이기' : '뜻 가리기'; };
    vl.querySelectorAll('.vrow').forEach(r => r.onclick = () => r.classList.toggle('open'));
  };
  return { html, mount };
}

/* ── 어휘 DAY ── */
function vocaDays(kind) {
  const days = kind === 'rc' ? D.rcVoca : D.lcVoca;
  const known = set('t.known');
  setNav({ back, title: kind === 'rc' ? 'RC 어휘' : 'LC 어휘' });
  render(`<h1 class="large">${kind === 'rc' ? 'RC 어휘 15일' : 'LC 어휘 10일'}</h1><p class="lead">반드시 품사와 뜻, 어울리는 어휘까지 함께</p>
    <div class="group-list">${days.map(d => {
      const k = d.items.filter(i => known.has(i[0])).length;
      return row(`#/toeic/v/${kind}/${d.day}`, 'D' + d.day, kind === 'rc' ? 'indigo' : 'mint', `DAY ${d.day}`, `${d.desc ? d.desc.replace(/\s*\/.*$/, '') + ' · ' : ''}${k}/${d.items.length} 외움`, k === d.items.length);
    }).join('')}</div>`, 2);
}
function vocaDay(kind, day, mode) {
  const days = kind === 'rc' ? D.rcVoca : D.lcVoca;
  const d = days.find(x => x.day === +day); if (!d) return vocaDays(kind);
  const words = d.items.map(i => ({ f: i[0], b: i[1], src: `${kind.toUpperCase()} DAY ${d.day}` }));
  mode = mode || store.get('t.vmode', 'card');
  setNav({ back: { href: `#/toeic/v/${kind}`, label: kind === 'rc' ? 'RC 어휘' : 'LC 어휘' }, title: `DAY ${d.day}` });
  const view = mode === 'card' ? cardDeck(words) : wordList(words);
  render(`<h1 class="large">DAY ${d.day}</h1><p class="lead">${esc(d.desc || `${words.length}단어`)}</p>
    ${seg([['card', '카드'], ['list', '목록']], mode)}${view.html}`, 3);
  view.mount();
  bindSeg(k => { store.set('t.vmode', k); vocaDay(kind, day, k); });
}
function today(mode) {
  const words = allWords();
  const day = Math.floor((Date.now() + 9 * 3600e3) / 864e5);
  const start = (day * 20) % words.length;
  const pick = Array.from({ length: 20 }, (_, k) => words[(start + k) % words.length]);
  mode = mode || 'card';
  setNav({ back, title: '오늘의 단어' });
  const view = mode === 'card' ? cardDeck(pick) : wordList(pick);
  render(`<h1 class="large">오늘의 단어</h1><p class="lead">매일 다른 20개 · 왼쪽으로 밀면 몰라요, 오른쪽은 알아요</p>
    ${seg([['card', '카드'], ['list', '목록']], mode)}${view.html}`, 2);
  view.mount();
  bindSeg(k => today(k));
}

/* ── 패러프레이징 ── */
function paraList() {
  setNav({ back, title: '패러프레이징' });
  render(`<h1 class="large">패러프레이징</h1><p class="lead">외우려 하기보다 여러 번 읽고 반복! 들린 말이 보기에선 다른 말로 바뀌어요.</p>
    <div class="group-list">${D.para.map(p => row(`#/toeic/pp/${p.id}`, '=', 'pink', p.title, `${p.src} · ${p.items.length}쌍`)).join('')}
    ${row('#/toeic/pp/lc10', '=', 'pink', 'LC VOCA DAY 10', `PART 3·4 빈출 Paraphrasing 1 · ${D.lcVoca[9].items.length}쌍`)}</div>`, 2);
}
function para(id, mode) {
  let p = D.para.find(x => x.id === id);
  if (id === 'lc10') p = { title: 'LC VOCA DAY 10', src: 'PART 3·4 빈출 Paraphrasing', items: D.lcVoca[9].items.map(i => [i[0], i[1], '']) };
  if (!p) return paraList();
  mode = mode || 'quiz';
  setNav({ back: { href: '#/toeic/pp', label: '목록' }, title: p.title });
  let body = '';
  if (mode === 'list') {
    body = `<div class="group-list">${p.items.map(([a, b, m]) => `<div class="prow"><span class="pa">${esc(a)}</span><span class="peq">=</span><span class="pb">${esc(b)}${m ? `<small>${esc(m)}</small>` : ''}</span></div>`).join('')}</div>`;
  } else {
    body = `<p class="hintbar">왼쪽 말이 보기에서 어떻게 바뀔까? 먼저 입 밖으로 말해 보고 탭!</p>
      <div class="group-list">${p.items.map(([a, b, m], k) => `<button class="prow quizrow" type="button"><span class="pa">${esc(a)}</span><span class="peq">=</span><span class="pb"><span class="cover">?</span><span class="real">${esc(b)}${m ? `<small>${esc(m)}</small>` : ''}</span></span></button>`).join('')}</div>`;
  }
  render(`<h1 class="large" style="font-size:28px">${esc(p.title)}</h1><p class="lead">${esc(p.src)}</p>
    ${seg([['quiz', '퀴즈'], ['list', '전체 보기']], mode)}${body}`, 3);
  document.querySelectorAll('.quizrow').forEach(r => r.onclick = () => r.classList.toggle('open'));
  bindSeg(k => para(id, k));
}

/* ── PART 1 ── */
function part1(mode) {
  mode = mode || 'verbs';
  const P = D.part1;
  setNav({ back, title: 'PART 1 어휘' });
  let body = '';
  if (mode === 'verbs') {
    body = `<p class="hintbar">외울 필요는 없고 여러 번 읽기. 영어 문장을 먼저 읽고 어떤 사진일지 떠올린 뒤 탭!</p>` + P.verbs.map((v, k) => `
      <section class="card p1">
        <h3><span class="n">${k + 1}</span>${esc(v.t)}</h3>
        ${v.note ? `<p class="mute">${esc(v.note)}</p>` : ''}
        ${v.ex.map(([e, kor]) => `<button class="pic" type="button"><span class="pe">${esc(e)}</span><span class="pk">📷 ${esc(kor)}</span></button>`).join('')}
      </section>`).join('');
  } else {
    const groups = mode === 'jobs' ? P.jobs : P.situations;
    body = groups.map(([h, items]) => `<div class="sec-h">${esc(h)}</div><div class="group-list">${items.map(([a, b]) => `<div class="prow"><span class="pa">${esc(a)}</span><span class="pb">${esc(b)}</span></div>`).join('')}</div>`).join('');
  }
  render(`<h1 class="large">PART 1 어휘</h1><p class="lead">YBM POWER TOEIC 860+</p>
    ${seg([['verbs', '기본 동사 30'], ['jobs', '직업·정체'], ['sit', '상황별']], mode)}${body}`, 2);
  document.querySelectorAll('.pic').forEach(b => b.onclick = () => b.classList.toggle('open'));
  bindSeg(k => part1(k));
}

/* ── 동사 빈출 / 파트별 단어 ── */
function verbs() {
  setNav({ back, title: '동사 빈출 어휘' });
  render(`<h1 class="large">동사 빈출 어휘</h1><p class="lead">연어·관용어 개념으로, 예문 위주로 여러 번 읽기</p>
    ${D.verbs.map(v => `<section class="card verb"><h3>${esc(v.v)} <span>${esc(v.m)}</span></h3>
      ${v.ex.map(([e, k]) => `<div class="vx"><span class="${/^cf\./.test(e) ? 'cf' : ''}">${esc(e)}</span><small>${esc(k)}</small></div>`).join('')}</section>`).join('')}`, 2);
}
function partVoca() {
  const known = set('t.known');
  setNav({ back, title: '파트별 단어' });
  render(`<h1 class="large">파트별 빈출 단어</h1><p class="lead">0721–0800 · 탭하면 뜻이 보여요</p>
    ${D.partVoca.map(g => `<div class="sec-h">${esc(g.part)}</div><div class="group-list vlist hidden">${g.items.map(([n, w, m]) => `<button class="vrow" type="button"><span class="vf"><i class="vn">${n}</i>${esc(w)}</span><span class="vb">${esc(m)}</span></button>`).join('')}</div>`).join('')}`, 2);
  document.querySelectorAll('.vrow').forEach(r => r.onclick = () => r.classList.toggle('open'));
}

/* ── 내 오답노트 ── */
function note(filter) {
  filter = filter || 'all';
  const notes = store.get('t.notes', []);
  const M = D.method;
  const shown = notes.map((n, i) => ({ ...n, i })).filter(n => filter === 'all' || n.cat === filter).reverse();
  setNav({ back, title: '내 오답노트' });
  render(`<h1 class="large">내 오답노트</h1><p class="lead">왼쪽엔 질문, 오른쪽엔 답 — 가리고 소리 내어 맞히기</p>
    <details class="card method"><summary>${esc(M.title)}</summary>
      <ol class="num">${M.points.map(p => `<li>${esc(p)}</li>`).join('')}</ol>
      <div class="fixes"><div><s>${esc(M.bad)}</s><b>이렇게 퀴즈로!</b></div></div>
      <div class="qtable">${M.good.map(([q, a]) => `<button class="qrow" type="button"><span>${esc(q)}</span><span class="qa2">${esc(a)}</span></button>`).join('')}</div>
    </details>
    <form class="card nform" id="nf">
      <div class="seg mini">${[['RC', 'RC'], ['LC', 'LC'], ['VOCA', '어휘']].map(([k, l], j) => `<label><input type="radio" name="cat" value="${k}" ${j === 0 ? 'checked' : ''}><span>${l}</span></label>`).join('')}</div>
      <input name="q" placeholder="질문  예) depend ( )" required autocomplete="off">
      <input name="a" placeholder="답  예) on" required autocomplete="off">
      <input name="memo" placeholder="메모 (선택)  예) 교재 152P 8번" autocomplete="off">
      <button class="lock-go" type="submit">추가</button>
    </form>
    ${notes.length ? `${seg([['all', `전체 ${notes.length}`], ['RC', 'RC'], ['LC', 'LC'], ['VOCA', '어휘']], filter)}
      <div class="bar-btns"><button class="pbtn" id="cov" type="button">답 보이기</button><button class="pbtn" id="exp" type="button">백업 복사</button></div>
      <div class="group-list qtable covered" id="nl">${shown.map(n => `<div class="nrow"><button class="qrow" type="button"><span>${esc(n.q)}${n.memo ? `<small>${esc(n.memo)}</small>` : ''}</span><span class="qa2">${esc(n.a)}</span></button><button class="del" data-i="${n.i}" type="button" aria-label="삭제">✕</button></div>`).join('')}</div>`
      : `<div class="empty small"><p>아직 적은 게 없어요. 강의에서 헷갈린 것을 퀴즈처럼 적어 보세요.</p></div>`}
  `, 2);
  document.querySelectorAll('.qrow').forEach(r => r.onclick = () => r.classList.toggle('open'));
  $('#nf').onsubmit = e => {
    e.preventDefault(); const f = new FormData(e.target);
    const n = store.get('t.notes', []); n.push({ cat: f.get('cat'), q: f.get('q').trim(), a: f.get('a').trim(), memo: f.get('memo').trim(), t: Date.now() });
    store.set('t.notes', n); note(filter);
  };
  document.querySelectorAll('.del').forEach(b => b.onclick = () => {
    const n = store.get('t.notes', []); const it = n[+b.dataset.i];
    if (!it) return; n.splice(+b.dataset.i, 1); store.set('t.notes', n); note(filter);
  });
  const cov = $('#cov'); if (cov) cov.onclick = () => { const l = $('#nl'); l.classList.toggle('covered'); cov.textContent = l.classList.contains('covered') ? '답 보이기' : '답 가리기'; };
  const exp = $('#exp'); if (exp) exp.onclick = async () => { try { await navigator.clipboard.writeText(JSON.stringify(store.get('t.notes', []))); exp.textContent = '복사됨 ✓'; } catch { exp.textContent = '복사 실패'; } };
  bindSeg(k => note(k));
}

/* ── 라우터 ── */
async function route(p) {
  if (!(await ensure())) return lockScreen(() => route(p));
  const [a, b, c, d] = p;
  if (!a) return home();
  if (a === 'l') return /^\d+$/.test(b) ? lesson(b) : lessonList(b === 'LC' ? 'LC' : 'RC');
  if (a === 'v') return c ? vocaDay(b, c, d) : vocaDays(b === 'lc' ? 'lc' : 'rc');
  if (a === 'today') return today(b);
  if (a === 'pp') return b ? para(b, c) : paraList();
  if (a === 'p1') return part1(b);
  if (a === 'verbs') return verbs();
  if (a === 'pv') return partVoca();
  if (a === 'note') return note(b);
  return home();
}
window.TOEIC = { route };
})();
