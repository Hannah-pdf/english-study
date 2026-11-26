/* H-class 문법 데이터
   원본: 영어과외 필기(PDF 148쪽) + 노션 '영어 과외 노트' 대조.
   <span class="tag sup">보충</span> = 필기에 없는 보충 설명
   <span class="tag fix">교정</span> = 필기/노션 내용을 바로잡은 부분 */

const SUP = '<span class="tag sup">보충</span>';
const FIX = '<span class="tag fix">교정</span>';

window.HCLASS = [
/* ───────────────────────── 1. 품사 ───────────────────────── */
{
  id: 'parts', no: 1, color: 'blue', glyph: 'Aa',
  title: '8품사', sub: '명사·형용사·부사·전치사구의 역할', pages: 'p.3–5',
  html: `
  <section class="card">
    <h3>품사별 역할</h3>
    <div class="tree">
      <div class="node">명사</div>
      <ul><li>주어</li><li>목적어</li><li>보어</li></ul>
    </div>
    <div class="tree">
      <div class="node">형용사</div>
      <ul><li>명사 수식</li><li>보어</li></ul>
    </div>
    <div class="tree">
      <div class="node">부사</div>
      <ul><li>동사 수식</li><li>형용사 수식</li><li>부사 수식</li><li>문장 전체 수식</li></ul>
    </div>
    <div class="tree">
      <div class="node">전치사 + 명사<small>(전치사구)</small></div>
      <ul>
        <li><div class="tree inner"><div class="node sm">형용사</div><ul><li>명사 수식</li><li>보어</li></ul></div></li>
        <li><div class="tree inner"><div class="node sm">부사</div><ul><li>동사·형용사·부사 수식</li><li>문장 전체 수식</li></ul></div></li>
      </ul>
    </div>
    <p class="list-plain">5. 동사 &nbsp;·&nbsp; 6. 접속사 &nbsp;·&nbsp; 7. 감탄사 &nbsp;·&nbsp; 8. 대명사</p>
  </section>
  <section class="card">
    <h3>전치사구 예문</h3>
    <p class="ex">I went <u>to the office</u>.</p>
    <p class="ex">I will go <u>to Paris</u> <u>next month</u>.</p>
    <p class="tip">${SUP} 두 문장 모두 밑줄 친 부분은 동사를 꾸미는 <b>부사 역할</b>. 전치사구는 빼도 문장이 성립해요.</p>
  </section>`
},

/* ───────────────────────── 2. 문장 5형식 ───────────────────────── */
{
  id: 'forms', no: 2, color: 'indigo', glyph: 'SV',
  title: '문장 5형식', sub: 'S·V·O·C 뼈대 + 전치사구/부사', pages: 'p.7',
  html: `
  <section class="card">
    <h3>문장 형식</h3>
    <ol class="forms">
      <li><span class="n">1</span><div class="formula"><b class="c s">S</b><b class="c v">V</b><i>+ 전치사구/부사</i></div><p class="ex">Birds fly.</p></li>
      <li><span class="n">2</span><div class="formula"><b class="c s">S</b><b class="c v">V</b><b class="c c2">주격보어</b><i>+ 전.구/부</i></div><p class="ex">She is happy.</p></li>
      <li><span class="n">3</span><div class="formula"><b class="c s">S</b><b class="c v">V</b><b class="c o">O</b><i>+ 전.구/부</i></div><p class="ex">I read books.</p></li>
      <li><span class="n">4</span><div class="formula"><b class="c s">S</b><b class="c v">V</b><b class="c o">O₁</b><b class="c o">O₂</b><i>+ 전.구/부</i></div><p class="ex">He gave me a book.</p></li>
      <li><span class="n">5</span><div class="formula"><b class="c s">S</b><b class="c v">V</b><b class="c o">O</b><b class="c c2">O.C</b><i>+ 전.구/부</i></div><p class="ex">It makes me happy.</p></li>
    </ol>
    <p class="tip">${SUP} 예문은 이해를 돕기 위해 추가. 전치사구·부사는 어느 형식에나 덧붙을 수 있어요.</p>
  </section>
  <section class="card">
    <h3>3형식 + 전치사구 (p.19)</h3>
    <p class="ex">She prepared <u>some food</u> <span class="mute">for my birthday</span>.</p>
    <div class="formula"><b class="c s">S</b><b class="c v">V</b><b class="c o">O</b><i>전치사구</i></div>
    <p class="note">prepare <b>O</b> for ~ → 3형식. "for my birthday"는 꾸미는 말.</p>
  </section>`
},

/* ───────────────────────── 3. 명사와 한정사 ───────────────────────── */
{
  id: 'nouns', no: 3, color: 'teal', glyph: 'a/the',
  title: '명사와 한정사', sub: '셀 수 있는 명사 / 없는 명사', pages: 'p.8',
  html: `
  <section class="card">
    <h3>셀 수 있는 명사</h3>
    <p class="note">셀 수 O 명사는 앞에 붙는 <b>한정사</b>가 필요 → 단수로 혼자 나오면 안 됨!</p>
    <div class="rows">
      <div><b>dish</b><span>가볍고 하나의 접시</span></div>
      <div><b>dishes</b><span>복수</span></div>
      <div><b>2 cups of coffee</b><span>of: ~으로 구성된 (전치사구)</span></div>
    </div>
  </section>
  <section class="card">
    <h3>한정사 7가지</h3>
    <ol class="num">
      <li><b>a + 불특정한 명사</b> (정해지지 X)<br><span class="mute">ex. 수박 한 덩이 사다</span></li>
      <li><b>the + 특정한 명사</b> (정해진 것)<br><span class="mute">ex. 냉장고 속 수박 → 그 수박</span></li>
      <li><b>~s</b> (불특정 복수) <span class="mute">ex. apples</span></li>
      <li><b>the ~s</b> (특정한 복수)</li>
      <li><b>소유격</b> <span class="mute">ex. my car</span></li>
      <li><b>지시형용사</b> <span class="mute">this, these, that, those</span></li>
      <li><b>수량형용사</b> <span class="mute">one, two, some(약간), a lot of(많은), many</span></li>
    </ol>
    <p class="note">상황상 맞는 걸 고르기!</p>
  </section>
  <section class="card">
    <h3>셀 수 없는 명사</h3>
    <p class="ex">food · furniture · coffee · water</p>
    <p class="note">→ 사람이 먹는 셀 수 없는 것들 (+ 가구처럼 덩어리 개념)</p>
    <p class="tip">${SUP} 주문 단위로 셀 때는 가산처럼 쓰기도: <i>Two coffees, please.</i> / fruit도 보통 불가산 (fruits는 여러 종류일 때).</p>
  </section>
  <section class="card">
    <h3>another / other / the other (p.91)</h3>
    <div class="dots">
      <div><span class="dot on"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><em>an apple → <b>another</b> apple (또 다른 하나)</em></div>
      <div><span class="dot on"></span><span class="dot g"></span><span class="dot g"></span><span class="dot g"></span><em>an apple → <b>(the) other</b> apples (나머지 여러 개)</em></div>
      <div><span class="dot on"></span><span class="dot g"></span><em>one → <b>the other</b> (둘 중 나머지 하나)</em></div>
    </div>
    <p class="ex">I planned to stay in <b>another</b> city for a day.</p>
    <p class="ex">I've been to <b>other</b> Southeast Asian countries.</p>
  </section>`
},

/* ───────────────────────── 4. 전치사 ───────────────────────── */
{
  id: 'preps', no: 4, color: 'green', glyph: 'at',
  title: '전치사', sub: 'at · in · from · home · for/during', pages: 'p.6, 18–19',
  html: `
  <section class="card">
    <h3>at / in / from</h3>
    <div class="house">
      <svg viewBox="0 0 260 150" aria-label="집 그림: in은 안, from은 밖으로, at은 지점">
        <polygon points="40,60 95,20 150,60" class="roof"/>
        <rect x="50" y="60" width="90" height="70" class="wall"/>
        <circle cx="95" cy="95" r="6" class="me"/>
        <text x="80" y="122" class="lbl">in</text>
        <line x1="104" y1="95" x2="200" y2="95" class="arrow"/>
        <polygon points="200,89 212,95 200,101" class="arrowhead"/>
        <text x="170" y="86" class="lbl">from</text>
        <circle cx="232" cy="130" r="5" class="pt"/>
        <text x="222" y="148" class="lbl">at</text>
      </svg>
    </div>
    <div class="rows">
      <div><b>at</b><span>지점 · 시간</span></div>
      <div><b>in</b><span>안에 포함되어 있는 것 / 행정구역 (in 안양, in 부산)</span></div>
      <div><b>from</b><span>출발점</span></div>
    </div>
    <p class="ex">나는 집에서 TV를 봤다 → <b>in the house</b></p>
    <p class="ex">집에서 출발했다 → <b>from the house</b></p>
    <p class="note">at/in + 명사가 형용사로 명사를 수식할 때 "~에 있는"이라는 의미가 생김.</p>
  </section>
  <section class="card">
    <h3>at을 쓰는 장소</h3>
    <div class="two">
      <div><h4>① 목적성이 강한 장소</h4><p>bus stop · station · airport · pharmacy</p></div>
      <div><h4>② 단독 건물인 경우</h4><p>cafe</p></div>
    </div>
  </section>
  <section class="card">
    <h3>house vs home</h3>
    <div class="rows">
      <div><b>in the house</b><span>셀 수 O, 건물의 느낌 → house</span></div>
      <div><b>at home</b><span>안식처. 이유까지도 있음, 거기 아니면 안 되는 느낌 → home</span></div>
    </div>
    <p class="mute">나 X 다른 사람 집 → house / 가족과 직접 사는 곳 → home</p>
    <div class="fixes">
      <div><s>I go to home.</s><b>I go home.</b></div>
      <div><s>on the way to home</s><b>on the way home</b></div>
    </div>
    <p class="note">home에는 전치사 안 씀. at/in은 "안에서" 한다는 느낌이라 go와 사용 X.</p>
    <p class="ex">on the way <b>to my office</b> (명사 앞은 to 필요)</p>
    <p class="ex">on the way of going home <span class="mute">(가능해요~)</span></p>
  </section>
  <section class="card">
    <h3>for vs during (~동안)</h3>
    <div class="tree">
      <div class="node">~동안</div>
      <ul>
        <li><b>for</b> : 숫자 <span class="mute">ex) for 4 days</span></li>
        <li><b>during</b> : 숫자 X, 기간 명사 <span class="mute">ex) during summer vacation</span></li>
      </ul>
    </div>
    <div class="rows">
      <div><b>on the way of ~ing</b><span>~하는 도중에</span></div>
      <div><b>on the way to + 장소</b><span>~으로 향하는 도중에</span></div>
    </div>
  </section>
  <section class="card">
    <h3>because vs because of (p.45)</h3>
    <div class="rows">
      <div><b>because of + 명사</b><span>전치사</span></div>
      <div><b>because + S + V</b><span>접속사</span></div>
    </div>
  </section>`
},

/* ───────────────────────── 5. 접속사 ───────────────────────── */
{
  id: 'conj', no: 5, color: 'mint', glyph: 'and',
  title: '접속사', sub: '부사절 접속사 · 등위접속사', pages: 'p.9, 11',
  html: `
  <section class="card">
    <h3>절의 종류</h3>
    <p class="list-plain">명사절 · 형용사절 · <b>부사절</b></p>
    <p class="note">부사절 → 주절의 입장에서 부사 역할을 하는 절. 뜻이 있고 해석을 해줘야 한다.</p>
    <div class="clause">
      <div class="box main">S + V<small>주절 (결과·메인)</small></div>
      <div class="plus">+</div>
      <div class="box sub"><b>접</b> S + V<small>부사절 (배경)</small></div>
    </div>
    <p class="mute">부사절 접속사 ↔ 전치사 (뒤에 절이 오면 접속사, 명사가 오면 전치사)</p>
  </section>
  <section class="card">
    <h3>부사절 접속사 5가지</h3>
    <ol class="num">
      <li>시간 <span class="mute">when, before, after, while, as soon as</span></li>
      <li>조건 <span class="mute">if</span></li>
      <li>이유 <span class="mute">because, as</span></li>
      <li>양보 <span class="mute">although, even though</span></li>
      <li>대조 <span class="mute">while</span></li>
    </ol>
    <p class="tip">${SUP} 예시 접속사는 보충. <b>시간·조건 부사절은 미래라도 현재시제</b>: I'll call you <u>when I arrive</u>.</p>
    <p class="note">부사절 주어가 같은 경우 → 부사절 주어 생략 가능 (→ 분사구문 챕터)</p>
  </section>
  <section class="card">
    <h3>등위접속사</h3>
    <div class="stack">
      <div class="formula"><b class="c s">S+V</b><b class="c v">and</b><b class="c s">S+V</b><i>그리고</i></div>
      <div class="formula"><b class="c s">S+V,</b><b class="c v">so</b><b class="c s">S+V</b><i>그래서</i></div>
      <div class="formula"><b class="c s">S+V,</b><b class="c v">but</b><b class="c s">S+V</b><i>그러나</i></div>
    </div>
  </section>
  <section class="card">
    <h3>as의 두 가지 뜻 (p.136)</h3>
    <p class="ex"><b>as</b> you step off the train → ~할 때</p>
    <p class="ex"><b>as</b> there's a gap → ~때문에</p>
  </section>
  <section class="card">
    <h3>not only A but also B (p.148)</h3>
    <p class="ex">I have to <b>not only</b> write a proposal <b>but also</b> meet a customer.</p>
    <p class="mute">A뿐만 아니라 B도</p>
  </section>`
},

/* ───────────────────────── 6. 조동사 ───────────────────────── */
{
  id: 'modals', no: 6, color: 'orange', glyph: 'must',
  title: '조동사', sub: 'must · have to · should', pages: 'p.10',
  html: `
  <section class="card">
    <h3>조동사의 자리</h3>
    <div class="formula"><b class="c s">S</b><b class="c v">조동사</b><b class="c v">동사원형</b></div>
    <p class="note">"~해야 한다" — 동사를 도와준다.</p>
    <p class="ex">I have to exercise.</p>
  </section>
  <section class="card">
    <h3>강도 비교</h3>
    <div class="meter">
      <div><b>must</b><span class="bar" style="--w:100%"></span><em>반드시 지켜야 한다. 규칙, 사칙 등</em></div>
      <div><b>have to</b><span class="bar" style="--w:70%"></span><em>의무적인 느낌이 강함. 부드럽게 표현하는 규칙</em></div>
      <div><b>should</b><span class="bar" style="--w:40%"></span><em>내 생각엔 그렇게 해야 하는 게 좋아</em></div>
    </div>
    <p class="tip">${SUP} must와 have to의 차이는 문맥에 따라 달라져요. 부정형은 의미가 크게 달라짐: must not(~하면 안 됨) / don't have to(~할 필요 없음).</p>
  </section>
  <section class="card">
    <h3>부사 so / too</h3>
    <div class="rows">
      <div><b>for a long time</b><span>오랫동안</span></div>
      <div><b>so, too</b><span>너무, 아주</span></div>
    </div>
    <p class="note">상대 칭찬할 때 too는 안 쓰는 것 (too = 부정적 느낌, 너무 ~해서 문제)</p>
  </section>`
},

/* ───────────────────────── 7. to부정사 기본 ───────────────────────── */
{
  id: 'inf1', no: 7, color: 'purple', glyph: 'to V',
  title: 'to부정사 ① 기본', sub: '명사적 용법 · 가주어 It ~ for ~ to', pages: 'p.14, 20–24, 30–31',
  html: `
  <section class="card">
    <h3>to부정사 = to + 동사원형</h3>
    <div class="tree">
      <div class="node">명사</div>
      <ul><li>주어 <span class="mute">(1·2·3·4·5형식)</span></li><li>목적어 <span class="mute">(3·5형식)</span></li><li>보어</li></ul>
    </div>
    <div class="tree">
      <div class="node">형용사</div>
      <ul><li>명사 수식</li><li>보어</li></ul>
    </div>
    <div class="tree">
      <div class="node">부사</div>
      <ul><li>동사 수식</li><li>형용사 수식</li><li>부사 수식</li><li>문장 전체 수식</li></ul>
    </div>
    <p class="note">해석: ~하는 것 / ~하기</p>
  </section>
  <section class="card">
    <h3>주어 자리 → 가주어 It</h3>
    <p class="ex"><u>To work</u> is hard.<span class="mute"> 주어 = Working</span></p>
    <div class="move">
      <span class="pill">To work</span><span class="arr">→ 뒤로!</span>
    </div>
    <p class="ex"><b>It</b> is hard <u>to work</u>.</p>
    <p class="mute">가주어 It ≠ 비인칭주어 / 진주어 = to work. 2형식에선 동명사도 가져와 가능!</p>
    <p class="note">to부정사를 주어로 쓰지 않고 동명사를 많이 씀 → <i>Having many friends makes me happy.</i> / <i>Helping others makes me happy.</i></p>
    <p class="ex">It is difficult to get up early in the morning.</p>
    <p class="ex">It is fun to study English. <span class="mute">(To study English is fun.)</span></p>
  </section>
  <section class="card">
    <h3>It + for + 목적격 + to V</h3>
    <div class="formula"><b class="c s">It</b><b class="c v">is</b><b class="c c2">형용사</b><b class="c o">for + 목적격</b><b class="c v">to V</b></div>
    <p class="mute">for + 목적격 = 의미상의 주어 (to V를 하는 사람)</p>
    <p class="ex">It is impossible <b>for her</b> to drive for 5 hours alone.</p>
    <p class="ex">It is difficult <b>for elders</b> to use iPhone.</p>
    <p class="ex">It is difficult <b>for all people</b> to have a meal together in this restaurant.</p>
    <p class="note">의미상 주어가 일반인일 땐 안 씀. (It is fun to read this book.)</p>
    <div class="fixes">
      <div><s>It is difficult to ask him to send you the email right now.</s><b>OK — ask + 사람 + to V (5형식)</b></div>
    </div>
  </section>
  <section class="card">
    <h3>It ~ for ~ to = It ~ that (p.30)</h3>
    <p class="ex">It is dangerous <b>for children to use</b> this stairs.</p>
    <p class="ex">= It is dangerous <b>that children use</b> this stairs.</p>
    <p class="note">접속사 that + 완전한 문장. 중요·필요를 나타내는 형용사와 자주: significant, important, necessary, required</p>
    <p class="ex">It is required to understand the situation at first.</p>
    <p class="tip">${FIX} "this stairs" → <b>these stairs</b> (stairs는 복수).</p>
  </section>
  <section class="card">
    <h3>목적어 자리 (3형식)</h3>
    <div class="formula"><b class="c s">S</b><b class="c v">V</b><b class="c o">to V</b></div>
    <p class="ex">I want <u>to study English</u>.</p>
    <p class="ex">I want <u>to buy the bag</u>. <span class="mute">→ 내가 사겠다 (3)</span></p>
    <p class="ex">I want <u>you</u> <u>to buy the bag</u>. <span class="mute">→ 상대방이 있어야 (5형식)</span></p>
    <div class="fixes"><div><s>I want for you to buy the bag.</s><b>I want you to buy the bag.</b></div></div>
    <p class="note">목적어 자리엔 for를 쓰면 안 된다!! (want = 3, 5형식)</p>
  </section>
  <section class="card">
    <h3>보어 자리 (2형식)</h3>
    <div class="formula"><b class="c s">S</b><b class="c v">be</b><b class="c c2">to부정사</b></div>
    <p class="ex">My hope <b>is</b> to speak English fluently.</p>
    <p class="ex">My hope is <b>for my daughter</b> to speak English fluently.</p>
    <p class="ex">My hope is (for my boss) to make me go out early on Friday.</p>
    <p class="mute">"~하는 것이다" — 주격보어 (2형식)</p>
  </section>`
},

/* ───────────────────────── 8. to부정사를 목적어로 쓰는 동사 ───────────────────────── */
{
  id: 'inf-verbs', no: 8, color: 'pink', glyph: 'want',
  title: 'to부정사 ② 목적어 동사', sub: '희망·의지·부정·기타 동사', pages: 'p.24, 30, 34–45',
  html: `
  <section class="card">
    <h3>3V이면서 to부정사를 목적어로 쓰는 동사</h3>
    <div class="group">
      <h4><span class="n">①</span> 희망동사</h4>
      <p class="words">want · hope · expect · need · wish · would like</p>
      <p class="mute">3, 5형식 둘 다 됨 → I would like to buy the bag.</p>
      <p class="tip">${SUP} 단, <b>hope는 5형식 X</b>: <s>I hope you to come</s> → I hope (that) you come.</p>
    </div>
    <div class="group">
      <h4><span class="n">②</span> 의지동사</h4>
      <p class="words">agree · choose · decide · intend(의도하다) · learn · manage · offer · plan(계획하다) · promise</p>
      <p class="ex">I can manage to go there. <span class="mute">내가 해내는 느낌</span></p>
      <p class="ex">I offer to do it. <span class="mute">난 하는 것을 제안했다</span></p>
    </div>
    <div class="group">
      <h4><span class="n">③</span> 부정동사</h4>
      <p class="words">fail · refuse</p>
      <p class="ex">I failed to send the data.</p>
    </div>
    <div class="group">
      <h4><span class="n">④</span> 기타</h4>
      <p class="words">afford(여유가 있다) · deserve(~할 만하다)</p>
      <p class="ex">I can afford to go there. <span class="mute">거기 갈 여유가 있다</span></p>
      <p class="ex">You deserve to receive the award.</p>
      <p class="ex">You deserve to have a break!</p>
    </div>
  </section>
  <section class="card">
    <h3>to부정사의 부정</h3>
    <p class="ex">I decided <b>not to</b> go to Thailand. <span class="mute">안 가는 걸 결정 (to부정사 부정)</span></p>
    <p class="ex">I <b>didn't</b> decide to go to Thailand. <span class="mute">결정을 안 함 (본동사 부정)</span></p>
    <p class="note">부정어 위치에 따라 뜻이 달라짐!</p>
  </section>
  <section class="card">
    <h3>manage의 두 뜻</h3>
    <div class="rows">
      <div><b>manage + 명사</b><span>운영하다 — Can you manage this big store by yourself?</span></div>
      <div><b>manage to V</b><span>어려움을 극복하고 해내다 — I can manage to do this homework.</span></div>
    </div>
  </section>
  <section class="card">
    <h3>expect vs look forward to</h3>
    <div class="rows">
      <div><b>expect to V</b><span>예상하다, 기대하다 (사실적으로)</span></div>
      <div><b>look forward to ~ing</b><span>기대하다 = 고대하다 (감정적으로, 설렘) — to는 전치사!</span></div>
    </div>
    <p class="ex">I look forward to meeting you.</p>
    <p class="ex">We look forward to completing it next month.</p>
  </section>`,
  drills: [
    ['7살 아이가 혼자 버스를 타는 것은 힘들 것 같아요.', 'It would be difficult for a seven-year-old child to take a bus alone.'],
    ['지금 이 기계를 사용하는 것이 편리하겠지요?', 'Would it be convenient to use this machine now?'],
    ['나의 바람은 우리 가족이 행복하게 사는 거예요.', 'My hope is for my family to live happily.'],
    ['이 가게에서 이 쿠폰을 사용하는 것이 가능한가요?', 'Is it possible to use this coupon in this store?'],
    ['당신은 이 큰 가게를 혼자 운영할 수 있나요?', 'Can you manage this big store by yourself?'],
    ['요리를 잘 못해서 요리하는 것을 배우는 것이 쉽지 않은 것 같아요.', "I'm not good at cooking, so I don't think it will be easy to learn to cook."],
    ['올해 영어를 열심히 공부하는 것이 저의 목표입니다.', 'My goal is to study English hard this year.', '필기: My goal is learn to study → is 뒤에 to부정사'],
    ['혼자 세 명의 아이를 돌보는 것은 거의 불가능해요.', 'It is almost impossible to take care of three children by yourself.'],
    ['두 시간 이내에 거기에 도착할 수 없을 것 같아요.', "I don't think I can get there within two hours.", 'arrive at there (X) → arrive there / get there'],
    ['그는 아이들과 함께 걸어가자고 제안했지만, 나는 아이들이 너무 피곤해지는 것을 원하지 않았어요.', "He suggested walking with the children, but I didn't want them to get too tired.", 'suggest me to walk (X)'],
    ['2년 전 코로나19 때문에 결국 친구의 결혼식에 안 가기로 결정했어요.', "Two years ago, I eventually decided not to go to my friend's wedding because of COVID-19."],
    ['이탈리아 음식 만드는 법을 배우는 것은 어렵지만 재미있어요.', 'It is difficult but fun to learn to cook Italian food.'],
    ['당신은 이런 선물을 받을 만한 사람이에요.', 'You deserve to receive a gift like this.'],
    ['이 프로그램으로 그림 그리는 것을 배우고 싶어요.', 'I want to learn to draw with this program.'],
    ['어린아이가 이 상황을 이해하는 것은 불가능하죠.', 'It is impossible for a young child to understand this situation.'],
    ['몸이 안 좋아 결혼식에 참석하지 않기로 결정했어요.', "I decided not to attend the wedding because I wasn't feeling well."],
    ['요즘 일로 바빠서 집안일을 할 여유가 없어요.', "I don't have enough time to do housework because I'm busy with work these days."],
    ['밤늦게 그렇게 많은 사람을 집으로 초대하는 것에 동의하지 않아요.', "I don't agree with inviting so many people to my house late at night.", '노션의 agree to invite는 어색 → agree with + -ing/의견'],
    ['다음 주 친구들과 집 근처 카페에 가기로 약속했어요.', 'I promised to go to a cafe near my house with my friends next week.'],
  ]
},

/* ───────────────────────── 9. 5형식 목적격보어 ───────────────────────── */
{
  id: 'oc', no: 9, color: 'red', glyph: 'O.C',
  title: '5형식 목적격보어', sub: '사역동사 · 지각동사 · help', pages: 'p.25–26, 70',
  html: `
  <section class="card">
    <h3>S + V + O + 목적격보어</h3>
    <p class="note">동사에 따라 O.C에 오는 품사가 다르다</p>
    <ol class="num">
      <li>형용사</li><li>명사</li><li>to부정사</li><li>동사원형</li>
      <li>분사 <span class="mute">(현재분사 / 과거분사)</span></li>
    </ol>
  </section>
  <section class="card">
    <h3>① 형용사가 오는 경우</h3>
    <p class="words">make · keep · find · consider <span class="mute">(make K.F.C로 외우기)</span></p>
    <p class="ex">I will make this room <b>clean</b>.</p>
  </section>
  <section class="card">
    <h3>② 명사가 오는 경우</h3>
    <p class="words">make · consider · call · appoint</p>
    <p class="ex">I will make him <b>a doctor</b>.</p>
  </section>
  <section class="card">
    <h3>③ to부정사가 오는 경우 (다단계 동사)</h3>
    <ol class="num">
      <li>want · hope · expect · need · wish</li>
      <li>ask · require · request</li>
      <li>order · push</li>
      <li>recommend(지시하다·추천) · suggest(제안) · tell(설명해서 말하다) · encourage(격려하다) · persuade(설득하다)</li>
      <li>allow · permit(허락하다)</li>
    </ol>
    <p class="ex">I recommend you <b>to submit</b> the document by this week.</p>
    <p class="ex">I asked him <b>to stop</b> in front of the town hall.</p>
    <div class="warnbox">
      <p>${FIX} <b>suggest</b>는 실제로 O + to V를 쓰지 않아요.</p>
      <div class="fixes"><div><s>He suggested me to walk.</s><b>He suggested walking. / He suggested that I walk.</b></div></div>
      <p>${SUP} hope도 5형식 X. recommend는 <i>recommend -ing / recommend that S V</i>가 더 자연스러워요.</p>
    </div>
  </section>
  <section class="card">
    <h3>④ 동사원형 — 사역동사</h3>
    <p class="words">make · let · have</p>
    <p class="note">사역동사(목적어를 시키는 동사)는 목적격보어에 동사원형과 과거분사 中 1개를 받는다.</p>
    <p class="ex">I make <span class="o">my husband</span> <span class="oc">look after</span> the children. <em class="rel">능동의 관계</em></p>
    <p class="ex">My boss made <span class="o">me</span> <span class="oc">look into</span> the information in detail. <em class="rel">능동의 관계</em></p>
    <p class="ex">I made <span class="o">my car</span> <span class="oc">repaired</span>. <em class="rel pass">수동의 관계</em></p>
    <p class="ex">let me <b>know</b> <span class="mute">(let + 목적어 + 동사원형)</span></p>
    <p class="tip">${SUP} "차를 수리받다"는 보통 <b>I had my car repaired.</b> (have + O + p.p.)</p>
  </section>
  <section class="card">
    <h3>지각동사</h3>
    <div class="rows">
      <div><b>hear</b><span>자연적으로 들음</span></div>
      <div><b>listen to</b><span>의도를 가지고 들음</span></div>
      <div><b>see</b><span>눈이 있어서 봄</span></div>
      <div><b>watch</b><span>의도를 가지고 봄</span></div>
      <div><b>feel</b><span>느끼다</span></div>
    </div>
    <div class="redbox">
      <h4>지각동사를 사용할 때…</h4>
      <div class="tree center">
        <div class="node">O.C</div>
        <ul>
          <li><b>동사원형 / 현재분사</b> → 능동의 관계</li>
          <li><b>과거분사</b> → 수동의 관계</li>
        </ul>
      </div>
    </div>
    <p class="ex">I heard <span class="o">the baby</span> <span class="oc">cry</span>. <em class="rel">능동</em></p>
    <p class="ex">I heard <span class="o">the baby</span> <span class="oc">crying</span>. <span class="mute">(생생함을 나타냄)</span></p>
    <p class="ex">I heard <span class="o">the cup</span> <span class="oc">broken</span>. <em class="rel pass">수동</em></p>
  </section>
  <section class="card">
    <h3>help</h3>
    <div class="formula"><b class="c s">S</b><b class="c v">help</b><b class="c o">O</b><b class="c c2">(to) 동사원형</b></div>
    <p class="mute">to 생략 가능</p>
    <p class="ex">I helped her <b>send</b> the email.</p>
    <p class="ex">I will help you do the homework. / I will help <b>with</b> the homework.</p>
  </section>
  <section class="card">
    <h3>S + V + O + ~ing (p.19)</h3>
    <p class="note">현재분사 → 형용사 / 동시동작: ~하면서</p>
    <p class="ex">I watched TV <b>eating</b> pizza. <span class="mute">"먹으면서"</span></p>
  </section>
  <section class="card">
    <h3>3형식 vs 5형식 (p.49)</h3>
    <p class="ex">make <u>a happy family</u> <span class="mute">3형식 — 형용사가 명사 수식</span></p>
    <p class="ex">make <u>the family</u> <u>happy</u> <span class="mute">5형식 — 목적격보어</span></p>
  </section>`
},

/* ───────────────────────── 10. to부정사 심화 ───────────────────────── */
{
  id: 'inf3', no: 10, color: 'violet', glyph: 'too',
  title: 'to부정사 ③ 심화', sub: '형용사·부사 용법 · too~to · enough · be ~ to', pages: 'p.47, 55–56, 62, 103',
  html: `
  <section class="card">
    <h3>형용사적 용법</h3>
    <div class="tree">
      <div class="node">형용사</div>
      <ul>
        <li>명사 수식 <span class="mute">— things to see / food to eat / enough time to meet</span></li>
        <li>보어 (be to 용법) <span class="mute">— 해석: ~할 것이다 (예정)</span></li>
      </ul>
    </div>
    <div class="formula"><b class="c s">S</b><b class="c v">be</b><b class="c c2">to부정사</b><i>주격보어</i></div>
    <p class="ex">The meeting <b>is to be held</b> on 12th of Dec.</p>
    <p class="note">이 느낌은 딱딱한 느낌. 공식적인 예정. (그러면 to부정사로 사용해서 수동태도 이어갈 수 있다)</p>
    <p class="ex">I don't have any food <b>to give you</b>. <span class="mute">(= food which I can give you)</span></p>
  </section>
  <section class="card">
    <h3>부사적 용법</h3>
    <div class="tree">
      <div class="node">부사</div>
      <ul>
        <li>동사 수식 → <b>목적</b> ~하기 위해서</li>
        <li>형용사 수식 → <b>감정의 원인</b> ~해서</li>
        <li>부사 수식 → ~하기에</li>
        <li>문장 전체 수식</li>
      </ul>
    </div>
    <p class="ex">I am happy <b>to see you</b>. <span class="mute">감정의 원인</span></p>
    <p class="ex">I can run fast <b>to catch you</b>. <span class="mute">목적</span></p>
    <p class="ex">I have to go to the market <b>to buy</b> mushrooms.</p>
    <p class="ex">I'll explain it one more time <b>to help</b> you understand it better.</p>
  </section>
  <section class="card">
    <h3>in order to (~하기 위해서)</h3>
    <p class="ex">I went to Australia <b>to see</b> my customer.</p>
    <p class="ex">= I went to Australia <b>in order to see</b> my customer.</p>
    <p class="note">in order to → 목적을 강조하고 싶을 때. 격식체. 앞으로 보내도 OK: <i>In order to see my customer, I went to Australia.</i></p>
  </section>
  <section class="card">
    <h3>too ~ to (너무 ~해서 할 수 없다)</h3>
    <div class="formula"><b class="c v">too</b><b class="c c2">형/부</b><b class="c o">(for 목적격)</b><b class="c v">to 동사</b></div>
    <p class="ex">This is <b>too far to go</b>.</p>
    <p class="ex">This clothes is <b>too dirty to wear</b>.</p>
    <p class="ex">You spoke <b>too loudly to hear</b>. <span class="mute">← 부사 예시</span></p>
    <p class="ex">This is too far <b>for the child</b> to go. <span class="mute">too for to 구문</span></p>
    <p class="ex">This food is too hot to eat. / This bag is too heavy to carry.</p>
    <p class="tip">${FIX} "This clothes is" → <b>These clothes are</b> (clothes는 복수).</p>
  </section>
  <section class="card">
    <h3>enough</h3>
    <div class="tree">
      <div class="node">enough</div>
      <ul>
        <li>형용사 : 충분한 → <b>enough + 명사</b> <span class="mute">(명사 앞)</span></li>
        <li>부사 : 충분히 → <b>형/부 + enough</b> <span class="mute">(뒤에서 수식)</span></li>
      </ul>
    </div>
    <p class="ex">This is <b>enough</b> to give to my children.</p>
    <p class="ex">I don't have <b>enough money</b> to buy this house.</p>
    <p class="ex">He is <b>rich enough</b> to own many apartments.</p>
    <p class="ex">I am full <b>enough</b>. <span class="mute">형용사를 수식할 때 enough는 그 형용사의 뒤에서 수식</span></p>
  </section>
  <section class="card">
    <h3>be + 형용사 + to</h3>
    <div class="rows">
      <div><b>be able to</b><span>~할 수 있다 (can 대신)</span></div>
      <div><b>be eager to</b><span>~하기를 열심히 간절히 바라다</span></div>
      <div><b>be likely to</b><span>~할 가능성이 있다 — It is likely to rain.</span></div>
      <div><b>be ready to</b><span>~하는 데 있어서 준비가 된</span></div>
      <div><b>be about to</b><span>막 ~하려고 하다 — I was about to go out.</span></div>
      <div><b>be pleased to</b><span>~해서 기쁘다</span></div>
      <div><b>be willing to</b><span>기꺼이 ~하다</span></div>
      <div><b>be sure to</b><span>확실히/반드시 ~하다</span></div>
    </div>
    <p class="ex">It is my <b>pleasure</b> to see you.</p>
    <div class="fixes"><div><s>It is pleased to see you.</s><b>It is pleasing / my pleasure</b></div></div>
    <p class="note">pleased는 "기분 좋은 (사람)" — 감정분사는 사람에게. pleasure 명사 / pleasing 형용사 / please 동사(~을 기쁘게 하다)</p>
  </section>
  <section class="card">
    <h3>to부정사 관용 표현 (p.103)</h3>
    <div class="rows">
      <div><b>be supposed to V</b><span>~하기로 되어 있다 — I am supposed to meet a customer, but…</span></div>
      <div><b>used to V</b><span>~하곤 했다 (과거 습관) — I used to live here.</span></div>
      <div><b>get to V / come to V</b><span>~하게 됐다 — We got to be friends.</span></div>
      <div><b>happen to V</b><span>우연히 ~하게 되다 — I happened to meet him.</span></div>
      <div><b>be about to V</b><span>막 ~하려 하다</span></div>
    </div>
    <p class="ex">I was supposed to travel somewhere else. (O)</p>
    <div class="fixes"><div><s>Originally I will go to travel somewhere.</s><b>I was originally supposed to travel somewhere else.</b></div></div>
  </section>`,
  drills: [
    ['아이들을 잘 키우기 위해 무엇이 중요한가요?', 'What is important to raise children well?'],
    ['모두가 즐거운 여행을 하기 위해 규칙을 따르는 것이 중요합니다.', 'It is important for everyone to follow the rules to enjoy the trip.'],
    ['영어 시험에서 높은 점수를 얻기 위해 문법을 잘 아는 것은 기본입니다.', 'Knowing grammar well is fundamental to getting a high score on an English test.'],
    ['맛있는 라면을 끓이기 위해 새우를 많이 넣습니다.', 'I add a lot of shrimp to make the ramen delicious.'],
    ['행복한 가족을 만들기 위해 자신이 먼저 행복해야 합니다.', 'You have to be happy yourself first to make your family happy.'],
    ['지금 출발할 준비가 됐습니다.', 'I am ready to leave now.'],
    ['내년에 미국에 가기 위해 비자를 소지하는 것이 필수적이죠.', 'It is essential for us to have visas to go to the United States next year.'],
    ['이 공간은 행사를 열기에 너무 좁아요.', 'This space is too narrow to hold the event.'],
    ['이 책상은 혼자 옮기기엔 너무 무거워서 옮기는 걸 포기했어요.', 'This desk is too heavy to move by myself, so I gave up trying to move it.'],
    ['오늘은 밖에서 축구하기엔 너무 추워요.', 'It is too cold to play football outside today.'],
    ['그 식당은 아이들과 걸어가기엔 너무 멀어요.', 'The restaurant is too far away to walk to with my children.'],
    ['냉장고에 음료가 충분하지 않아요.', "There aren't enough beverages in the fridge."],
  ]
},

/* ───────────────────────── 11. 동명사 ───────────────────────── */
{
  id: 'gerund', no: 11, color: 'yellow', glyph: '-ing',
  title: '동명사', sub: '목적어로 쓰는 동사 · remember/forget/stop', pages: 'p.69, 83–84, 89–91',
  html: `
  <section class="card">
    <h3>동명사 = 동사원형 + ing (명사 역할)</h3>
    <div class="tree">
      <div class="node">동명사 – 명사</div>
      <ul><li>주어 <span class="mute">1·2·3·4·5</span></li><li>목적어 <span class="mute">3·4·5</span></li><li>보어 <span class="mute">2형식 주격보어</span></li></ul>
    </div>
    <p class="ex">영화를 보는 것은 나를 신나게 해 → <b>Watching</b> a movie makes me excited.</p>
    <div class="fixes"><div><s>Watch a movie makes me excited.</s><b>Watching a movie makes me excited.</b></div></div>
    <p class="note">to부정사는 주어로 쓰지 않음 → 동명사를 주어로!</p>
  </section>
  <section class="card">
    <h3>동명사를 목적어로 받는 3형식 동사</h3>
    <div class="formula"><b class="c s">S</b><b class="c v">V</b><b class="c o">~ing</b></div>
    <div class="rows">
      <div><b>avoid</b><span>피하다 — I avoid eating ice cream.</span></div>
      <div><b>consider</b><span>고려하다 — I am considering traveling.</span></div>
      <div><b>deny</b><span>부정하다 — I deny playing the game.</span></div>
      <div><b>delay</b><span>~하는 것을 미루다</span></div>
      <div><b>enjoy</b><span>즐기다</span></div>
      <div><b>finish</b><span>끝내다</span></div>
      <div><b>give up</b><span>포기하다</span></div>
      <div><b>involve</b><span>~하는 것을 포함하다</span></div>
      <div><b>quit</b><span>~하는 것을 그만두다</span></div>
      <div><b>suggest / recommend</b><span>제안 / 추천</span></div>
      <div><b>mind</b><span>꺼리다 — I don't mind meeting people.</span></div>
      <div><b>keep</b><span>계속하다 (p.53)</span></div>
    </div>
    <div class="two">
      <div><h4>3V일 때</h4><p class="ex">I recommend <b>traveling</b> to Singapore.</p></div>
      <div><h4>5V일 때</h4><p class="ex">I recommend <u>her</u> <b>to travel</b> to Singapore.</p></div>
    </div>
  </section>
  <section class="card">
    <h3>to V / ~ing 에 따라 뜻이 달라지는 동사</h3>
    <div class="tree">
      <div class="node">remember</div>
      <ul>
        <li><b class="k">to V</b> → 이 동작을 해야 할 것 (미래적인 느낌)</li>
        <li><b class="k">~ing</b> → 이 동작을 했던 것 (과거의 느낌)</li>
      </ul>
    </div>
    <p class="ex">Remember to call your mom. / Do you remember going there?</p>
    <div class="tree">
      <div class="node">forget</div>
      <ul>
        <li><b class="k">to V</b> → 나중에 할 것을 잊어버림</li>
        <li><b class="k">~ing</b> → 이미 한 동작을 잊어버림</li>
      </ul>
    </div>
    <p class="ex">I forgot to call my mom.</p>
    <div class="tree">
      <div class="node">stop</div>
      <ul>
        <li><b class="k">to V</b> → 부사적, ~하기 위해서 (멈추고 다른 걸 함)</li>
        <li><b class="k">~ing</b> → 목적어, ~하던 것을 그만둠</li>
      </ul>
    </div>
    <p class="ex">I stopped <b>talking</b> to the staff <b>to receive</b> a call.</p>
    <p class="mute">stop은 둘 다 맞고 둘 다 같이 쓸 수도 있음(O)</p>
  </section>
  <section class="card">
    <h3>to V / ~ing 둘 다 가능 (뜻 같음) (p.91)</h3>
    <p class="words">start · begin · like · love · hate · prefer</p>
    <p class="ex">I will start <b>looking / to look</b> for information about Taiwan.</p>
  </section>`,
  drills: [
    ['감기에 걸렸다면 오랫동안 밖에 머무는 것을 피하셔야 해요.', 'If you have a cold, you should avoid staying outside for a long time.'],
    ['인스턴트 라면을 많이 먹는 것을 추천하지 않아요.', "I don't recommend eating too many instant noodles."],
    ['장시간 운전할 때 피곤하게 느끼는 것을 부정할 수 없죠.', "I can't deny feeling tired when I drive for a long time."],
    ['지금 부모님과 따로 사는 것을 고려하고 있어요.', "I'm considering living separately from my parents now."],
    ['숙제를 끝낸 후 영화 보러 가는 건 어때요?', 'How about going to see a movie after I finish doing my homework?'],
    ['아이들이 고등학교를 졸업할 때까지 이 도시에서 계속 살아야 할 것 같아요.', 'I think we need to keep living in this city until our children graduate from high school.'],
    ['독일 출장을 일단 미루고 일본에서 열리는 전시회에 참여해야 할 것 같아요.', 'I think we need to delay going on a business trip to Germany and attend the exhibition held in Japan.'],
    ['당신이 영어 공부를 포기하지 않았으면 해요.', "I don't want you to give up studying English."],
    ['시골에서 사는 것을 꺼리지 않아요.', "I don't mind living in the countryside."],
    ['집들이 음식을 만드는 것을 거의 마쳤네요.', "I've almost finished making food for the housewarming party."],
    ['매우 기름진 음식을 먹는 것을 피하려고 해요.', "I'm trying to avoid eating very oily food."],
    ['점심 먹고 너무 졸려서 오후에 커피를 안 마시기가 쉽지 않아요.', "It is not easy to avoid drinking coffee in the afternoon because I feel so sleepy after lunch."],
    ['매운 음식 먹는 건 괜찮은데, 아이들이 먹기엔 어려울 수 있어요.', "I don't mind eating spicy food, but it might be difficult for my children to eat it."],
  ]
},

/* ───────────────────────── 12. 동명사 관용 표현 ───────────────────────── */
{
  id: 'gerund-idioms', no: 12, color: 'amber', glyph: '14',
  title: '동명사 관용 표현', sub: '꼭 외울 14가지 + be used to', pages: 'p.72, 98–100',
  html: `
  <section class="card">
    <h3>암기!! 14가지</h3>
    <ol class="idioms">
      <li><b>look forward to ~ing</b><span>기대하다, 고대하다 (감정적으로)</span><em>I look forward to seeing you. ≠ expect(예상하다): I expect to see you tomorrow.</em></li>
      <li><b>be used to ~ing</b><span>~에 익숙하다</span><em>≠ used to V : ~하곤 했다 (과거의 습관) — to부정사 / 이제는 과거 습관이 아님</em></li>
      <li><b>can't help ~ing</b><span>~하지 않을 수 없다</span><em>I can't help falling in love with you.</em></li>
      <li><b>keep A from B(~ing)</b><span>A가 ~하지 못하게 하다 (= prevent)</span><em>I kept my baby from touching a hot pot.</em></li>
      <li><b>There is no ~ing</b><span>~하는 것은 불가능하다 (= It is impossible to ~)</span></li>
      <li><b>It is no use ~ing</b><span>~해도 소용없다</span><em>It's no use pressing a button.</em></li>
      <li><b>go ~ing</b><span>~하러 가다</span><em>Let's go shopping.</em></li>
      <li><b>spend A ~ing</b><span>A를 ~하는 데 쓰다 (A: 시간, 돈, 에너지)</span><em>I spent two hours studying.</em></li>
      <li><b>be busy ~ing</b><span>~하느라 바쁘다 (with 생략 가능)</span><em>I am busy doing housework.</em></li>
      <li><b>have trouble (in) ~ing</b><span>~하는 데 어려움을 겪다 (trouble 셀 수 X / a problem, a difficulty 셀 수 O)</span><em>I have trouble communicating with my boss.</em></li>
      <li><b>feel like ~ing</b><span>~하고 싶다 (갑자기 하고 싶을 때. want는 중립적)</span></li>
      <li><b>be worth ~ing</b><span>~할 가치가 있다</span><em>This movie is worth watching.</em></li>
      <li><b>when it comes to ~ing</b><span>~에 관해서라면 (화제를 바꾸면서 문장의 시작을 더 반갑게)</span></li>
      <li><b>end up ~ing</b><span>결국 ~하게 되다</span><em>The couple ended up being separated.</em></li>
    </ol>
  </section>
  <section class="card">
    <h3>be used to (p.72)</h3>
    <div class="tree">
      <div class="node">be used to</div>
      <ul><li>~ing (동명사)</li><li>일반 명사 — They are used to it.</li></ul>
    </div>
    <p class="note">여기서 to는 전치사! 뒤에 동사원형 X</p>
    <div class="rows">
      <div><b>used to + 동사원형</b><span>과거에 ~하곤 했다</span></div>
      <div><b>be used to + 동사원형</b><span>${SUP} ~하는 데 사용되다 (수동태)</span></div>
    </div>
  </section>
  <section class="card">
    <h3>날짜와 전치사</h3>
    <p class="ex">Korean Lunar New Year's holidays are <b>from</b> 28th of January <b>to</b> 30th.</p>
    <p class="ex">start <b>on</b> 28th / end <b>on</b> 30th of Jan</p>
  </section>`
},

/* ───────────────────────── 13. say/tell/speak/talk ───────────────────────── */
{
  id: 'say', no: 13, color: 'cyan', glyph: 'tell',
  title: 'say · tell · speak · talk', sub: '말하다 동사 4개의 형식', pages: 'p.71',
  html: `
  <section class="card">
    <h3>S + 말하다 + 사람 + 내용</h3>
    <div class="rows">
      <div><b>talk (1)</b><span>뒤에 무조건 전치사</span></div>
      <div><b>speak (1, 3)</b><span>언어 / speak to 사람</span></div>
      <div><b>tell (4, 3, 5)</b><span rowspan="2">문장으로 된 내용을 받음, 명사로 받음</span></div>
      <div><b>say (1, 3)</b><span>문장으로 된 내용을 받음, 명사로 받음</span></div>
    </div>
  </section>
  <section class="card">
    <h3>예문</h3>
    <p class="ex">I talked <b>to him about</b> the news. <span class="mute">(= spoke) 내용에서는 명사(O) 문장(X)</span></p>
    <p class="ex">I can speak English. (3)</p>
    <p class="ex">I will tell <u>you</u> <u>the news</u>. (4) <span class="mute">사람 / 사물</span></p>
    <p class="ex">I will tell <u>you</u> <u>that S+V</u>. <span class="mute">'O' 자리에 문장이 들어가는데 이걸 <b>명사절</b>이라 함</span></p>
    <p class="ex">I will tell you about the news. (3)</p>
    <p class="ex">I said <b>to you</b> (about) the news. (1)</p>
    <p class="ex">I said <b>to him</b> that S+V. (3)</p>
    <div class="redbox">
      <p>tell은 동사가 사람 앞에 전치사를 붙임 X. <b>tell 뒤엔 사람이 바로, say는 to 사람.</b></p>
      <div class="fixes">
        <div><s>She said me</s><b>She told me / She said to me</b></div>
      </div>
    </div>
  </section>`
},

/* ───────────────────────── 14. 분사구문 / 부사절 축약 ───────────────────────── */
{
  id: 'reduce', no: 14, color: 'brown', glyph: 'when',
  title: '부사절 축약', sub: 'while working · when planning', pages: 'p.32, 108',
  html: `
  <section class="card">
    <h3>while S+V, S+V</h3>
    <div class="clause"><div class="box sub"><b>while</b> S+V</div><div class="plus">,</div><div class="box main">S+V</div></div>
    <p class="note">생략이 가능한 경우 (해도 되고 안 해도 되고):</p>
    <ol class="num">
      <li>주어가 동일인물 or</li>
      <li>일반인 / 대중</li>
      <li>주절과 시제가 같은 경우</li>
    </ol>
    <div class="redbox"><p><b>생략의 공식!</b> ① 주어를 삭제하고 ② 동사에 ing를 붙인다.</p></div>
    <p class="ex">It is difficult for him to ~, <b>while working</b>.</p>
    <p class="mute">while: 부사절 접속사 / working: 형용사가 아니다. 동명사도 아님 → ing가 시제를 표현하지 않아서 주절과 시제가 같아야 함</p>
  </section>
  <section class="card">
    <h3>during vs while</h3>
    <div class="rows">
      <div><b>during working</b><span>(X) 동사 가지고 동작 → while로 써야 함</span></div>
      <div><b>during</b><span>숫자가 아닌 기간 — during vacation</span></div>
      <div><b>for</b><span>숫자 — for 4 hours</span></div>
    </div>
  </section>
  <section class="card">
    <h3>부사절의 생략 가능 조건 (p.108)</h3>
    <p class="note">(3中 1에 걸리면) → 모양을 분사로 바꿔준다! (그런 뜻이 될 동사 X / 그러면 동명사 X)</p>
    <ol class="num">
      <li>주절의 주어와 동일할 때 & 시제가 같을 때
        <p class="ex">When <u>I</u> arrived at home, <u>I</u> saw ~ → <b>Arriving</b> at home, I saw ~</p></li>
      <li>생략해서는 주어가 뻔할 때 (문맥상 누군지 알 때)</li>
      <li>일반인, 총칭 대상
        <p class="ex">When you plan to travel to Taiwan, it is important to check the weather forecast.<br>→ When <b>planning</b> a trip to Taiwan, ~</p>
        <p class="ex">When people are in love, they looked lovely. → When <b>being</b> in love, people look lovely.</p></li>
    </ol>
    <p class="mute">before / after 와도 자주 씀</p>
    <p class="tip">${SUP} 축약해도 접속사(when, while, before, after)를 남기면 뜻이 더 분명해요.</p>
  </section>`
},

/* ───────────────────────── 15. 시제 ───────────────────────── */
{
  id: 'tense', no: 15, color: 'navy', glyph: 'p.p',
  title: '시제 총정리', sub: '12시제 표 · 현재완료 · 수동태 결합', pages: 'p.95, 110–117, 123, 136',
  html: `
  <section class="card">
    <h3>현재완료 have + p.p.</h3>
    <div class="tree">
      <div class="node">I have p.p.</div>
      <ul><li>① 완료 <span class="mute">— 방금/이미 ~했다 (just, already, yet)</span></li><li>② 지속(계속) <span class="mute">— 쭉 ~해 왔다 (for, since)</span></li><li>③ 경험 <span class="mute">— ~해 본 적 있다 (never, ever, before)</span></li></ul>
    </div>
    <p class="ex">The package <b>has just arrived</b>. <span class="mute">완료</span></p>
    <p class="ex">My friend <b>has been working</b> at this company since 2020. <span class="mute">지속</span></p>
    <p class="ex">I've <b>never eaten</b> this kind of food in Korea. <span class="mute">경험</span></p>
  </section>
  <section class="card">
    <h3>make 동사 시제표 (p.115)</h3>
    <div class="tbl-wrap">
    <table class="tbl tense">
      <thead><tr><th></th><th>단순시제</th><th>진행시제<small>be ~ing</small></th><th>완료시제<small>have p.p</small></th></tr></thead>
      <tbody>
        <tr class="sec"><td colspan="4">능동</td></tr>
        <tr><th>현재</th><td>make/makes</td><td>am/are/is making</td><td>have/has made</td></tr>
        <tr><th>과거</th><td>made</td><td>was/were making</td><td>had made</td></tr>
        <tr><th>미래</th><td>will make</td><td>will be making</td><td>will have made</td></tr>
        <tr class="sec"><td colspan="4">수동 (be + p.p)</td></tr>
        <tr><th>현재</th><td>am/are/is made</td><td>am/are/is being made</td><td>have/has been made</td></tr>
        <tr><th>과거</th><td>was/were made</td><td>was/were being made</td><td>had been made</td></tr>
        <tr><th>미래</th><td>will be made</td><td class="x">거의 안 씀</td><td>will have been made</td></tr>
      </tbody>
    </table>
    </div>
    <p class="note">현재진행·현재완료가 가장 많이 쓰임. 토익 Part 5·7 단골!</p>
  </section>
  <section class="card">
    <h3>시제 결합 공식</h3>
    <div class="combo">
      <div class="col"><h4>현재완료진행</h4><span>have p.p</span><span class="op">+</span><span>be ~ing</span><span class="eq">have been ~ing</span><p class="ex">I have been cooking.</p></div>
      <div class="col"><h4>진행 수동</h4><span>be ~ing</span><span class="op">+</span><span>be p.p</span><span class="eq">be being p.p</span><p class="ex">Coffee is being made.</p></div>
      <div class="col"><h4>완료 수동</h4><span>have p.p</span><span class="op">+</span><span>be p.p</span><span class="eq">have been p.p</span><p class="ex">Coffee has been made.</p></div>
    </div>
    <p class="mute">현재진행 = 지금 진행 중 / 현재완료진행 = 과거부터 현재까지 지속</p>
  </section>
  <section class="card">
    <h3>since / 과거완료 (p.123)</h3>
    <p class="ex"><b>Since</b> the new CEO was appointed, working conditions <b>have improved</b> a lot.</p>
    <p class="note">since + 과거 시점 / 과거시제 절 → 주절은 현재완료</p>
    <p class="ex">Before we arrived at the airport, the other team <b>had already arrived</b>.</p>
    <p class="mute">had + p.p. = 과거 기준 시점보다 더 앞선 일. ${SUP} before/after로 순서가 분명하면 단순과거도 가능.</p>
  </section>
  <section class="card">
    <h3>미래진행 · 현재진행 미래 (p.117, 136)</h3>
    <p class="ex">In five minutes we <b>will be arriving</b> at South Street Station. <span class="mute">will be ~ing</span></p>
    <p class="ex">I'm <b>moving</b> to another area next month. <span class="mute">현재진행형으로 확정된 미래 일정 (= I'm going there soon)</span></p>
  </section>
  <section class="card">
    <h3>수동태 (p.145)</h3>
    <p class="ex">I sent you an email.</p>
    <p class="ex">→ You were sent an email. / An email was sent to you.</p>
    <p class="ex">The document you requested has been sent to you <b>by email</b>.</p>
  </section>
  <section class="card">
    <h3>헷갈렸던 포인트</h3>
    <div class="fixes">
      <div><s>Did you send the customer the email? (현재완료 문맥)</s><b>Have you sent the email to the customer?</b></div>
      <div><s>I haven't been get on this brand car.</s><b>I've never ridden in a car of this brand.</b></div>
      <div><s>Your car has been fixed now. (지금 수리 중)</s><b>Your car is being repaired now.</b></div>
      <div><s>a solution about this issue</s><b>a solution to this issue</b></div>
      <div><s>electronic cars</s><b>electric cars</b></div>
      <div><s>I haven't checked the test result yet, but I will sent you</s><b>…but I'll email it to you by 5 p.m.</b></div>
    </div>
    <p class="mute">yet = 부정문·의문문 "아직" / still = 여전히</p>
  </section>`,
  drills: [
    ['방금 물건이 도착했어요. 식품이라 빨리 냉장고에 넣어 주세요.', 'The package has just arrived. Please put it in the refrigerator quickly because it contains food.'],
    ['아직 이메일을 확인하지 못했어요. 사무실에 도착한 후 답변드릴게요.', "I haven't checked the email yet. I'll reply after I arrive at the office."],
    ['서류가 아직 준비되지 않았어요. 내일 오후쯤 준비할 수 있을 것 같아요.', "The documents haven't been prepared yet. I think they'll be ready by tomorrow afternoon."],
    ['핸드폰이 느리게 작동하고 있는데 아직 새 핸드폰을 사지 않았어요.', "My smartphone has been working very slowly, but I haven't bought a new one yet."],
    ['아이들이 샤워를 다 했으니 이제 내 차례네요.', "My children have finished taking showers, so it's my turn."],
    ['친구와 카페에 두 시간째 있어요.', "I've been at a cafe with my friend for two hours."],
    ['너희는 두 시간째 TV를 보고 있어. 이제 곧 꺼야 해.', "You've been watching TV for two hours. It's almost time to turn it off."],
    ['고객에게 이메일을 보냈나요? 그 고객이 문제에 대한 이메일을 기다리고 있어요.', 'Have you sent the email to the customer? The customer has been waiting for the email about this issue.'],
    ['저 테이블에 아직 음료를 서빙하지 못했어요.', "I haven't served the beverages to that table yet."],
    ['이 문제의 해결책은 이미 찾았어요.', "I've already found a solution to this issue."],
    ['제 커피를 다 마셨어요. 이건 당신 것 같아요.', "I've drunk all my coffee. I think this is yours."],
    ['세계 여러 나라에서 지난 몇 년간 많은 전기차가 생산되었어요.', 'Many electric cars have been produced in countries around the world over the past few years.'],
    ['오징어 튀김은 지금 요리 중이에요. 다 되면 알려드릴게요.', "The fried squid is being prepared now. I'll let you know when it's ready."],
    ['미국에서 10년 넘게 살고 있지만 다른 도시는 가 본 적이 없어요.', "Even though I've been living in the United States for over ten years, I've never been to another city."],
    ['탑승은 아직 시작하지 않았지만 10분 이내에 시작할 것 같아요.', "Boarding hasn't started yet, but I think it will start within ten minutes."],
    ['새 CEO가 임명된 이래로 근무 조건이 많이 향상되었습니다.', 'Since the new CEO was appointed, working conditions have improved a lot.'],
    ['우리가 공항에 도착하기 전에 다른 팀은 이미 도착해서 식사를 끝냈더라고요.', 'Before we arrived at the airport, the other team had already arrived and finished their meal.'],
    ['디저트가 준비되고 있으니 조금만 기다려 주세요.', 'The dessert is being prepared, so please wait a bit.'],
  ]
},

/* ───────────────────────── 16. 관계대명사 ───────────────────────── */
{
  id: 'relpro', no: 16, color: 'blue2', glyph: 'who',
  title: '관계대명사', sub: '형용사절 · 주격/목적격/소유격', pages: 'p.114, 129–139, 142',
  html: `
  <section class="card">
    <h3>S + V + 명 + (형용사절)</h3>
    <p class="ex">I like <u>the woman</u> <b>(who you like)</b>.</p>
    <p class="note">형용사절(관계대명사절) = 앞의 명사(선행사)를 꾸며줌. 목적격 관계대명사는 생략 가능, 보어 역할은 X.</p>
    <p class="ex">I don't have friends <b>(who</b> studied this area).</p>
    <p class="mute">who = 관계대명사 (friends 주어 역할) → 주격 관계대명사</p>
  </section>
  <section class="card">
    <h3>관계대명사 표 (p.130)</h3>
    <div class="tbl-wrap">
    <table class="tbl">
      <thead><tr><th>선행사</th><th>주격</th><th>목적격</th><th>소유격</th></tr></thead>
      <tbody>
        <tr><th>사람</th><td>who / that</td><td>who(m) / that</td><td>whose</td></tr>
        <tr><th>사물</th><td>which / that</td><td>which / that</td><td>whose / of which</td></tr>
      </tbody>
    </table>
    </div>
    <p class="note">목적격 → 생략 가능 · 주격 → 생략 불가 (단, 주격 + be는 함께 생략 가능)</p>
    <p class="ex">I don't have food (which I can give you). → I don't have food <b>to give you</b>. <span class="mute">(to부정사로 바꾸기)</span></p>
  </section>
  <section class="card">
    <h3>소유격 whose</h3>
    <p class="ex">She will work for the company <b>whose</b> bonus is very high in the industry. <span class="mute">= company's</span></p>
    <p class="ex">He will take the clothes <b>whose</b> price is not reasonable. <span class="mute">= of which</span></p>
    <p class="ex">I'm looking for a book <b>whose</b> title is 'The Beautiful'.</p>
    <p class="mute">선행사가 사람 → whose / 사물 → whose, of which</p>
  </section>
  <section class="card">
    <h3>주격 관계대명사 + be 생략</h3>
    <p class="ex">There are many people (who are) waiting for the bus.</p>
    <p class="ex">All the products (which are) <b>displayed</b> here are from China.</p>
    <p class="note">p.p.나 ~ing만 남으면 분사가 명사를 뒤에서 꾸며줌</p>
  </section>
  <section class="card">
    <h3>전치사 + 관계대명사 (p.142)</h3>
    <p class="ex">The food (which I was waiting <b>for</b>) has been prepared!</p>
    <p class="mute">for의 목적어 = 관계대명사 → 문장 끝 전치사 빠뜨리지 않기</p>
    <p class="ex">The service (which you registered <b>for</b>)</p>
  </section>
  <section class="card">
    <h3>헷갈렸던 포인트</h3>
    <div class="fixes">
      <div><s>I put all of the fruit which was delivered in the morning into…</s><b>I put all the fruit that was delivered this morning in the refrigerator.</b></div>
      <div><s>The curtain which I set up yesterday has been torn.</s><b>The curtain I put up yesterday is torn. (tear–tore–torn)</b></div>
      <div><s>a hotel which is near by station</s><b>a hotel near the station / a nearby hotel</b></div>
      <div><s>We will start a project which we didn't try before.</s><b>We're going to start a project we've never tried before.</b></div>
      <div><s>This cafe have well known coffee</s><b>This cafe is well known for its coffee</b></div>
    </div>
  </section>`,
  drills: [
    ['오늘은 딸이 좋아하는 빵을 만들었어요.', 'Today I made the bread that my daughter likes.'],
    ['아침에 요청했던 추가 이불을 아직 못 받았어요.', "I haven't received the extra blanket that I requested this morning yet."],
    ['이틀 전에 보낸 택배가 아직 도착하지 않았어요.', "The package that you sent two days ago hasn't arrived yet."],
    ['어제 사려고 했던 책은 품절이에요.', 'The book that I wanted to buy yesterday is sold out.'],
    ['어제 보여준 책이 이건가요?', 'Is this the book that you showed me yesterday?'],
    ['엄마가 만들어 준 음식은 항상 맛있어요.', 'The food that my mom makes is always delicious.'],
    ['어제 예약하려던 호텔은 너무 오래되어 보였어요.', 'The hotel you were going to book yesterday looked too old.'],
    ['어제 이메일로 보낸 파일을 열 수 없어요.', "I can't open the file you emailed me yesterday."],
    ['어제 배운 문법을 이해하지 못하겠어요.', "I don't understand the grammar we learned yesterday."],
    ['지난주 카페에서 만난 사람은 제 삼촌이에요.', 'The person we met at the cafe last week is my uncle.'],
    ['말하고 있는 나라를 들어본 적 없어요.', "I've never heard of the country you're telling me about."],
    ['저희 팀은 내년 6월 독일에서 열리는 전시회에 참가할 예정입니다.', 'Our team will participate in an exhibition that will be held in Germany next June.'],
    ['중국어를 잘하고 이 분야 경력이 7년 이상인 마이클을 추천합니다.', 'I recommend Michael, who speaks Chinese well and has more than seven years of experience in this field.'],
    ['이 프로젝트를 담당하는 매니저가 곧 도착할 거예요.', 'The manager who is in charge of this project will arrive soon.'],
  ]
},

/* ───────────────────────── 17. 관계부사 ───────────────────────── */
{
  id: 'reladv', no: 17, color: 'green2', glyph: 'where',
  title: '관계부사', sub: 'when · where · why · how', pages: 'p.140–141',
  html: `
  <section class="card">
    <h3>형용사절의 두 종류</h3>
    <div class="tree">
      <div class="node">형용사절</div>
      <ul><li>관계대명사 <span class="mute">— 뒤에 불완전한 문장</span></li><li>관계부사 <span class="mute">— 뒤에 완전한 문장 (부사 역할)</span></li></ul>
    </div>
  </section>
  <section class="card">
    <h3>선행사별 관계부사</h3>
    <div class="tbl-wrap">
    <table class="tbl">
      <thead><tr><th>선행사</th><th>관계부사</th><th>예문</th></tr></thead>
      <tbody>
        <tr><th>시간</th><td>when</td><td>the day <b>when</b> we met</td></tr>
        <tr><th>장소</th><td>where</td><td>the cafe <b>where</b> we met</td></tr>
        <tr><th>이유</th><td>why</td><td>the reason <b>why</b> she left <span class="mute">(the reason 생략 가능!)</span></td></tr>
        <tr><th>방법</th><td>how</td><td>how I use it / the way I use it</td></tr>
      </tbody>
    </table>
    </div>
    <div class="redbox"><p><b>the way와 how는 같이 쓰지 X</b> — the way <s>how</s> → way 또는 how 하나만!</p></div>
    <p class="ex">Can you let me know <b>the way</b> I can use this machine?</p>
    <p class="ex">I don't know (the reason) <b>why</b> you don't like duck.</p>
    <p class="tip">${SUP} 관계부사를 항상 that으로 바꿀 수 있는 건 아니에요.</p>
  </section>
  <section class="card">
    <h3>영작 체크리스트 (p.141)</h3>
    <ol class="check">
      <li>내가 영작한 문장을 다시 해석해 보기</li>
      <li>시제 확인</li>
      <li>단수·복수 확인</li>
      <li>큰 주절의 문장 구조부터 보기</li>
    </ol>
  </section>`,
  drills: [
    ['제가 여기로 이사한 2014년에 저 건물은 공사 중이었어요.', 'The building was being constructed in 2014 when I moved here.'],
    ['당신이 어제 나에게 커피를 사줬던 그 카페는 오늘 문을 닫았네요.', 'The cafe where you bought me coffee yesterday is closed today.'],
    ['저는 그때 아기가 밤에 왜 그렇게 크게 울었는지 몰랐어요.', "At that time, I didn't know why the baby cried so loudly at night."],
    ['저는 그 시설을 무료로 사용할 수 있는 방법을 알고 있어요.', 'I know how to use the facility for free.'],
    ['어제 여기서 산 이 티켓을 환불해 줄 수 있나요?', 'Could you refund the ticket I bought here yesterday?'],
    ['제가 대학생 때 4년 동안 살았던 이 도시가 정말 좋아요.', 'I really like this city where I lived for four years when I was a university student.'],
    ['너무 공격적인 방법으로 친구에게 다가가는 것은 좋지 않아요.', "It's not good to approach your friend in an overly aggressive way."],
  ]
},

/* ───────────────────────── 18. 명사절 ───────────────────────── */
{
  id: 'nounclause', no: 18, color: 'graphite', glyph: 'what',
  title: '명사절 · 간접의문문', sub: 'what절 vs 형용사절 that', pages: 'p.93, 143',
  html: `
  <section class="card">
    <h3>명사절 vs 형용사절</h3>
    <p class="ex">Tell me <b>what</b> you are looking for. <span class="mute">명사절 — what = 선행사 포함</span></p>
    <p class="ex">Tell me the thing <b>(that</b> you are looking for). <span class="mute">형용사절 — thing 수식</span></p>
    <div class="fixes"><div><s>Tell me what are you looking for.</s><b>Tell me what you are looking for.</b></div></div>
    <p class="note">everything / something / anything / everybody → 뒤에 that 선호</p>
  </section>
  <section class="card">
    <h3>간접의문문 = 의문사 + 주어 + 동사</h3>
    <p class="ex">Tell me <b>who you are</b>.</p>
    <p class="ex">I asked my friends <b>what kind of meat they liked</b>.</p>
    <div class="fixes"><div><s>I asked friends about what they like out of meat.</s><b>I asked my friends about their favorite meat.</b></div></div>
    <p class="note">ask 뒤에 about + 문장(의문사절) 쓰지 말고, about + 명사 / 바로 의문사절</p>
  </section>
  <section class="card">
    <h3>업무 영어에서 자주 쓰는 문법 (p.144)</h3>
    <div class="rows">
      <div><b>be in charge of</b><span>= be responsible for, 담당하다</span></div>
      <div><b>by email</b><span>이메일로 (관사 X)</span></div>
      <div><b>plan to V / try not to V</b><span>to부정사 부정은 not to</span></div>
      <div><b>opportunity for 사람 to V</b><span>a good chance for students to learn</span></div>
      <div><b>every + 단수 / all + 복수</b><span>every member / all members</span></div>
    </div>
  </section>`,
  drills: [
    ['당신이 찾고 있는 물건이 무엇인지 말해 주세요.', "Tell me what you're looking for."],
    ['당신이 말하고 있는 그 뉴스는 들어본 적 없어요.', "I've never heard the news you're talking about."],
    ['어떤 이메일에 제가 답을 해야 하나요?', 'Which email should I reply to?'],
    ['당신이 기다리고 계셨던 택배가 곧 도착할 겁니다.', "The package you've been waiting for will arrive soon."],
    ['이 식당에서 잘 알려진 국수를 먹어봐야 해요.', 'You should try the noodles that this restaurant is known for.'],
    ['그 회사는 내년에 동남아시아로 사업을 확장할 계획입니다.', 'The company is planning to expand its business into Southeast Asia next year.'],
    ['모든 팀원이 주간 회의에 참석하는 것이 중요합니다.', "It's important for all team members to attend the weekly meeting."],
    ['직원들은 발표 중 실수하지 않으려고 노력했어요.', 'The employees tried not to make mistakes during the presentation.'],
    ['우리는 3주째 이 소프트웨어 업데이트 작업을 하고 있어요.', "We've been working on this software update for three weeks."],
  ]
},

/* ───────────────────────── 19. 준동사 완료형 ───────────────────────── */
{
  id: 'perfect-verbals', no: 19, color: 'rose', glyph: 'having',
  title: '준동사의 완료형', sub: 'having p.p · to have p.p', pages: 'p.147',
  html: `
  <section class="card">
    <h3>본동사보다 앞선 일 표현</h3>
    <div class="combo">
      <div class="col"><h4>완료동명사</h4><span>having</span><span class="op">+</span><span>p.p</span><p class="ex">We are proud of <b>having received</b> strong support.</p></div>
      <div class="col"><h4>완료부정사</h4><span>to have</span><span class="op">+</span><span>p.p</span><p class="ex">We are so happy <b>to have received</b> it.</p></div>
      <div class="col"><h4>완료진행</h4><span>having been</span><span class="op">+</span><span>~ing</span><p class="ex">It is difficult <b>to have been studying</b> for 2 years.</p></div>
    </div>
    <p class="note">준동사 자체엔 시제가 없지만 완료형으로 본동사와의 시간 관계를 나타냄. 전치사 of 뒤 → 동명사(having)</p>
  </section>
  <section class="card">
    <h3>고객 안내 이메일에서 본 문법</h3>
    <div class="rows">
      <div><b>has been providing</b><span>현재완료진행</span></div>
      <div><b>has been improved to save</b><span>현재완료 수동 + 목적의 to부정사</span></div>
      <div><b>which has been designed</b><span>계속적 관계절 + 현재완료 수동</span></div>
      <div><b>interested in trying</b><span>전치사 + 동명사</span></div>
      <div><b>workshops hosted by</b><span>과거분사 수식</span></div>
      <div><b>next month, when</b><span>시간 관계부사 + 미래 수동</span></div>
      <div><b>our store, where</b><span>장소 관계부사</span></div>
      <div><b>customers who value both A and B</b><span>주격 관계대명사</span></div>
    </div>
  </section>`
},
];

/* 오답노트: 내가 자주 틀린 표현 (필기 첨삭 기반) */
window.FIXES = [
  ['Thank you to your email', 'Thank you for your email', 'thank you for'],
  ['You spoke in your email', 'You mentioned in your email', ''],
  ['decided using', 'decided to use', 'decide + to V'],
  ['one of my friend', 'one of my friends', 'one of + 복수'],
  ['she said me', 'she told me', 'tell 뒤엔 사람 바로'],
  ['finished to schedule', 'finished planning', 'finish + -ing'],
  ['very late for me', 'too late for me', 'too: 너무 ~해서 안 됨'],
  ['let me knowing', 'let me know', 'let + O + 동사원형'],
  ['I go to home', 'I go home', 'home 앞 전치사 X'],
  ['arrive at there', 'arrive there / get there', 'there는 부사'],
  ['suggest me to walk', 'suggest walking / suggest that I walk', ''],
  ['I want for you to buy', 'I want you to buy', '목적어 자리 for X'],
  ['Watch a movie makes me…', 'Watching a movie makes me…', '주어는 동명사'],
  ["We'll discuss about it", "We'll discuss it", 'discuss는 타동사'],
  ['electronic car', 'electric car', ''],
  ['a solution about', 'a solution to', ''],
  ['money (가산 취급)', 'money / cash는 셀 수 없음', 'p.16'],
  ['scenery (복수)', 'scenery는 불가산', ''],
  ['receipt ↔ recipe', 'receipt 영수증 / recipe 조리법', ''],
  ['agree to + 사람 의견', 'agree with 사람·의견 / agree to 제안', ''],
  ['the way how', 'the way / how 하나만', ''],
  ['during working', 'while working', 'during + 명사'],
  ['It is pleased to see you', 'It is my pleasure to see you', 'pleased는 사람'],
  ['This clothes is', 'These clothes are', ''],
];
