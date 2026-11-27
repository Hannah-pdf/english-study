(() => {
const $ = (s, el = document) => el.querySelector(s);
const app = $('#app');
const nav = $('#nav');
const CH = window.HCLASS;
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const done = () => store.get('hclass.done', []);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const chev = '<svg class="chev" viewBox="0 0 8 13"><path d="M1 1l5.5 5.5L1 12"/></svg>';
const check = '<span class="done"><svg viewBox="0 0 12 10"><path d="M4.2 9.4L.4 5.6l1.4-1.4 2.4 2.4L10.2.6l1.4 1.4z"/></svg></span>';
const allDrills = () => CH.flatMap(c => (c.drills || []).map(d => ({ ko: d[0], en: d[1], note: d[2] || '', ch: c })));

let prevDepth = 0;
function setNav({ back = null, title = '', act = '' }) {
  nav.innerHTML = `<div class="nav-row">
    ${back ? `<a class="nav-back" href="${back.href}"><svg viewBox="0 0 13 21"><path d="M11 1.5L2 10.5l9 9" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>${esc(back.label)}</a>` : '<span class="nav-back"></span>'}
    <span class="nav-title">${esc(title)}</span>
    <span class="nav-act">${act}</span></div>`;
}
function render(html, depth) {
  app.innerHTML = `<div class="view ${depth < prevDepth ? 'back' : ''}">${html}</div>`;
  prevDepth = depth;
  window.scrollTo(0, 0);
  onScroll();
}

/* ── Home ── */
function home() {
  const d = done().length, total = CH.length, pct = d / total;
  const C = 2 * Math.PI * 29;
  const drills = allDrills();
  const day = Math.floor(Date.now() / 864e5);
  const t = drills[day % drills.length];
  setNav({ title: '영어 공부', act: '<a href="#/settings" aria-label="설정" class="gear"><svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.4 13a7.5 7.5 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1L15 3.3h-4l-.4 2.6a7.6 7.6 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.5 7.5 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1l.4 2.6h4l.4-2.6c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5L19.4 13zM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" transform="translate(-1 0)"/></svg></a>' });
  render(`
    <h1 class="large">영어 공부</h1>
    <p class="lead">${new Date().toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'long' })}</p>
    <div class="hero">
      <svg class="ring" viewBox="0 0 66 66"><circle class="bg" cx="33" cy="33" r="29"/><circle class="fg" cx="33" cy="33" r="29" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}" transform="rotate(-90 33 33)"/></svg>
      <div><h2>H-class ${Math.round(pct * 100)}%</h2><p>${total}개 챕터 중 ${d}개 학습 완료</p></div>
    </div>
    <div class="tiles">
      <a class="tile h" href="#/h"><span class="badge">과외 노트</span><div><h3>H-class</h3><p>문법 ${total}챕터 · 영작 ${drills.length}문장</p></div><span class="big">H</span></a>
      <a class="tile t" href="#/toeic"><span class="badge">학습 중</span><div><h3>TOEIC 850+</h3><p>강의노트 · 단어 · 패러프레이징 · 오답노트</p></div><span class="big">850</span></a>
      <a class="tile s" href="#/speaking"><span class="badge">준비 중</span><div><h3>Speaking IH</h3><p>토익스피킹 답변 템플릿</p></div><span class="big">IH</span></a>
    </div>
    <div class="sec-h">오늘의 영작</div>
    <button class="today" id="today" style="width:100%;text-align:left">
      <p class="ko">${esc(t.ko)}</p><p class="en">${esc(t.en)}</p>
      <div class="hint">탭해서 정답 보기 · ${esc(t.ch.title)}</div>
    </button>
  `, 0);
  $('#today').onclick = e => e.currentTarget.classList.toggle('show');
}

/* ── H-class list ── */
function hlist() {
  const d = done();
  setNav({ back: { href: '#/', label: '홈' }, title: 'H-class' });
  render(`
    <h1 class="large">H-class</h1>
    <p class="lead">과외 필기 기반 문법 노트</p>
    <label class="search"><svg viewBox="0 0 16 16"><path d="M11.7 10.3l3.6 3.6-1.4 1.4-3.6-3.6a6.5 6.5 0 1 1 1.4-1.4zM6.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg><input id="q" type="search" placeholder="검색 (예: 관계대명사, enough)"></label>
    <div class="group-list">
      <a class="row" href="#/h/drill"><span class="ic c-blue">✎</span><span class="t"><b>영작 연습</b><small>전체 ${allDrills().length}문장 · 카드 / 목록</small></span>${chev}</a>
      <a class="row" href="#/h/fix"><span class="ic c-red">✕</span><span class="t"><b>오답노트</b><small>자주 틀린 표현 ${window.FIXES.length}개</small></span>${chev}</a>
    </div>
    <div class="sec-h">문법 챕터</div>
    <div class="group-list" id="chl">
      ${CH.map(c => `<a class="row" href="#/h/${c.id}" data-s="${esc((c.title + c.sub + c.html.replace(/<[^>]+>/g, ' ')).toLowerCase())}">
        <span class="ic c-${c.color}${c.glyph.length>4?' long':''}">${esc(c.glyph)}</span>
        <span class="t"><b>${c.no}. ${esc(c.title)}</b><small>${esc(c.sub)}</small></span>
        ${d.includes(c.id) ? check : ''}${chev}</a>`).join('')}
    </div>
    <p class="foot">원본: 영어과외 필기 148쪽 · 파란 <b>보충</b>은 필기에 없는 설명, 주황 <b>교정</b>은 바로잡은 부분</p>
  `, 1);
  $('#q').oninput = e => {
    const v = e.target.value.trim().toLowerCase();
    document.querySelectorAll('#chl .row').forEach(r => r.style.display = !v || r.dataset.s.includes(v) ? '' : 'none');
  };
}

/* ── Chapter ── */
function chapter(id, tab) {
  const c = CH.find(x => x.id === id);
  if (!c) return hlist();
  const hasDrill = c.drills && c.drills.length;
  tab = hasDrill && tab === 'drill' ? 'drill' : 'note';
  const isDone = done().includes(c.id);
  const idx = CH.indexOf(c), next = CH[idx + 1];
  setNav({ back: { href: '#/h', label: 'H-class' }, title: c.title });
  render(`
    <div class="ch-head"><span class="ic c-${c.color}${c.glyph.length>4?' long':''}">${esc(c.glyph)}</span><div><h1>${esc(c.title)}</h1><p>${esc(c.sub)} · ${c.pages}</p></div></div>
    ${hasDrill ? `<div class="seg"><button data-t="note" class="${tab === 'note' ? 'on' : ''}">노트</button><button data-t="drill" class="${tab === 'drill' ? 'on' : ''}">영작 ${c.drills.length}</button></div>` : ''}
    <div id="body">${tab === 'note' ? c.html : drillList(c.drills.map(d => ({ ko: d[0], en: d[1], note: d[2] || '' })))}</div>
    <button class="donebtn ${isDone ? 'on' : ''}" id="done">${isDone ? '✓ 학습 완료' : '학습 완료로 표시'}</button>
    ${next ? `<div class="group-list" style="margin-top:12px"><a class="row" href="#/h/${next.id}"><span class="ic c-${next.color}${next.glyph.length>4?' long':''}">${esc(next.glyph)}</span><span class="t"><small>다음 챕터</small><b>${next.no}. ${esc(next.title)}</b></span>${chev}</a></div>` : ''}
    <p class="source">원본 필기 ${c.pages}</p>
  `, 2);
  document.querySelectorAll('.seg button').forEach(b => b.onclick = () => { location.replace(`#/h/${c.id}${b.dataset.t === 'drill' ? '/drill' : ''}`); });
  $('#done').onclick = () => {
    let d = done(); d = d.includes(c.id) ? d.filter(x => x !== c.id) : [...d, c.id]; store.set('hclass.done', d);
    const on = d.includes(c.id); const b = $('#done'); b.classList.toggle('on', on); b.textContent = on ? '✓ 학습 완료' : '학습 완료로 표시';
  };
  bindDrills();
  document.querySelectorAll('.pic').forEach(p => p.onclick = () => p.classList.toggle('open'));
}

function drillList(list) {
  return `<div class="bar-btns"><button class="pbtn" id="openAll">모두 펼치기</button><button class="pbtn" id="closeAll">모두 접기</button></div>` +
    list.map((d, i) => `<button class="drill"><span class="q"><i>${i + 1}</i><span>${esc(d.ko)}</span></span>
      <span class="peek">탭해서 정답 보기</span>
      <span class="a"><div><p>${esc(d.en)}</p>${d.note ? `<small>${esc(d.note)}</small>` : ''}${d.ch ? `<small style="color:var(--text3)">${esc(d.ch.title)}</small>` : ''}</div></span></button>`).join('');
}
function bindDrills() {
  document.querySelectorAll('.drill').forEach(b => b.onclick = () => b.classList.toggle('open'));
  const o = $('#openAll'), c = $('#closeAll');
  if (o) o.onclick = () => document.querySelectorAll('.drill').forEach(b => b.classList.add('open'));
  if (c) c.onclick = () => document.querySelectorAll('.drill').forEach(b => b.classList.remove('open'));
}

/* ── All drills: flashcards / list ── */
function drills(mode) {
  let list = allDrills();
  mode = mode === 'list' ? 'list' : 'card';
  setNav({ back: { href: '#/h', label: 'H-class' }, title: '영작 연습' });
  const seg = `<div class="seg"><button data-m="card" class="${mode === 'card' ? 'on' : ''}">카드</button><button data-m="list" class="${mode === 'list' ? 'on' : ''}">목록</button></div>`;
  if (mode === 'list') {
    render(`<h1 class="large">영작 연습</h1><p class="lead">한국어를 보고 먼저 말해 본 뒤 탭하세요</p>${seg}${drillList(list)}`, 2);
    bindDrills();
  } else {
    let order = store.get('hclass.order', null);
    if (!order || order.length !== list.length) { order = list.map((_, i) => i); }
    let i = Math.min(store.get('hclass.pos', 0), list.length - 1);
    render(`<h1 class="large">영작 연습</h1><p class="lead">카드를 탭하면 뒤집혀요</p>${seg}
      <p class="fc-count" id="cnt"></p>
      <div class="flash" id="fc"><div class="inner"><div class="face front"><small id="fch"></small><p id="fko"></p></div><div class="face back"><small>정답</small><p id="fen"></p><em id="fnote"></em></div></div></div>
      <div class="fc-nav"><button class="pbtn" id="prev">이전</button><button class="pbtn" id="shuf">섞기</button><button class="pbtn" id="next">다음</button></div>`, 2);
    const fc = $('#fc');
    const show = () => {
      const d = list[order[i]];
      fc.classList.remove('flip');
      setTimeout(() => { $('#fko').textContent = d.ko; $('#fen').textContent = d.en; $('#fnote').textContent = d.note; $('#fch').textContent = d.ch.title; }, fc.classList.contains('flip') ? 250 : 0);
      $('#cnt').textContent = `${i + 1} / ${list.length}`;
      store.set('hclass.pos', i);
    };
    fc.onclick = () => fc.classList.toggle('flip');
    $('#next').onclick = () => { i = (i + 1) % list.length; show(); };
    $('#prev').onclick = () => { i = (i - 1 + list.length) % list.length; show(); };
    $('#shuf').onclick = () => { for (let k = order.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [order[k], order[j]] = [order[j], order[k]]; } store.set('hclass.order', order); i = 0; show(); };
    let sx = 0; fc.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
    fc.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) { (dx < 0 ? $('#next') : $('#prev')).click(); } });
    show();
  }
  document.querySelectorAll('.seg button').forEach(b => b.onclick = () => location.replace(`#/h/drill${b.dataset.m === 'list' ? '/list' : ''}`));
}

/* ── Fix note ── */
function fixes() {
  setNav({ back: { href: '#/h', label: 'H-class' }, title: '오답노트' });
  render(`<h1 class="large">오답노트</h1><p class="lead">과외 첨삭에서 반복된 실수</p>
    <div class="fixlist"><div class="fixes">${window.FIXES.map(f => `<div><s>${esc(f[0])}</s><b>${esc(f[1])}</b>${f[2] ? `<small>${esc(f[2])}</small>` : ''}</div>`).join('')}</div></div>`, 2);
}


/* ── 백업 / 복원 / 설정 ── */
const BK_SKIP = ['toeic.pw', 'backup.last'];
function userKeys() { const ks = []; try { for (let k = 0; k < localStorage.length; k++) { const key = localStorage.key(k); if (!BK_SKIP.includes(key)) ks.push(key); } } catch {} return ks; }
function backupNudge() {
  const ks = userKeys().filter(k => /^(t\.(test\.log|known|notes|wrong|g\.log|done)|hclass\.done)$/.test(k));
  if (!ks.length) return '';
  const last = store.get('backup.last', 0), days = Math.floor((Date.now() - last) / 864e5);
  if (last && days < 7) return '';
  return `<a class="nudge" href="#/settings"><span class="ic sf" style="background:#ff9500"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="#fff" d="M12 3l-5 5h3v6h4V8h3l-5-5zM5 18v2h14v-2H5z"/></svg></span><span class="t"><b>학습 기록 백업하기</b><small>${last ? `${days}일 전에 마지막으로 백업했어요` : '기록은 이 휴대폰에만 있어요. 한 번 저장해 두세요'}</small></span>${chev}</a>`;
}
function exportData() {
  const data = {}; userKeys().forEach(k => { data[k] = localStorage.getItem(k); });
  return { app: 'english-study', v: 1, at: new Date().toISOString(), data };
}
async function doBackup(btn) {
  const json = JSON.stringify(exportData());
  const name = `영어공부-백업-${new Date().toISOString().slice(0, 10)}.json`;
  const file = new File([json], name, { type: 'application/json' });
  try {
    if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: '영어 공부 백업' }); }
    else { const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = name; document.body.appendChild(a); a.click(); a.remove(); }
    store.set('backup.last', Date.now()); btn.textContent = '저장했어요 ✓'; settings();
  } catch (e) { if (e && e.name === 'AbortError') return; btn.textContent = '저장하지 못했어요'; }
}
function settings() {
  const last = store.get('backup.last', 0);
  const n = userKeys().length;
  setNav({ back: { href: '#/', label: '홈' }, title: '설정' });
  render(`
    <h1 class="large">설정</h1>
    <div class="sec-h">학습 기록 백업</div>
    <section class="card">
      <p style="margin-top:0">진도, 테스트 기록, 외운 단어, 오답노트는 <b>이 휴대폰에만</b> 저장돼요. 파일로 저장해 두면 휴대폰을 바꾸거나 앱을 지워도 되살릴 수 있어요.</p>
      <p class="mute">${last ? `마지막 백업: ${new Date(last).toLocaleString('ko-KR', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' })}` : '아직 백업한 적이 없어요'} · 저장 항목 ${n}개</p>
      <button class="btn-primary" id="bk" type="button">백업 파일 저장</button>
      <label class="btn-plain filebtn">백업 파일로 복원<input type="file" id="rs" accept="application/json,.json" hidden></label>
      <p class="mute" id="rsmsg" style="text-align:center;margin:0"></p>
    </section>
    <p class="foot">아이폰은 '파일에 저장'을 고르면 iCloud Drive에 보관돼요. 일주일에 한 번 저장을 추천해요.</p>
    <div class="sec-h">단어 발음</div>
    <div class="group-list">
      <label class="row"><span class="t"><b>문제가 나오면 자동으로 발음</b><small>단어 테스트에서 영어 단어를 읽어 줘요</small></span><span class="sw"><input type="checkbox" id="as" ${store.get('t.autoSpeak', true) ? 'checked' : ''}><span></span></span></label>
    </div>`, 1);
  $('#bk').onclick = e => doBackup(e.currentTarget);
  $('#as').onchange = e => store.set('t.autoSpeak', e.target.checked);
  $('#rs').onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try {
      const j = JSON.parse(await f.text());
      if (j.app !== 'english-study' || !j.data) throw 0;
      Object.entries(j.data).forEach(([k, v]) => { if (!BK_SKIP.includes(k)) localStorage.setItem(k, v); });
      $('#rsmsg').textContent = `${new Date(j.at).toLocaleDateString('ko-KR')} 백업으로 되돌렸어요 ✓`;
    } catch { $('#rsmsg').textContent = '이 앱의 백업 파일이 아니에요'; }
  };
}

/* ── Placeholders ── */
function soon(name, sub) {
  setNav({ back: { href: '#/', label: '홈' }, title: name });
  render(`<h1 class="large">${name}</h1><p class="lead">${sub}</p>
    <div class="empty"><div class="em">곧 추가돼요</div><p>H-class처럼 챕터별로 채워질 공간이에요.</p></div>`, 1);
}

/* ── shared helpers for other sections ── */
window.UI = { setNav, render, esc, store, chev, check, $ };

/* ── Router ── */
function route() {
  const p = location.hash.replace(/^#\/?/, '').split('/');
  if (p[0] === 'h') {
    if (!p[1]) return hlist();
    if (p[1] === 'drill') return drills(p[2]);
    if (p[1] === 'fix') return fixes();
    return chapter(p[1], p[2]);
  }
  if (p[0] === 'toeic') return window.TOEIC ? window.TOEIC.route(p.slice(1)) : soon('TOEIC 850+', '목표 점수 850점 이상');
  if (p[0] === 'settings') return settings();
  if (p[0] === 'speaking') return soon('Speaking IH', '토익스피킹 Intermediate High');
  home();
}
function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 30); }
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('hashchange', route);
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', route); else route();

if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
