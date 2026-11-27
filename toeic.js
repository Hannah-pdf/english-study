/* TOEIC 850+ — 학습 화면
   내용(toeic.enc)은 비밀번호로 암호화되어 있고, 이 기기에서 한 번 열면 기억합니다. */
(() => {
const { setNav, render, esc, store, chev, check, $ } = window.UI;
let D = null;               // 복호화된 데이터
const PW_KEY = 'toeic.pw';

/* ── 암호 해제 ── */
const b64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
async function decrypt(pw) {
  const enc = await fetch('toeic.enc?v=5').then(r => r.json());
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
      ${(() => { const r = tLog()[dkey()]; return `<a class="row" href="#/toeic/test"><span class="ic c-orange">✓</span><span class="t"><b>매일 테스트</b><small>${r && r.pass ? `오늘 완료 ✓ ${r.best}/${r.total}` : '오늘 아직 안 봤어요'} · 🔥 ${streak()}일 연속</small></span>${r && r.pass ? check : ''}${chev}</a>`; })()}
      ${row('#/toeic/cal', '📅', 'green', '학습 캘린더', '매일 테스트 완료 기록')}
      ${row('#/toeic/today', '20', 'yellow', '오늘의 단어 20', '매일 바뀌는 RC·LC 단어 카드')}
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
    <div class="flash" id="fc"><div class="inner"><div class="face front"><small id="fsrc"></small><p id="ff" class="en"></p><em class="tap">탭해서 뜻 보기</em><button class="spk big" id="fspk" type="button" aria-label="발음 듣기"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg></button></div><div class="face back"><small>뜻</small><p id="fb"></p></div></div></div>
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
    $('#fspk').onclick = e => { e.stopPropagation(); if (list.length) speak(list[i % list.length].f); };
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


/* ── 매일 단어 테스트 ── */
const T_NEW = 20, T_REV = 15, PASS = 0.8;
/* 간격 반복 (Leitner): 맞히면 다음 상자로 → 1·3·7·14·30일 뒤 다시 출제, 틀리면 1일 뒤 */
const SRS_GAP = [1, 3, 7, 14, 30];
const dayIdx = (d = new Date()) => Math.floor((d.getTime() - d.getTimezoneOffset() * 6e4) / 864e5);
function srsMigrate(key, wrongKey) {
  if (store.get(key, null)) return;
  const S = {}, t = dayIdx();
  Object.keys(store.get(wrongKey, {})).forEach(id => { S[id] = { box: 0, due: t }; });
  store.set(key, S);
}
function srsDue(key, limit) {
  const S = store.get(key, {}), t = dayIdx();
  return Object.entries(S).filter(([, v]) => v.due <= t).sort((a, b) => a[1].due - b[1].due || a[1].box - b[1].box).slice(0, limit).map(([id]) => id);
}
function srsUpdate(key, right, wrong) {
  const S = store.get(key, {}), t = dayIdx();
  right.forEach(id => { const v = S[id] || { box: -1 }; const box = Math.min(v.box + 1, SRS_GAP.length - 1); S[id] = { box, due: t + SRS_GAP[box] }; });
  wrong.forEach(id => { S[id] = { box: 0, due: t + 1 }; });
  store.set(key, S);
}
function srsStats(key) {
  const S = Object.values(store.get(key, {})), t = dayIdx();
  return { today: S.filter(v => v.due <= t).length, tomorrow: S.filter(v => v.due === t + 1).length, master: S.filter(v => v.box >= 3).length, total: S.length };
}
const dkey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
let POOL = null;
/* 품사 추출: 오답 보기를 같은 품사에서 고르기 위해 */
function posOf(b, f) {
  const m = b.match(/^\(?\s*(불가산명사|가산명사|복합명사|복수명사|명사|형용사|동사|부사|전치사|접속사)/);
  if (m) return /명사/.test(m[1]) ? '명사' : m[1];
  if (/\s/.test(f.trim())) return '구';
  if (/(다|하다)[,)\s]*$/.test(b.split(/[,/]/)[0])) return '동사';
  if (/ly$/.test(f)) return '부사';
  return '기타';
}
/* 발음 (휴대폰 기본 음성) */
function speakable(t) { return t.replace(/[가-힣]+.*$/, '').replace(/\[[^\]]*\]|\([^)]*\)|~|\b(sb|sth|A|B)\b/g, ' ').replace(/\s+/g, ' ').trim(); }
function speak(t) {
  try {
    const u = new SpeechSynthesisUtterance(speakable(t)); if (!u.text) return;
    u.lang = 'en-US'; u.rate = 0.9;
    const v = speechSynthesis.getVoices().find(v => /en[-_]US/.test(v.lang) && /Samantha|Google|Siri|Aaron|Nicky/.test(v.name)) || speechSynthesis.getVoices().find(v => /en[-_]US/.test(v.lang));
    if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch {}
}
const spk = t => `<button class="spk" type="button" data-say="${esc(t)}" aria-label="발음 듣기"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg></button>`;
function bindSpk(root = document) { root.querySelectorAll('.spk').forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.say); }); }
const autoSpeak = () => store.get('t.autoSpeak', true);
const levenshtein = (a, b) => { a = a.toLowerCase(); b = b.toLowerCase(); const d = Array.from({ length: a.length + 1 }, (_, i) => [i]); for (let j = 1; j <= b.length; j++) d[0][j] = j; for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[a.length][b.length]; };
function pool() {
  if (POOL) return POOL;
  const seen = new Set(), out = [];
  const add = (f, b, src, p) => { f = (f || '').trim(); b = (b || '').trim(); if (!f || !b || seen.has(f)) return; seen.add(f); out.push({ f, b, src, p: p || posOf(b, f) }); };
  const lc = D.lcVoca.filter(d => d.day < 10);
  for (let k = 0; k < Math.max(D.rcVoca.length, lc.length); k++) {
    if (D.rcVoca[k]) D.rcVoca[k].items.forEach(i => add(i[0], i[1], `RC DAY ${D.rcVoca[k].day}`));
    if (lc[k]) lc[k].items.forEach(i => add(i[0], i[1], `LC DAY ${lc[k].day}`));
  }
  const PV = { n: '명사', v: '동사', adj: '형용사', adv: '부사', phr: '구' };
  D.partVoca.forEach(g => g.items.forEach(([n, w, m]) => { const k = (m.match(/^(n|v|adj|adv|phr)\./) || [])[1]; add(w, m.replace(/^(n|v|adj|adv|phr)\.\s*/, ''), `${g.part} ${n}`, PV[k]); }));
  return POOL = out;
}
const tLog = () => store.get('t.test.log', {});
function streak() {
  const log = tLog(); let n = 0; const d = new Date();
  if (!(log[dkey(d)] && log[dkey(d)].pass)) d.setDate(d.getDate() - 1);
  while (log[dkey(d)] && log[dkey(d)].pass) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function todaySet() {
  const today = dkey();
  let cur = store.get('t.test.today', null);
  if (cur && cur.date === today) return cur;
  const P = pool();
  const pos = store.get('t.test.pos', 0) % P.length;
  srsMigrate('t.srs', 't.wrong');
  const rev = srsDue('t.srs', T_REV).filter(f => P.some(w => w.f === f));
  const fresh = [];
  for (let k = 0; fresh.length < T_NEW && k < P.length; k++) { const w = P[(pos + k) % P.length]; if (!rev.includes(w.f)) fresh.push(w.f); }
  cur = { date: today, set: Math.floor(pos / T_NEW) + 1, fresh, rev, advanced: false };
  store.set('t.test.today', cur);
  return cur;
}
/* 활동 링 (Apple 피트니스 스타일) */
const RC = { red: '#fa114f', green: '#34c759', blue: '#0a84ff' };
function rings(size, stroke, list, gap = 2) {
  let out = `<svg class="rings" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
  list.forEach((r, k) => {
    const rad = size / 2 - stroke / 2 - k * (stroke + gap);
    if (rad <= 0) return;
    const C = 2 * Math.PI * rad, p = Math.max(0, Math.min(r.pct, 1));
    out += `<circle cx="${size / 2}" cy="${size / 2}" r="${rad}" fill="none" stroke="${r.color}" stroke-opacity=".18" stroke-width="${stroke}"/>`;
    if (p > 0) out += `<circle class="rg" cx="${size / 2}" cy="${size / 2}" r="${rad}" fill="none" stroke="${r.color}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - p)}" transform="rotate(-90 ${size / 2} ${size / 2})" style="--c:${C}"/>`;
  });
  return out + '</svg>';
}
function weekDays() {
  const now = new Date(), mon = new Date(now); mon.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  return Array.from({ length: 7 }, (_, k) => { const d = new Date(mon); d.setDate(mon.getDate() + k); return d; });
}
const dayPct = r => r ? r.best / r.total : 0;
function testHome() {
  const P = pool(), cur = todaySet(), log = tLog(), r = log[cur.date];
  const gc = gTodaySet(), glog = gLog(), gr = glog[gc.date], gWrongN = Object.keys(store.get('t.g.wrong', {})).length, gn = gc.fresh.length + gc.rev.length;
  const pos = Math.min(store.get('t.test.pos', 0), P.length), wrongN = Object.keys(store.get('t.wrong', {})).length;
  const wk = weekDays(), wkDone = wk.filter(d => log[dkey(d)] && log[dkey(d)].pass).length;
  const n = cur.fresh.length + cur.rev.length;
  const today = new Date();
  setNav({ back, title: '오늘의 테스트' });
  render(`
    <p class="eyebrow">${today.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'long' })}</p>
    <h1 class="large" style="margin-top:0">오늘의 테스트</h1>

    <div class="weekstrip">${wk.map(d => { const k = dkey(d), x = log[k]; return `
      <div class="wd ${k === cur.date ? 'now' : ''}"><span>${'월화수목금토일'[(d.getDay() + 6) % 7]}</span>
      ${rings(32, 4, [{ pct: dayPct(x), color: RC.red }, { pct: dayPct(glog[k]), color: RC.green }], 1.5)}${x && x.pass ? '<i class="wcheck"></i>' : ''}</div>`; }).join('')}</div>

    <section class="act">
      <div class="act-ring">${rings(150, 17, [
        { pct: r ? r.best / r.total : 0, color: RC.red },
        { pct: gr ? gr.best / gr.total : 0, color: RC.green },
        { pct: pos / P.length, color: RC.blue }])}</div>
      <div class="act-stats">
        <div><small>단어</small><b style="color:${RC.red}">${r ? r.best : 0}<em>/${n}</em></b></div>
        <div><small>Part 5 문법</small><b style="color:${RC.green}">${gr ? gr.best : 0}<em>/${gn}</em></b></div>
        <div><small>단어 진도</small><b style="color:${RC.blue}">${pos}<em>/${P.length}</em></b></div>
      </div>
    </section>

    <section class="glass">
      <div class="gl-row"><div><b>${cur.set}세트</b><span>새 단어 ${cur.fresh.length}${cur.rev.length ? ` · 복습 ${cur.rev.length}` : ''} · ${Math.round(PASS * 100)}점 이상 완료</span></div>
        ${r ? `<span class="badge2 ${r.pass ? 'ok' : 'warn'}">${r.pass ? '완료' : `${Math.round(r.best / r.total * 100)}점`}</span>` : ''}</div>
      <a class="btn-primary" href="#/toeic/test/run">${r ? (r.pass ? '다시 풀기' : '재도전') : '시작하기'}</a>
      <a class="btn-plain" href="#/toeic/test/study">카드로 먼저 보기</a>
    </section>

    <section class="glass">
      <div class="gl-row"><div><b>Part 5 문법</b><span>강의노트 예문 ${D.grammar.length}문제에서 ${gc.fresh.length}개${gc.rev.length ? ` · 복습 ${gc.rev.length}` : ''}</span></div>
        ${gr ? `<span class="badge2 ${gr.pass ? 'ok' : 'warn'}">${gr.pass ? '완료' : `${Math.round(gr.best / gr.total * 100)}점`}</span>` : ''}</div>
      <a class="btn-primary green" href="#/toeic/gtest">${gr ? '다시 풀기' : '시작하기'}</a>
      ${gWrongN ? `<a class="btn-plain" href="#/toeic/gtest/retry">틀린 문법 ${gWrongN}개 다시 풀기</a>` : ''}
    </section>

    <div class="sec-h">기록</div>
    <div class="group-list">
      <a class="row" href="#/toeic/cal"><span class="ic sf" style="background:${RC.red}">${svgIcon('flame')}</span><span class="t"><b>연속 학습</b><small>${streak()}일째 · 이번 주 ${wkDone}/7일 · 캘린더 보기</small></span>${chev}</a>
      <a class="row" href="#/toeic/test/wrong"><span class="ic sf" style="background:#ff9500">${svgIcon('x')}</span><span class="t"><b>틀린 단어</b><small>${wrongN}개 · 두 번 연속 맞히면 빠져요</small></span>${chev}</a>
    </div>
    <div class="sec-h">복습 일정 <span class="sec-sub">맞히면 1·3·7·14·30일 뒤에 다시 나와요</span></div>
    <div class="srsbar">${(() => { const a = srsStats('t.srs'), g = srsStats('t.g.srs'); return `
      <div><b>${a.today + g.today}</b><span>오늘 복습</span></div>
      <div><b>${a.tomorrow + g.tomorrow}</b><span>내일 예정</span></div>
      <div><b style="color:#34c759">${a.master}</b><span>장기 기억 단어</span></div>`; })()}
    </div>`, 2);
}
function svgIcon(n) {
  const p = {
    flame: 'M12 2c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5.3 1.6 1.2 2.6 2.2 3C10.5 7.5 11 4.5 12 2z',
    x: 'M6.4 5L12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z',
    check: 'M9.5 16.2L5.3 12l-1.4 1.4 5.6 5.6L20.1 8.4 18.7 7z',
  }[n];
  return `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="#fff" d="${p}"/></svg>`;
}
function testStudy() {
  const cur = todaySet(), P = pool();
  const words = [...cur.fresh, ...cur.rev].map(f => P.find(w => w.f === f)).filter(Boolean);
  setNav({ back: { href: '#/toeic/test', label: '테스트' }, title: '오늘의 단어' });
  const view = cardDeck(words);
  render(`<h1 class="large">오늘의 단어</h1><p class="lead">테스트에 나올 ${words.length}개예요. 다 보면 테스트로!</p>${view.html}
    <a class="lock-go block" href="#/toeic/test/run" style="margin-top:14px">테스트 시작</a>`, 3);
  view.mount();
}
function shuffle(a) { for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; }
/* 시험용 뜻: 영어 힌트(괄호 속 동의어, '/ 다른 표현', '= ...', '명사 :' 같은 접두)를 지워 정답이 새지 않게 */
function qm(b) {
  let t = String(b).replace(/\s*[\(（][^)）]*[A-Za-z][^)）]*[\)）]/g, '').replace(/\s*\*.*$/, '');
  const segs = t.split(/\s+\/\s+/).map(x => x.replace(/\s*=\s*[A-Za-z(].*$/, '').replace(/\s*\(?\s*(반의어|동의어)[^)]*\)?$/, '')
    .replace(/^[^:)]{1,14}:\s*/, '').trim());
  const ok = segs.filter(x => x && !/[A-Za-z]{2,}/.test(x) && /[가-힣~]/.test(x));
  return (ok.length ? ok.join(' / ') : segs[0].replace(/[A-Za-z][A-Za-z\s'-]*/g, '…')).replace(/\s{2,}/g, ' ').trim();
}
function makeQs(fs) {
  const P = pool();
  return shuffle(fs.map(f => P.find(w => w.f === f)).filter(Boolean)).map((w, k) => {
    const rev = k % 3 === 2;                     // 3문제마다 1번은 뜻 → 단어
    const head = t => t.toLowerCase().split(/[\s/=(~]+/).filter(Boolean)[0] || '';
    const ko = t => new Set((t.match(/[가-힣]{2,}/g) || []).filter(x => !/^(명사|동사|형용사|부사|전치사|접속사|복수명사|가산명사|불가산명사|동사원형)$/.test(x)));
    const wk = ko(w.b);
    // 정답과 뜻이 겹치거나 같은 단어로 시작하는 표현은 오답 보기에서 제외 (정답이 두 개처럼 보이지 않게)
    const pool2 = P.filter(x => x.f !== w.f && x.b !== w.b && head(x.f) !== head(w.f)
      && !x.f.toLowerCase().includes(w.f.toLowerCase()) && !w.f.toLowerCase().includes(x.f.toLowerCase())
      && ![...ko(x.b)].some(t => wk.has(t)));
    const same = pool2.filter(x => x.p === w.p);
    // 철자가 비슷한 단어 1개 (헷갈리기 쉬운 오답) + 같은 품사 단어
    const look = pool2.filter(x => x.f.slice(0, 3).toLowerCase() === w.f.slice(0, 3).toLowerCase() || levenshtein(x.f, w.f) <= Math.max(2, Math.floor(w.f.length / 4)));
    const picked = [];
    const sim = shuffle(look.filter(x => x.p === w.p))[0];
    if (sim) picked.push(sim);
    for (const x of shuffle(same.length >= 3 ? same : pool2)) { if (picked.length >= 3) break; if (!picked.includes(x) && !picked.some(p => p.b === x.b)) picked.push(x); }
    const others = picked.slice(0, 3);
    const opts = shuffle([w, ...others]);
    return { w, rev, opts, ans: opts.indexOf(w) };
  });
}
function testRun(only) {
  const cur = todaySet();
  const fs = only && only.length ? only : [...cur.fresh, ...cur.rev];
  const Q = makeQs(fs);
  let i = 0, score = 0; const wrong = [], right = [];
  setNav({ back: { href: '#/toeic/test', label: '닫기' }, title: only ? '다시 풀기' : '오늘의 테스트', act: '<span id="tprog" class="tprog"></span>' });
  render(`<div class="tline"><i id="tfill"></i></div><div id="tq"></div>`, 3);
  document.body.classList.add('testing');
  const draw = () => {
    if (i >= Q.length) return finish();
    const q = Q[i];
    $('#tprog').textContent = `${i + 1}/${Q.length}`;
    $('#tfill').style.width = `${(i / Q.length) * 100}%`;
    $('#tq').innerHTML = `
      <div class="prompt"><small>${q.rev ? '이 뜻의 단어는?' : '이 단어의 뜻은?'}</small><p class="${q.rev ? 'pmean' : 'pword'}">${esc(q.rev ? qm(q.w.b) : q.w.f)}</p>${q.rev ? '' : spk(q.w.f)}</div>
      <div class="choice">${q.opts.map((o, k) => `<button class="ch" data-k="${k}" type="button"><span>${esc(q.rev ? o.f : qm(o.b))}</span><i></i></button>`).join('')}</div>
      <div class="sheet" id="sheet"></div>`;
    $('#tq').classList.remove('done');
    bindSpk($('#tq'));
    if (!q.rev && autoSpeak()) speak(q.w.f);
    document.querySelectorAll('.ch').forEach(b => b.onclick = () => {
      if ($('#tq').classList.contains('done')) return;
      $('#tq').classList.add('done');
      const k = +b.dataset.k, ok = k === q.ans;
      const all = document.querySelectorAll('.ch');
      all[q.ans].classList.add('right');
      if (!ok) { b.classList.add('bad'); wrong.push(q.w.f); } else { score++; right.push(q.w.f); }
      if (navigator.vibrate) navigator.vibrate(ok ? 8 : [20, 40, 20]);
      const next = () => { i++; draw(); };
      if (ok) setTimeout(next, 600);
      else {
        const sh = $('#sheet');
        sh.innerHTML = `<div class="sh-in"><p class="sh-t">정답</p><p class="sh-w"><b>${esc(q.w.f)}</b>${spk(q.w.f)} ${esc(q.w.b)}</p><p class="sh-s">${esc(q.w.src)}</p><button class="btn-primary" id="nx" type="button">계속</button></div>`;
        bindSpk(sh); if (q.rev) speak(q.w.f);
        requestAnimationFrame(() => sh.classList.add('up'));
        $('#nx').onclick = next;
      }
    });
  };
  const finish = () => {
    document.body.classList.remove('testing');
    const W = store.get('t.wrong', {}), P = pool();
    wrong.forEach(f => { const w = P.find(x => x.f === f); W[f] = { b: w ? w.b : '', n: 0, t: Date.now() }; });
    right.forEach(f => { if (W[f]) { W[f].n++; W[f].t = Date.now(); if (W[f].n >= 2) delete W[f]; } });
    store.set('t.wrong', W);
    srsUpdate('t.srs', right, wrong);
    const pct = score / Q.length, pass = pct >= PASS;
    if (!only) {
      const log = tLog(), d = cur.date, prev = log[d];
      log[d] = { best: Math.max(score, prev ? prev.best : 0), total: Q.length, tries: (prev ? prev.tries : 0) + 1,
        pass: (prev && prev.pass) || pass, wrong: pass || !prev ? wrong : prev.wrong, set: cur.set };
      store.set('t.test.log', log);
      if (!cur.advanced) { store.set('t.test.pos', store.get('t.test.pos', 0) + cur.fresh.length); cur.advanced = true; store.set('t.test.today', cur); }
    }
    $('#tfill').style.width = '100%';
    $('#tprog').textContent = '';
    $('#tq').innerHTML = `
      <div class="result2">
        <div class="r-ring">${rings(180, 22, [{ pct, color: pass ? RC.green : RC.red }])}<div class="r-num"><b>${score}</b><span>/ ${Q.length}</span></div></div>
        <h2>${pass ? (only ? '모두 맞혔어요' : '오늘 목표 달성') : '조금만 더'}</h2>
        <p>${pass ? (only ? '틀린 단어를 다시 정복했어요.' : '캘린더에 완료로 기록했어요.') : `${Math.ceil(Q.length * PASS)}개 이상 맞히면 완료돼요.`}</p>
      </div>
      <div class="group-list summ">
        <div class="srow"><span>정답</span><b style="color:${RC.green}">${score}</b></div>
        <div class="srow"><span>오답</span><b style="color:${RC.red}">${wrong.length}</b></div>
        <div class="srow"><span>연속 학습</span><b>${streak()}일</b></div>
      </div>
      ${wrong.length ? `<div class="sec-h">틀린 단어</div><div class="group-list">${wrong.map(f => { const w = pool().find(x => x.f === f); return `<div class="wrow"><b>${esc(f)}${spk(f)}</b><span>${esc(w ? w.b : '')}</span></div>`; }).join('')}</div>
        <button class="btn-primary" id="again" type="button">틀린 단어 다시 풀기</button>` : ''}
      <a class="btn-plain" href="#/toeic/cal">캘린더 보기</a>
      <a class="btn-plain" href="#/toeic/test">완료</a>`;
    bindSpk($('#tq'));
    const ag = $('#again'); if (ag) ag.onclick = () => testRun(wrong.slice());
  };
  draw();
}
function wrongList() {
  const W = store.get('t.wrong', {});
  const words = Object.entries(W).sort((a, b) => b[1].t - a[1].t).map(([f, v]) => ({ f, b: v.b, src: v.n ? `복습 ${v.n}/2` : '' }));
  setNav({ back: { href: '#/toeic/test', label: '테스트' }, title: '틀린 단어' });
  if (!words.length) { render(`<h1 class="large">틀린 단어 모음</h1><div class="empty small"><p>틀린 단어가 없어요 👏</p></div>`, 3); return; }
  const view = wordList(words, true);
  render(`<h1 class="large">틀린 단어 모음</h1><p class="lead">${words.length}개 · 다음 테스트에 복습으로 나와요</p>
    <a class="lock-go block" href="#/toeic/test/retry" style="margin-bottom:12px">틀린 단어만 테스트</a>${view.html}`, 3);
  view.mount();
}
function calendar(ym) {
  const log = tLog(), now = new Date();
  let [y, m] = ym ? ym.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const days = new Date(y, m, 0).getDate(), lead = (new Date(y, m - 1, 1).getDay() + 6) % 7;
  const prev = m === 1 ? `${y - 1}-12` : `${y}-${m - 1}`, next = m === 12 ? `${y + 1}-1` : `${y}-${m + 1}`;
  const entries = Object.entries(log), passDays = entries.filter(([, v]) => v.pass);
  const mm = String(m).padStart(2, '0');
  const monthPass = passDays.filter(([d]) => d.startsWith(`${y}-${mm}`)).length;
  const avg = entries.length ? Math.round(entries.reduce((a, [, v]) => a + v.best / v.total, 0) / entries.length * 100) : 0;
  let cells = '';
  for (let k = 0; k < lead; k++) cells += '<span></span>';
  for (let d = 1; d <= days; d++) {
    const key = `${y}-${mm}-${String(d).padStart(2, '0')}`, r = log[key], fut = new Date(y, m - 1, d) > now;
    cells += `<button class="cday ${key === dkey() ? 'now' : ''} ${fut ? 'future' : ''}" data-d="${key}" type="button">
      <span class="cn">${d}</span>${fut ? '<span class="cr"></span>' : rings(36, 4.5, [{ pct: dayPct(r), color: RC.red }, { pct: dayPct(gLog()[key]), color: RC.green }], 1.5)}</button>`;
  }
  setNav({ back: { href: '#/toeic/test', label: '테스트' }, title: '기록' });
  render(`
    <h1 class="large">기록</h1>
    <div class="trend">
      <div><small>연속</small><b>${streak()}<em>일</em></b></div>
      <div><small>이번 달 완료</small><b>${monthPass}<em>일</em></b></div>
      <div><small>평균 점수</small><b>${avg}<em>%</em></b></div>
    </div>
    <section class="card cal2">
      <div class="cal2-h"><b>${m}월</b><span>${y}</span><div class="cal2-nav"><a href="#/toeic/cal/${prev}" aria-label="이전 달">‹</a><a href="#/toeic/cal/${next}" aria-label="다음 달">›</a></div></div>
      <div class="cal2-w">${'월화수목금토일'.split('').map(w => `<span>${w}</span>`).join('')}</div>
      <div class="cal2-g">${cells}</div>
      <p class="cal2-note"><i class="lg r"></i>바깥 링 단어 · <i class="lg g"></i>안쪽 링 문법. 링이 꽉 차면 만점, 아래 점은 단어 80점 이상 완료한 날.</p>
    </section>
    <div id="dd"></div>`, 3);
  document.querySelectorAll('.cday:not(.future)').forEach(b => {
    const r = log[b.dataset.d]; if (r && r.pass) b.classList.add('pass');
    b.onclick = () => {
      document.querySelectorAll('.cday').forEach(x => x.classList.remove('sel')); b.classList.add('sel');
      const P = pool(), dt = new Date(b.dataset.d + 'T00:00'), g = gLog()[b.dataset.d];
      $('#dd').innerHTML = `<section class="card dsum"><p class="eyebrow" style="margin:0 0 6px">${dt.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'long' })}</p>
        ${r ? `<div class="ds-top">${rings(64, 9, [{ pct: dayPct(r), color: RC.red }])}<div><b>${r.best}<em>/${r.total}</em></b><span>${r.pass ? '완료' : '미완료'} · ${r.tries}회 응시${r.set ? ` · ${r.set}세트` : ''}</span></div></div>
          ${r.wrong && r.wrong.length ? `<div class="ds-w">${r.wrong.map(f => { const w = P.find(x => x.f === f); return `<div class="wrow"><b>${esc(f)}${spk(f)}</b><span>${esc(w ? w.b : '')}</span></div>`; }).join('')}</div>` : '<p class="mute">틀린 단어 없음</p>'}`
        : '<p class="mute">단어 테스트 기록이 없어요.</p>'}
        ${g ? `<div class="ds-g"><span class="dot-g"></span>Part 5 문법 <b>${g.best}/${g.total}</b> ${g.pass ? '· 완료' : ''}</div>` : ''}</section>`;
      $('#dd').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
  });
}

/* ── Part 5 문법 테스트 (강의노트 예문의 정답 칸으로 출제) ── */
const G_NEW = 10, G_REV = 5;
const gLog = () => store.get('t.g.log', {});
function gTodaySet() {
  const today = dkey(); let cur = store.get('t.g.today', null);
  if (cur && cur.date === today) return cur;
  const G = D.grammar, pos = store.get('t.g.pos', 0) % G.length;
  srsMigrate('t.g.srs', 't.g.wrong');
  const rev = srsDue('t.g.srs', G_REV).filter(id => G.some(q => q.id === id));
  const fresh = [];
  for (let k = 0; fresh.length < G_NEW && k < G.length; k++) { const q = G[(pos + k) % G.length]; if (!rev.includes(q.id)) fresh.push(q.id); }
  cur = { date: today, fresh, rev, advanced: false };
  store.set('t.g.today', cur); return cur;
}
function gRun(only) {
  const cur = gTodaySet();
  const ids = only && only.length ? only : [...cur.fresh, ...cur.rev];
  const Q = shuffle(ids.map(id => D.grammar.find(q => q.id === id)).filter(Boolean)).map(q => {
    const opts = shuffle(q.o.map((t, k) => ({ t, ok: k === q.a }))); return { q, opts, ans: opts.findIndex(o => o.ok) };
  });
  let i = 0, score = 0; const wrong = [], right = [];
  setNav({ back: { href: '#/toeic/test', label: '닫기' }, title: 'Part 5 문법', act: '<span id="tprog" class="tprog"></span>' });
  render(`<div class="tline"><i id="tfill" class="g"></i></div><div id="tq"></div>`, 3);
  document.body.classList.add('testing');
  const fillIn = (q, t) => esc(q.s).replace('_____', `<u class="gfill">${esc(t)}</u>`);
  const draw = () => {
    if (i >= Q.length) return finish();
    const { q, opts, ans } = Q[i];
    $('#tprog').textContent = `${i + 1}/${Q.length}`;
    $('#tfill').style.width = `${(i / Q.length) * 100}%`;
    $('#tq').innerHTML = `
      <div class="prompt gp"><small>빈칸에 알맞은 것은?</small><p class="gs">${esc(q.s).replace('_____', '<span class="gblank"></span>')}</p></div>
      <div class="choice">${opts.map((o, k) => `<button class="ch" data-k="${k}" type="button"><span>${esc(o.t)}</span><i></i></button>`).join('')}</div>
      <div class="sheet" id="sheet"></div>`;
    $('#tq').classList.remove('done');
    document.querySelectorAll('.ch').forEach(b => b.onclick = () => {
      if ($('#tq').classList.contains('done')) return;
      $('#tq').classList.add('done');
      const k = +b.dataset.k, ok = k === ans, all = document.querySelectorAll('.ch');
      all[ans].classList.add('right');
      if (!ok) { b.classList.add('bad'); wrong.push(q.id); } else { score++; right.push(q.id); }
      $('.gs').innerHTML = fillIn(q, opts[ans].t);
      if (navigator.vibrate) navigator.vibrate(ok ? 8 : [20, 40, 20]);
      const next = () => { i++; draw(); };
      if (ok) setTimeout(next, 900);
      else {
        const sh = $('#sheet');
        sh.innerHTML = `<div class="sh-in"><p class="sh-t">정답 · ${esc(opts[ans].t)}</p><p class="sh-w">${fillIn(q, opts[ans].t)}</p><p class="sh-s"><a href="#/toeic/l/${q.l}">Lesson ${q.l} 노트에서 다시 보기 ›</a></p><button class="btn-primary" id="nx" type="button">계속</button></div>`;
        requestAnimationFrame(() => sh.classList.add('up'));
        $('#nx').onclick = next;
      }
    });
  };
  const finish = () => {
    document.body.classList.remove('testing');
    const W = store.get('t.g.wrong', {});
    wrong.forEach(id => { W[id] = { n: 0, t: Date.now() }; });
    right.forEach(id => { if (W[id]) { W[id].n++; W[id].t = Date.now(); if (W[id].n >= 2) delete W[id]; } });
    store.set('t.g.wrong', W);
    srsUpdate('t.g.srs', right, wrong);
    const pct = score / Q.length, pass = pct >= PASS;
    if (!only) {
      const log = gLog(), d = cur.date, prev = log[d];
      log[d] = { best: Math.max(score, prev ? prev.best : 0), total: Q.length, tries: (prev ? prev.tries : 0) + 1, pass: (prev && prev.pass) || pass, wrong };
      store.set('t.g.log', log);
      if (!cur.advanced) { store.set('t.g.pos', store.get('t.g.pos', 0) + cur.fresh.length); cur.advanced = true; store.set('t.g.today', cur); }
    }
    $('#tfill').style.width = '100%'; $('#tprog').textContent = '';
    $('#tq').innerHTML = `
      <div class="result2">
        <div class="r-ring">${rings(180, 22, [{ pct, color: pass ? RC.green : RC.red }])}<div class="r-num"><b>${score}</b><span>/ ${Q.length}</span></div></div>
        <h2>${pass ? '문법 완료' : '조금만 더'}</h2>
        <p>${pass ? '캘린더 초록 링에 기록했어요.' : `${Math.ceil(Q.length * PASS)}개 이상 맞히면 완료돼요.`}</p>
      </div>
      ${wrong.length ? `<div class="sec-h">틀린 문제</div><div class="group-list">${wrong.map(id => { const q = D.grammar.find(x => x.id === id); return `<a class="wrow" href="#/toeic/l/${q.l}"><b>${esc(q.o[q.a])}</b><span>${esc(q.s.replace('_____', '[ ' + q.o[q.a] + ' ]'))}</span></a>`; }).join('')}</div>
        <button class="btn-primary" id="again" type="button">틀린 문제 다시 풀기</button>` : ''}
      <a class="btn-plain" href="#/toeic/test">완료</a>`;
    const ag = $('#again'); if (ag) ag.onclick = () => gRun(wrong.slice());
  };
  draw();
}

/* ── 라우터 ── */
async function route(p) {
  document.body.classList.remove('testing');
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
  if (a === 'test') return b === 'run' ? testRun() : b === 'study' ? testStudy() : b === 'wrong' ? wrongList() : b === 'retry' ? testRun(Object.keys(store.get('t.wrong', {}))) : testHome();
  if (a === 'cal') return calendar(b);
  if (a === 'gtest') return gRun(b === 'retry' ? Object.keys(store.get('t.g.wrong', {})) : null);
  return home();
}
window.TOEIC = { route };
})();
