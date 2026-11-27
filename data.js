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
  </section>
  <section class="card">
    <h3>전치사구가 형용사일 때 (노트)</h3>
    <p class="ex">My phone <u>on the table</u> is not <b>mine</b>.</p>
    <p class="mute">on the table → 명사(phone) 수식 = 형용사 / mine = 소유대명사</p>
  </section>
  <section class="card">
    <h3>부사의 자리 (노트 10/12)</h3>
    <div class="rows">
      <div><b>문장 전체 수식</b><span>문장 제일 앞 — Therefore, ~</span></div>
      <div><b>동사 수식</b><span>문장 제일 끝 — I can run <u>fast</u>.</span></div>
      <div><b>형용사 수식</b><span>정도를 나타내기 위해 부사 출동 — very beautiful</span></div>
      <div><b>부사 수식</b><span>so fast, too much</span></div>
    </div>
    <p class="note">1형식: S + V + (부사 or 전치사구) — 동사 수식으로</p>
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

/* ───────────── (노트) 1형식 동사 ───────────── */
{
  id: 'v1', no: 0, color: 'indigo', glyph: '1V',
  title: '1형식 동사', sub: 'S + V + 전치사구/부사 · 장소 → 시간 순서', pages: '노트 9/26·10/12·10/18',
  html: `
  <section class="card">
    <h3>1형식 = S + V</h3>
    <div class="formula"><b class="c s">S</b><b class="c v">V</b><i>+ 전치사구 / 부사</i></div>
    <p class="note">1형식 동사에는 뒤에 전치사구 또는 부사가 따라와야 한다. (형식상 동사로 알려주는 것)</p>
    <p class="ex">I sleep. → I slept <u>in my friend's house</u>.</p>
    <p class="note">sleep은 1형식이기 때문에 뒤에 명사가 오면 안 됨 → 전치사가 와야 함!</p>
    <p class="mute">부사는 동사와 떨어져도 OK</p>
  </section>
  <section class="card">
    <h3>1형식 동사 목록</h3>
    <p class="words">go · come · return · sleep · wake up · get up · look · move · talk · speak · study · walk · run · exercise · sit · stand · fall · fly · grow · work · dance · sing · play · travel · drive · arrive · depart · drink · swim · cry · scream · fight · smile · laugh · sneeze(재채기) · cough(기침) · begin · start · last · lie · appear · disappear · reply · live · die · happen</p>
    <p class="tip">${SUP} study, drink, play, work 등은 3형식(목적어 있음)으로도 써요. 여기서는 목적어 없이 쓰는 경우.</p>
  </section>
  <section class="card">
    <h3>순서: 장소 → 시간</h3>
    <p class="ex">I will work <u>in the office</u> <u>today</u>. <span class="mute">전치사구(장) · 부사(시)</span></p>
    <p class="ex">I walked <u>around the house</u> <u>at night</u>. <span class="mute">장 · 시</span></p>
    <p class="ex">I went to supermarket <u>at 8:00pm</u> <u>last night</u> with my mom. <span class="mute">구체적 시간 → 더 넓은 시간대</span></p>
    <p class="note">장소와 시간 사이에 다른 걸 넣지 X → 앞으로 빼거나 맨 뒤로 가기</p>
    <p class="ex">I will stay in France for a while next year <b>with my son</b>.</p>
    <p class="note">시간·장소를 나타내는 전치사구 or 부사는 앞으로 오기도 한다! 문장 전체 수식 부사는 문장 앞에.</p>
    <p class="ex"><b>Last week</b>, I met my friends.</p>
  </section>
  <section class="card">
    <h3>1형식 vs 3형식 (짝으로 외우기)</h3>
    <div class="rows">
      <div><b>go (1)</b><span>go <b>to</b> + 장소</span></div>
      <div><b>visit (3)</b><span>visit + 장소 바로 — My coworker will visit my home today.</span></div>
      <div><b>reply · respond (1)</b><span>I will reply <b>to</b> you / to your message soon.</span></div>
      <div><b>answer (3)</b><span>I will answer you / your message / your email soon.</span></div>
      <div><b>depart (1)</b><span>I departed <b>from</b> Korea.</span></div>
      <div><b>leave (3)</b><span>I left Korea.</span></div>
      <div><b>talk (1)</b><span>I will talk <b>to</b> you <b>about</b> the news tomorrow. (사람과 이슈)</span></div>
      <div><b>lie (1)</b><span>lie는 1형식으로만 쓴다 — He lied <b>to</b> me.</span></div>
    </div>
    <p class="ex">He lied to me, but I understood his situation. <span class="mute">understand → 3형식</span></p>
    <div class="fixes"><div><s>I understanded</s><b>I understood</b></div></div>
  </section>
  <section class="card">
    <h3>1형식 동사가 좋아하는 전치사 (look)</h3>
    <div class="tree">
      <div class="node">look +<small>전치사 + 명사</small></div>
      <ul>
        <li><b>for</b> + n : ~을 찾다</li>
        <li><b>after</b> + n : ~을 돌보다 <span class="mute">= take care of + n</span></li>
        <li><b>into</b> + n : ~을 조사하다 <span class="mute">(들어가서 더 찾아봄)</span></li>
      </ul>
    </div>
    <p class="ex">I am looking <b>for</b> a document now.</p>
    <p class="ex">I am looking <b>after</b> two dogs at home.</p>
    <p class="mute">look은 1형식·2형식 둘 다 (2형식: ~처럼 보인다)</p>
  </section>
  <section class="card">
    <h3>헷갈렸던 1형식 표현</h3>
    <div class="rows">
      <div><b>wake up → woke up</b><span>의식을 (잠에서 깨다). up은 부사</span></div>
      <div><b>get up → got up</b><span>몸을 (일어나다)</span></div>
      <div><b>last (1V)</b><span>지속되다 — When does it last until? 언제까지 해요?</span></div>
      <div><b>travel to</b><span>~로 여행을 가다 — I will travel to the mountain in summer.</span></div>
      <div><b>move to / into</b><span>~로 이사를 가다 — I moved to Seoul / to a new house.</span></div>
    </div>
    <div class="fixes">
      <div><s>I will go to travel at the mountain</s><b>I will travel to the mountain in summer. (계절엔 in)</b></div>
      <div><s>My friend lives in overseas</s><b>My friend lives overseas. (overseas는 부사)</b></div>
      <div><s>Your message will reply tomorrow</s><b>I will reply to your message tomorrow.</b></div>
    </div>
  </section>
  <section class="card">
    <h3>in / at 느낌 (노트)</h3>
    <div class="rows">
      <div><b>in</b><span>안에서 — in my room / the kitchen / the living room / the toilet, 행정구역 in 안양 · in 호계동 · in 동안구</span></div>
      <div><b>at</b><span>도착해서, 목적성이 강한 느낌 — arrive at the airport / 시간도 at 특정 시간 (at 9:00 am)</span></div>
    </div>
    <p class="mute">hair salon · cafe · market 처럼 건물 안 가게는 in, 목적성이 강한 곳(bus stop, station, airport, pharmacy)은 at</p>
  </section>`,
  drills: [
    ['저는 친구의 집에서 잤습니다.', "I slept in my friend's house.", 'sleeped (X) → slept / 소유격(my friend’s)'],
    ['나는 오늘 사무실에서 일할 것입니다.', 'I will work in the office today.', 'will 뒤엔 동사원형 (will working X)'],
    ['나는 집에서 운동했습니다.', 'I exercised in the house.'],
    ['나는 서울에서 삽니다.', 'I live in Seoul.'],
    ['당신은 내일 이 방에서 잘 것입니다.', 'You will sleep in this room tomorrow.', '장소 → 시간'],
    ['우리팀은 이 호텔에서 머물 것입니다.', 'Our team will stay in this hotel.'],
    ['서울에 계신 나의 부모님은 다음주에 제주도로 여행을 갈 것입니다.', 'My parents in Seoul will travel to Jeju Island next week.', '전치사구(in Seoul)가 명사를 꾸미면 형용사 역할'],
    ['우리는 방금 공항에 도착했습니다.', 'We arrived at the airport just now.'],
    ['저는 집에서 출발했습니다.', 'I departed from the house.', '출발점은 from'],
    ['저는 집 주위를 밤에 걸었습니다.', 'I walked around the house at night.'],
    ['저는 어제 밤 슈퍼에 갔어요.', 'I went to the supermarket last night.', 'go (X) → went (과거)'],
    ['작년에 우리가족은 미국으로 여행을 갔어요.', 'Last year, my family traveled to America.'],
    ['어제밤 저의 남편은 거실에서 잤어요.', 'Last night, my husband slept in the living room.', 'sleeps (X) → slept'],
    ['지난주에 친구의 결혼식에 갔었죠.', "Last week, I went to my friend's wedding."],
    ['저는 내년에 아들과 함께 프랑스에 잠깐 머물 거예요.', 'I will stay in France for a while next year with my son.', 'at France (X) → in France / 장소·시간 사이에 넣지 말고 맨 뒤로'],
    ['제 친구는 해외에 살고 있어요.', 'My friend lives overseas.', 'overseas는 부사 → in 불필요'],
    ['당신의 문자에 내일 답을 할게요.', 'I will reply to your message tomorrow.', 'reply는 1형식 → reply to'],
    ['영업부의 제 동료가 오늘 안으로 당신의 질문에 답할 거예요.', 'My coworker in the sales department will reply to your question within today.'],
    ['어제 학교에서 너 너무 피곤해 보였어.', 'You looked so tired at school yesterday.'],
    ['그저께 저는 한국에 도착해서 친구 집에 머물렀어요.', "The day before yesterday, I arrived in Korea and I stayed in my friend's house.", 'departed from (X) — 거기에서 출발한!'],
    ['지난주에 엄마가 미국에서 출발했어요.', 'Last week, my mom departed from America.'],
    ['저는 오후에 헬스장에 갈 것입니다.', 'I will go to the gym in the afternoon.', 'gym = fitness club = fitness center'],
    ['저는 여름에 산으로 여행을 갈 것입니다.', 'I will travel to the mountain in summer.', '계절엔 in'],
    ['저는 친구와 함께 공항에 9시에 도착했습니다.', 'I arrived at the airport at 9:00 am with my friends.', 'departed (X) → arrived / 특정 시간은 at'],
    ['저는 지금 어떤 서류를 찾고 있습니다.', 'I am looking for a document now.', '현재진행은 now와 잘 나옴'],
    ['저는 강아지 두 마리를 집에서 돌보고 있습니다.', 'I am looking after two dogs at home.'],
    ['저는 오늘 아침 5시에 일어났습니다.', 'I woke up at 5:00 am today.', 'wake up (X) → woke up (과거)'],
    ['저는 내일 아침 5시에 일어나야만 합니다.', 'I have to get up at 5:00 am tomorrow.'],
  ]
},

/* ───────────── (노트) 2·3·4형식 ───────────── */
{
  id: 'v234', no: 0, color: 'purple', glyph: '2·3·4',
  title: '2·3·4형식 동사', sub: 'be·look / 목적어 / 사람목적어 + 사물목적어', pages: '노트 10/12~11월',
  html: `
  <section class="card">
    <h3>2형식 = S + V + 주격보어</h3>
    <div class="formula"><b class="c s">S</b><b class="c v">V</b><b class="c c2">주격보어</b><i>명사 · 형용사 / 전치사구</i></div>
    <p class="note">주격보어 = 주어와 같다(=). 보충하는 / 설명하는 말</p>
    <div class="two">
      <div><h4>2형식</h4><p class="ex">I am a teacher. <span class="mute">I = teacher</span></p></div>
      <div><h4>3형식</h4><p class="ex">I love you. <span class="mute">I ≠ you</span></p></div>
    </div>
    <div class="tree">
      <div class="node">주격보어</div>
      <ul><li>상태 형용사 — dirty, tired, worried, sad</li><li>명사 — 주어의 정보 (I am Haneul. I am a teacher.)</li></ul>
    </div>
  </section>
  <section class="card">
    <h3>대표적인 2형식 동사 ① be</h3>
    <p class="ex">I am <u>a student</u>. <span class="mute">명사</span></p>
    <p class="ex">I am <u>smart</u>. <span class="mute">형용사</span></p>
    <p class="ex">I am <u>in the class</u>. <span class="mute">전치사구 — 수업 중에 있다</span></p>
    <p class="mute">반 안에 있다 → (in the) classroom</p>
    <p class="ex">I am in the cafe <u>near the house</u>. <span class="mute">near the house = 형용사(카페 수식)</span></p>
  </section>
  <section class="card">
    <h3>대표적인 2형식 동사 ② look</h3>
    <p class="note">look : ~처럼 보인다 / ~하게 보이다 → 상태를 표현할 수 있다</p>
    <p class="ex">You look <u>tired / smart / beautiful</u>. <span class="mute">형용사</span></p>
    <div class="fixes"><div><s>You look beautifully.</s><b>You look beautiful. (보여지는 '상태'라 형용사)</b></div></div>
    <p class="ex">You look <b>like</b> your mom / a professor. <span class="mute">like = 전치사 + 명사</span></p>
    <p class="ex">You look <u>in trouble</u>. <span class="mute">전치사구 — 문제에 빠진 / 걱정 있어 보인다 (상태, 형용사 느낌)</span></p>
    <p class="ex">This building looks too old. / These clothes look very dirty.</p>
    <p class="mute">2형식 동사: am · look · feel</p>
  </section>
  <section class="card">
    <h3>new로 보는 2형식</h3>
    <div class="rows">
      <div><b>I am new.</b><span>내가 새로워 (신입)</span></div>
      <div><b>I am new here.</b><span>여기가 처음이에요</span></div>
      <div><b>This company is new to me.</b><span>(feel) 이 회사가 나에게 새롭다</span></div>
      <div><b>I am new in this region.</b><span>이 지역이 처음이에요</span></div>
    </div>
  </section>
  <section class="card">
    <h3>3형식 = S + V + O (~을/를)</h3>
    <div class="formula"><b class="c s">S</b><b class="c v">V</b><b class="c o">O</b><i>명사</i></div>
    <p class="words">visit · provide · marry · answer · eat · leave · use · drink · buy · wear · meet · clean</p>
    <p class="ex">I drink <u>this coffee</u> every day.</p>
    <p class="ex">Nowadays, the living room looked so dirty, so I cleaned <u>the living room</u>.</p>
    <p class="ex">I will take <u>a flight</u> / for Sydney. <span class="mute">for Sydney = 시드니로 향하는</span></p>
  </section>
  <section class="card">
    <h3>4형식 = S + V + 사람목적어 + 사물목적어</h3>
    <div class="formula"><b class="c s">S</b><b class="c v">V</b><b class="c o">사람·목</b><b class="c o">사물·목</b></div>
    <p class="note">사람이 꼭 언급되어야 나온다</p>
    <p class="words">give · send · tell · show · teach · buy · make · bring · offer</p>
    <p class="ex">I will give <u>her</u> <u>this present</u> / on her birthday.</p>
    <p class="ex">I will show you the brochure / my room.</p>
    <p class="ex">I will tell you the story / my secret / the news.</p>
    <p class="ex">My parents gave me some cash on my birthday.</p>
    <div class="rows"><div><b>send vs give</b><span>보내는 느낌 / 주는 느낌</span></div></div>
  </section>
  <section class="card">
    <h3>4형식 → 3형식 바꾸기</h3>
    <p class="ex">I will give her this present. (4) <span class="mute">외국인들은 보통 4형식으로 함</span></p>
    <p class="ex">I will give <u>this present</u> <b>to</b> her. (3)</p>
    <p class="note">사물 목적어가 먼저 오면 뒤에 전치사!</p>
  </section>
  <section class="card">
    <h3>say / talk · speak / tell (노트)</h3>
    <div class="rows">
      <div><b>say (3V)</b><span>사물을 목적어로, 사람은 전치사로</span></div>
      <div><b>talk / speak (1V)</b><span>talk = 이야기 개념 / speak = 발성, 발음, 영어를 말하다</span></div>
      <div><b>tell (4V)</b><span>tell 사람 + 내용</span></div>
    </div>
    <p class="ex">I will talk to you about the news.</p>
    <p class="ex">I didn't say <u>to you</u> <b>that</b> I didn't like coffee.</p>
    <p class="mute">to you = 전치사구 / that = 긴 목적어(목적어절) 만들 때 나옴</p>
    <div class="fixes"><div><s>My son tell me the new friends last night</s><b>My son talked to me about new friends last night.</b></div></div>
  </section>
  <section class="card">
    <h3>until vs by (노트)</h3>
    <div class="rows">
      <div><b>until</b><span>계속 진행되는 느낌 — You can use this free coupon until next Thursday.</span></div>
      <div><b>by</b><span>완료 — I will send you the money by this week.</span></div>
    </div>
  </section>`,
  drills: [
    ['테이블 위에 있는 저 핸드폰은 저의 것이 아니에요.', 'The phone on the table is not mine.', '2형식 · mine = 소유대명사'],
    ['이 옷은 너무 더러워 보이는데요.', 'These clothes look very dirty.', 'clothes는 복수 → These / look'],
    ['나는 매일 이 커피를 마신다.', 'I drink this coffee every day.'],
    ['나는 친구들과 함께 어제 병원에 갔다.', 'I went to the hospital with my friends yesterday.', '관련 있는 사람은 소유격(my) / 장소·시간 뒤에 붙이기'],
    ['엄마는 어제 마트에서 수박을 샀다.', 'My mom bought a watermelon at the market yesterday.'],
    ['나는 이 셔츠를 3일 동안 입었다.', 'I wore this shirt for 3 days.'],
    ['우리는 이 호텔에 이틀 동안 머물 것이다.', 'We will stay in this hotel for 2 days.', 'stay는 1형식 → in/at 필요'],
    ['다음주에 우리는 동물원에 갈 것이다.', 'Next week, we will go to the zoo.'],
    ['지난주에 나는 친구를 만났다.', 'Last week, I met my friend.'],
    ['저는 지금 집 근처에 있는 카페에 있습니다.', 'I am in the cafe near the house.', '2형식 · near the house가 카페 수식'],
    ['저는 아침 10시에 엄마와 함께 카페에서 아침을 먹을 것입니다.', 'I will have breakfast at the cafe with my mom at 10:00 am.', '삼시세끼는 have (eat도 가능)'],
    ['나의 회사 동료가 저희 집을 오늘 방문할 것입니다.', 'My coworker will visit my home today.', 'visit은 3형식 → 전치사 X'],
    ['당신은 이 무료 쿠폰을 다음주 목요일까지 사용할 수 있습니다.', 'You can use this free coupon until next Thursday.'],
    ['저는 병원을 나와서 약국으로 갔습니다.', 'I left the hospital and I went to a pharmacy.'],
    ['나의 부모님은 생일에 나에게 돈을 주셨다.', 'My parents gave me some cash on my birthday.'],
    ['제가 지금 바빠서 좀 이따 답장할게요.', "I'm busy now. I will reply to you soon."],
    ['이 건물은 너무 오래되어 보여요.', 'This building looks too old.'],
    ['우리 아들은 어제 저녁에 새로운 친구들에 대해서 나에게 말했다.', 'My son talked to me about new friends last night.'],
    ['이번 주까지 당신에게 돈을 보낼게요.', 'I will send you the money by this week.', 'until (X) → by (완료)'],
    ['저는 테이블 위에 있는 저 케이크를 먹을게요.', 'I will eat the cake on the table.'],
    ['오늘 우리는 호텔 옆에 있는 박물관에 갈 거예요.', 'Today we will go to the museum next to the hotel.'],
    ['그는 나에게 거짓말을 했지만, 나는 그의 상황을 이해했다.', 'He lied to me, but I understood his situation.'],
  ]
},

/* ───────────── (노트) 4형식 ↔ 3형식 ───────────── */
{
  id: 'v43', no: 0, color: 'pink', glyph: '4↔3',
  title: '4형식 ↔ 3형식 바꾸기', sub: 'give · make · buy · offer · provide · pay · charge · ask', pages: '노트 12/15·12/28',
  html: `
  <section class="card">
    <h3>기본 공식</h3>
    <div class="rows">
      <div><b>(4) V + 사람 + 사물</b><span>I will give her this present.</span></div>
      <div><b>(3) V + 사물 + 전치사 + 사람</b><span>I will give this present to her.</span></div>
    </div>
    <p class="note">전치사구는 문장의 중요한 구성요소 X → 생략 가능</p>
    <p class="ex">I teach English (to students). <span class="mute">to students 없어도 문장이 됨</span></p>
  </section>
  <section class="card">
    <h3>to를 쓰는 동사 vs for를 쓰는 동사</h3>
    <div class="two">
      <div><h4>to (주는 느낌)</h4>
        <p class="ex">give · send · teach · show · offer · tell</p>
        <p class="ex">I will offer free drinks <b>to</b> you.</p>
        <p class="ex">I teach English <b>to</b> students.</p>
        <p class="ex">Send the document <b>to</b> me.</p></div>
      <div><h4>for (해 주는 느낌)</h4>
        <p class="ex">make · buy · cook</p>
        <p class="ex">I will make coffee <b>for</b> you.</p>
        <p class="ex">I will buy a cup <b>for</b> you.</p>
        <p class="ex">I made a tomato pasta <b>for</b> my friend.</p></div>
    </div>
    <p class="ex">Can you bring me the book? <span class="mute">bring (4) 가지고 오다</span></p>
  </section>
  <section class="card">
    <h3>목적어가 대명사면 3형식!</h3>
    <p class="ex">give 사람 사물 (4) / give 사물 to 사람 (3)</p>
    <p class="ex">..., but I heard that she gave <b>it</b> to another friend.</p>
    <p class="note">목적어를 대명사(it, them)로 받아야 할 때는 3형식으로 씀!</p>
    <div class="fixes"><div><s>she gave another friend it</s><b>she gave it to another friend</b></div></div>
  </section>
  <section class="card">
    <h3>offer (4) vs provide (3)</h3>
    <p class="ex">I will offer you free drinks today. (4) <span class="mute">offer ≈ give</span></p>
    <p class="ex">I will offer free drinks to you. (3)</p>
    <p class="note">provide는 3형식 — 목적어 1개, 나머지는 전치사구로 받기</p>
    <div class="rows">
      <div><b>provide A with B</b><span>A(사람)에게 B(사물)를 — 선호!! I will provide you with free drinks.</span></div>
      <div><b>provide B to A</b><span>I will provide free drinks to you.</span></div>
    </div>
    <p class="ex">A staff of the restaurant provided me <b>with</b> some side dishes and water, and she <b>served</b> me the main dish. <span class="mute">serve (4)</span></p>
  </section>
  <section class="card">
    <h3>pay (지불하다) · charge (부과하다)</h3>
    <div class="rows">
      <div><b>(4)</b><span>You have to pay me $30.</span></div>
      <div><b>(3)</b><span>You have to pay $30 to me.</span></div>
      <div><b>(1)</b><span>You have to pay for the entrance fee. — 사람·사물 목적어가 다 빠지면 1V</span></div>
    </div>
    <p class="note">for: 어떤 것에 대해 지불해야 되는지 알려주기 위해 붙임</p>
    <p class="ex">You have to pay me $30 <b>for</b> the ticket.</p>
    <p class="ex">I think that you didn't pay <b>for</b> this product. <span class="mute">(1V) 아직 계산 안 하신 것 같아요</span></p>
    <p class="mute">Do I have to pay? / I have to pay. → 손님 입장에서 pay</p>
    <p class="ex">He charged me $30 for the entrance fee. (4) <span class="mute">~에게 ~금액을 부과시키다 (가게 입장)</span></p>
  </section>
  <section class="card">
    <h3>ask 사람 + 사물</h3>
    <p class="ex">Can I ask <u>you</u> <u>some questions</u>? <span class="mute">사람 · 질문(사물목적어)</span></p>
    <p class="mute">ask는 1·3·4·5형식 다 가능</p>
  </section>
  <section class="card">
    <h3>say (3) · tell (4→3) · talk (1) · speak (1, 3)</h3>
    <p class="ex">I said <u>to you</u> <u>that S + V</u>. <span class="mute">to you = 전치사구(없어도 됨) / that절 = 목적어절</span></p>
    <p class="ex">I talked to him about promotion. <span class="mute">promotion = 승진 (홍보라는 뜻도)</span></p>
    <p class="mute">speak (3) → 외국어를 말할 때 (speak English)</p>
    <p class="ex">My mom told me that I don't have to go there. <span class="mute">tell (4) · 갈 필요가 없다</span></p>
  </section>
  <section class="card">
    <h3>셀 수 있는 / 없는 (노트)</h3>
    <div class="rows">
      <div><b>음식</b><span>원칙적으로 셀 수 없다 → a 빼기 (my friend made me delicious spaghetti)</span></div>
      <div><b>돈</b><span>money, cash는 셀 수 없고, 그 외 화폐(dollar, coin)는 셀 수 있다</span></div>
      <div><b>a → the</b><span>서로 존재를 아는 것(그 서류)은 the — 내가 인지하는 걸 우선해서 the라고 하자</span></div>
    </div>
  </section>`,
  drills: [
    ['나는 그 당시에 남편을 아주 사랑했기 때문에, 그와 작년에 결혼했다.', 'Because I loved my husband at that time, I married him last year.', 'love · marry 3V (marry with X)'],
    ['친구는 나에게 이번달에 보너스를 받을 것이라고 이야기했다.', 'My friend told me that I have a bonus this month.', 'tell 4V · the bonus (X) → a bonus'],
    ['남편은 갑자기 나에게 하나의 검은 상자를 가져왔다.', 'Suddenly my husband brought me a black box.', 'bring 4V'],
    ['내가 친구의 집을 방문했을 때 친구는 나에게 맛있는 스파게티를 만들어주었다.', "When I visited my friend's house, my friend made me delicious spaghetti.", 'make 4V · visit 3V · 음식은 a 빼기'],
    ['친구는 아침 일찍 내 집을 떠나서 공항에 도착했다.', 'My friend left my house early in the morning and she arrived at the airport.', 'early(구체) → in the morning(넓은 시간) 순서'],
    ['제 시간에 카페에 도착했고, 친구들을 거기에서 만났다.', 'I arrived at the cafe on time and I met my friends there.', 'on time = 관용 전치사구 / in there (X) → there는 부사'],
    ['저는 당신께 방금 이메일을 보냈습니다. 확인하신 이후에 답해주세요.', 'I sent you an email just now. After you check it, please reply to it.', 'send 4V · reply 1V → reply to / check it out (대명사는 가운데)'],
    ['나는 남편에게 다음주에 시부모님댁에 방문해야 한다고 말했다.', "I told my husband that we have to visit my parents-in-law's house next week."],
    ['이 카페에서는 오늘만 손님들에게 무료 음료를 제공한대요.', 'This cafe offers customers a free drink only today.', '카페는 단수 → offers / by today (X) → only today'],
    ['30분 안에 이메일로 이 서류를 저에게 보내주셔야 합니다.', 'You have to send me the document by email in 30 minutes.', 'in = 30분쯤(약간 넘어도) / within = 확실히 30분 이내 · by, through 둘 다 OK'],
    ['지난번에 나는 친구에게 토마토 파스타를 만들어 주었다.', 'Last time I made my friend a tomato pasta.', '3형식: made a tomato pasta for my friend'],
    ['작년 조카에게 생일에 핑크색 드레스를 사줬지만 나중에 다른 친구에게 주었다고 들었다.', 'Last year I bought my niece a pink dress on her birthday, but I heard that she gave it to another friend later.', 'nephew(남) / niece(여) / cousin(사촌) · 대명사 it → 3형식'],
    ['늦은 저녁 공원에 도착해서 혼자 거의 두 시간 동안 운동을 했다.', 'I arrived at the park late at night and I exercised alone for almost 2 hours.', 'alone · almost 부사 / for 2 hours 전치사구'],
    ['아침에 아빠는 너무 피곤하고 졸려 보였다.', 'My father looked so tired and sleepy in the morning.', '2형식 look + 형용사'],
    ['그 손님이 갑자기 직원에게 많은 질문을 해서 직원은 당황한 것처럼 보였다.', 'Suddenly the customer asked the employee many questions and he looked embarrassed.', 'too much (X) → many questions'],
    ['나는 너의 생일에 너무 많은 장난감을 사줄 수 없어.', "I can't buy you a lot of toys on your birthday."],
    ['당신은 아직 이 물건을 계산을 안 하신 것 같아요.', "I think that you didn't pay for this product.", 'pay 사람(me) + 돈 + for 사물'],
    ['5세 이하에 대해서는 돈을 안 내셔도 되세요.', "You don't have to pay for a five-year-old child.", "don't have to = ~하지 않아도 된다 / five-year-old (나이가 명사 앞에선 단수+하이픈)"],
    ['저 직원이 당신에게 그 방법을 가르쳐줄 거예요.', 'The staff will teach you the way.'],
    ['당신은 호텔 프런트 직원에게 여권을 보여주셔야 합니다.', 'You have to show the hotel front desk employee your passport.', 'front desk / your passport'],
    ['저 직원이 추가 포크를 저에게 가져다 주셨어요.', 'The staff brought me an additional fork.', 'the (X) → an'],
    ['당신이 50불 이상 시키시면 무료음료를 제공합니다.', 'If you order something more than $50, we offer you a free drink.'],
    ['집들이로 저는 손님들에게 여러가지 한국음식을 만들어 주었어요.', 'I made my guests various Korean food for housewarming.'],
    ['만약 당신이 질문이 있다면 저에게 물어볼 수 있어요.', 'If you have a question, you can ask me the question.'],
  ]
},

/* ───────────── (노트) 부사절 접속사 ───────────── */
{
  id: 'advcl', no: 0, color: 'blue', glyph: 'if',
  title: '부사절 접속사', sub: '주절 + 종속절 · 접속사 ↔ 전치사 · 시제', pages: '노트 12월~',
  html: `
  <section class="card">
    <h3>주절과 종속절</h3>
    <div class="formula"><b class="c s">S + V</b><i>+</i><b class="c o">접속사 S + V</b></div>
    <div class="rows">
      <div><b>주절</b><span>결과 · 메인 문장</span></div>
      <div><b>종속절</b><span>배경 — 주절에 대한 배경 (부사절 = 보장)</span></div>
    </div>
    <p class="ex">I went to the hospital <u>because I was sick</u>. <span class="mute">주절 1형식 + 부사절 2형식</span></p>
    <p class="ex"><u>Because I was sick</u><b>,</b> I went to the hospital.</p>
    <p class="note">종속절이 앞에 오면 콤마를 붙인다</p>
  </section>
  <section class="card">
    <h3>종속절 3종류</h3>
    <div class="tree">
      <div class="node">종속절</div>
      <ul>
        <li><b>부사절</b> — 주절의 앞뒤에. 접속사 뜻 O (생략 X)</li>
        <li><b>형용사절</b> — 명사를 수식. 접속사 뜻 X (생략 가능)<br><span class="mute">The coffee (that) I like is latte.</span></li>
        <li><b>명사절</b> — 주어 · 목적어 · 보어 역할. 접속사 뜻 O<br><span class="mute">What I like is ham. → 명사절이 주어 자리에</span></li>
      </ul>
    </div>
  </section>
  <section class="card">
    <h3>부사절 접속사 ↔ 전치사</h3>
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th></th><th>부사절 접속사 (+ S V)</th><th>전치사 (+ 명사)</th></tr></thead>
      <tbody>
        <tr><th>시간</th><td>when = as, <b>before</b>, <b>after</b>, while, <b>since</b>, <b>until</b>, as soon as(~하자마자)</td><td>before · after · since · until · by</td></tr>
        <tr><th>조건</th><td>if, unless(= if not), in case (that), as long as(~하는 한), once(일단 ~하면)</td><td></td></tr>
        <tr><th>이유</th><td>because, as, since</td><td>because of</td></tr>
        <tr><th>양보</th><td>even though, although (~임에도 불구하고) · even if (~할지라도, 혹시 미래적)</td><td>despite, in spite of</td></tr>
        <tr><th>대조</th><td>while (~인 반면에)</td><td></td></tr>
      </tbody></table></div>
    <p class="mute">굵은 글씨 = 접속사이면서 전치사</p>
    <p class="note">before: 뒤에 명사가 나오면 전치사, 주어 + 동사가 나오면 부사절 접속사</p>
    <p class="ex">before boarding (전치사) / before I left my house (접속사)</p>
    <div class="fixes"><div><s>Despite I have to concentrate</s><b>Even though I have to concentrate (despite는 전치사)</b></div></div>
  </section>
  <section class="card">
    <h3>until vs by (전치사일 때)</h3>
    <div class="rows">
      <div><b>until</b><span>~계속해서 그때까지 — I did housework until late at night.</span></div>
      <div><b>by</b><span>~까지 완료하는 느낌을 강조</span></div>
    </div>
  </section>
  <section class="card">
    <h3>시제: 부사절은 현재로!</h3>
    <p class="note">부사절 & 주절이 미래인 경우 → 미래시제는 주절에만 표시한다 (will, can, may, 명령문 please 등). 부사절은 현재시제로 표시한다.</p>
    <p class="ex">If you <b>arrive</b> at home late, <b>please</b> call me.</p>
    <p class="ex">Once you <b>apply</b> for this activity, we <b>will</b> send you the message within today.</p>
    <p class="note">규칙사항 → 현재시제 (어제도 오늘도 내일도 사실이니까)</p>
    <p class="ex">As long as you use the coupon, additional discount is impossible.</p>
    <p class="note">과거진행: ~하는 동안 → 과거 진행형으로</p>
    <p class="ex">While I <b>was washing</b> the dishes, my husband wiped the window.</p>
  </section>
  <section class="card">
    <h3>타다: take vs get on vs get in</h3>
    <div class="rows">
      <div><b>take</b><span>타고 갈래 (택시 타야겠다) — 이동 수단 선택</span></div>
      <div><b>get in / get out</b><span>소형차 — 구멍으로 들어가는 느낌</span></div>
      <div><b>get on / get off</b><span>버스 · 지하철 · 비행기 · 배 — 올라 탄 느낌 (육체적인 움직임)</span></div>
    </div>
    <p class="ex">After we had lunch, we got on the bus.</p>
  </section>
  <section class="card">
    <h3>부사절 축약 (생략) 조건 (노트)</h3>
    <p class="ex">S + V (before S + V) <span class="mute">주절 + 부사절(생략 가능)</span></p>
    <ol class="num">
      <li>주절 주어와 부사절 주어가 같을 때</li>
      <li>주절 동사와 부사절 동사(시제)가 같을 때</li>
    </ol>
    <p class="note">두 가지 한번에 충족할 때 → 부사절의 주어 생략 → 부사절의 동사에 ing</p>
    <p class="ex">Do I have to show you this coupon before having breakfast? <span class="mute">= before I have breakfast</span></p>
  </section>
  <section class="card">
    <h3>부사절 시제 정리 (2/8)</h3>
    <div class="rows">
      <div><b>주절 미래</b><span>부사절은 현재시제</span></div>
      <div><b>과거</b><span>과거는 과거로 그대로 쓰기</span></div>
    </div>
    <p class="ex">I will finish this homework in the coffee shop before I <b>go</b> home.</p>
    <p class="ex">He was cleaning the toilet when I arrived at home.</p>
  </section>
  <section class="card">
    <h3>시제 표 (과거진행 ~ing)</h3>
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th></th><th>단순시제</th><th>진행시제 (be + ing)</th></tr></thead>
      <tbody>
        <tr><th>현재</th><td>wash / washes</td><td>am · are · is washing</td></tr>
        <tr><th>과거</th><td>washed</td><td>was · were washing</td></tr>
        <tr><th>미래</th><td>will wash</td><td>will be washing</td></tr>
      </tbody></table></div>
  </section>`,
  drills: [
    ['오늘 특히 카페에 사람이 많네요.', 'Especially today, there are so many people in the cafe.', 'especially 특히·유난히 / specially 특별히'],
    ['그 식당에 사람들이 너무 많았기 때문에 우리는 다른 식당으로 이동했습니다.', 'Because there were so many people in the restaurant, we went to another restaurant.', '과거 → there were'],
    ['우리는 고속도로 한 중간에 있었기 때문에 화장실을 발견할 수 없었다.', "Because we were in the middle of the expressway, we couldn't find the toilet.", 'in the middle of: 공간·시간 다 가능'],
    ['아침에 일찍 집에서 출발해서 저녁 늦게 시댁에 도착했다.', "We departed from the house early in the morning and we arrived at my parents-in-law's house late at night.", 'and로 연결'],
    ['어제 커피를 너무 많이 마셔서 지난밤에 잠을 잘 못 잤어요.', "Yesterday I drank a lot of coffee, so I couldn't sleep well last night.", 'Last day (X) / drunk (X) → drank / can\'t → couldn\'t'],
    ['내가 집에 도착했을 때 엄마는 설거지를 하고 있었다.', 'When I arrived home, my mom was washing the dishes.', 'when 부사절 접속사 → and 빼기 / 과거진행 / at home (O)'],
    ['카페의 2층에 몇몇의 사람들만 있었다.', 'There were some people on the 2nd floor of the cafe.', 'of = 속하는 개념'],
    ['5월 초에 우리는 제주도로 여행을 갈 거야.', 'We will travel to Jeju Island at the beginning of May.', 'go to travel (X) / at the beginning of ~ (초에)'],
    ['내가 한국으로 떠나기 전에 면세점에서 가족들 선물을 샀다.', 'Before I departed for Korea, I bought my family presents in the duty free shop.', 'depart for + 목적지 (노트: to Korea)'],
    ['발권이 시작되었지만 아직 3명이 도착하지 않았다.', "Ticketing started, but three people haven't arrived yet.", 'person → people / yet 부사'],
    ['우리는 그 공연장소를 30분동안 찾았지만 결국 공연에 참석하지 못했다.', "We looked for the performance venue for 30 minutes, but finally we couldn't attend the show.", 'found (X) → looked for / attend 3V (attend to X)'],
    ['제가 이 시간에 일을 해야하기 때문에 지금 나대신 남편이 아기를 돌보고 있어요.', 'Because I have to work at this time, my husband is looking after the baby instead of me now.'],
    ['수업에 집중해야함에도 불구하고 오늘은 너무 피곤하네요.', 'Even though I have to concentrate on the class, I am so tired today.', 'Despite (X) — 뒤에 S+V면 even though'],
    ['이 식당은 일본 라면을 전문으로 하기 때문에 제 생각에 다른 음식들은 맛이 없을 것 같아요.', 'Because this restaurant specializes in Japanese noodles, I think that other food is not tasty.', 'have no taste (X) → is not tasty'],
    ['일단 이 활동을 신청하시면 오늘 안으로 저희가 당신에게 문자를 보내드릴 것입니다.', 'Once you apply for this activity, we will send you the message within today.', 'once = 일단 ~하면 · 부사절은 현재'],
    ['비행기를 기다리는 동안 그는 회사일을 처리했다.', 'While he was waiting for the airplane, he dealt with his work.', 'office business (X) → his work'],
    ['나는 아주 피곤했음에도 불구하고 집안일을 밤 늦게까지 했다.', 'Even though I was so tired, I did housework until late at night.', "I'm (X) → I was (시제 확인)"],
    ['만약 당신이 집에 늦게 도착하게 되면 나에게 전화를 주세요.', 'If you arrive at home late, please call me.', '미래지만 부사절은 현재 / 명령문은 주절'],
    ['점심을 다 먹자마자 우리는 버스를 탔다.', 'After we had lunch, we got on the bus.', 'have → had / 버스는 get on (as soon as도 가능)'],
    ['당신이 쿠폰을 사용하는 한 추가적인 할인은 불가능합니다.', 'As long as you use the coupon, additional discount is impossible.', 'is not impossible (X) / 규칙 → 현재시제'],
    ['내가 설거지를 하는 동안 남편은 창문을 닦았다.', 'While I was washing the dishes, my husband wiped the window.', 'I washing (X) → I was washing'],
    ['일단 당신이 다이어트 중이라면, 당신은 야채를 많이 먹어야 합니다.', 'Once you are on a diet, you have to eat vegetables a lot.'],
    ['한국 사람들이 매운 음식을 좋아하는 반면, 일본인들은 매운 음식을 좋아하지 않습니다.', "While Korean people like spicy food, Japanese people don't like spicy food.", 'while = ~인 반면에 (대조)'],
    ['만약 당신이 영수증을 가져오지 않아도, 당신의 구매내역을 저희 쇼핑몰 홈페이지에서 확인할 수 있어요.', "If you don't bring me the receipt, I can check your purchase history on the website.", 'bring 4형식 · purchase history = 목적어'],
    ['내가 집에 도착했을 때 그는 화장실을 청소하고 있었다.', 'He was cleaning the toilet when I arrived at home.'],
    ['그가 TV를 보는 동안 나는 숙제를 할 것이다.', 'I will do homework while he watches TV.', '주절 미래 → 부사절 현재'],
    ['내가 집에 가기 전에 커피숍에서 이 숙제를 끝낼 것이다.', 'I will finish this homework in the coffee shop before I go home.'],
    ['내가 집에 도착한 후에 저녁을 위해 요리를 해야한다.', 'I have to cook for dinner after I arrive at home.'],
    ['그가 나아질 때까지 나는 아들과 함께 집에 머물 것이다.', 'I will stay at home with my son until he gets better.', '3인칭 단수 → gets'],
    ['만약 질문이 있다면 언제든지 나에게 물어볼 수 있다.', 'If you have a question, you can ask me any time.'],
    ['어떤 질문도 없다면 다음 단계로 넘어가겠다.', 'Unless you have any question, I will move to the next step.', 'unless = if not'],
    ['어떤 공부를 하던 간에, 너는 약간의 스트레스를 가질 것이다.', 'As long as you study something, you will have some stress.'],
    ['일단 숙제를 끝내면 그것을 나에게 보내야 한다.', 'Once you finish your homework, you have to send it to me.', '대명사 it → 3형식'],
    ['혹시 네가 시험에서 좋은 성적을 못 받더라도 나는 너한테 화내지 않을 거야.', "Even if you can't have a good score in the test, I won't feel angry at you.", 'feel 2V + 형용사 · angry at'],
    ['비행기에서 머리가 아플 경우를 대비해서 이 알약을 챙겨라.', 'In case that you have a headache in the airplane, please take this tablet.'],
    ['지난 밤 늦게 자서 일찍 일어날 수 없었다.', "I couldn't wake up early because I slept late last night.", 'because / since / as'],
    ['고속도로에 교통체증이 있었음에도 불구하고, 우리는 거기에 제시간에 도착했다.', 'Even though there was a traffic jam on the highway, we arrived there on time.', 'traffic jam은 하나로 외워!'],
    ['그가 한국음식을 좋아하는 반면에, 나는 이탈리아 음식을 좋아한다.', 'While he likes Korean food, I like Italian food.'],
  ]
},

/* ───────────── (노트) 5형식 심화 · 감정분사 ───────────── */
{
  id: 'oc2', no: 0, color: 'red', glyph: '-ed/-ing',
  title: '5형식 노트 · 감정분사', sub: '다단계 동사 · 사역/지각 · confusing vs confused', pages: '노트 1~2월',
  html: `
  <section class="card">
    <h3>S + V + O + O.C (목적격보어)</h3>
    <div class="tree">
      <div class="node">목적격보어</div>
      <ul>
        <li>① 형용사 / 전치사구</li>
        <li>② 명사</li>
        <li>③ to부정사 (다단계 동사)</li>
        <li>④ 동사원형 (사역동사)</li>
        <li>⑤ 분사 — 현재분사 / 과거분사</li>
      </ul>
    </div>
    <p class="note">동사에 따라 받는 품사가 다르다 → 5형식은 자연스럽게 동사가 나와야 함</p>
  </section>
  <section class="card">
    <h3>① 형용사: make · keep · find · consider</h3>
    <p class="mute">외우기: "make KFC"</p>
    <p class="ex">I will make this room <u>clean</u>. <span class="mute">이 방을 깨끗한 상태로 (목보)</span></p>
    <p class="ex">I will make a clean room. <span class="mute">clean = 명사 수식하는 형용사 (3형식)</span></p>
    <div class="rows">
      <div><b>keep (2·3·5)</b><span>You should keep your room clean. (5) 유지하다<br>It keeps clean. (2) 유지되다 — 주어의 상태<br>I will keep studying. (3) 계속 ~하다</span></div>
      <div><b>find</b><span>발견하다 / 알게되다 — I found my mom so old.</span></div>
      <div><b>consider (3·5)</b><span>고려하다, 깊게 생각하다(3) / 여기다(5) — I consider the friend very kind.</span></div>
    </div>
  </section>
  <section class="card">
    <h3>② 명사: make · consider · call · appoint(임명하다)</h3>
    <p class="ex">I will make him a doctor.</p>
    <p class="ex">I consider this doll my friend.</p>
    <p class="ex">You can call me Helen.</p>
    <p class="ex">People appointed him the president of the country.</p>
    <p class="note">We appointed him our/the president — 4형식이 아니고 5형식! 헷갈리지 말자</p>
  </section>
  <section class="card">
    <h3>③ to부정사: 다단계 동사</h3>
    <div class="rows">
      <div><b>① 바라다</b><span>want(= would like, 격식) · hope · expect(기대하다) · need · wish</span></div>
      <div><b>② 요청하다</b><span>ask(일상, 두 상황 모두 가능) · require · request(격식체: 이메일, 공지사항, 발표 / 일반대화·실생활 X)</span></div>
      <div><b>③ 명령하다</b><span>order · push (3·5) — order 주문(3)/명령(5), push 밀다(3)/강요하다·시키다(5)</span></div>
      <div><b>④ 말하다·권하다</b><span>recommend(자세하게 추천) · suggest(제안) · tell(상대방이 하라고 말하다, 3·4·5) · encourage(격려하다) · persuade(설득하다)</span></div>
      <div><b>⑤ 허락하다</b><span>allow · permit(격식체)</span></div>
    </div>
    <p class="ex">I want you to send <b>me</b> the email soon. = I want you to send the email (to me) soon. <span class="mute">전치사구는 중요하지 않아서 생략 가능</span></p>
    <p class="ex">I asked you to bring me some towels in the morning. <span class="mute">asked [애스트] — k 발음 묵음처럼</span></p>
    <p class="ex">My boss told me to send her the plan by email. <span class="mute">수단을 나타낼 땐 by (a/the 없이)</span></p>
    <p class="ex">I recommended her to visit the cafe.</p>
    <p class="ex">I encourage my students to do homework hard.</p>
    <p class="ex">I persuaded my mom to go to the hospital.</p>
    <p class="ex">I didn't allow her to work out hard. <span class="mute">work out = do exercise = exercise(1V)</span></p>
    <p class="ex">I asked her <b>not</b> to go to the hospital. <span class="mute">to부정사 부정 = not to</span></p>
    <div class="rows"><div><b>강약 차이</b><span>I hope · wish &lt; I want · need — 비즈니스에서 want/need는 무례한 느낌 → would like</span></div></div>
    <p class="ex">I want to drink coffee. <span class="mute">to부정사가 바로 목적어가 될 수 있다 (3형식)</span></p>
  </section>
  <section class="card">
    <h3>help + O + (to) 동사원형</h3>
    <p class="ex">I helped her send the email. <span class="mute">to 생략 (to 써도 OK)</span></p>
  </section>
  <section class="card">
    <h3>④ 사역동사: make · let · have</h3>
    <p class="note">사역동사(목적어를 시키는 동사)는 목적격보어에 동사원형과 과거분사 中 1을 받는다</p>
    <div class="rows">
      <div><b>능동 관계 → 동사원형</b><span>I made my husband look after the children. (= take care of)<br>My boss made me look into the information in detail. (자세히, 부사)</span></div>
      <div><b>수동 관계 → 과거분사</b><span>I made my car repaired. (차가 고쳐지는)</span></div>
    </div>
    <p class="mute">let - let - let (과거 · 현재 · 미래 형태 같음) / have p.p는 비즈니스에서 자주 (시제와는 다른 의미)</p>
  </section>
  <section class="card">
    <h3>지각동사: hear · listen to · see · watch · feel</h3>
    <p class="mute">see = 눈이 있어서 보는 것 / watch = 의도를 가지고 봄 / listen to = 의도를 가지고 들음</p>
    <div class="rows">
      <div><b>능동 → 동사원형 / 현재분사</b><span>I heard the baby cry. → crying (생생함을 나타냄)<br>I saw my friend enter the cafe. → entering</span></div>
      <div><b>수동 → 과거분사</b><span>I heard / saw the cup broken.</span></div>
    </div>
  </section>
  <section class="card">
    <h3>재귀대명사</h3>
    <p class="ex">I love myself. (O) / I love me. (X)</p>
    <p class="note">주어가 반복되는 자리(목적어)에만 들어갑니다!! 주어엔 거의 X</p>
    <p class="ex">alone = by himself = by herself <span class="mute">혼자서</span></p>
  </section>
  <section class="card">
    <h3>준동사 = 동사 → to부정사 · 동명사 · 분사</h3>
    <div class="tree">
      <div class="node">준동사</div>
      <ul>
        <li>① to부정사 — 명사(주어·목적어·보어) / 형용사(명사수식 ~할, 보어) / 부사(목적·결과·감정원인)</li>
        <li>② 동명사 — 명사 자리에 있다</li>
        <li>③ 분사 — 형용사: 현재분사(~ing, 하고 있는 · 능동·진행) / 과거분사(p.p, ~된 · 수동·완료)</li>
      </ul>
    </div>
    <p class="note">동사 + ing → 명사 자리면 동명사 / 문장이 끝나고 뒤에 붙으면 현재분사. be동사와 결합 X → 분사</p>
    <p class="ex">I have no money <u>to spend</u>. <span class="mute">형용사 역할 to부정사</span></p>
  </section>
  <section class="card">
    <h3>감정분사 → 형용사</h3>
    <div class="rows">
      <div><b>현재분사 (-ing)</b><span>감정의 원인 — This movie is interesting. (2형식, 현재진행 아님!)</span></div>
      <div><b>과거분사 (-ed)</b><span>감정을 직접적으로 느끼는 — I am interested in the movie.</span></div>
    </div>
    <p class="ex">This movie is interesting <b>to me</b>. <span class="mute">비교대상이 있을 때: 나한텐 재밌는데</span></p>
    <p class="ex">This movie is interesting <b>for me</b>. <span class="mute">나에게 있어</span></p>
    <div class="fixes"><div><s>confused manual</s><b>confusing manual (매뉴얼이 원인)</b></div><div><s>confusing people</s><b>confused people (사람이 느낌)</b></div></div>
    <p class="ex">This manual is confusing. (2V) / The people are confused. (2V)</p>
    <p class="ex">This manual makes the people confused. (5V — 목적격보어 형용사)</p>
    <p class="note">분사(형용사) 역할: 명사수식 / 보어 — 주격보어(2, 주어를 서술) · 목적격보어(5, 목적어를 서술)</p>
    <p class="note">감정형용사 → 전치사 + 대명사: angry <b>at</b> / happy <b>with</b> — I'm so happy with this present. / I won't feel angry at you.</p>
  </section>
  <section class="card">
    <h3>감정동사 표 (3V)</h3>
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th>단어</th><th>현재분사 (~하게 하는)</th><th>과거분사 (~한)</th><th>전치사</th></tr></thead>
      <tbody>
        <tr><th>confuse 혼란시키다</th><td>confusing 혼란스러운</td><td>confused 혼란스러워하는</td><td>at / about</td></tr>
        <tr><th>embarrass 당황하게 하다</th><td>embarrassing 당황스러운</td><td>embarrassed 당황한</td><td>at / about</td></tr>
        <tr><th>satisfy 만족시키다</th><td>satisfying 만족스러운</td><td>satisfied 만족하는</td><td>with</td></tr>
        <tr><th>frustrate 좌절시키다</th><td>frustrating 좌절감을 주는</td><td>frustrated 좌절한</td><td>by</td></tr>
        <tr><th>bore 지루하게 하다</th><td>boring 지루한</td><td>bored 지루해하는</td><td>with</td></tr>
        <tr><th>disappoint 실망시키다</th><td>disappointing 실망스러운</td><td>disappointed 실망한</td><td>at / by</td></tr>
        <tr><th>excite 흥분시키다</th><td>exciting 흥분시키는</td><td>excited 흥분한</td><td>at / by / about</td></tr>
        <tr><th>interest 관심을 끌다</th><td>interesting 흥미로운</td><td>interested 관심있어하는</td><td>in</td></tr>
        <tr><th>surprise 놀라게 하다</th><td>surprising 놀라운</td><td>surprised 놀란</td><td>at / by</td></tr>
        <tr><th>shock 충격을 주다</th><td>shocking 충격적인</td><td>shocked 충격을 받은</td><td>at / by</td></tr>
        <tr><th>impress 감명을 주다</th><td>impressive* 인상적인</td><td>impressed 감명받은</td><td>by / with</td></tr>
        <tr><th>annoy 짜증나게 하다</th><td>annoying 짜증나게 하는</td><td>annoyed 짜증난</td><td>at / with / about</td></tr>
        <tr><th>tire 피곤하게 하다</th><td>tiring 피곤하게 하는</td><td>tired 피곤한</td><td>with / of</td></tr>
        <tr><th>exhaust 지치게 하다</th><td>exhausting 진을 빼는</td><td>exhausted 기진맥진한</td><td>from</td></tr>
        <tr><th>depress 우울하게 하다</th><td>depressing 우울하게 만드는</td><td>depressed 우울한</td><td>about / with</td></tr>
        <tr><th>discourage 의욕을 꺾다</th><td>discouraging 의욕을 꺾는</td><td>discouraged 낙담한</td><td>by</td></tr>
        <tr><th>stress</th><td>stressful 스트레스를 주는</td><td>stressed 스트레스를 받는</td><td>by</td></tr>
        <tr><th>scare / scary</th><td>scary 무서운</td><td>scared 무서워하는</td><td>of</td></tr>
        <tr><th>encourage 격려하다</th><td>encouraging 격려하는</td><td>encouraged 격려받은</td><td>by</td></tr>
      </tbody></table></div>
    <p class="tip">${FIX} 노트엔 impressing으로 적혀 있지만 실제로는 형용사 <b>impressive</b>를 주로 써요.</p>
  </section>
  <section class="card">
    <h3>감정분사 예문 (노트)</h3>
    <p class="ex">This manual confuses me. <span class="mute">이 매뉴얼 좀 이상해 (confuse 3V)</span></p>
    <p class="ex">I was embarrassed at his behavior.</p>
    <p class="ex">I am satisfied with the present. <span class="mute">satisfying = satisfactory (일반형용사)</span></p>
    <p class="ex">I felt frustrated by heavy traffic jam. <span class="mute">frustrating: 답답 + 당황스러움, 내가 어찌할 수 없는, 내 힘으로 제어할 수 없는 / because of → by (느끼는 느낌)</span></p>
    <p class="ex">This class is boring. / I am bored with the class.</p>
    <p class="ex">I am disappointed at / by you.</p>
    <p class="ex">I am excited at / by the movie. <span class="mute">짜릿한, 압도되는 느낌</span> — about the movie <span class="mute">(기대하는 느낌)</span></p>
    <p class="ex">I am interested in the book / in you.</p>
    <p class="ex">I was shocked at the news.</p>
    <p class="ex">This movie is impressive. / I am impressed with the movie / the present.</p>
    <p class="ex">I am annoyed with you. <span class="mute">짜증나고 우울하고 행복한 감정 → with</span></p>
    <div class="rows">
      <div><b>tired with</b><span>육체적으로 피곤 — I am tired with a lot of work.</span></div>
      <div><b>tired of</b><span>싫증난 (정신적으로)</span></div>
      <div><b>exhausted &gt; tired</b><span>exhausted from — 더 지친</span></div>
    </div>
    <p class="ex">I am depressed with the situation. / I am discouraged. <span class="mute">↔ motivated</span></p>
    <p class="ex">This situation is very stressful.</p>
    <p class="ex">I am nervous. <span class="mute">감정분사가 아니고 일반형용사로 씀</span></p>
  </section>
  <section class="card">
    <h3>상태가 되다: be · become · get · feel (2V)</h3>
    <p class="ex">I get (become) depressed with bad weather recently.</p>
    <p class="note">내일도 그럴 거 같으면 현재시제로 (습관적). She라면 gets / would get = ~일 것 같다</p>
    <p class="note">갑작스러운 → 형용사 sudden / 갑작스럽게 → 부사 suddenly</p>
    <div class="rows">
      <div><b>would be</b><span>~될 것 같다 / ~일 것 같다 — It would be funny. (웃긴 거라면)</span></div>
    </div>
  </section>
  <section class="card">
    <h3>to부정사 vs 형용사 (노트)</h3>
    <p class="ex">I want my parents <b>to be</b> disappointed. <span class="mute">to부정사는 동사를 받아야 된다. disappointed는 형용사라서 be동사를 데리고 와야 함</span></p>
    <p class="ex">I want the road <b>to be enlarged</b>. <span class="mute">도로가 확장되는 → 수동의 느낌</span></p>
    <p class="ex">I hope <b>that</b> the road is enlarged. <span class="mute">want는 that을 받지 않아요</span></p>
    <p class="note">very는 형용사·부사만 수식 / a lot은 동사 수식 → 단어 두 개라서 뒤로 가야 함</p>
    <div class="fixes"><div><s>He looked disappointed a lot</s><b>He looked very disappointed</b></div><div><s>because of the coffee made you</s><b>because coffee will make you awake (awake = 형용사)</b></div></div>
  </section>`,
  drills: [
    ['당신은 아이가 스스로 밥을 먹을 수 있도록 시켜야 합니다.', 'You have to make the baby eat by himself.', 'eating (X) → eat (사역동사 + 동사원형)'],
    ['그 직원은 우리가 그 제품의 사용법을 잘 이해하게 했다.', "The staff made us understand the product's usage.", 'our (X) → us / the usage of the product'],
    ['당신은 제 폰이 충전이 되게 할 수 있나요?', 'Can you make my phone charged?', '폰이 충전되는 → 수동 → 과거분사'],
    ['그 음식이 타게끔 만들지 마세요.', "Don't make the food burnt.", 'burned도 가능'],
    ['그 아이가 스스로 자신의 감정을 말하게끔 해주세요.', 'Please make the baby speak about her emotion by herself.', 'speak는 1형식 → about'],
    ['이 표지판은 사람들이 주차장을 쉽게 찾도록 만들어 줄 것입니다.', 'The sign will make the people find the parking lot easily.', 'easily = 동사 수식 부사 / parking space < parking lot'],
    ['아이가 이 곤충을 잘 관찰하게 해주세요.', 'Let the child observe this insect well.', 'have (X) → let or make'],
    ['아이가 혼자 밖에 나가지 않도록 해주세요.', "Don't make the child go out alone.", 'alone = by himself / by herself'],
    ['요즘 안 좋은 날씨 때문에 우울해지는 것 같아요.', 'I get depressed with bad weather recently.', '계속 그런 상태 → 현재시제 / was (X)'],
    ['갑작스런 교통체증에 조금 답답하고 당황스럽네요. 친구 결혼식에 제시간에 도착할 수 있을지 모르겠어요.', "I am a little frustrated and embarrassed by the sudden traffic jam. I don't know if I can arrive at my friend's wedding on time.", 'sudden = 형용사 / ~할지 → if'],
    ['아이들이 제 생일날 선물을 주었을 때 매우 감동했어요.', 'When the children gave me the present on my birthday, I was very impressed.'],
    ['호텔 가격은 비쌌지만 레스토랑 음식이나 시설에는 아주 만족했어요.', "Even though the room rate was expensive, the restaurant's food and facilities were satisfactory.", 'satisfying = satisfactory'],
    ['저는 7번 문제가 조금 이해가 안가요 / 헷갈려요.', 'I am confused about question No. 7.'],
    ['이번달에는 너무 잦은 출장 스케줄 때문에 조금 스트레스를 받지만 다음 달부터는 괜찮아질 것 같아요.', 'I am stressed by too frequent business trips, but it will be okay from next month.'],
    ['이 영화는 너무 무서운 것 같아요. 특히 아이들이 너무 무서워 할 것 같아요.', 'This movie is too scary. Especially, children would be so scared.', 'scaring (X)'],
    ['그 뉴스는 모든 사람들에게 정말 충격적이었어요.', 'The news was shocking to everyone.', '2형식 · 원인은 -ing'],
    ['그 사람이 내 발을 밟았을 때 너무 당황했어요.', 'When the person stepped on my foot, I was so embarrassed.'],
    ['저는 그 사건에 깜짝 놀랐어요.', 'I was surprised at the incident.', 'by도 가능'],
    ['많은 사람들이 우리 앞에 있었어도 우리 아이는 당황하지 않더라고요.', 'Even though many people were in front of us, my children were not embarrassed.', 'in front of = 전치사 → us / children 복수 → were'],
    ['수업이 너무 지루해서 집중이 잘 안 되더라고요.', "I couldn't concentrate on the class because it was so boring.", '잘 하려고 하는데 안 돼서 → can / I was bored with the class'],
    ['차 막히는 건 너무 지치게 해요. 도로가 넓으면 좋겠어요.', 'Traffic jam is so tiring. I want the road to be enlarged.', 'I hope that the road is enlarged도 OK'],
    ['저는 그 영화에 감명받았어요. 저는 많은 사람들이 그 영화를 봤으면 좋겠어요.', 'I was impressed by the movie. I want many people to watch the movie.', 'The movie made me impressed도 OK'],
    ['아이들이 그 책을 본다면 재밌어 할 것 같아요.', 'If children read the book, it would be interesting to them.', 'they would be interested in it도 OK / looked the book (X)'],
    ['지금 당신이 너무 졸린다면 커피 한잔 마시길 추천합니다. 커피는 당신을 깨워줄 것이기 때문에 공부에 다시 집중할 수 있을 거예요.', 'If you are very sleepy, I recommend you to drink a cup of coffee because coffee will make you awake. You can concentrate on studying again.', 'because of (X) → because / make + 형용사(awake) / 전치사 뒤엔 동명사'],
    ['나는 네가 여기서 오랫동안 울지 않았으면 좋겠어. 그것은 다른 사람들을 좀 불편하게 만들거든.', "I don't want you to cry here for a long time. It makes other people a little bit uncomfortable.", 'want 5형식 / make KFC'],
    ['인생에서 어려운 일을 겪을 때 그것은 당신을 우울하게 만들고 지치게 만들지만 너를 강하게도 만든다.', 'When you have difficult things, it makes you depressed and tired, but it makes you strong.'],
    ['전체적으로 그 영화는 감동적이었지만 몇몇 장면은 좀 지루했다.', 'Generally, the movie was impressive, but some scenes were a little bit boring.'],
    ['그는 그의 영어 점수에 많이 실망한 것처럼 보였다.', 'He looked very disappointed at his English score.', 'disappointed a lot (X) → very'],
    ['너무 많은 양의 일은 날 짜증나게 하고 지치게 한다.', 'Too many tasks make me annoyed and tired.'],
    ['주로 비오는 날은 좀 우울해지는 것 같다.', 'Rainy days would make me a little bit depressed mostly.'],
    ['나는 부모님을 실망시키고 싶지 않았기 때문에 열심히 공부했어요.', "Because I didn't want my parents to be disappointed, I studied hard.", 'to + be + 형용사'],
  ]
},

/* ───────────── (노트) 수동태 ───────────── */
{
  id: 'passive', no: 0, color: 'teal', glyph: 'be p.p',
  title: '수동태', sub: '3·4·5형식 수동태 · 다단계 동사 수동', pages: '노트 3~4월',
  html: `
  <section class="card">
    <h3>능동 → 수동</h3>
    <p class="ex">I made a cake. <span class="mute">능동 · S 3V O</span></p>
    <p class="ex">A cake was made <u>by me</u>. <span class="mute">수동 · be + p.p — 수·시제 일치</span></p>
    <p class="note">by me = 전치사 + 전치사의 목적어 자리 → 생략해버리는 일도 많다 (누가 했는지 중요하지 않을 때)</p>
    <p class="ex">He is loved by us. / He is loved in Korea by many people. <span class="mute">사랑을 받다</span></p>
    <p class="ex">I love you. → You are loved (by me). <span class="mute">by me 생략 가능</span></p>
  </section>
  <section class="card">
    <h3>목적어가 있는 형식만 수동태가 된다</h3>
    <div class="rows">
      <div><b>1형식 S + V</b><span>X</span></div>
      <div><b>2형식 S + V + 주격보어</b><span>X — 새로운 사람(대상)이 없다</span></div>
      <div><b>3형식 S + V + O</b><span>O → S + be p.p 로 완성 (뒤에 목적어 없음)</span></div>
      <div><b>4형식 S + V + O1 + O2</b><span>O — 2개 만들 수 있음</span></div>
      <div><b>5형식 S + V + O + O.C</b><span>O</span></div>
    </div>
    <p class="note">3V가 나오면 전치사구·부사 같은 것만 뒤에 나올 수 있다 — 3V는 S + be p.p가 완성된 문장</p>
    <p class="ex">A button was pushed. <span class="mute">이것만으로 문장 OK!</span></p>
  </section>
  <section class="card">
    <h3>4형식 동사의 수동태 (give · send · show · tell)</h3>
    <p class="ex">I will give you the coupon.</p>
    <p class="ex">① You will be given the coupon. <span class="mute">사람이 주어 → 명사(사물목적어)가 그대로 따라옴. 4형식은 전치사 안 붙고 명사가 따라나옴</span></p>
    <p class="ex">② The coupon will be given <b>to</b> you. <span class="mute">사물목적어가 S로 오면, 사람목적어 앞에 전치사</span></p>
    <p class="ex">I will provide you with the coupon. → You will be provided <b>with</b> the coupon.</p>
    <div class="rows">
      <div><b>S provide A with B</b><span>Customers will be provided with discount coupons.</span></div>
      <div><b>S provide B to A</b><span>Discount coupons will be provided to customers.</span></div>
      <div><b>S offer 사람 사물 (4)</b><span>Customers will be offered the coupon. / The coupon will be offered to customers.</span></div>
    </div>
  </section>
  <section class="card">
    <h3>5형식 동사의 수동태</h3>
    <p class="ex">I made my room clean. → My room was made clean. <span class="mute">목적격보어는 그대로 따라감</span></p>
    <p class="ex">I made my son a doctor. → My son was made a doctor. <span class="mute">5V일 때 목적어 = O.C</span></p>
    <p class="ex">I made you spaghetti. → You were made spaghetti. <span class="mute">4V일 때 사람목 ≠ 사물목</span></p>
    <h4>다단계 동사(to부정사)의 수동태</h4>
    <div class="rows">
      <div><b>be recommended to</b><span>~하라고 추천을 받았다 — I was recommended to try this brand.</span></div>
      <div><b>be suggested to</b><span>~하라고 제안받았다</span></div>
      <div><b>be told to</b><span>~하라고 들었다</span></div>
      <div><b>be asked to</b><span>~하라고 요청을 받았다 — I was asked to send an email.</span></div>
      <div><b>be encouraged to</b><span>~하라고 격려받았다</span></div>
      <div><b>be permitted / allowed to</b><span>~하는 것을 허락받았다</span></div>
      <div><b>be persuaded to</b><span>설득을 받았다 (마음이 움직여서 행위로 간 것처럼)</span></div>
    </div>
    <p class="mute">You are wanted to be healthy — want는 수동태로 잘 안 씀 (바라지는…)</p>
  </section>
  <section class="card">
    <h3>수동태 복습 노트</h3>
    <p class="ex">People consider her smart. (5V) → She is considered smart (by people). <span class="mute">her = 목적격, smart = O.C(형용사) · by people 생략 가능</span></p>
    <p class="note">1V는 수동태를 구성할 수 X — 주요 구성성분인 목적어가 없어서. 2V도 마찬가지</p>
    <p class="ex">S told me to V <span class="mute">~해야 한다고 / ~하라고 → to부정사가 have to 느낌이 든다</span></p>
    <p class="ex">S told me that I have to tell it to the front desk. <span class="mute">tell 4V: 사람 O + that절</span></p>
    <p class="ex">I was told (that) if I want to have breakfast, I have to tell the front desk.</p>
    <p class="mute">speak(발성·외국어) / talk / say(내용을 말하는, 3V) + that / tell은 to부정사 자리에 X</p>
    <div class="rows">
      <div><b>from A to B</b><span>여기서부터 저기까지 (공간·시간) — from June to September</span></div>
      <div><b>It will rain today.</b><span>날씨 얘기할 때 주어 써야 함 → 비인칭주어 (날씨·시간·거리)</span></div>
      <div><b>Everyone was / All people were</b><span>everyone은 단수, all people은 복수</span></div>
      <div><b>during vs while</b><span>전치사 + 명사 / 접속사 + S V — 전치사 뒤에는 동명사로!! (during travelling)</span></div>
      <div><b>belong</b><span>~에 속하다 — I don't belong here. · personal belongings 개인 짐(소지품)</span></div>
      <div><b>public transportation</b><span>모든 대중교통수단</span></div>
    </div>
    <div class="fixes"><div><s>today will rains a lot</s><b>it will rain a lot today</b></div></div>
  </section>
  <section class="card">
    <h3>leave: 형식마다 뜻이 다르다</h3>
    <div class="rows">
      <div><b>1V</b><span>떠나다</span></div>
      <div><b>2V</b><span>~한 상태로 남다</span></div>
      <div><b>3V</b><span>~을 두다, ~을 떠나다</span></div>
      <div><b>5V</b><span>O를 O.C 상태로 두다 — Do not leave children unattended. (관심을 주지 않는, -ed 과거분사)</span></div>
    </div>
  </section>
  <section class="card">
    <h3>노트 포인트</h3>
    <div class="rows">
      <div><b>issue vs publish</b><span>(영수증을) 발행하다 3V / 출판하다 — The receipt can't be issued.</span></div>
      <div><b>tear - tore - torn</b><span>찢다</span></div>
      <div><b>money · cash</b><span>셀 수 X / price는 셀 수 있음</span></div>
      <div><b>수량형용사</b><span>two 앞에 a X (A two cups X) / my는 가능</span></div>
      <div><b>close</b><span>They close every second Sunday. (1V) / Close the window. (3V) / The store is closed now.</span></div>
    </div>
  </section>`,
  drills: [
    ['영수증 프린터가 고장났기 때문에 영수증이 더 이상 발행될 수 없네요. 죄송합니다.', "Because the receipt printer was broken, the receipt can't be issued anymore. Sorry.", 'recipe(X) → receipt / publish(출판) → issue(발행)'],
    ['오늘 손님이 5만원 이상의 물건을 사시면 손님에게 할인쿠폰이 제공되어진답니다.', 'Today, if you buy an item more than 50,000 won, you will be offered a discount coupon.', 'if절은 현재 (will buy X) · offer 4형식 수동'],
    ['비가 많이 와서 비행기가 연착될 것 같아요.', 'Because it is raining a lot, the airplane would be delayed.', 'delay 3형식 → be delayed / 지금 오는 중이면 현재진행'],
    ['이 옷은 잘 안 빨아졌네요.', 'These clothes were not washed well.', 'clothes 복수 → These / were'],
    ['돈이 많이 찢어지면 사용할 수가 없어요.', "If money is torn a lot, it can't be used anymore.", 'tear-tore-torn · use 3V → be used'],
    ['테이블 위에 커피 2잔과 주스 1잔이 준비되어 있어요.', 'Two cups of coffee and a cup of juice are prepared on the table.', 'A two cups (X) · prepare 3형식'],
    ['테이블이 청소될 때까지 기다려주실래요?', 'Can you wait until the table is cleaned?'],
    ['이 버튼을 누르시면 자동으로 이 그림이 프린트됩니다.', 'If you push the button, this picture is printed automatically.'],
    ['호텔식당에서 조식을 원하면 프런트데스크에 말해야 한다고 들었어요.', 'I was told that if I want to have breakfast in the hotel restaurant, I have to tell the front desk.', 'tell 5V 수동 · eat보다 have'],
    ['저녁 9시 이후로 이 문은 잠겨져 있어야 합니다.', 'This door has to be locked after 9:00 pm.', 'has to + be p.p (조동사 뒤 동사원형)'],
    ['여행하는 동안 고객들은 자신의 소지품을 항상 확인하도록 추천되어집니다.', 'Customers are recommended to always check their belongings during travel.', 'recommend 5V 수동 → be recommended to'],
    ['고객들은 6월부터 9월까지 1인당 무료음료 하나가 제공되어집니다.', 'Customers are offered one free drink per person from June to September.', 'offer 4형식 수동 / were offered them (X) / by Jun to (X) → from June to'],
    ['신문기사에 따르면 오늘은 비가 많이 올 것이기 때문에 당신은 대중교통을 이용하는 것이 추천되어집니다.', 'According to the newspaper, it will rain a lot today, so you are recommended to use public transport.', 'according to ~에 따르면 (전치사구) / today will rains (X)'],
    ['만약 당신이 수업에 빠지지 않는다면 선생님은 당신을 성실한 학생으로 여길 거예요.', "If you don't miss the class, you will be considered a diligent student by the teacher.", 'consider 5V → be considered + 명사 / are not miss (X)'],
    ['모든 사람들이 이 규칙을 지키도록 요청되어집니다.', 'Everyone is asked to follow this rule.', 'everyone은 단수 → is / were (X)'],
    ['어린이들은 이 음료를 마시도록 허락되지 않습니다.', 'Children are not allowed to drink this drink.', 'to have로도 가능'],
  ]
},

/* ───────────── (노트) 의문문 · 부정문 ───────────── */
{
  id: 'question', no: 0, color: 'blue', glyph: '?',
  title: '의문문 · 부정문', sub: 'Do를 꺼내냐 마냐 · 의문사가 주어일 때', pages: '노트 (스프링노트)',
  html: `
  <section class="card">
    <h3>동사의 분류 → 부정문·의문문 만드는 법</h3>
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th>동사</th><th>예</th><th>부정문</th><th>의문문</th></tr></thead>
      <tbody>
        <tr><th>① 일반동사</th><td>1~5형식 동사 (2형식 be·look·remain 포함)</td><td>do / does / did + not</td><td>Do를 꺼내!</td></tr>
        <tr><th>② be동사</th><td>be (2형식) · be ~ing (진행) · be p.p (수동) · there is/are</td><td>not</td><td>be동사를 앞으로 (도치)</td></tr>
        <tr><th>③ 조동사</th><td>will·would / can·could / may·might / must &gt; have to &gt; should</td><td>not</td><td>조동사를 앞으로 (도치)</td></tr>
      </tbody></table></div>
    <p class="note">have to는 예외 → do를 사용: don't / doesn't have to = ~안 해도 된다, ~할 필요가 없다</p>
    <p class="ex">You don't have to drink all. / Do I have to pay?</p>
    <p class="ex">I didn't have breakfast. / I don't meet my friend.</p>
    <p class="mute">may = 확률 50:50 (It may rain.) · 과거형 would / could / might → 예의 바른 느낌 전달</p>
  </section>
  <section class="card">
    <h3>의문사가 없는 의문문 → Yes / No</h3>
    <p class="ex">Are you staff here? <span class="mute">be동사 도치</span></p>
    <p class="ex">Did they arrive at the airport on time? <span class="mute">일반동사 → Did + 동사원형</span></p>
    <p class="ex">There is my coffee. → Is there my coffee? <span class="mute">there is도 도치</span></p>
    <p class="ex">Do we have a meeting in the morning today?</p>
    <div class="fixes"><div><s>Are they arrived at the airport?</s><b>Did they arrive at the airport?</b></div><div><s>Did you waited</s><b>Did you wait (did 뒤엔 원형)</b></div></div>
  </section>
  <section class="card">
    <h3>의문사가 있는 의문문 → 정보로 대답</h3>
    <div class="rows">
      <div><b>① 의문대명사</b><span>who · what — 주어 / 목적어 / 보어 역할</span></div>
      <div><b>② 의문부사</b><span>when · where · how · why</span></div>
      <div><b>③ 의문형용사</b><span>which · whose</span></div>
    </div>
    <p class="ex">You like what. → <b>What do you like?</b> <span class="mute">O · do · S · V</span></p>
    <p class="ex">You are who. → <b>Who are you?</b> <span class="mute">보어 · V · S</span></p>
    <p class="ex">What should I do next? <span class="mute">조동사가 나왔으니 일단 바로 도치</span></p>
    <p class="ex">What do I have to do? <span class="mute">앞 do = 도치용 / 뒤 do = 본동사(하다)</span></p>
  </section>
  <section class="card">
    <h3>★ 의문사가 주어일 때는 도치하지 않는다</h3>
    <div class="two">
      <div><h4>주어 (누가)</h4><p class="ex"><b>Who</b> hit you? <span class="mute">S V O</span></p><p class="ex">Who gave you this present?</p><p class="ex">Who sent you this email?</p></div>
      <div><h4>목적어 (누구를)</h4><p class="ex"><b>Who did you hit?</b> <span class="mute">O · did · S · V</span></p><p class="ex">Who did you send this email to?</p></div>
    </div>
    <p class="mute">hit - hit - hit 때리다 / break - broke - broken</p>
  </section>
  <section class="card">
    <h3>전치사는 뒤에 남는다</h3>
    <p class="ex">You are looking for what. → <b>What are you looking for?</b> <span class="mute">for 뒤 = 전치사의 목적어 자리</span></p>
    <p class="ex">You had dinner with who. → Who did you have dinner with?</p>
    <p class="ex">Who are you having dinner with?</p>
    <div class="rows">
      <div><b>look for</b><span>1V + 전치사 + 명사 — 찾다</span></div>
      <div><b>look (2V)</b><span>~처럼 보이다</span></div>
      <div><b>watching vs looking at</b><span>쳐다보는 느낌 / 꽂혀서 보는 느낌, 긴 시간이 아닌 잠깐 보는</span></div>
    </div>
  </section>
  <section class="card">
    <h3>pay + 사는 물건 (노트)</h3>
    <div class="rows">
      <div><b>① pay for + n</b><span>사는 물건</span></div>
      <div><b>② pay 사람 + 사물 (for + n)</b><span>4형식 → to 안 씀</span></div>
      <div><b>③ pay 사물 + to 사람 (for + n)</b><span>3형식이면 to</span></div>
    </div>
    <p class="mute">for + n(사는 물건)은 전치사구라 안 나와도 됨</p>
  </section>`,
  drills: [
    ['당신은 여기 직원입니까?', 'Are you staff here?'],
    ['어제 그들은 제시간에 공항에 도착했습니까?', 'Did they arrive at the airport on time yesterday?', 'Are they arrived (X) → 일반동사는 Did + 원형'],
    ['당신은 여분의 수건을 바로 지금 나에게 가져다 줄 수 있습니까?', 'Can you bring me extra towels right now?', 'an extra towels (X) · bring 4V'],
    ['당신은 여기에서 30분 넘게 기다렸나요?', 'Did you wait here for more than 30 minutes?', 'waited (X) · wait 1V'],
    ['당신은 그 영화를 좋아하나요?', 'Do you like the movie?'],
    ['식당에서 조식을 먹기 전에 이 쿠폰을 보여줘야 하나요?', 'Do I have to show you this coupon before having breakfast in the restaurant?', 'have to → Do / should는 강제성 부여'],
    ['당신이 다음 주 수요일에 시간이 있으시면 저랑 점심을 드실 수 있을까요?', 'If you have time next Wednesday, could you have lunch with me?', 'could = 예의 바른 느낌'],
    ['그 영화는 감동적이었나요?', 'Was the movie impressive?'],
    ['당신은 그 영화에 감동받았나요?', 'Were you impressed by the movie?'],
    ['당신은 저녁으로 무엇을 먹었습니까?', 'What did you eat for dinner?'],
    ['제가 다음에 무엇을 해야 하나요?', 'What should I do next?', '조동사 → 바로 도치'],
    ['다음에 뭘 할 겁니까?', 'What will you do next?'],
    ['당신은 오늘 누구를 만날 것입니까?', 'Who will you meet today?'],
    ['당신은 무엇을 찾고 있습니까?', 'What are you looking for?', 'for는 뒤에 남김'],
    ['넌 뭘 먹고 있니?', 'What are you eating now?'],
    ['누가 너에게 이 이메일을 보냈니?', 'Who sent you this email?', '의문사가 주어 → 도치 X'],
    ['당신은 누구에게 이 이메일을 보냈습니까?', 'Who did you send this email to?', '의문사가 목적어 → did 도치'],
    ['이 택배를 누가 보냈나요?', 'Who sent this package?'],
    ['누가 이 장난감을 부쉈지요?', 'Who broke this toy?', 'broken (X) → broke'],
    ['당신은 누구에게 이 책을 줄 겁니까?', 'Who will you give this book to?', '노트: Who will you give this book? (4형식)'],
    ['제가 누구에게 이 돈을 지불해야 하나요?', 'Who do I have to pay the money to?'],
    ['당신은 지금 무엇이 필요합니까?', 'What do you need now?'],
    ['누가 이 선물을 너에게 주었니?', 'Who gave you this present?'],
    ['당신은 누구와 같이 저녁을 먹었어요?', 'Who did you have dinner with?'],
    ['당신은 누구를 위해서 이 커피를 만들었나요?', 'Who did you make this coffee for?'],
    ['당신은 지금 무엇에 집중하고 있나요?', 'What are you concentrating on now?', 'did (X) → 현재진행으로'],
  ]
},

/* ───────────── (노트) 동사 기초: 인칭·변화·진행 ───────────── */
{
  id: 'vbasic', no: 0, color: 'orange', glyph: '-s/-ed',
  title: '동사 기초', sub: '3인칭 단수 · 규칙/불규칙 · 현재진행', pages: '노트 10/12~',
  html: `
  <section class="card">
    <h3>현재시제 인칭에 따른 단수 / 복수</h3>
    <div class="rows">
      <div><b>I sleep</b><span></span></div>
      <div><b>You sleep</b><span></span></div>
      <div><b>He / She sleep<b style="color:var(--red)">s</b></b><span>3인칭 단수 → 동사에 s</span></div>
      <div><b>We sleep</b><span></span></div>
      <div><b>They sleep</b><span>여러 명 → s 없음</span></div>
      <div><b>It sleep<b style="color:var(--red)">s</b></b><span>(곰) — 3인칭 단수</span></div>
    </div>
    <p class="note">명사를 복수로 만들 때 s 붙음 (students) ↔ He/She는 동사에 s 붙음</p>
  </section>
  <section class="card">
    <h3>동사 변화: 원형 – 과거 – 과거분사</h3>
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th></th><th>동사원형</th><th>과거</th><th>과거분사</th></tr></thead>
      <tbody>
        <tr><th>불규칙</th><td>sleep</td><td>slept</td><td>slept</td></tr>
        <tr><th>규칙</th><td>walk</td><td>walked</td><td>walked</td></tr>
        <tr><th>${SUP}</th><td>wake / get / wear / understand</td><td>woke / got / wore / understood</td><td>woken / got(ten) / worn / understood</td></tr>
      </tbody></table></div>
    <p class="mute">과거분사는 be + p.p (수동태) / have + p.p (완료)에 쓰임</p>
    <div class="fixes"><div><s>sleeped</s><b>slept</b></div><div><s>understanded</s><b>understood</b></div></div>
  </section>
  <section class="card">
    <h3>현재진행 = be + ~ing</h3>
    <p class="ex">It <b>is raining</b>. <span class="mute">비가 오는 중이에요 (지금)</span></p>
    <p class="ex">It rains. <span class="mute">비가 오네요</span></p>
    <p class="ex">It rained yesterday.</p>
    <p class="note">쓰고 싶은 동사를 원형으로 해서 ing 붙임 / 현재진행 시제는 now랑 잘 나옴</p>
    <p class="note">ing만 붙으면 be동사 없다 → 현재분사 / 동명사 (동사 아님!)</p>
  </section>
  <section class="card">
    <h3>조동사 + 동사원형</h3>
    <p class="ex">I <b>have to</b> get up at 5:00 am tomorrow. <span class="mute">have to = 조동사 역할</span></p>
    <div class="fixes"><div><s>I will working in the office</s><b>I will work in the office</b></div></div>
  </section>
  <section class="card">
    <h3>먹다: have vs eat</h3>
    <div class="rows">
      <div><b>have</b><span>삼시세끼 (have breakfast / lunch / dinner)</span></div>
      <div><b>eat</b><span>간식거리 — 식사도 have 대신 써도 됨 (단순 섭취의 경우)</span></div>
    </div>
  </section>
  <section class="card">
    <h3>a lot vs a lot of</h3>
    <div class="rows">
      <div><b>a lot</b><span>부사 → 많이 (It rained a lot yesterday.)</span></div>
      <div><b>a lot of + n</b><span>수량형용사 → 많은</span></div>
    </div>
  </section>
  <section class="card">
    <h3>대명사는 수식을 받을 수 없다</h3>
    <p class="note">I, she 등 대명사는 형용사로 수식할 수 없다</p>
    <div class="fixes"><div><s>beautiful she</s><b>She is beautiful.</b></div></div>
  </section>
  <section class="card">
    <h3>소유격 붙이기</h3>
    <p class="ex">I slept at <u>my parents'</u> house. / <u>my boss's</u> chair</p>
    <p class="note">관련 있는 사람은 소유격을 붙이는 게 좋다 (with <b>my</b> friends, with <b>my</b> son)</p>
    <p class="mute">a hospital — 병원을 잘 모르니까 a / 아는(그) 병원이면 the</p>
  </section>
  <section class="card">
    <h3>동사의 3종류 (노트)</h3>
    <div class="tree">
      <div class="node">동사</div>
      <ul>
        <li>① 일반동사 (1V ~ 5V)</li>
        <li>② be동사 — be, (look, smell 같은 2V) / be + ing, be + p.p</li>
        <li>③ 조동사 — 동사 앞에 있어</li>
      </ul>
    </div>
    <div class="rows">
      <div><b>부정문 만들 때</b><span>① 일반동사 → do를 사용해서 (don't / doesn't / didn't)</span></div>
      <div><b></b><span>② be동사 · ③ 조동사 → not을 붙인다 (isn't, can't)</span></div>
    </div>
  </section>
  <section class="card">
    <h3>There is / are · 비인칭주어 It</h3>
    <p class="note">be동사 → 보통 2형식 / There is · are + 주어 → 1형식 (있다)</p>
    <p class="ex">There are so many people at the airport now. <span class="mute">주어 = so many people → are</span></p>
    <p class="ex">There isn't / aren't → 없다</p>
    <p class="note">비인칭주어 It — 주어는 맞으나 해석을 하지 않는다</p>
    <p class="ex">It is sunny. / It takes 3 hours. / It is 3 o'clock.</p>
  </section>
  <section class="card">
    <h3>부사의 위치 (노트)</h3>
    <p class="note">동사 수식하는 부사는 끝에도 앞에도 온다</p>
    <p class="ex">I <b>totally</b> agree with all opinions. <span class="mute">totally agree / totally understand — 어울리는 짝꿍</span></p>
    <p class="note">빈도부사(sometimes, always, usually 등): 일반동사 앞 / be동사 · 조동사 뒤</p>
    <p class="ex">I <b>sometimes</b> go there. / I should <b>sometimes</b> go there.</p>
    <p class="mute">Sometimes는 말할 때 문장 앞이나 뒤에 넣어도 OK</p>
  </section>
  <section class="card">
    <h3>a lot of coffee vs coffee a lot</h3>
    <div class="rows">
      <div><b>I drank a lot of coffee.</b><span>a lot of = 형용사 → 커피 양이 많다</span></div>
      <div><b>I drank coffee a lot.</b><span>a lot = 부사 → 커피를 자주·많이 마셨다</span></div>
    </div>
  </section>
  <section class="card">
    <h3>헷갈리는 짝 (노트)</h3>
    <div class="rows">
      <div><b>especially</b><span>특히, 유난히</span></div>
      <div><b>specially</b><span>특별히</span></div>
      <div><b>at the beginning of / at the end of</b><span>~의 초에 / 말에 (시간 · 공간 둘 다)</span></div>
      <div><b>in 30 minutes</b><span>30분쯤 (약간 넘어도 OK)</span></div>
      <div><b>within 30 minutes</b><span>확실하게 30분 이내</span></div>
      <div><b>exercise (1V)</b><span>= do exercise (3V) = work out 운동하다</span></div>
      <div><b>do homework / do housework</b><span>숙제 / 집안일</span></div>
      <div><b>make up</b><span>보충하다 (보강)</span></div>
      <div><b>charge (3V)</b><span>충전시키다 — I will charge my phone.</span></div>
      <div><b>as well</b><span>나도~ I want to go there as well. = Me too.</span></div>
      <div><b>gonna</b><span>= going to</span></div>
      <div><b>You would be tired.</b><span>너는 피곤할 것 같아 (추측)</span></div>
    </div>
  </section>
  <section class="card">
    <h3>인칭대명사</h3>
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th>주격</th><th>소유격</th><th>목적격</th></tr></thead>
      <tbody>
        <tr><td>I</td><td>my</td><td>me</td></tr>
        <tr><td>you</td><td>your</td><td>you</td></tr>
        <tr><td>he / she</td><td>his / her</td><td>him / her</td></tr>
        <tr><td>we</td><td>our</td><td>us</td></tr>
        <tr><td>they</td><td>their</td><td>them</td></tr>
        <tr><td>it</td><td>its</td><td>it</td></tr>
      </tbody></table></div>
    <p class="note">전치사 뒤엔 목적격 (전치사의 목적어 자리) — He was surprised by <b>me</b>. / in front of <b>us</b></p>
    <p class="tip">${FIX} 노트의 it's는 소유격 <b>its</b>가 맞아요 (it's = it is).</p>
  </section>
  <section class="card">
    <h3>비인칭주어 It: 날씨 · 시간 · 거리</h3>
    <p class="ex">It took 5 hours.</p>
    <p class="note">It took + 시간 + to부정사(O) / 동명사도 가능 — 동사를 요리해서 명사로 만들어야 함 (준동사)</p>
    <p class="ex">It took 1 hour to do homework. <span class="mute">노트: It took doing homework 1 hour</span></p>
  </section>
  <section class="card">
    <h3>There is / are — be동사를 쓰는 유일한 1형식 문장</h3>
    <p class="ex">There is <u>a set</u> of eggs. <span class="mute">There = 비인칭주어(해석 X) · a set = S · of eggs = 전치사구</span></p>
    <p class="ex">There are some eggs / 20 eggs.</p>
    <p class="ex">a set of 20 eggs <span class="mute">20개로 구성된 하나의 세트</span></p>
    <p class="ex">I bought these eggs through Coupang. <span class="mute">through/in 가능 — 웹사이트에 들어가서</span></p>
    <p class="mute">around / about = 대략 (부사)</p>
  </section>
  <section class="card">
    <h3>have been to (경험)</h3>
    <p class="ex">I have been to ~ <span class="mute">have p.p — gone이 되어야 하는데 been을 쓴다. 가본 적 있어? go가 to를 썼다</span></p>
    <p class="ex">I want <u>to celebrate</u> our graduation. <span class="mute">want + to부정사(목적어 자리, 명사 역할). celebrate는 3V라 목적어가 필요</span></p>
  </section>
  <section class="card">
    <h3>another · other · the other</h3>
    <div class="rows">
      <div><b>an apple + the other apple</b><span>2개 중 하나 / 마지막 남은 것 → the other</span></div>
      <div><b>an apple, another apple, the other apple</b><span>3개: 여러 개 가운데 또 하나 → another</span></div>
      <div><b>some apples + the other apples</b><span>단수·복수 상관없이 마지막 남은 것엔 the other</span></div>
      <div><b>some, other apples, the other apples</b><span>다른 복수 여럿 → other (복수 개념으로 씀)</span></div>
    </div>
    <p class="mute">30개 중 3개는 뭘까? 그 나머지 전부 → the others</p>
  </section>
  <section class="card">
    <h3>전치사 노트 (2/8)</h3>
    <div class="rows">
      <div><b>of</b><span>① ~의 ② ~중에서, ~중의 (one of the restaurants — 뒤에 복수) ③ ~으로 만든 (It is made of cheese, 수동태) ④ ~으로부터 (= from)</span></div>
      <div><b>find vs look for</b><span>찾았다(결과) / 찾는 중(과정)</span></div>
      <div><b>next to vs next</b><span>공간적인 경우 / 시간적인 경우 (next week)</span></div>
      <div><b>at a certain point</b><span>특정 포인트로 · stuck 갇혀있는</span></div>
      <div><b>such as</b><span>예를 들어 (전치사 느낌)</span></div>
      <div><b>suit (3)</b><span>~에 어울리다 — It suits you. (suit 뒤에 바로 목적어)</span></div>
      <div><b>make an effort to</b><span>노력하다 (3V + 목적어)</span></div>
      <div><b>previous</b><span>그전의 (형용사) · ex- 전 ~ (ex-boyfriend, ex-coworker, ex-house)</span></div>
      <div><b>Can you pass me water?</b><span>pass 4V</span></div>
    </div>
  </section>
  <section class="card">
    <h3>How have you been? vs How are you?</h3>
    <div class="rows">
      <div><b>How have you been?</b><span>그동안 어떻게 지냈어? — have p.p (have는 뜻 X 조동사 → 의문문에서 주어와 도치)</span></div>
      <div><b>How are you?</b><span>지금 어때? — you are → are you 도치</span></div>
    </div>
  </section>`
},

/* ───────────── (노트) 문장 구조와 직독직해 ───────────── */
{
  id: 'reading1', no: 0, color: 'teal', glyph: '/',
  title: '문장 구조 · 직독직해', sub: '끊어 읽기 지문 7개 · 노트 단어장', pages: '노트',
  html: `
  <section class="card">
    <h3>문장 만드는 순서</h3>
    <ol class="num">
      <li><b>문장 (주절)</b> — S + V부터: I went to supermarket at 8:00pm last night with my mom.</li>
      <li><b>문장 (부사절) = 추가절</b> — When it rained a lot <span class="mute">(부사절 · 1형식 동사)</span></li>
      <li>주어를 추측해서 적합한 걸로 주어 놓기 → 한국식 → 영어식으로 가지기</li>
      <li>끊어서 구조 보기: You can put your phone / on the table. <span class="mute">S · V(~을 놓다) · O(~을) · 부사</span></li>
    </ol>
  </section>
  <section class="card">
    <h3>절의 3종류</h3>
    <div class="tree">
      <div class="node">절</div>
      <ul><li>① 명사절</li><li>② 형용사절</li><li>③ 부사절 → 부사 역할을 하는 (주절의 입장에서!!)</li></ul>
    </div>
    <p class="note">추가절을 주절에 붙이기 위해 접속사 필요. 부사절은 앞에 접속사를 붙여야 한다. 뜻이 있습니다 → 해석을 해줘야 함.</p>
  </section>
  <section class="card">
    <h3>직독직해: 시드니로 떠나기 전날 밤</h3>
    <p class="hintbar">영어 순서대로 끊어서 해석하는 연습. 탭하면 해석이 보여요.</p>
    ${[
      ['I will go to the airport early tomorrow / and I will take a flight for Sydney,', '나는 갈 것입니다 공항에 일찍 내일 / 그리고 나는 탈 겁니다 비행기를 시드니로 향하는'],
      ['so I have to sleep now / and it is 12:30 am', '그래서 나는 잠을 자야만 한다 지금 / 그리고 새벽 12:30분이다'],
      ['but I cannot sleep right away now.', '그러나 나는 잠을 잘 수 없다 당장 지금'],
      ['Actually, I am worried and nervous.', '사실, 나는 걱정되고 긴장된다'],
      ['I will stay there for a year.', '나는 머물 것입니다 거기에 1년 동안'],
      ['At first, I will study English for 6 months at school,', '먼저 난 공부할 것이다 영어를 6달 동안 학교에서'],
      ['and then I will work in a food court with my friend.', '그리고 나서 나는 일할 것입니다 푸드코트에서 내 친구랑 함께'],
      ['He introduced the job to me.', '그는 소개시켜 줬습니다 직업을 나에게'],
      ['He is so nice to me all the time.', '그는 정말 친절합니다 나에게 항상'],
    ].map(([e, k]) => `<button class="pic" type="button"><span class="pe">${e}</span><span class="pk">${k}</span></button>`).join('')}
    <p class="tip">${FIX} 노트의 "food cart"는 해석(푸드코트)에 맞춰 food court로, "introduced the job for me"는 introduced the job <b>to</b> me로 고쳤어요.</p>
  </section>
  <section class="card">
    <h3>직독직해: 공항 가는 버스</h3>
    <button class="pic" type="button"><span class="pe">I left my house at 6 a.m. and I will take a bus for the airport at 6:30.</span><span class="pk">나는 떠났다 우리집을 새벽 6시에 그리고 나는 버스를 타고 갈 겁니다 공항으로 향하는 6시 30분에</span></button>
    <button class="pic" type="button"><span class="pe">Because the bus stop is near my house, I can reach there soon.</span><span class="pk">왜냐하면 그 버스정류장은 우리집 근처에 있다, 나는 도달할 수 있다 거기에 곧</span></button>
    <button class="pic" type="button"><span class="pe">It was still dark and windy, so I was a bit cold.</span><span class="pk">여전히 어둡고 바람이 불고 있었다. 그래서 나는 조금 추웠다 (a bit = 부사)</span></button>
    <button class="pic" type="button"><span class="pe">I walked for 10 minutes and I arrived at the bus stop.</span><span class="pk">나는 걸었다 10분 동안 그리고 나는 버스정류장에 도착했다</span></button>
    <button class="pic" type="button"><span class="pe">I found some people with their luggage there.</span><span class="pk">나는 발견했다 몇 사람들을 그들의 짐과 함께 거기에서</span></button>
    <button class="pic" type="button"><span class="pe">We waited for a bus for 10 minutes and the bus arrived a bit early.</span><span class="pk">우리는 기다렸다 버스를 10분 동안 그리고 버스는 도착했다 조금 일찍 (wait for = 좋아하는 전치사)</span></button>
    <button class="pic" type="button"><span class="pe">I put my luggage into the baggage compartment.</span><span class="pk">나는 두었다 내 짐을 수하물 칸 쪽으로</span></button>
    <p class="mute">비행기 위칸 = overhead compartment · 짐 찾는 곳 = baggage claim · produce = 농작물</p>
  </section>
  <section class="card">
    <h3>직독직해: 호주로 떠나는 이유</h3>
    <button class="pic" type="button"><span class="pe">My mom told me that I don&#x27;t have to go there.</span><span class="pk">우리 엄마는 말했다 나에게 나는 거기에 갈 필요가 없다고</span></button>
    <button class="pic" type="button"><span class="pe">She told me that Australia is very far from Korea</span><span class="pk">그녀는 말했다 나에게 호주는 매우 멀다 한국으로부터</span></button>
    <button class="pic" type="button"><span class="pe">and it has very different culture and different environment.</span><span class="pk">그리고 매우 다른 문화와 다른 환경을 가졌다고</span></button>
    <button class="pic" type="button"><span class="pe">Also, my friend told me that my English is not perfect,</span><span class="pk">또한 내 친구는 말했다 나에게 나의 영어가 완벽하지 않다고</span></button>
    <button class="pic" type="button"><span class="pe">so I can have many difficult situations there.</span><span class="pk">그래서 나는 많은 어려운 상황들이 있을 수 있다 거기서</span></button>
    <button class="pic" type="button"><span class="pe">I totally agree with all opinions, but I need some challenges and experiences.</span><span class="pk">나는 전적으로 동의한다 모든 의견들에, 그러나 나는 필요하다 약간의 도전들과 경험들이</span></button>
    <button class="pic" type="button"><span class="pe">They will give me a lot of improvement for myself.</span><span class="pk">그들은 줄 것이다 나에게 많은 향상을 나 자신을 위한</span></button>
    <p class="mute">totally agree / totally understand — 어울리는 짝꿍 · all opinions (= you, them)</p>
  </section>
  <section class="card">
    <h3>직독직해: 8월의 공항</h3>
    <button class="pic" type="button"><span class="pe">There are so many people at the airport now</span><span class="pk">있다 매우 많은 사람들이 공항에 지금 (There are → 1형식)</span></button>
    <button class="pic" type="button"><span class="pe">because it is in the middle of August.</span><span class="pk">때문에 지금은 8월 중순이기 (it = 비인칭주어)</span></button>
    <button class="pic" type="button"><span class="pe">Students are in the summer vacation and adults are in the summer holidays in their companies.</span><span class="pk">학생들은 여름방학이다 그리고 성인들은 여름휴가이다 그들의 회사에서</span></button>
    <button class="pic" type="button"><span class="pe">A lot of families are carrying their luggage and they look happy.</span><span class="pk">많은 가족들이 옮기고 있다 그들의 짐을 그리고 그들은 행복해 보인다 (look = 2V)</span></button>
    <button class="pic" type="button"><span class="pe">Now I am waiting for my flight and it will depart from gate 34 at 11 a.m.</span><span class="pk">지금 나는 기다리고 있다 나의 항공편을 그리고 그것은 출발할 것이다 게이트 34에서 11시에</span></button>
  </section>
  <section class="card">
    <h3>직독직해: 공항 식당에서</h3>
    <button class="pic" type="button"><span class="pe">I visited one of the restaurants at the airport because I was quite hungry.</span><span class="pk">난 방문했다 식당들 중 하나를 공항에 있는 때문이다 나는 꽤 배고팠기 (one of the + 복수 / quite = 부사)</span></button>
    <button class="pic" type="button"><span class="pe">I just had a small sandwich with a cup of water early in the morning before I left my house.</span><span class="pk">나는 단지 작은 샌드위치를 먹었다 물 한 잔과 함께 아침 일찍 내가 집을 떠나기 전에 (before + S V = 부사절)</span></button>
    <button class="pic" type="button"><span class="pe">I looked around and I found a Japanese noodle restaurant near my check-in counter.</span><span class="pk">나는 둘러봤다 그리고 찾았다 일본라면 음식점을 내 체크인 카운터 근처에 있는</span></button>
    <button class="pic" type="button"><span class="pe">Because I had enough time before boarding, I decided to eat something at first.</span><span class="pk">나는 충분한 시간을 가지고 있었기 때문에 탑승하기 전에, 나는 결정했다 먹는 것을 어떤 것 먼저 (before + 명사 = 전치사)</span></button>
    <button class="pic" type="button"><span class="pe">I ordered a pork noodle and a staff of the restaurant provided me with some side dishes and water,</span><span class="pk">난 주문했다 돼지고기 라면을 그리고 음식점의 스태프가 제공했다 나에게 몇 반찬들과 물을</span></button>
    <button class="pic" type="button"><span class="pe">and she served me the main dish 15 minutes later.</span><span class="pk">그리고 그녀는 제공했다 나에게 메인 음식을 15분 뒤에 (serve 4V)</span></button>
    <button class="pic" type="button"><span class="pe">It was tasty, but a bit spicy and oily.</span><span class="pk">음식은 맛있었다 그러나 조금 맵고 느끼했다</span></button>
    <p class="mute">look around = 둘러보다 / 두리번거리며 · decide는 to부정사 짝꿍!</p>
  </section>
  <section class="card">
    <h3>직독직해: 면세점 선물</h3>
    <button class="pic" type="button"><span class="pe">Before I arrived at the gate, I bought some presents for my friend.</span><span class="pk">내가 게이트에 도착하기 전에, 나는 샀다 몇 가지 선물들을 내 친구를 위해 (4→3V)</span></button>
    <button class="pic" type="button"><span class="pe">He is living and working in Sydney now.</span><span class="pk">그는 살고 있고 일하고 있다 시드니에서 지금</span></button>
    <button class="pic" type="button"><span class="pe">Actually he loves Korean male cosmetics such as moisturiser or toner from ABC company.</span><span class="pk">사실 그는 사랑한다 한국 남성 화장품들을 예를 들어 로션 또는 스킨을 ABC 회사에서 나오는</span></button>
    <button class="pic" type="button"><span class="pe">I paid 67,000 won for the male moisturiser.</span><span class="pk">나는 지불했다 67,000원을 남성 로션을 위해 (pay 3V + for)</span></button>
    <button class="pic" type="button"><span class="pe">Even though it is a bit expensive, I heard that it is very famous and popular for young people especially in Australia.</span><span class="pk">이것이 조금 비쌈에도 불구하고, 나는 들었다 이것이 매우 유명하고 인기 있다고 젊은 사람들에게 특히 호주에서 (that = 목적어절)</span></button>
  </section>
  <section class="card">
    <h3>직독직해: 탑승</h3>
    <button class="pic" type="button"><span class="pe">Finally the boarding started.</span><span class="pk">마침내 탑승이 시작됐다 (start 1V)</span></button>
    <button class="pic" type="button"><span class="pe">3 flight attendants checked the passengers&#x27; passports and tickets one by one.</span><span class="pk">3명의 승무원들은 확인했다 승객들의 여권과 티켓을 하나씩</span></button>
    <button class="pic" type="button"><span class="pe">I showed mine to one of them.</span><span class="pk">나는 보여줬다 내 것을 그들 중 한 명에게 (대명사 → 3형식)</span></button>
    <button class="pic" type="button"><span class="pe">Then I got on the flight and I looked for my seat.</span><span class="pk">그리고 나서 나는 비행기에 올라탔다 그리고 나는 찾았다 내 좌석을</span></button>
    <button class="pic" type="button"><span class="pe">I hoped that my seat was next to a window,</span><span class="pk">나는 희망했다 나의 좌석이 창문 옆이길</span></button>
    <button class="pic" type="button"><span class="pe">but unfortunately my seat was in the middle of the aisle.</span><span class="pk">그러나 불행하게도(안타깝게도) 나의 좌석은 통로 중앙이었다</span></button>
  </section>
  <section class="card">
    <h3>직독직해: 좌석을 바꿔달라는 남자</h3>
    <button class="pic" type="button"><span class="pe">However, suddenly a man came to me and asked me to change the seat very carefully.</span><span class="pk">그런데 갑자기 한 남자가 나에게 왔다 그리고 요청했다 나에게 좌석을 바꿔달라고 매우 조심스럽게 (ask 5V)</span></button>
    <button class="pic" type="button"><span class="pe">He explained that his seat was a window seat over there,</span><span class="pk">그는 설명했다 그의 좌석이 저기에 있는 창문 좌석이라고</span></button>
    <button class="pic" type="button"><span class="pe">but the other family members were sitting on the aisle seats next to me unfortunately.</span><span class="pk">그러나 나머지 가족 구성원들은 앉아있었다 내 옆에 있는 통로 좌석에 안타깝게도</span></button>
    <button class="pic" type="button"><span class="pe">He said that he made this mistake when he booked the tickets.</span><span class="pk">그는 말했다 그가 실수했다고 그가 티켓을 예약했을 때 (book 3V)</span></button>
  </section>
  <section class="card">
    <h3>직독직해: 자리를 양보하다 (스피킹하듯이!)</h3>
    <button class="pic" type="button"><span class="pe">Since he wanted me to change the seat seriously and the seat was a window seat,</span><span class="pk">그가 나에게 좌석을 바꿔주기를 간절히 원했고 그 좌석은 창가자리였기 때문에</span></button>
    <button class="pic" type="button"><span class="pe">I was willing to respond to him favorably.</span><span class="pk">나는 기꺼이 그에게 호의적으로 응답했다 (respond 1V)</span></button>
    <button class="pic" type="button"><span class="pe">At first, I wanted a window seat, but I couldn&#x27;t get it,</span><span class="pk">처음에 나는 창가자리를 원했지만 그것을 얻을 수 없었다</span></button>
    <button class="pic" type="button"><span class="pe">but finally I got it by chance!!</span><span class="pk">그러나 마침내 우연히 얻었다!! (by chance = 우연히)</span></button>
    <button class="pic" type="button"><span class="pe">I think that I am a very lucky boy.</span><span class="pk">나는 내가 매우 행운아라고 여긴다</span></button>
    <button class="pic" type="button"><span class="pe">Actually, the event made me have a lot of self-confidence for my journey to Sydney</span><span class="pk">사실 그 사건은 나에게 시드니로 향하는 나의 여행에 많은 자신감을 갖게 만들었다 (사역동사 + 동사원형)</span></button>
    <button class="pic" type="button"><span class="pe">because I felt that God is looking after my wish and all situations.</span><span class="pk">왜냐하면 신이 나의 바람과 모든 상황을 돌본다고 느꼈기 때문에</span></button>
    <p class="mute">be willing to = 기꺼이 ~하다 · I am willing to help you. · I met my friend on the street by chance.</p>
  </section>
  <section class="card">
    <h3>직독직해: 업무 메일 표현</h3>
    <button class="pic" type="button"><span class="pe">It seems like they suggested the price headfirst and randomly</span><span class="pk">그들은 가격을 무턱대고 아무렇게나 제안한 것 같아요 (headfirst = 무턱대고, 아무 생각없이 = thoughtlessly)</span></button>
    <button class="pic" type="button"><span class="pe">because they want to attract the customers.</span><span class="pk">왜냐하면 그들은 고객을 끌어들이고 싶어하니까</span></button>
    <button class="pic" type="button"><span class="pe">Actually, my English is not perfect and I am trying to improve it,</span><span class="pk">사실 제 영어는 완벽하지 않고 그것을 향상시키려고 노력 중이에요 (English 반복 대신 it)</span></button>
    <button class="pic" type="button"><span class="pe">so I can make you misunderstand my point and my explanation.</span><span class="pk">그래서 제가 제 요점과 설명을 오해하게 만들 수도 있어요</span></button>
    <button class="pic" type="button"><span class="pe">If you feel my contents are ambiguous, let me know.</span><span class="pk">제 내용이 애매하게 느껴지시면 알려주세요</span></button>
    <button class="pic" type="button"><span class="pe">Thank you for your consideration.</span><span class="pk">배려해 주셔서 감사합니다</span></button>
  </section>
  <section class="card">
    <h3>직독직해: 주말 일상 영작</h3>
    <button class="pic" type="button"><span class="pe">I had beef sashimi for dinner with my friends.</span><span class="pk">친구들과 저녁으로 소고기 육회를 먹었다</span></button>
    <button class="pic" type="button"><span class="pe">I met them in 안양 1번가. I saw many people hang around.</span><span class="pk">안양 1번가에서 그들을 만났다. 많은 사람들이 돌아다니는 걸 봤다 (지각동사 + 동사원형)</span></button>
    <button class="pic" type="button"><span class="pe">Four people including me gathered.</span><span class="pk">나를 포함해서 4명이 모였다 (gather 1V)</span></button>
    <button class="pic" type="button"><span class="pe">We visited my elder brother&#x27;s house in 인천 after we had breakfast.</span><span class="pk">아침을 먹은 후 인천에 있는 오빠 집을 방문했다</span></button>
    <button class="pic" type="button"><span class="pe">My eldest brother lives in Seoul.</span><span class="pk">큰오빠는 서울에 산다 (elder 손위의 / eldest 가장 손위의)</span></button>
    <button class="pic" type="button"><span class="pe">All family members except my father gathered on my birthday.</span><span class="pk">아빠를 제외한 모든 가족이 내 생일에 모였다 (except = 전치사)</span></button>
    <button class="pic" type="button"><span class="pe">He sent me a message and asked me to work on Friday. It made me embarrassed.</span><span class="pk">그는 나에게 메시지를 보내 금요일에 일하라고 요청했다. 그것은 날 당황하게 만들었다 (the message → a)</span></button>
    <button class="pic" type="button"><span class="pe">I left my house at 11 a.m. and I worked for 6 hours. I arrived at home at 12 o&#x27;clock.</span><span class="pk">11시에 집을 나와 6시간 동안 일했다. 12시에 집에 도착했다</span></button>
    <button class="pic" type="button"><span class="pe">I am on a diet. / I am on the way to the office.</span><span class="pk">다이어트 중이에요 (2V, 주격보어 자리에 전치사구) / 사무실 가는 길이에요 (the way = 도로, 걷는 길, 비행길)</span></button>
    <button class="pic" type="button"><span class="pe">Let&#x27;s keep the diary in English and write about my recent updates.</span><span class="pk">영어로 일기를 쓰고 최근 소식에 대해 써보자</span></button>
    <button class="pic" type="button"><span class="pe">I&#x27;m preparing for the renewal of my company homepage.</span><span class="pk">회사 홈페이지 리뉴얼을 준비하고 있어요</span></button>
    <p class="mute">You can transfer to line number 2. (환승하다) · exit number 1 (1번 출구)</p>
  </section>
  <section class="card">
    <h3>직독직해: 자기소개 (첫 수업)</h3>
    <button class="pic" type="button"><span class="pe">Hi, my name is Haneul. I&#x27;m 25 years old.</span><span class="pk">안녕하세요, 제 이름은 하늘이에요. 25살이에요.</span></button>
    <button class="pic" type="button"><span class="pe">I am living and working in 가산 now.</span><span class="pk">지금 가산에서 살고 일하고 있어요 (live in Seoul → 현재진행으로)</span></button>
    <button class="pic" type="button"><span class="pe">I like drawing with acrylic on canvas</span><span class="pk">캔버스에 아크릴로 그리는 걸 좋아해요 (painting → drawing)</span></button>
    <button class="pic" type="button"><span class="pe">and I started studying English in October last year.</span><span class="pk">그리고 작년 10월에 영어 공부를 시작했어요 (to study in English X)</span></button>
    <button class="pic" type="button"><span class="pe">I hope that my English skill is improved.</span><span class="pk">제 영어 실력이 향상되길 바라요 (= I want my English skill to be improved)</span></button>
    <button class="pic" type="button"><span class="pe">So I am interested in this class.</span><span class="pk">그래서 이 수업에 관심이 있어요</span></button>
    <p class="mute">artwork 그림 작품</p>
  </section>
  <section class="card">
    <h3>직독직해: 우리 집 소개 (There is / are)</h3>
    <button class="pic" type="button"><span class="pe">There are two bathrooms in this house.</span><span class="pk">이 집엔 화장실이 2개 있어요</span></button>
    <button class="pic" type="button"><span class="pe">There are 3 rooms and all rooms have windows.</span><span class="pk">방이 3개 있고 모든 방에 창문이 있어요</span></button>
    <button class="pic" type="button"><span class="pe">There is a living room. There is a terrace next to the living room.</span><span class="pk">거실이 있어요. 거실 옆에 테라스가 있어요</span></button>
    <button class="pic" type="button"><span class="pe">There is a sofa in the living room.</span><span class="pk">거실에 소파가 있어요</span></button>
    <button class="pic" type="button"><span class="pe">The kitchen has a refrigerator.</span><span class="pk">부엌엔 냉장고가 있어요</span></button>
    <p class="mute">bath tub 욕조 · closet 옷장 · utility room 다용도실 · between 2 rooms 방 2개 사이 · on the right 오른쪽에 · Yes, we have.</p>
  </section>
  <section class="card">
    <h3>직독직해: 하루 일정 (스케줄을 세세하게)</h3>
    <button class="pic" type="button"><span class="pe">I will go to 신용산 with my friends and I will eat some sushi and dessert.</span><span class="pk">친구들이랑 신용산에 가서 초밥이랑 디저트를 먹을 거예요</span></button>
    <button class="pic" type="button"><span class="pe">I have an appointment.</span><span class="pk">약속이 있어요 (개인 스케줄을 잡은 것)</span></button>
    <button class="pic" type="button"><span class="pe">I started exercising (= to exercise) from 1 pm.</span><span class="pk">오후 1시부터 운동을 시작했어요 (start + ing / to V 둘 다 OK)</span></button>
    <button class="pic" type="button"><span class="pe">I exercised for around 2 hours at the fitness center.</span><span class="pk">헬스장에서 2시간 정도 운동했어요 (around = 대략)</span></button>
    <button class="pic" type="button"><span class="pe">Stretching will make your bones in a right way.</span><span class="pk">스트레칭은 뼈를 바른 상태로 만들어 줄 거예요 (전치사구 = 목적격보어, 형용사 역할)</span></button>
    <button class="pic" type="button"><span class="pe">I will depart from my house in the afternoon.</span><span class="pk">오후에 집에서 출발할 거예요 (from = 출발)</span></button>
    <p class="mute">do exercise (3) = exercise (1) = work out (1)</p>
  </section>
  <section class="card">
    <h3>발음 노트</h3>
    <div class="rows">
      <div><b>want / won't</b><span>원트 / 오운트</span></div>
      <div><b>early</b><span>어얼리 ↗</span></div>
      <div><b>free</b><span>프리 — r은 천장에 닿으면 프뤼에 가깝게</span></div>
      <div><b>breakfast</b><span>브렉퍼스트 (break + fast)</span></div>
      <div><b>nervous</b><span>너벌스 (nerverous X)</span></div>
      <div><b>pressure / pleasure</b><span>압박감 / 즐거움</span></div>
      <div><b>고유명사 · 고향</b><span>the를 안 붙임</span></div>
    </div>
  </section>
  <section class="card">
    <h3>노트 단어장</h3>
    <div class="rows">
      <div><b>rinse</b><span>헹구다</span></div>
      <div><b>Chinese cabbage</b><span>배추</span></div>
      <div><b>relatives</b><span>친척</span></div>
      <div><b>full time / part time / casual</b><span>하루 8시간 이상 / 하루 3시간 이상 / 한 주에 2~3시간</span></div>
      <div><b>ambitious</b><span>열정적인, 야망 있는</span></div>
      <div><b>master's degree</b><span>석사(대학원)</span></div>
      <div><b>promotion</b><span>승진 (홍보)</span></div>
      <div><b>nephew / niece / cousin</b><span>남자 조카 / 여자 조카 / 사촌</span></div>
      <div><b>sulfur hot spring</b><span>유황 온천 · public bath 대중목욕탕</span></div>
      <div><b>attractive</b><span>매력적인</span></div>
      <div><b>earth / dig</b><span>흙, 땅 / 파다</span></div>
      <div><b>prevent us from ~ing</b><span>우리가 ~하는 걸 막다</span></div>
      <div><b>helpful</b><span>도움이 되는</span></div>
      <div><b>bland · flat · neat</b><span>아무 맛 안 날 때 · 싱겁다 · 담백하다(노트)</span></div>
      <div><b>Great Barrier Reef</b><span>대보초 산호초 (Cairns) · Bondi Beach (시드니)</span></div>
      <div><b>underground market</b><span>지하상가</span></div>
      <div><b>pork / fork</b><span>돼지고기 / 포크 — 발음 구분!</span></div>
      <div><b>public restroom</b><span>공중화장실</span></div>
      <div><b>quality time</b><span>재밌는(의미 있는) 시간</span></div>
      <div><b>treadmill</b><span>러닝머신</span></div>
      <div><b>sushi train</b><span>회전초밥</span></div>
      <div><b>lunar new year's day</b><span>음력 설날</span></div>
      <div><b>naughty</b><span>장난꾸러기</span></div>
      <div><b>introvert / extrovert</b><span>내성적인 / 외향적인</span></div>
      <div><b>pick</b><span>고르다</span></div>
      <div><b>look into</b><span>조사하다</span></div>
      <div><b>acquaintance</b><span>지인</span></div>
      <div><b>pain / relieve</b><span>통증 / 풀다, 완화하다</span></div>
      <div><b>register for</b><span>등록하다</span></div>
      <div><b>hang around</b><span>돌아다니다, 어슬렁거리다</span></div>
      <div><b>including</b><span>~을 포함해서</span></div>
      <div><b>transfer / exit</b><span>환승하다 / 출구</span></div>
      <div><b>fridge / refrigerator / freezer</b><span>냉장실 / 냉장고 전체 / 냉동실 (얼리는 것)</span></div>
      <div><b>seaweed</b><span>김, 미역 (바다의 잡초)</span></div>
      <div><b>fried eggs</b><span>계란 프라이</span></div>
      <div><b>pear</b><span>배</span></div>
      <div><b>elder / eldest</b><span>손위의 / 가장 손위의</span></div>
      <div><b>headfirst</b><span>무턱대고, 아무 생각 없이 (= thoughtlessly)</span></div>
      <div><b>rage</b><span>분노, 격분</span></div>
      <div><b>once a month</b><span>한 달에 한 번</span></div>
      <div><b>by chance</b><span>우연히</span></div>
      <div><b>be willing to</b><span>기꺼이 ~하다</span></div>
      <div><b>refreshment</b><span>기분 전환 (음료·다과)</span></div>
      <div><b>responsibility</b><span>책임</span></div>
      <div><b>resume</b><span>이력서 · 경력</span></div>
      <div><b>tenant</b><span>세입자</span></div>
      <div><b>insurance</b><span>보험</span></div>
      <div><b>interest</b><span>이자 (관심)</span></div>
      <div><b>deposit</b><span>보증금</span></div>
      <div><b>sue</b><span>~를 고소하다 (3V)</span></div>
      <div><b>legally</b><span>법적으로</span></div>
      <div><b>real estate agency</b><span>부동산</span></div>
      <div><b>run</b><span>운영하다 (3V)</span></div>
      <div><b>ignore</b><span>무시하다</span></div>
      <div><b>hairy / oily</b><span>털이 많다 / 기름진</span></div>
      <div><b>appointment</b><span>약속 (개인 스케줄을 잡은 것)</span></div>
      <div><b>personal / face to face</b><span>개인적 / 1:1 대면</span></div>
      <div><b>It doesn't matter.</b><span>상관없어요</span></div>
      <div><b>influence</b><span>~에 영향을 주다 (3V)</span></div>
      <div><b>motivate</b><span>~에게 동기부여를 하다</span></div>
      <div><b>touching</b><span>감동적인 (= impressive)</span></div>
      <div><b>material</b><span>재료, 자료</span></div>
      <div><b>at the beginning / in the middle / at the end of</b><span>초반에 / 한가운데에 / 끝에</span></div>
      <div><b>celebrate</b><span>기념하다, 축하하다 (3V) — I want to celebrate our graduation.</span></div>
    </div>
  </section>
  <section class="card">
    <h3>구조 분석 (노트)</h3>
    <p class="ex">I will go / to the airport / early tomorrow <span class="mute">S V · 전치사구(1형식) · 구체적 시간</span></p>
    <p class="ex">and I will take / a flight / for Sydney. <span class="mute">S V O(~을, 3형식) · 시드니로 향하는</span></p>
    <p class="ex">So I have to sleep / now <span class="mute">1형식 · 부사</span></p>
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

window.HCLASS.forEach((c, i) => { c.no = i + 1; });

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
  ['sleeped', 'slept', '불규칙 동사'],
  ['I will working', 'I will work', 'will + 동사원형'],
  ['You look beautifully', 'You look beautiful', '2형식 보어는 형용사'],
  ['reply your message', 'reply to your message', 'reply는 1형식'],
  ['visit to my home', 'visit my home', 'visit은 3형식'],
  ['depart Korea', 'depart from Korea / leave Korea', ''],
  ['live in overseas', 'live overseas', 'overseas는 부사'],
  ['beautiful she', 'She is beautiful', '대명사는 수식 X'],
  ['until this week (완료)', 'by this week', 'until 계속 / by 완료'],
  ['Despite I have to ~', 'Even though I have to ~', 'despite는 전치사 → 뒤에 명사'],
  ['marry with him', 'married him', 'marry는 3형식'],
  ['she gave another friend it', 'she gave it to another friend', '대명사 목적어 → 3형식'],
  ['make the baby eating', 'make the baby eat', '사역동사 + 동사원형'],
  ['a confused manual', 'a confusing manual', '원인은 -ing / 느끼는 사람은 -ed'],
  ['If you will arrive', 'If you arrive', '부사절은 현재시제'],
  ['This movie is impressing', 'This movie is impressive', ''],
  ['looked disappointed a lot', 'looked very disappointed', 'very는 형용사 수식'],
  ['I want the road to enlarge', 'I want the road to be enlarged', '수동의 느낌'],
  ['A two cups of coffee', 'Two cups of coffee', '수량형용사 앞에 a X'],
  ['Everyone were asked', 'Everyone is asked', 'everyone은 단수'],
  ['Are they arrived?', 'Did they arrive?', '일반동사 의문문은 Do/Did'],
  ['Did you waited?', 'Did you wait?', 'did 뒤엔 동사원형'],
  ['It may rains', 'It may rain', '조동사 뒤엔 동사원형'],
  ['Who broken this toy?', 'Who broke this toy?', 'break-broke-broken'],
];
