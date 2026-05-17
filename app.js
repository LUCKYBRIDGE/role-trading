const roles = [
  {
    id: "observer",
    name: "관찰자",
    short: "흐름을 읽는 사람",
    description:
      "즉각적인 지목과 판단을 멈추고, 감정 단어 없이 현재 벌어지는 사실을 교실 전체에 서술합니다.",
    check: "fact",
  },
  {
    id: "summarizer",
    name: "사건 정리자",
    short: "끊어진 흐름을 짚는 사람",
    description:
      "누가 나쁜지보다 어떤 행동 때문에 수업, 발표, 활동의 흐름이 끊겼는지 명확히 정리합니다.",
    check: "not-person",
  },
  {
    id: "boundary",
    name: "경계 설정자",
    short: "공동체를 대표해 기준을 말하는 사람",
    description:
      "응보적으로 혼내거나 학생과 1대1로 맞서 이기려 하지 않고, 공동체와 수업을 대표하는 위치에서 허용 범위를 분명히 말합니다.",
    check: "boundary",
  },
  {
    id: "system",
    name: "시스템 연결자",
    short: "반복 구조를 바꾸는 사람",
    description:
      "문제 행동을 개인에게만 묶지 않고 수업 리듬, 학급 문화, 학교 절차와 연결해 반복 조건을 바꿉니다.",
    check: "system",
  },
];

const fallbackActionsByRole = {
  observer: {
    role: "observer",
    title: "먼저 장면을 관찰하기",
    detail: "판단과 지목을 늦추고, 지금 교실에서 실제로 보이는 말, 시선, 소리, 움직임을 확인합니다.",
  },
  summarizer: {
    role: "summarizer",
    title: "끊어진 흐름을 정리하기",
    detail: "누가 나쁜지보다 어떤 흐름이 끊겼는지, 공동체에서 무엇이 손상되었는지를 짧게 말합니다.",
  },
  boundary: {
    role: "boundary",
    title: "허용되지 않는 선을 말하기",
    detail: "학생을 공격하지 않고, 교실에서 멈춰야 할 말과 행동의 기준을 분명히 세웁니다.",
  },
  system: {
    role: "system",
    title: "반복 조건을 조정하기",
    detail: "같은 장면이 반복되는 수업 리듬, 참여 구조, 학급 문화, 학교 절차를 함께 봅니다.",
  },
};

const scenarios = [
  {
    id: "chat-during-explain",
    title: "설명 중 대화가 번지는 장면",
    category: "수업흐름",
    urgency: "낮음",
    focus: "개인을 지목해 1대1 대치로 만들기보다 교실 흐름과 공동체 기준을 먼저 드러냅니다.",
    situation:
      "교사가 칠판에 오늘 활동 순서를 쓰며 설명하는 중입니다. 뒤쪽 두 학생이 작은 목소리로 말을 주고받기 시작하고, 옆자리 학생이 웃음을 참다가 소리를 냅니다. 앞줄 학생 몇 명은 교사를 보고 있지만 시선이 뒤쪽으로 흔들립니다. 교사는 설명을 계속해야 할지, 바로 이름을 불러 멈춰야 할지 순간적으로 망설입니다.",
    tags: ["수업 설명", "개인 대화", "웃음 확산"],
    recommended: ["observer", "summarizer", "boundary", "system"],
    actions: [
      ["observer", "3초 멈추고 분포 보기", "누가 시작했는지보다 듣는 학생과 대화하는 학생이 어떻게 나뉘는지 봅니다."],
      ["summarizer", "끊어진 지점 말하기", "대화와 웃음 때문에 설명 흐름이 멈췄다는 사실을 짧게 정리합니다."],
      ["boundary", "수업 중 대화의 선 세우기", "개인 대화가 계속되면 수업을 이어갈 수 없다는 기준을 말합니다."],
      ["system", "질문·확인 시간을 따로 열기", "설명 후 확인 시간을 주어 대화 욕구를 수업 구조 안으로 넣습니다."],
    ],
  },
  {
    id: "mocking-language",
    title: "조롱 섞인 말로 웃음이 생긴 장면",
    category: "말의경계",
    urgency: "높음",
    focus: "웃음 구조를 끊고 말의 기준을 분명히 세워 학생이 공동체 안으로 돌아올 길을 만듭니다.",
    situation:
      "문제 풀이를 하던 중 한 학생이 친구의 이름을 섞어 낮추는 말을 던집니다. 말한 학생은 장난처럼 웃고, 주변 몇 명은 바로 따라 웃습니다. 당사자는 웃는 척하지만 표정이 굳고 고개를 숙입니다. 교사는 화가 올라오지만, 말한 학생을 공개적으로 몰아붙이면 반 전체가 그 학생과 교사의 힘겨루기를 보게 될 것 같습니다.",
    tags: ["조롱", "말의 경계", "공동체 안전"],
    recommended: ["observer", "summarizer", "boundary", "system"],
    actions: [
      ["observer", "웃음의 확산을 서술하기", "발언 뒤 몇몇 학생이 웃었고 교실 분위기가 바뀌었다는 장면을 드러냅니다."],
      ["summarizer", "공동체 안전의 손상 짚기", "농담인지보다 그 말이 안전한 분위기를 흔들었다는 점을 정리합니다."],
      ["boundary", "낮추는 언어 금지하기", "정체성이나 특징을 웃음거리로 삼는 말은 허용하지 않는다고 말합니다."],
      ["system", "말의 기준을 학급 규칙으로 연결하기", "반복되는 조롱이라면 학급 차원에서 말의 기준을 다시 확인합니다."],
    ],
  },
  {
    id: "group-stuck",
    title: "모둠활동이 시작되지 않는 장면",
    category: "활동전환",
    urgency: "낮음",
    focus: "활동 시작선과 역할 구조를 다시 세웁니다.",
    situation:
      "모둠활동 안내를 마치고 5분이 지났습니다. 한 모둠은 기록자를 정해 바로 쓰기 시작했지만, 다른 모둠은 종이를 가운데 놓은 채 서로 눈치만 봅니다. 한 학생은 의자를 뒤로 빼고 다른 모둠을 보고 있고, 또 다른 학생은 '누가 해?'라고 말하며 웃습니다. 교사는 준비 안 된 모둠만 지적해야 할지, 활동 구조를 다시 잡아야 할지 고민합니다.",
    tags: ["모둠활동", "역할 나누기", "활동 전환"],
    recommended: ["observer", "summarizer", "system"],
    actions: [
      ["observer", "시작한 모둠과 멈춘 모둠 구분하기", "활동에 들어온 모둠과 아직 시작하지 못한 모둠을 함께 봅니다."],
      ["summarizer", "역할 나누기가 시작되지 못했음을 정리하기", "움직임 때문에 모둠활동의 첫 단계가 멈춘 상황을 말합니다."],
      ["system", "역할을 정하고 다시 시작하기", "말하는 사람, 기록하는 사람, 발표하는 사람을 먼저 정하게 합니다."],
    ],
  },
  {
    id: "presentation-interrupt",
    title: "발표 중 끼어드는 말이 나온 장면",
    category: "수업흐름",
    urgency: "중간",
    focus: "발표자의 흐름과 듣는 규칙을 보호합니다.",
    situation:
      "한 학생이 앞에서 발표를 하고 있습니다. 발표자가 두 번째 문장을 읽는 순간, 뒤쪽에서 '그거 아닌데?'라는 말이 끼어듭니다. 몇몇 학생이 끼어든 학생을 쳐다보고, 발표자는 말을 멈춘 채 종이를 내려다봅니다. 교사는 끼어든 말을 바로 혼내고 싶지만, 발표자를 다시 세우는 일이 먼저인지 판단해야 합니다.",
    tags: ["발표", "끼어들기", "듣는 규칙"],
    recommended: ["observer", "summarizer", "boundary"],
    actions: [
      ["observer", "발표가 멈춘 장면 말하기", "끼어든 말 뒤 발표자가 멈추고 시선이 이동한 사실을 말합니다."],
      ["summarizer", "발표 흐름의 손상 정리하기", "친구 말 중간에 다른 말이 들어와 발표가 이어지지 못했다고 정리합니다."],
      ["boundary", "발표를 끊지 않는 기준 세우기", "발표 중 끼어들거나 방해하는 행동은 허용하지 않는다고 말합니다."],
      ["system", "질문 시간을 분리하기", "발표가 끝난 뒤 질문 시간을 따로 갖는 방식으로 조정합니다."],
    ],
  },
  {
    id: "conflict-voices",
    title: "두 학생의 목소리가 올라가는 장면",
    category: "갈등",
    urgency: "높음",
    focus: "내용 판단보다 말의 방식과 순서를 먼저 안정시킵니다.",
    situation:
      "모둠 안에서 역할을 정하다가 두 학생의 목소리가 동시에 커집니다. 한 학생은 '내가 먼저 말했잖아'라고 하고, 다른 학생은 '네가 계속 시켰잖아'라고 맞받습니다. 주변 학생들은 활동지를 내려놓고 두 사람을 보고 있습니다. 교사는 누가 맞는지 확인하고 싶지만, 지금은 내용보다 말의 방식이 먼저 무너지고 있습니다.",
    tags: ["갈등", "목소리 상승", "말의 순서"],
    recommended: ["observer", "boundary", "system"],
    actions: [
      ["observer", "동시 발화와 목소리 변화를 말하기", "두 사람이 동시에 말하고 목소리 톤이 올라간 상태를 서술합니다."],
      ["boundary", "말의 순서 세우기", "서로를 밀어붙이는 방식은 허용하지 않고 한 사람씩 말하게 합니다."],
      ["system", "후속 대화 구조로 연결하기", "즉석 말싸움이 아니라 순서 있는 대화나 별도 확인으로 넘깁니다."],
    ],
  },
  {
    id: "repeated-question",
    title: "질문이 계속 흐름을 끊는 장면",
    category: "수업흐름",
    urgency: "중간",
    focus: "질문 자체를 막지 않고 질문이 들어올 자리를 다시 설계합니다.",
    situation:
      "교사가 새 개념을 설명할 때마다 한 학생이 손을 들지 않고 바로 질문을 던집니다. 질문 자체는 수업과 관련이 있지만, 설명이 한 문단도 이어지지 못합니다. 몇몇 학생은 고개를 숙이고 기다리고, 한 학생은 작게 한숨을 쉽니다. 교사는 질문을 막으면 학생의 참여를 꺾는 것 같고, 계속 받으면 수업 흐름이 무너질 것 같습니다.",
    tags: ["질문 타이밍", "설명 흐름", "참여 구조"],
    recommended: ["observer", "summarizer", "system"],
    actions: [
      ["observer", "질문이 나오는 시점 보기", "설명 중 어느 지점에서 질문이 반복되는지 먼저 관찰합니다."],
      ["summarizer", "질문으로 설명이 끊긴 사실 정리하기", "질문이 잘못이라는 말보다 설명 흐름이 멈춘 상황을 말합니다."],
      ["system", "질문 보관 방식 만들기", "질문을 칠판이나 메모에 적어 두고 설명 후 확인하는 구조로 바꿉니다."],
    ],
  },
  {
    id: "late-ready",
    title: "수업 준비가 늦어지는 장면",
    category: "활동전환",
    urgency: "낮음",
    focus: "준비 안 된 학생을 몰아붙이기보다 전환 절차를 선명하게 합니다.",
    situation:
      "종이 울린 지 2분이 지났지만 교실 앞쪽은 아직 가방을 정리 중이고, 뒤쪽에서는 물병을 돌려 마시는 학생이 보입니다. 교사가 '책 펴세요'라고 말하자 여기저기서 '잠깐만요', '필통이 없어요', '어제 어디까지 했어요?'라는 말이 이어집니다. 교사는 재촉할수록 말이 늘어나는 느낌을 받습니다.",
    tags: ["수업 시작", "준비", "전환"],
    recommended: ["observer", "boundary", "system"],
    actions: [
      ["observer", "준비된 상태와 아닌 상태를 구분하기", "몇 명은 준비됐고 몇 명은 아직 준비 중이라는 사실을 말합니다."],
      ["boundary", "수업 시작 기준 말하기", "수업 시작 후에는 교재를 펴고 설명을 듣는 기준을 세웁니다."],
      ["system", "시작 루틴 만들기", "입실 후 1분 준비, 첫 과제 확인 같은 반복 루틴으로 연결합니다."],
    ],
  },
  {
    id: "refusal-work",
    title: "활동 참여를 거부하는 장면",
    category: "갈등",
    urgency: "중간",
    focus: "힘겨루기로 들어가지 않고 공동체 안에서 다시 맡을 수 있는 최소 역할을 제시합니다.",
    situation:
      "개별 활동 시간이 시작됐지만 한 학생이 활동지를 책상 끝으로 밀어놓고 팔짱을 낍니다. 교사가 다가가자 학생은 들릴 듯 말 듯 '안 해요'라고 말합니다. 주변 학생 두세 명이 그 학생과 교사를 번갈아 보고 있습니다. 교사는 지금 밀리면 수업이 무너질 것 같고, 강하게 밀어붙이면 공개적인 힘겨루기가 될 것 같습니다.",
    tags: ["참여 거부", "힘겨루기", "최소 참여"],
    recommended: ["observer", "boundary", "system"],
    actions: [
      ["observer", "참여가 멈춘 상태 말하기", "활동지가 밀려 있고 활동 시작이 되지 않은 상태를 사실로 말합니다."],
      ["boundary", "거부 표현의 선 세우기", "하지 않겠다는 말로 수업 흐름을 계속 끊는 것은 허용하지 않는다고 말합니다."],
      ["system", "선택 가능한 최소 역할 주기", "전체 과제 대신 첫 문항, 핵심 단어 표시처럼 공동체 활동에 다시 들어올 수 있는 구조를 만듭니다."],
    ],
  },
  {
    id: "side-teasing",
    title: "특정 학생을 반복적으로 건드리는 장면",
    category: "말의경계",
    urgency: "높음",
    focus: "장난 프레임을 걷어내고 피해 가능성과 반복 구조를 봅니다.",
    situation:
      "수업 중 문제를 읽는 학생에게 옆자리 학생이 작게 별명을 부릅니다. 처음에는 쉬는 시간 장난처럼 들렸지만, 오늘만 세 번째입니다. 당사자는 웃으며 '하지 마'라고 말하지만 목소리가 작고, 주변 학생들은 장난으로 넘깁니다. 교사는 이걸 크게 다루면 오히려 당사자가 더 민망해질까 걱정됩니다.",
    tags: ["반복 놀림", "피해 가능성", "학급 문화"],
    recommended: ["observer", "summarizer", "boundary", "system"],
    actions: [
      ["observer", "반응 차이를 보기", "몇 명은 웃고 있지만 당사자의 표정과 교실 분위기가 달라진 점을 봅니다."],
      ["summarizer", "장난이 관계를 손상시킨 점 정리하기", "장난인지보다 한 학생이 웃음거리로 놓인 상황을 말합니다."],
      ["boundary", "특정인을 웃음거리로 삼지 않기", "특정 학생을 반복적으로 건드리는 말은 허용하지 않는다고 말합니다."],
      ["system", "학급 말 문화로 다루기", "한 번의 사건으로 끝내지 않고 학급의 반응 방식과 말의 기준을 다룹니다."],
    ],
  },
  {
    id: "whole-class-noise",
    title: "반 전체 소리가 커지는 장면",
    category: "수업흐름",
    urgency: "중간",
    focus: "한 명을 잡기보다 전체 소리와 활동 구조를 조정합니다.",
    situation:
      "활동을 시작한 지 10분쯤 지나자 교실 전체의 소리가 점점 커집니다. 누가 먼저인지 특정하기 어렵고, 한쪽을 조용히 시키면 다른 쪽에서 다시 소리가 올라옵니다. 교사는 목소리를 높여야 할 것 같지만 이미 목이 아프고, 몇 명을 지적해도 잠깐 조용해졌다가 다시 같은 흐름이 반복될 것 같습니다.",
    tags: ["전체 소음", "집단 반응", "수업 리듬"],
    recommended: ["observer", "summarizer", "system"],
    actions: [
      ["observer", "소리 크기와 집중 분산을 말하기", "전체 목소리가 커져 수업 집중이 어려운 상태임을 드러냅니다."],
      ["summarizer", "수업이 멈춘 상태 정리하기", "소리가 이어지며 다음 설명으로 넘어가지 못하는 상황을 정리합니다."],
      ["system", "설명과 활동 시간을 쪼개기", "설명 5분, 활동 10분처럼 리듬을 나누어 다시 운영합니다."],
    ],
  },
  {
    id: "head-down-student",
    title: "수업 시간마다 엎드리는 학생",
    category: "관계감각",
    urgency: "낮음",
    focus: "반항으로 단정하기 전에 텔레를 회복하고, 관찰 가능한 패턴과 작은 접점을 봅니다.",
    situation:
      "수업이 시작된 지 8분쯤 지났을 때 한 학생이 팔을 베고 엎드립니다. 어제도 비슷했고, 지난주에도 두 번 있었습니다. 교사는 순간적으로 '내 수업만 이러는 건가?'라는 생각이 올라오고 가슴이 답답해집니다. 다른 학생들이 그 학생을 힐끗 보는 것 같아, 바로 깨워야 할지 그냥 두고 볼지 흔들립니다.",
    tags: ["텔레", "엎드림", "교사 소진"],
    recommended: ["observer", "system"],
    transitionPoint:
      "반항으로 해석하기 전에 3초 멈추고, 언제 엎드리는지와 짧은 터치에 반응하는지부터 봅니다.",
    controlText: "“또 엎드려? 내 수업이 그렇게 우스워? 당장 일어나.”",
    avoidText: "못 본 척하고 지나가지만, 이후에도 같은 장면이 반복되어 교사 안에 답답함만 쌓인다.",
    actions: [
      ["observer", "반항 해석을 멈추고 패턴 보기", "엎드림을 곧바로 수업 거부로 읽지 않고, 몸 상태와 수업 리듬, 반복 시점을 관찰합니다."],
      ["system", "수업 후 짧게 확인하기", "수업 중 대결하지 않고, 필요하면 수업 뒤 따로 불러 어떤 영향이 생기는지 짧게 확인합니다."],
    ],
  },
  {
    id: "correction-backfire",
    title: "지적받자 상대를 공격하는 학생",
    category: "관계방어",
    urgency: "중간",
    focus: "행동 수정 요구와 체면 방어를 구분하고, 학생이 다시 선택할 작은 문장을 제시합니다.",
    situation:
      "교사가 한 학생에게 '지금은 옆 친구에게 말 걸 시간이 아니야'라고 말합니다. 그러자 학생은 바로 몸을 돌리며 '쟤도 했는데요?'라고 말하고, 지목당한 친구는 억울한 표정으로 반응합니다. 주변 학생들이 기다렸다는 듯 두 사람을 봅니다. 교사는 원래 지도하려던 행동보다 학생의 말대꾸에 더 화가 나는 것을 느낍니다.",
    tags: ["체면 방어", "상대 지적", "역할 전환"],
    recommended: ["summarizer", "boundary", "observer"],
    transitionPoint:
      "상대 지적으로 장면을 바꾸는 역할을 멈추고, 자기 행동 하나만 짧게 확인하는 문장으로 이동합니다.",
    controlText: "“말대꾸하지 마. 지금 네가 잘못했잖아.”",
    avoidText: "다른 학생 이야기로 넘어가며 원래 끊어진 수업 흐름과 기준을 정리하지 않는다.",
    actions: [
      ["summarizer", "장면이 바뀐 지점 정리하기", "처음 문제였던 행동과 지금 상대를 지적하는 반응을 분리해서 정리합니다."],
      ["boundary", "상대 공격의 선 세우기", "자기 행동을 확인해야 할 순간에 다른 학생을 공격하는 방식은 허용하지 않는다고 말합니다."],
      ["observer", "집단 시선의 변화를 말하기", "지적 뒤 시선이 모이고 장면이 힘겨루기로 바뀌는 흐름을 봅니다."],
    ],
  },
  {
    id: "formal-apology",
    title: "미안해, 괜찮아로 끝나는 갈등",
    category: "회복",
    urgency: "중간",
    focus: "사과와 용서를 공식처럼 끝내지 않고, 다음 장면에서 수행할 작은 행동으로 연결합니다.",
    situation:
      "두 학생이 쉬는 시간에 다툰 뒤 수업 시간까지 서로를 피하고 있습니다. 교사가 불러 '서로 사과하고 끝내자'고 하자 한 학생은 바닥을 보며 '미안해'라고 하고, 다른 학생은 작은 목소리로 '괜찮아'라고 말합니다. 말은 끝났지만 두 학생의 표정은 풀리지 않았고, 주변 친구들도 무슨 일이 정리된 것인지 모르는 눈치입니다.",
    tags: ["사과", "회복", "구체적 행동"],
    recommended: ["summarizer", "boundary", "system"],
    transitionPoint:
      "사과 문장 뒤에 무엇이 미안한지, 무엇은 괜찮지 않은지, 다음에는 어떤 행동을 할지 한 문장을 붙입니다.",
    controlText: "“빨리 사과해. 됐지? 이제 끝.”",
    avoidText: "서로 말은 했으니 해결된 것으로 보고, 다음 행동 선택을 정하지 않은 채 넘어간다.",
    actions: [
      ["summarizer", "무엇이 손상됐는지 묻기", "미안하다는 말 전에 어떤 말과 행동이 관계와 수업 흐름을 끊었는지 정리합니다."],
      ["boundary", "괜찮은 것과 아닌 것 구분하기", "관계는 회복할 수 있지만 같은 조롱이나 끼어들기는 반복되면 안 된다고 선을 세웁니다."],
      ["system", "다음 행동 문장 만들기", "다음 비슷한 장면에서 사용할 짧은 행동 문장을 학생과 함께 정합니다."],
    ],
  },
  {
    id: "teacher-avoidance",
    title: "유연함처럼 보이는 회피",
    category: "교사역할",
    urgency: "중간",
    focus: "갈등을 피하는 것과 틀을 유연하게 조정하는 것을 구분합니다.",
    situation:
      "수업 중 작은 잡담과 웃음이 여러 번 지나갑니다. 교사는 오늘 분위기가 예민하니 '괜히 건드리지 말고 유연하게 넘기자'고 생각합니다. 하지만 10분 뒤 같은 학생들이 더 큰 목소리로 장난을 치고, 조용히 있던 학생들의 집중도 흔들립니다. 교사는 이제 와서 경계를 세우면 너무 늦은 것 같아 더 말하기 어려워집니다.",
    tags: ["회피", "유연함", "경계"],
    recommended: ["observer", "boundary", "system"],
    transitionPoint:
      "회피를 유연함으로 부르지 않고, 지금 벌어진 사실 하나와 허용되지 않는 선 하나를 짧게 말합니다.",
    controlText: "참다가 한 번에 폭발하며 “너희는 왜 항상 이 모양이야?”라고 말한다.",
    avoidText: "불편한 장면을 없는 것처럼 넘기며 기준을 세워야 할 순간을 계속 지나친다.",
    actions: [
      ["observer", "반복되는 작은 흐름 보기", "잡담과 조롱이 작게 반복되며 교실 기준이 흐려지는 장면을 봅니다."],
      ["boundary", "작고 이른 경계 세우기", "크게 폭발하기 전에 지금 이 말과 행동은 여기서 멈춘다고 짧게 말합니다."],
      ["system", "반복 조건 조정하기", "넘어가서 해결되지 않는다면 말의 기준이나 활동 구조를 학급 차원에서 다시 세웁니다."],
    ],
  },
];

const sentences = [
  ["observer", null, "지금 몇 명은 듣고 있고, 몇 명은 아직 다른 얘기를 하고 있네요."],
  ["observer", null, "수업이 시작됐는데 아직 수업 준비가 안 된 친구들이 있어요."],
  ["observer", null, "지금 웃음이 커지면서 수업 집중이 잠깐 흐트러졌어요."],
  ["observer", null, "방금 몇몇 친구들의 행동이 있은 다음에 수업 분위기가 달라졌네요."],
  ["observer", null, "지금 전반적으로 목소리가 커져서 수업에 집중하기 어렵습니다."],
  ["observer", null, "지금 한 명만의 행동이 아니라, 주변에서 같이 반응하면서 더 소란스러워지고 있어요."],
  ["observer", null, "지금 여러분 집중이 수업에서 벗어났습니다."],
  ["observer", null, "방금까지는 활동이 잘 되고 있었는데, 지금은 멈춘 모둠이 보이네요."],
  ["observer", null, "지금 장난처럼 하고 있지만, 수업은 끊기고 있어요."],
  ["observer", null, "지금 활동에 들어온 친구도 있고, 아직 시작하지 않은 친구도 있어요."],
  ["observer", null, "지금 교실 분위기가 조금 흔들리고 있어요."],
  ["observer", null, "지금 웃음이 커지면서 수업 집중이 흐트러지고 있어요."],
  ["observer", null, "지금 몇몇 친구들의 시선이 수업에서 벗어나 있어요."],
  ["observer", null, "지금 교실이 잠깐 멈춘 것 같아요. 다시 수업으로 돌아오겠습니다."],
  ["observer", null, "선생님은 지금 누가 잘못했는지보다, 무슨 일이 벌어지고 있는지를 먼저 보려고 해요."],
  ["observer", null, "이 장면을 반항으로 단정하기 전에, 먼저 어떤 패턴인지 보겠습니다."],
  ["observer", null, "지금 선생님도 바로 반응하고 싶은 마음이 올라오지만, 먼저 장면을 보겠습니다."],

  ["summarizer", null, "잠시만요. 설명하는 중에 대화가 이어지면서, 지금 수업 설명이 끊겼어요."],
  ["summarizer", null, "지금은 이유를 따지기보다, 중요한 것은 이러한 행동으로 수업이 멈춰졌다는 겁니다."],
  ["summarizer", null, "장난인지 아닌지를 따지기보다, 지금 수업 진행이 멈춘 상황입니다."],
  ["summarizer", null, "처음에는 짧은 말이었지만, 웃음과 반응이 이어지면서 수업 집중이 끊겼습니다."],
  ["summarizer", null, "수업 중에 개인 대화가 이어지면서, 설명을 듣는 흐름이 멈췄습니다."],
  ["summarizer", null, "지금 정리할 것은 누가 나쁘냐가 아니라, 수업이 어디서 끊겼는가입니다."],
  ["summarizer", null, "수업 중에 말과 웃음이 이어지면서, 지금 수업 흐름이 잠깐 끊긴 상황입니다."],
  ["summarizer", null, "웃음이 이어지면서, 설명을 듣는 분위기가 멈췄습니다."],
  ["summarizer", null, "말이 오간 뒤에 설명이 이어지지 못하고 수업이 멈췄어요."],
  ["summarizer", null, "개인 장난처럼 시작됐지만, 지금은 반 전체의 수업 집중이 멈춘 상황입니다."],
  ["summarizer", null, "움직임이 이어지면서 모둠활동이 멈추고 역할 나누기가 시작되지 못했어요."],
  ["summarizer", null, "지금 수업 설명이 끊겨서 다음 활동으로 넘어가지 못하고 있어요."],
  ["summarizer", null, "친구가 말하는 중간에 다른 말이 끼어들면서, 발표가 이어지지 못했습니다."],
  ["summarizer", null, "짧은 말이었지만, 그 뒤에 수업 분위기가 흐트러지고 설명이 이어지지 못했습니다."],
  ["summarizer", null, "지금 수업 흐름이 멈춰서 다음 설명이 이어지지 못하고 있어요."],
  ["summarizer", null, "지금은 누가 더 잘못했는지가 아니라, 어떤 말 때문에 관계와 수업 흐름이 끊겼는지를 정리하겠습니다."],
  ["summarizer", null, "사과하기 전에 무엇이 미안한지부터 한 문장으로 확인하겠습니다."],

  ["boundary", null, "그 말은 여기서 멈춥니다. 더 이어가는 것은 허용하지 않겠습니다."],
  ["boundary", null, "친구를 비웃는 말은 우리 교실에서 허용하지 않습니다."],
  ["boundary", null, "지금은 말대꾸로 이어갈 시간이 아닙니다. 그 선은 넘지 마세요."],
  ["boundary", null, "친구 발표를 끊거나 방해하는 행동은 허용하지 않습니다."],
  ["boundary", null, "지금부터 개인 대화는 멈춥니다. 수업 중 대화의 선을 넘지 않습니다."],
  ["boundary", null, "누군가를 깎아내리는 말로 웃음을 만드는 것은 허용하지 않습니다."],
  ["boundary", null, "그 말은 상대를 불편하게 만들 수 있습니다. 여기서 더 이어가는 것은 허락하지 않겠습니다."],
  ["boundary", null, "지금 행동은 수업을 방해하는 행동입니다. 이 선을 넘는 것은 허용하지 않습니다."],
  ["boundary", null, "농담이어도 상대를 불편하게 만들 수 있는 말은 허용하지 않습니다."],
  ["boundary", null, "수업에 참여하지 않고 계속 흐름을 끊는 행동은 허용하지 않겠습니다."],
  ["boundary", null, "선생님은 이 상황을 말싸움으로 이어가지 않겠습니다. 그 선은 넘지 않습니다."],
  ["boundary", null, "설명은 여기까지입니다. 같은 행동이 반복되는 것은 허용하지 않겠습니다."],
  ["boundary", null, "친구를 조롱하는 말은 이 수업에서 허용하지 않습니다."],
  ["boundary", null, "수업을 계속 끊는 행동은 허용하지 않겠습니다. 지금 여기서 멈춥니다."],
  ["boundary", null, "이 선은 분명히 하겠습니다. 수업을 방해하는 말과 행동은 허용하지 않습니다."],
  ["boundary", null, "다른 친구를 끌어와서 장면을 바꾸는 방식은 여기서 멈춥니다."],
  ["boundary", null, "관계는 회복할 수 있지만, 같은 방식으로 상대를 낮추는 말은 반복되면 안 됩니다."],

  ["system", "수업 안 시스템", "질문은 지금 바로 받지 않고, 설명이 끝난 뒤 5분 동안 받겠습니다."],
  ["system", "수업 안 시스템", "지금은 자리 이동 시간이 아닙니다. 자리 이동은 모둠활동이 시작된 뒤에 하겠습니다."],
  ["system", "수업 안 시스템", "개인 질문은 잠시 뒤 활동 시간에 받겠습니다. 지금은 전체 설명을 먼저 듣겠습니다."],
  ["system", "수업 안 시스템", "발표 중에는 질문하지 않고, 발표가 끝난 뒤 질문 시간을 따로 갖겠습니다."],
  ["system", "수업 안 시스템", "지금은 전체 설명 시간입니다. 옆 사람과 확인하는 시간은 설명이 끝난 뒤에 주겠습니다."],
  ["system", "수업 안 시스템", "모둠 안에서 이야기할 시간은 따로 드리겠습니다. 지금은 선생님 설명을 먼저 듣겠습니다."],
  ["system", "수업 안 시스템", "지금 활동이 시작되지 못하고 있으니, 먼저 역할을 다시 나누고 시작하겠습니다."],
  ["system", "수업 안 시스템", "모둠활동에서는 말하는 사람, 기록하는 사람, 발표하는 사람을 먼저 정하고 시작하겠습니다."],
  ["system", "수업 안 시스템", "지금부터는 손을 들고 말하는 방식으로 진행하겠습니다."],
  ["system", "수업 안 시스템", "질문이 많아지고 있으니, 질문은 칠판에 적어 두고 설명 후에 하나씩 확인하겠습니다."],
  ["system", "수업 안 시스템", "지금은 자유롭게 말하는 시간이 아니라, 순서대로 듣고 답하는 시간으로 바꾸겠습니다."],
  ["system", "수업 안 시스템", "활동이 흔들리고 있으니, 개인 활동 3분 후에 모둠활동으로 넘어가겠습니다."],
  ["system", "수업 안 시스템", "지금은 말로 계속 주고받지 않고, 각자 학습지에 먼저 적고 나누겠습니다."],
  ["system", "수업 안 시스템", "수업 흐름이 자꾸 끊기고 있으니, 지금부터는 설명 5분, 활동 10분으로 나누어 진행하겠습니다."],
  ["system", "수업 안 시스템", "지금 이 상황은 수업 방식으로 조정하겠습니다. 질문은 뒤로 미루고, 먼저 활동 순서를 다시 안내하겠습니다."],
  ["system", "수업 안 시스템", "오늘은 참여가 어려운 친구도 첫 문항 표시부터 시작하겠습니다."],
  ["system", "수업 안 시스템", "다음 비슷한 장면에서는 사용할 행동 문장을 하나 정하고 다시 시작하겠습니다."],

  ["system", "학급 시스템", "이 상황은 이 수업만의 문제가 아닌 것 같아서, 담임선생님과 함께 학급 규칙을 다시 확인하겠습니다."],
  ["system", "학급 시스템", "수업 분위기가 계속 흔들리고 있으니, 담임선생님과 이 반의 수업 약속을 함께 논의하겠습니다."],
  ["system", "학급 시스템", "이 문제는 한 학생의 문제가 아니라 학급 전체의 수업 분위기와 연결되어 있어서, 담임선생님께 공유하겠습니다."],
  ["system", "학급 시스템", "비슷한 상황이 여러 번 반복되고 있으니, 교과선생님들과 함께 이 반의 수업 흐름을 살펴보겠습니다."],
  ["system", "학급 시스템", "우리 반에서 수업 중 말하기 방식이 계속 문제가 되고 있어서, 학급 차원에서 다시 다루겠습니다."],
  ["system", "학급 시스템", "이 상황은 지금 이 시간에만 정리하고 끝낼 일이 아니라, 학급 규칙과 연결해서 다시 보겠습니다."],
  ["system", "학급 시스템", "수업 중 개인 대화와 반응이 반복되고 있으니, 담임선생님과 함께 학급회의에서 다룰 수 있도록 하겠습니다."],
  ["system", "학급 시스템", "이 반의 수업 참여 방식이 계속 흔들리고 있어서, 담임선생님과 교과선생님들이 함께 기준을 맞추겠습니다."],
  ["system", "학급 시스템", "발표를 듣는 태도가 반복적으로 어려워지고 있으니, 학급에서 듣는 규칙을 다시 정리하도록 하겠습니다."],
  ["system", "학급 시스템", "이 문제는 특정 시간만의 문제가 아니라 학급 분위기와 연결되어 있어, 담임선생님과 상의하겠습니다."],
  ["system", "학급 시스템", "수업 중 장난과 조롱의 경계가 흐려지고 있어서, 학급 차원에서 말의 기준을 다시 확인하겠습니다."],
  ["system", "학급 시스템", "모둠활동이 여러 번 제대로 시작되지 못하고 있으니, 학급 전체의 활동 규칙을 다시 세우겠습니다."],
  ["system", "학급 시스템", "이 상황은 교과 시간마다 반복될 수 있어서, 담임선생님과 함께 공동 기준을 만들겠습니다."],
  ["system", "학급 시스템", "수업을 방해하는 반응이 개인 행동을 넘어 학급 분위기로 번지고 있어서, 학급 차원에서 다루겠습니다."],
  ["system", "학급 시스템", "오늘 일은 이 시간에만 끝내지 않고, 담임선생님과 공유해서 우리 반 수업 규칙을 다시 논의하겠습니다."],

  ["system", "학년부·학교 시스템", "이 사안은 수업 안에서만 정리할 수 있는 수준을 넘어서, 학년부에 공유하겠습니다."],
  ["system", "학년부·학교 시스템", "지금 상황은 정식으로 학년부에서 논의가 필요한 사안입니다."],
  ["system", "학년부·학교 시스템", "반복적인 수업 방해가 이어지고 있어서, 이 사안은 학년부 회의를 거치도록 하겠습니다."],
  ["system", "학년부·학교 시스템", "친구를 향한 거친 말과 행동이 반복되고 있으니, 생활교육위원회 차원에서 다뤄야 하는지 확인하겠습니다."],
  ["system", "학년부·학교 시스템", "이 사안은 교실 안에서 구두로만 끝낼 수 없어서, 학교 절차에 따라 다루겠습니다."],
  ["system", "학년부·학교 시스템", "수업권이 계속 침해되고 있어, 학년부와 학생부에 정식으로 공유하겠습니다."],
  ["system", "학년부·학교 시스템", "이 일은 담임선생님과 학년부가 함께 확인해야 할 사안입니다."],
  ["system", "학년부·학교 시스템", "지금 상황은 학생 간 관계 문제로도 연결될 수 있어서, 학년부에서 사실관계를 확인하겠습니다."],
  ["system", "학년부·학교 시스템", "반복된 조롱이나 모욕으로 이어질 수 있는 사안이라, 학교의 생활교육 절차에 따라 다루겠습니다."],
  ["system", "학년부·학교 시스템", "이 사안은 생활교육위원회에서 검토가 필요한지 확인하겠습니다."],
  ["system", "학년부·학교 시스템", "수업 중 발생한 일이지만, 영향이 커서 학년부 차원에서 논의하겠습니다."],
  ["system", "학년부·학교 시스템", "이 문제는 한 시간의 수업 지도로 끝내기 어렵기 때문에, 학교 차원의 생활교육 절차로 연결하겠습니다."],
  ["system", "학년부·학교 시스템", "학생 간 피해가 발생했는지 확인이 필요하므로, 담임선생님과 학년부에 정식으로 전달하겠습니다."],
  ["system", "학년부·학교 시스템", "지금 상황은 선생님의 즉각 지도로만 처리하지 않고, 학교의 정해진 절차에 따라 확인하겠습니다."],
  ["system", "학년부·학교 시스템", "이 사안은 기록하고, 학년부와 학생부가 함께 논의하도록 하겠습니다."],
].map(([role, level, text], index) => ({
  id: `${role}-${String(index + 1).padStart(3, "0")}`,
  role,
  level,
  text,
}));

scenarios.forEach((scenario) => {
  scenario.actions = scenario.actions.map(([role, title, detail], index) => ({
    id: `${scenario.id}-action-${index + 1}`,
    role,
    title,
    detail,
  }));
});

const studyCards = [
  {
    label: "핵심 개념",
    front: "생활교육은 행동을 멈추는 것에서 끝나도 될까?",
    back: "아니다. 행동 중단은 필요하지만, 반복되는 역할이 바뀌지 않으면 같은 장면은 다시 돌아온다.",
    note: "실전에서는 '멈췄는가?' 다음에 '이 아이가 들어갈 다른 역할이 보이는가?'를 봅니다.",
  },
  {
    label: "공식 경계",
    front: "역할선택 생활교육에는 상황별 정답이 있을까?",
    back:
      "없다. 같은 장면처럼 보여도 관계, 집단 분위기, 교사의 감정, 학생의 삶의 패턴에 따라 개입은 달라진다.",
    note: "카드는 답을 외우기 위한 도구가 아니라 장면을 보는 렌즈를 연습하기 위한 도구입니다.",
  },
  {
    label: "역할",
    front: "역할은 가짜 모습일까?",
    back:
      "아니다. 역할은 지금까지의 경험 속에서 가장 익숙하고 안전했던 행동 방식이다.",
    note: "문제행동을 볼 때 '나쁜 선택'만 보지 말고, 그 역할이 한때 어떤 효과와 안전을 줬는지 함께 봅니다.",
  },
  {
    label: "유연함",
    front: "잘한다는 것은 완벽하게 통제한다는 뜻일까?",
    back:
      "아니다. 잘한다는 것은 유연하다는 뜻이다. 못한다는 것은 하나의 역할에 고착되어 같은 방식만 반복한다는 뜻에 가깝다.",
    note: "교사가 자꾸 설명한다면 설명 능력의 문제가 아니라 설명자 역할에 고착된 것일 수 있습니다.",
  },
  {
    label: "텔레",
    front: "텔레가 살아 있다는 것은 무엇일까?",
    back:
      "학생을 '늘 그런 아이'로 보지 않고, 오늘의 몸 상태와 관계 흐름, 수업 구조, 교사 자신의 반응까지 새롭게 감각하는 것이다.",
    note: "'또 저러네'가 먼저 올라오면 텔레가 깨지고 있는 신호일 수 있습니다.",
  },
  {
    label: "깨진 텔레",
    front: "텔레가 깨지면 무엇이 반복될까?",
    back:
      "학생은 '반항하는 아이', '엎드리는 아이'로 고정되고, 교사도 다그치거나 포기하는 역할로 끌려간다.",
    note: "이때 문제는 감정이 있다는 것이 아니라, 감정이 교사의 개입 위치를 대신 결정한다는 점입니다.",
  },
  {
    label: "학생의 자동반응",
    front: "아이의 반복 행동은 왜 쉽게 바뀌지 않을까?",
    back:
      "그 역할이 빠르게 효과를 냈고, 감당 가능한 에너지로 가능했고, 관계 속에서 어느 정도 안전을 보장했기 때문이다.",
    note: "조롱, 회피, 공격, 침묵도 아이에게는 한때 살아남는 방식이었을 수 있습니다.",
  },
  {
    label: "역할 전환",
    front: "역할은 어떻게 바꿀 수 있을까?",
    back:
      "통째로 바꾸는 것이 아니라 쪼개서 바꾼다. 역할 탐색, 역할 분할, 역할 재선택의 순서로 간다.",
    note: "'인사부터', '한 문장부터', '3초 멈춤부터'처럼 가장 작은 전환점을 잡아야 합니다.",
  },
  {
    label: "관찰자",
    front: "관찰자는 그냥 지켜보는 사람일까?",
    back:
      "아니다. 관찰자는 판단과 지목을 늦추고, 지금 무슨 일이 벌어지는지 사실로 드러내는 사람이다.",
    note: "관찰은 방임이 아니라 첫 번째 개입입니다. 이름을 부르기 전에 장면을 말합니다.",
  },
  {
    label: "사건 정리자",
    front: "사건 정리자는 누구 잘못인지 가리는 사람일까?",
    back:
      "아니다. 수업, 발표, 활동, 안전한 분위기 중 무엇이 끊겼는지를 언어로 정리하는 사람이다.",
    note: "'누가 나쁘냐'보다 '어디서 흐름이 끊겼나'를 먼저 말합니다.",
  },
  {
    label: "경계 설정자",
    front: "경계 설정은 화내는 것과 같을까?",
    back:
      "다르다. 화는 감정이 앞서는 것이고, 경계는 공동체 기준으로 허용되는 것과 멈춰야 할 것을 말하는 것이다.",
    note: "경계는 학생을 내치는 말이 아니라 다시 공동체로 들어오는 문이어야 합니다.",
  },
  {
    label: "시스템 연결자",
    front: "문제가 반복되면 학생만 더 지도하면 될까?",
    back:
      "부족하다. 반복되는 문제는 수업 리듬, 질문 방식, 학급 문화, 학교 절차와 연결해서 봐야 한다.",
    note: "개인 지도로 끝나지 않는 장면은 시스템으로 연결해야 합니다.",
  },
  {
    label: "회피와 유연함",
    front: "넘어가는 것은 늘 유연한 걸까?",
    back:
      "아니다. 유연함은 장면을 새롭게 보고 개입 위치를 다시 선택하는 것이고, 회피는 기준을 세워야 할 순간을 지나치는 것이다.",
    note: "불편해서 넘기는지, 장면을 보고 선택해서 넘기는지 구분해야 합니다.",
  },
  {
    label: "사과와 회복",
    front: "미안해, 괜찮아로 회복이 끝날까?",
    back:
      "끝나지 않는다. 무엇이 미안한지, 무엇은 괜찮지 않은지, 다음에는 어떤 작은 행동을 선택할지까지 정해야 한다.",
    note: "사과는 마무리 절차가 아니라 다음 역할을 연습하는 출발점입니다.",
  },
];

const state = {
  view: "study",
  studyIndex: 0,
  studyFlipped: false,
  quizIndex: 0,
  selectedRole: null,
  selectedResponse: null,
  sentenceRole: "observer",
  sentenceIndex: 0,
};

const $ = (selector) => document.querySelector(selector);

function getRole(roleId) {
  return roles.find((role) => role.id === roleId);
}

function roleName(roleId) {
  return getRole(roleId)?.name || roleId;
}

function switchView(view) {
  state.view = view;
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((viewEl) => {
    viewEl.classList.toggle("is-visible", viewEl.id === `${view}-view`);
  });
}

function renderStudyCard() {
  const card = studyCards[state.studyIndex];
  const isBack = state.studyFlipped;
  const faceLabel = isBack ? "뒷면" : "앞면";
  const faceHint = isBack ? "설명" : "핵심 문장";
  $("#study-card").innerHTML = `
    <div class="card-topline">
      <span class="label">${card.label}</span>
      <span class="face-badge ${isBack ? "is-back" : "is-front"}">${faceLabel}</span>
      <span class="card-progress">${state.studyIndex + 1}/${studyCards.length}</span>
    </div>
    <p class="face-kicker">${faceHint}</p>
    <h3>${isBack ? card.back : card.front}</h3>
    <p>${isBack ? card.note : "카드를 뒤집어 개념의 오해와 실전 감각을 확인하세요."}</p>
  `;
  $("#study-card").classList.toggle("is-back", isBack);
  $("#study-card").classList.toggle("is-front", !isBack);
  $("#flip-study").textContent = isBack ? "앞면 보기" : "뒷면 보기";
}

function moveStudy(delta) {
  state.studyIndex = (state.studyIndex + delta + studyCards.length) % studyCards.length;
  state.studyFlipped = false;
  renderStudyCard();
}

function currentScenario() {
  return scenarios[state.quizIndex];
}

function recommendedRole(scenario) {
  return scenario.recommended[0];
}

function renderQuiz() {
  const scenario = currentScenario();
  state.selectedRole = null;
  state.selectedResponse = null;
  const suggestedRole = recommendedRole(scenario);
  const options = responseOptionsForScenario(scenario, suggestedRole);
  $("#quiz-scenario-title").textContent = scenario.title;
  $("#quiz-scenario-text").textContent = scenario.situation;
  $("#quiz-lenses").innerHTML = renderScenarioLenses(scenario);
  $("#simulation-choices").innerHTML = options
    .map(
      (option) => `
        <button class="choice-button" type="button" data-response="${option.id}">
          <strong>${option.title}</strong>
          <span>${option.text}</span>
        </button>
      `,
    )
    .join("");
  $("#quiz-feedback").className = "feedback";
  $("#quiz-feedback").innerHTML = "";
  $("#next-step-panel").className = "choice-panel is-muted is-locked";
  $("#action-card").className = "mini-card";
  $("#transition-card").className = "mini-card";
  $("#sentence-card").className = "mini-card";
  $("#action-card").innerHTML = "";
  $("#transition-card").innerHTML = "";
  $("#sentence-card").innerHTML = "";
  bindSimulationChoices();
}

function bindSimulationChoices() {
  $("#simulation-choices").querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectSimulationResponse(button.dataset.response);
    });
  });
}

function selectSimulationResponse(responseId) {
  const scenario = currentScenario();
  const suggestedRole = recommendedRole(scenario);
  const options = responseOptionsForScenario(scenario, suggestedRole);
  const selected = options.find((option) => option.id === responseId);
  state.selectedRole = suggestedRole;
  state.selectedResponse = responseId;

  $("#simulation-choices").querySelectorAll(".choice-button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.response === responseId);
  });

  $("#quiz-feedback").className = `feedback is-visible ${selected.id === "role-based" ? "" : "is-warning"}`;
  $("#quiz-feedback").innerHTML = `<strong>${selected.title}</strong> ${selected.feedback}`;

  renderReflection(selected, scenario, suggestedRole);
}

function renderReflection(selected, scenario, roleId) {
  $("#next-step-panel").className = "choice-panel is-muted";
  renderExplanation(selected.action, selected.sentence, scenario, roleId);
}

function responseOptionsForScenario(scenario, roleId) {
  const action = scenario.actions.find((item) => item.role === roleId) || fallbackActionsByRole[roleId] || scenario.actions[0];
  const sentence = sentenceForScenario(roleId, scenario);
  const controlText =
    scenario.controlText || "“너 또 왜 그래? 조용히 하라고 했지. 한 번만 더 하면 바로 벌점이야.”";
  const avoidText =
    scenario.avoidText || "“됐어, 그냥 하던 거 해.” 하고 장면을 정리하지 않은 채 넘어간다.";
  return [
    {
      id: "role-based",
      correct: true,
      title: "한 템포 늦추고 장면을 본다",
      text: `${action.title}부터 시작해 본다.`,
      feedback: "감정이 개입 위치를 대신 정하게 두지 않고, 지금 장면에서 가능한 역할 이동을 열어두는 반응입니다.",
      action,
      sentence,
    },
    {
      id: "control",
      correct: false,
      title: "바로 지적하고 멈춘다",
      text: controlText,
      feedback:
        "행동을 빠르게 멈출 수는 있지만, 교사의 익숙한 압박과 학생의 익숙한 방어 역할이 반복되기 쉽습니다.",
      action,
      sentence,
    },
    {
      id: "avoid",
      correct: false,
      title: "불편해서 넘긴다",
      text: avoidText,
      feedback:
        "당장의 갈등은 피할 수 있지만, 공동체 기준과 역할 전환점이 사라져 같은 상황이 반복될 가능성이 큽니다.",
      action,
      sentence,
    },
  ];
}

function renderScenarioLenses(scenario) {
  const transition = scenario.transitionPoint || "역할 전체를 바꾸려 하지 말고, 지금 바꿀 수 있는 가장 작은 행동 하나를 찾습니다.";
  const automatic = scenario.controlText || "바로 지적하거나 통제해 장면을 빠르게 끝내고 싶어질 수 있습니다.";
  return `
    <div class="lens-item">
      <strong>먼저 볼 것</strong>
      <span>${scenario.focus}</span>
    </div>
    <div class="lens-item">
      <strong>조심할 자동반응</strong>
      <span>${automatic}</span>
    </div>
    <div class="lens-item">
      <strong>작은 전환점</strong>
      <span>${transition}</span>
    </div>
  `;
}

function renderExplanation(action, sentence, scenario, roleId) {
  $("#action-card").className = "mini-card is-visible";
  $("#action-card").innerHTML = `
    <span class="label">가능한 역할 이동</span>
    <strong>${roleName(roleId)} · ${action.title}</strong>
    <p>${action.detail}</p>
  `;
  $("#transition-card").className = "mini-card is-visible";
  $("#transition-card").innerHTML = `
    <span class="label">역할 전환점</span>
    <strong>무엇부터 바꿀 수 있나?</strong>
    <p>${transitionPointForScenario(scenario, action)}</p>
  `;
  $("#sentence-card").className = "mini-card is-visible";
  $("#sentence-card").innerHTML = `
    <span class="label">추천 언어</span>
    <strong>${roleName(sentence.role)}${sentence.level ? ` · ${sentence.level}` : ""}</strong>
    <p>${sentence.text}</p>
  `;
}

function transitionPointForScenario(scenario, action) {
  return (
    scenario.transitionPoint ||
    `${action.title}부터 시작합니다. 역할 전체를 바꾸려 하지 말고, 지금 장면에서 바꿀 수 있는 가장 작은 행동 하나를 정합니다.`
  );
}

function sentenceForScenario(roleId, scenario) {
  const pool = sentences.filter((sentence) => sentence.role === roleId);
  if (roleId !== "system") return pool[scenario.id.length % pool.length];
  if (scenario.category === "말의경계" || scenario.category === "갈등") {
    return pool.find((sentence) => sentence.level === "학급 시스템") || pool[0];
  }
  return pool.find((sentence) => sentence.level === "수업 안 시스템") || pool[0];
}

function moveQuiz(delta) {
  state.quizIndex = (state.quizIndex + delta + scenarios.length) % scenarios.length;
  renderQuiz();
}

function sentencePool() {
  return sentences.filter((sentence) => sentence.role === state.sentenceRole);
}

function renderSentenceFilters() {
  $("#sentence-role-filter").innerHTML = roles
    .map(
      (role) => `
        <button class="role-chip ${role.id === state.sentenceRole ? "is-active" : ""}" type="button" data-role="${role.id}">
          ${role.name}
        </button>
      `,
    )
    .join("");

  $("#sentence-role-filter").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.sentenceRole = button.dataset.role;
      state.sentenceIndex = 0;
      renderSentenceFilters();
      renderSentenceCard();
    });
  });
}

function renderSentenceCard() {
  const pool = sentencePool();
  const sentence = pool[state.sentenceIndex % pool.length];
  $("#practice-sentence-card").innerHTML = `
    <span class="label">${roleName(sentence.role)}${sentence.level ? ` · ${sentence.level}` : ""} · ${state.sentenceIndex + 1}/${pool.length}</span>
    <h3>${sentence.text}</h3>
    <p>이 문장은 공식이 아니라 예시입니다. 어떤 역할로 서기 위한 말인지 확인한 뒤, 내 교실의 상황과 말투에 맞게 바꿔 말해 보세요.</p>
  `;
}

function moveSentence(delta) {
  const pool = sentencePool();
  state.sentenceIndex = (state.sentenceIndex + delta + pool.length) % pool.length;
  renderSentenceCard();
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  $("#study-card").addEventListener("click", () => {
    state.studyFlipped = !state.studyFlipped;
    renderStudyCard();
  });
  $("#flip-study").addEventListener("click", () => {
    state.studyFlipped = !state.studyFlipped;
    renderStudyCard();
  });
  $("#prev-study").addEventListener("click", () => moveStudy(-1));
  $("#next-study").addEventListener("click", () => moveStudy(1));

  $("#prev-quiz").addEventListener("click", () => moveQuiz(-1));
  $("#next-quiz").addEventListener("click", () => moveQuiz(1));

  $("#prev-sentence").addEventListener("click", () => moveSentence(-1));
  $("#next-sentence").addEventListener("click", () => moveSentence(1));
}

function init() {
  bindEvents();
  renderStudyCard();
  renderQuiz();
  renderSentenceFilters();
  renderSentenceCard();
}

init();
