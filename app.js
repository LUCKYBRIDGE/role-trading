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

const scenarios = [
  {
    id: "chat-during-explain",
    title: "설명 중 대화가 번지는 장면",
    category: "수업흐름",
    urgency: "낮음",
    focus: "개인을 지목해 1대1 대치로 만들기보다 교실 흐름과 공동체 기준을 먼저 드러냅니다.",
    situation:
      "전체 설명 중 뒤쪽에서 작은 대화가 시작되고, 주변 학생들이 웃으며 반응합니다. 앞쪽 학생들은 듣고 있지만 수업 흐름은 점점 느슨해집니다.",
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
      "한 학생이 누군가를 낮추는 표현을 했고 몇몇 학생이 웃었습니다. 말한 학생을 바로 몰아세우면 일대일 대결로 흐를 가능성이 있습니다.",
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
      "모둠활동 안내가 끝났지만 몇몇 모둠은 역할을 나누지 못하고 움직임과 잡담만 이어집니다. 활동 시작선이 흐려진 상태입니다.",
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
      "친구가 발표하는 중간에 다른 말이 끼어들고, 발표자가 잠시 멈춥니다. 몇몇 학생은 끼어든 말에 반응하며 발표 집중이 흔들립니다.",
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
      "두 학생이 동시에 말하며 서로의 말을 끊습니다. 내용보다 말의 방식이 거칠어지고 주변 학생들의 시선이 갈등에 모입니다.",
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
      "한 학생이 설명 중 계속 질문합니다. 질문 내용은 틀리지 않지만 타이밍이 반복적으로 수업 흐름을 끊고 다른 학생들의 집중도 흔들립니다.",
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
      "종이 울렸지만 책상 위가 정리되지 않았고 일부 학생은 교재를 꺼내지 않았습니다. 교사가 재촉할수록 여기저기서 변명이 이어집니다.",
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
      "한 학생이 활동지를 밀어놓고 하지 않겠다고 말합니다. 주변 학생들이 그 반응을 보고 있고 교사의 말이 강해지면 대결 구도로 갈 수 있습니다.",
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
      "쉬는 말처럼 시작된 놀림이 수업 중에도 이어집니다. 당사자는 웃고 넘기는 듯 보이지만 표정이 굳고 주변은 장난으로 소비합니다.",
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
      "개별 학생을 지적하기 어려울 정도로 전체 소리가 커졌습니다. 몇 명을 혼내면 잠깐 조용해지지만 곧 같은 흐름이 반복됩니다.",
    tags: ["전체 소음", "집단 반응", "수업 리듬"],
    recommended: ["observer", "summarizer", "system"],
    actions: [
      ["observer", "소리 크기와 집중 분산을 말하기", "전체 목소리가 커져 수업 집중이 어려운 상태임을 드러냅니다."],
      ["summarizer", "수업이 멈춘 상태 정리하기", "소리가 이어지며 다음 설명으로 넘어가지 못하는 상황을 정리합니다."],
      ["system", "설명과 활동 시간을 쪼개기", "설명 5분, 활동 10분처럼 리듬을 나누어 다시 운영합니다."],
    ],
  },
  {
    id: "hate-expression-joke",
    title: "혐오 표현이 농담처럼 나온 장면",
    category: "말의경계",
    urgency: "높음",
    focus: "발언자를 몰아세우기보다 표현이 공동체 안전을 흔들었다는 기준을 세웁니다.",
    situation:
      "수업 중 한 학생이 특정 집단을 낮추는 말을 했고 몇몇 학생이 웃었습니다. 누군가는 표정을 굳혔지만 교실은 장난처럼 넘기려는 분위기입니다.",
    tags: ["혐오 표현", "공동체 안전", "말의 기준"],
    recommended: ["observer", "summarizer", "boundary", "system"],
    actions: [
      ["observer", "웃음과 침묵을 함께 보기", "몇 명은 웃었고 몇 명은 웃지 않았다는 반응 차이를 드러냅니다."],
      ["summarizer", "안전한 분위기 손상 정리하기", "특정 집단을 낮추는 말로 교실 분위기가 바뀌었다는 점을 정리합니다."],
      ["boundary", "정체성을 웃음거리로 삼지 않기", "누군가의 정체성이나 특징을 낮추는 말은 허용하지 않는다고 말합니다."],
      ["system", "말의 기준을 공동 절차로 연결하기", "반복된다면 학급 차원의 말의 기준과 학교 절차를 확인합니다."],
    ],
  },
  {
    id: "private-chat-during-presentation",
    title: "발표 중 옆 대화가 이어지는 장면",
    category: "수업흐름",
    urgency: "중간",
    focus: "발표자를 보호하고 듣는 공동체의 역할을 다시 세웁니다.",
    situation:
      "한 학생이 발표하고 있는데 옆자리 두 학생이 작은 목소리로 계속 이야기합니다. 발표자는 말끝을 흐리고 주변 학생들의 시선도 흩어집니다.",
    tags: ["발표", "옆 대화", "듣는 역할"],
    recommended: ["observer", "summarizer", "boundary"],
    actions: [
      ["observer", "발표 중 대화 흐름 보기", "발표자의 말과 옆 대화가 동시에 이어지는 장면을 말합니다."],
      ["summarizer", "발표 흐름이 끊긴 점 정리하기", "옆 대화로 발표를 듣는 흐름이 멈췄다고 정리합니다."],
      ["boundary", "발표를 듣는 기준 세우기", "발표 중에는 개인 대화를 멈추고 발표자의 말을 듣는 기준을 세웁니다."],
      ["system", "질문 시간을 뒤로 분리하기", "발표가 끝난 뒤 질문·확인 시간을 따로 안내합니다."],
    ],
  },
  {
    id: "movement-before-instruction",
    title: "설명이 끝나기 전에 움직이는 장면",
    category: "활동전환",
    urgency: "낮음",
    focus: "학생을 붙잡기보다 전환 신호와 활동 시작 조건을 선명하게 합니다.",
    situation:
      "과제 설명이 끝나기도 전에 몇몇 학생이 자리에서 일어나고 모둠 쪽으로 이동합니다. 아직 설명을 듣는 학생들은 무엇을 해야 하는지 놓칩니다.",
    tags: ["활동 전환", "자리 이동", "설명 누락"],
    recommended: ["observer", "summarizer", "system"],
    actions: [
      ["observer", "움직임이 먼저 시작된 장면 말하기", "설명이 끝나기 전에 이동이 시작된 상태를 서술합니다."],
      ["summarizer", "다음 활동 안내가 끊긴 점 정리하기", "움직임 때문에 설명이 끝까지 전달되지 못했다고 정리합니다."],
      ["system", "전환 순서 다시 안내하기", "설명 완료, 역할 확인, 이동 시작 순서로 활동 구조를 다시 세웁니다."],
    ],
  },
  {
    id: "phone-distraction",
    title: "휴대폰에 시선이 쏠린 장면",
    category: "수업흐름",
    urgency: "중간",
    focus: "개별 압수 대결보다 수업 참여 기준과 시선의 흐름을 먼저 다룹니다.",
    situation:
      "수업 중 한 학생이 휴대폰을 보고 있고 주변 학생들도 화면 쪽으로 시선을 돌립니다. 교사가 이름을 부르면 학생은 아니라고 버티려는 표정입니다.",
    tags: ["휴대폰", "시선 분산", "수업 참여"],
    recommended: ["observer", "boundary", "system"],
    actions: [
      ["observer", "시선이 수업에서 벗어난 장면 말하기", "몇몇 학생의 시선이 수업 자료가 아니라 화면 쪽으로 이동한 사실을 말합니다."],
      ["boundary", "수업 중 기기 사용 기준 세우기", "수업 흐름을 끊는 방식의 휴대폰 사용은 허용하지 않는다고 말합니다."],
      ["system", "기기 사용 절차로 연결하기", "필요하면 수업 중 기기 보관·사용 규칙을 학급 차원에서 다시 확인합니다."],
    ],
  },
  {
    id: "back-row-spectators",
    title: "뒤쪽 학생들이 방관자로 빠지는 장면",
    category: "수업흐름",
    urgency: "낮음",
    focus: "태도 지적보다 참여 구조가 특정 학생을 방관자로 만들고 있는지 봅니다.",
    situation:
      "앞쪽 몇 명만 계속 발표하고 뒤쪽 학생들은 엎드리거나 작은 장난을 합니다. 지적하면 잠깐 고개를 들지만 곧 다시 수업 밖으로 빠집니다.",
    tags: ["참여 구조", "방관", "발언권"],
    recommended: ["observer", "system"],
    actions: [
      ["observer", "참여가 나뉜 상태 말하기", "앞쪽은 발표에 들어와 있고 뒤쪽은 수업 밖으로 빠진 상태를 말합니다."],
      ["system", "참여 순서 바꾸기", "뒤쪽 학생부터 짧게 시작하거나 개인 활동 후 공유하는 방식으로 참여 구조를 바꿉니다."],
    ],
  },
  {
    id: "same-student-always-blamed",
    title: "늘 같은 학생만 지목되는 장면",
    category: "갈등",
    urgency: "중간",
    focus: "한 학생만 문제로 고정하지 않고 반복되는 반응 구조를 봅니다.",
    situation:
      "수업이 흐트러질 때마다 같은 학생 이름이 먼저 불립니다. 실제로 주변 반응도 함께 있었지만 교실은 그 학생이 늘 문제라는 분위기로 굳어져 있습니다.",
    tags: ["반복 지목", "낙인", "관계 구조"],
    recommended: ["observer", "summarizer", "system"],
    actions: [
      ["observer", "개인보다 주변 반응 보기", "한 명의 행동뿐 아니라 주변에서 같이 반응한 흐름을 드러냅니다."],
      ["summarizer", "반 전체 흐름으로 정리하기", "개인 문제로만 정리하지 않고 수업 집중이 함께 끊긴 상황을 말합니다."],
      ["system", "반응 구조 점검하기", "특정 학생만 지목되는 구조가 반복되는지 담임·교과 차원에서 살핍니다."],
    ],
  },
  {
    id: "class-meeting-needed",
    title: "수업 중 조롱이 학급 분위기로 번진 장면",
    category: "말의경계",
    urgency: "높음",
    focus: "개별 사과로 끝내지 않고 학급의 말 문화와 반응 방식을 다룹니다.",
    situation:
      "한 학생을 놀리는 별명이 여러 시간에 걸쳐 반복됩니다. 말한 학생만 바뀔 뿐 주변 학생들은 웃고 지나가며, 당사자는 점점 말수가 줄어듭니다.",
    tags: ["별명", "학급 문화", "반복 조롱"],
    recommended: ["observer", "summarizer", "boundary", "system"],
    actions: [
      ["observer", "반복되는 웃음 구조 보기", "별명이 나올 때마다 웃음이 생기고 당사자가 위축되는 흐름을 봅니다."],
      ["summarizer", "관계 손상 정리하기", "장난으로 소비되지만 한 학생이 반복적으로 낮춰지는 상황을 정리합니다."],
      ["boundary", "별명과 조롱의 선 세우기", "누군가를 낮추는 별명과 반복 조롱은 허용하지 않는다고 말합니다."],
      ["system", "학급회의로 연결하기", "학급 차원에서 말의 기준과 주변 학생의 반응 방식을 다룹니다."],
    ],
  },
  {
    id: "repeated-class-disruption",
    title: "수업 방해가 여러 시간 반복되는 장면",
    category: "학교절차",
    urgency: "높음",
    focus: "교사 혼자 버티지 않고 학년부와 학교 절차로 연결합니다.",
    situation:
      "특정 학생들의 수업 방해가 여러 교과에서 반복되고 있습니다. 교사마다 대응이 달라 학생들은 어느 시간에는 해도 되고 어느 시간에는 안 되는 것으로 받아들입니다.",
    tags: ["반복 방해", "공동 기준", "학년부"],
    recommended: ["system"],
    actions: [
      ["system", "공동 기준으로 연결하기", "교과별 개별 대응에 머물지 않고 학년부와 교과교사가 함께 기준을 맞춥니다."],
      ["boundary", "수업권 침해 기준 말하기", "반복되는 수업 방해는 교실 안 구두 지도로만 끝낼 수 없다는 선을 세웁니다."],
    ],
  },
  {
    id: "possible-victim-check",
    title: "피해 학생 확인이 필요한 장면",
    category: "학교절차",
    urgency: "높음",
    focus: "즉석 훈계로 끝내지 않고 피해 여부와 절차를 확인합니다.",
    situation:
      "거친 말과 밀치는 행동이 있었고 주변 학생들은 장난이라고 말합니다. 하지만 한 학생은 말없이 자리를 피했고 이후 수업 참여를 하지 않습니다.",
    tags: ["피해 확인", "관계 문제", "학교 절차"],
    recommended: ["observer", "boundary", "system"],
    actions: [
      ["observer", "행동과 반응을 분리해 보기", "밀침과 거친 말, 그리고 자리를 피한 학생의 반응을 함께 봅니다."],
      ["boundary", "신체적·언어적 선 세우기", "상대방을 밀거나 거친 말로 압박하는 방식은 허용하지 않는다고 말합니다."],
      ["system", "피해 여부 확인 절차로 연결하기", "담임과 학년부에 공유하고 학생 간 피해가 발생했는지 확인합니다."],
    ],
  },
  {
    id: "teacher-explains-too-long",
    title: "설명이 길어질수록 무너지는 장면",
    category: "수업흐름",
    urgency: "낮음",
    focus: "학생 탓만 하지 않고 수업 리듬과 참여 지점을 조정합니다.",
    situation:
      "설명이 10분을 넘기면 잡담과 엎드림이 늘어납니다. 매번 조용히 하라고 말하지만 비슷한 시간대에 같은 흐름이 반복됩니다.",
    tags: ["설명 길이", "수업 리듬", "참여 지점"],
    recommended: ["observer", "system"],
    actions: [
      ["observer", "무너지는 시점 보기", "수업 시작 후 어느 정도 시간이 지나면 집중이 흩어지는지 봅니다."],
      ["system", "설명과 활동을 나누기", "설명 5분 뒤 짧은 쓰기나 짝 활동을 넣어 참여 지점을 만듭니다."],
    ],
  },
  {
    id: "side-comments-after-correction",
    title: "주의 후 말대꾸와 웃음이 이어지는 장면",
    category: "갈등",
    urgency: "중간",
    focus: "말싸움으로 이어가지 않고 대화의 선을 분명히 합니다.",
    situation:
      "교사가 주의를 주자 학생이 작은 목소리로 말대꾸하고 주변에서 웃음이 납니다. 교사가 다시 반응하면 학생과의 말싸움처럼 보일 수 있습니다.",
    tags: ["말대꾸", "웃음", "대결 구도"],
    recommended: ["observer", "boundary"],
    actions: [
      ["observer", "주의 후 반응을 서술하기", "주의 뒤 말이 이어지고 주변 웃음이 생긴 장면을 말합니다."],
      ["boundary", "말싸움으로 가지 않기", "이 상황을 말싸움으로 이어가지 않겠다고 선을 세우고 수업 흐름으로 돌아옵니다."],
    ],
  },
  {
    id: "group-role-imbalance",
    title: "모둠 안 역할이 한 학생에게 몰리는 장면",
    category: "활동전환",
    urgency: "낮음",
    focus: "개인 책임감만 요구하지 않고 모둠 안 역할 구조를 다시 나눕니다.",
    situation:
      "모둠활동에서 한 학생만 기록과 발표 준비를 하고 나머지는 구경하거나 잡담합니다. 열심히 하는 학생은 지친 표정이고 활동 결과도 한쪽으로 몰립니다.",
    tags: ["모둠 역할", "참여 불균형", "활동 구조"],
    recommended: ["observer", "summarizer", "system"],
    actions: [
      ["observer", "역할이 몰린 상태 보기", "한 명은 기록하고 다른 사람들은 아직 역할에 들어오지 않은 상태를 말합니다."],
      ["summarizer", "모둠활동이 공동 활동이 되지 못한 점 정리하기", "역할이 나뉘지 않아 모둠활동이 한 사람에게 몰린 상황을 말합니다."],
      ["system", "역할 재분배하기", "말하는 사람, 기록하는 사람, 발표하는 사람을 다시 정하고 시작합니다."],
    ],
  },
  {
    id: "student-shuts-down-after-correction",
    title: "주의 후 학생이 닫히는 장면",
    category: "갈등",
    urgency: "중간",
    focus: "감정 대결을 키우지 않고 다시 공동체 활동으로 들어올 통로를 만듭니다.",
    situation:
      "주의를 받은 학생이 말없이 고개를 돌리고 아무 활동도 하지 않습니다. 교사가 더 밀어붙이면 버티기처럼 보이고, 그냥 두면 활동에서 빠진 상태가 굳어집니다.",
    tags: ["위축", "참여 회복", "재진입"],
    recommended: ["observer", "boundary", "system"],
    actions: [
      ["observer", "참여가 멈춘 상태 말하기", "주의 뒤 활동 참여가 멈춘 상태를 조용히 확인합니다."],
      ["boundary", "활동 이탈의 선 세우기", "감정은 있을 수 있지만 수업 활동에서 완전히 빠지는 방식은 조정해야 한다고 말합니다."],
      ["system", "작은 역할로 다시 들어오게 하기", "전체 활동 대신 짧은 표시, 한 문장 쓰기, 모둠 안 작은 역할부터 시작하게 합니다."],
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
    deck: "core",
    label: "핵심 개념",
    front: "역할은 태도가 아니라 위치입니다.",
    back:
      "친절하게 말하느냐 단호하게 말하느냐보다, 교사가 학생과 맞서는 위치에 서는지 공동체를 대표해 기준을 말하는 위치에 서는지가 중요합니다.",
  },
  {
    deck: "core",
    label: "역할의 형성",
    front: "역할은 익숙하고 안전했던 행동 방식입니다.",
    back:
      "지금까지의 경험 속에서 나를 지켜 주었거나 가장 익숙했던 반응이 역할로 굳어집니다. 그래서 마음먹는다고 바로 바뀌지 않고 반복 연습이 필요합니다.",
  },
  {
    deck: "core",
    label: "생활교육의 방향",
    front: "통제할수록 1대1 대치가 되기 쉽습니다.",
    back:
      "교사의 목표는 학생을 이기는 것이 아니라, 학생이 공동체 안에서 자기 역할을 다시 설정할 수 있도록 기준과 흐름을 세우는 것입니다.",
  },
  {
    deck: "observer",
    label: "관찰자",
    front: "먼저 판단하지 않고 장면을 봅니다.",
    back:
      "누가 잘못했는지보다 지금 무슨 일이 벌어지고 있는지, 웃음과 소리와 시선이 어떻게 움직이는지 말합니다.",
  },
  {
    deck: "observer",
    label: "관찰자",
    front: "관찰자는 방관자가 아닙니다.",
    back:
      "가만히 넘기는 사람이 아니라 즉각 지목을 멈추고 교실의 흐름을 읽어 모두가 볼 수 있게 말하는 사람입니다.",
  },
  {
    deck: "observer",
    label: "관찰자",
    front: "관찰자의 말에는 감정 단어가 적습니다.",
    back:
      "“왜 그러니?”보다 “지금 웃음이 커지고 있습니다”, “설명 중 대화가 이어지고 있습니다”처럼 현재형 사실을 말합니다.",
  },
  {
    deck: "summarizer",
    label: "사건 정리자",
    front: "끊어진 흐름을 언어로 고정합니다.",
    back:
      "장난인지 의도적인지 따지기 전에 수업, 발표, 활동, 안전한 분위기 중 무엇이 끊겼는지 정리합니다.",
  },
  {
    deck: "summarizer",
    label: "사건 정리자",
    front: "사건 정리자는 잘잘못 판정자가 아닙니다.",
    back:
      "누가 나쁘냐보다 이 행동으로 공동체 활동의 어느 부분이 멈췄는지를 짧고 분명하게 말합니다.",
  },
  {
    deck: "summarizer",
    label: "사건 정리자",
    front: "정리 문장은 다음 역할로 가는 다리입니다.",
    back:
      "무슨 일이 끊겼는지 정리해야 경계 설정이 처벌처럼 들리지 않고 공동체 기준으로 들립니다.",
  },
  {
    deck: "boundary",
    label: "경계 설정자",
    front: "응보적으로 혼내지 않고 기준을 세웁니다.",
    back:
      "공동체를 대표해 여기까지 가능하고 여기부터는 멈춰야 한다고 말합니다. 경계는 처벌이 아니라 다시 공동체로 들어오는 문입니다.",
  },
  {
    deck: "boundary",
    label: "경계 설정자",
    front: "경계는 교사의 기분이 아니라 공동체 기준입니다.",
    back:
      "“내가 화났다”가 아니라 “우리 교실에서는 이 방식은 허용하지 않는다”를 말할 때 1대1 대치가 줄어듭니다.",
  },
  {
    deck: "boundary",
    label: "경계 설정자",
    front: "경계 설정은 내치는 말이 아닙니다.",
    back:
      "멈출 선을 세우면서도 학생이 다시 수업과 공동체 안으로 들어올 수 있는 방식을 함께 열어 둡니다.",
  },
  {
    deck: "system",
    label: "시스템 연결자",
    front: "반복되는 문제는 구조로 봅니다.",
    back:
      "한 학생만 지목하지 않고 수업 리듬, 질문 방식, 학급 문화, 학교 절차와 연결해 같은 문제가 덜 반복되게 만듭니다.",
  },
  {
    deck: "system",
    label: "시스템 연결자",
    front: "시스템은 거창한 제도가 아닙니다.",
    back:
      "질문을 언제 받을지, 모둠 역할을 어떻게 나눌지, 반복 문제를 누구와 공유할지 같은 가까운 흐름이 모두 시스템입니다.",
  },
  {
    deck: "system",
    label: "시스템 연결자",
    front: "시스템 연결자는 책임을 흐리지 않습니다.",
    back:
      "학생 책임은 학생에게, 교사 책임은 교사에게, 학급 문화의 책임은 공동체에게 돌려놓아 더 정확하게 개입합니다.",
  },
];

const state = {
  view: "study",
  studyDeck: "core",
  studyIndex: 0,
  studyFlipped: false,
  quizIndex: 0,
  quizOrder: [],
  selectedRole: null,
  selectedResponse: null,
  sentenceRole: "observer",
  sentenceIndex: 0,
  sentenceFlipped: false,
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
  if (view === "quiz" && state.quizOrder.length === 0) {
    resetQuizOrder();
    renderQuiz();
  }
}

function studyDecks() {
  return [
    { id: "core", name: "전체 개념" },
    { id: "observer", name: "관찰자" },
    { id: "summarizer", name: "사건 정리자" },
    { id: "boundary", name: "경계 설정자" },
    { id: "system", name: "시스템 연결자" },
  ];
}

function currentStudyCards() {
  return studyCards.filter((card) => card.deck === state.studyDeck);
}

function renderStudyDeckFilter() {
  $("#study-deck-filter").innerHTML = studyDecks()
    .map(
      (deck) => `
        <button class="role-chip ${deck.id === state.studyDeck ? "is-active" : ""}" type="button" data-deck="${deck.id}">
          ${deck.name}
        </button>
      `,
    )
    .join("");

  $("#study-deck-filter").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.studyDeck = button.dataset.deck;
      state.studyIndex = 0;
      state.studyFlipped = false;
      renderStudyDeckFilter();
      renderStudyCard();
    });
  });
}

function renderStudyCard() {
  const cards = currentStudyCards();
  const card = cards[state.studyIndex];
  $("#study-card").innerHTML = `
    <span class="label">${card.label} · ${state.studyIndex + 1}/${cards.length}</span>
    <h3>${state.studyFlipped ? card.back : card.front}</h3>
    <p>${state.studyFlipped ? "다시 누르면 앞면으로 돌아갑니다." : "카드를 뒤집어 설명을 확인하세요."}</p>
  `;
}

function moveStudy(delta) {
  const cards = currentStudyCards();
  state.studyIndex = (state.studyIndex + delta + cards.length) % cards.length;
  state.studyFlipped = false;
  renderStudyCard();
}

function currentScenario() {
  if (state.quizOrder.length === 0) resetQuizOrder();
  return scenarios[state.quizOrder[state.quizIndex]];
}

function recommendedRole(scenario) {
  return scenario.recommended[0];
}

function renderQuiz() {
  const scenario = currentScenario();
  state.selectedRole = null;
  state.selectedResponse = null;
  $("#quiz-meta").innerHTML = `
    <span>랜덤 ${state.quizIndex + 1}/${scenarios.length}</span>
    <span>${scenario.category}</span>
    <span>긴급도 ${scenario.urgency}</span>
  `;
  if (!$(".progress-line")) {
    $(".quiz-card").insertAdjacentHTML("afterbegin", '<div class="progress-line" aria-hidden="true"><span></span></div>');
  }
  $(".progress-line span").style.width = `${((state.quizIndex + 1) / scenarios.length) * 100}%`;
  $("#quiz-scenario-title").textContent = scenario.title;
  $("#quiz-scenario-text").textContent = scenario.situation;
  $("#quiz-tags").innerHTML = scenario.tags.map((tag) => `<span>${tag}</span>`).join("");
  $("#role-choices").innerHTML = roles
    .map(
      (role) => `
        <button class="choice-button" type="button" data-role="${role.id}">
          <strong>${role.name}</strong>
          <span>${role.short}</span>
        </button>
      `,
    )
    .join("");
  $("#quiz-feedback").className = "feedback";
  $("#quiz-feedback").innerHTML = "";
  $("#next-step-panel").className = "choice-panel is-muted is-locked";
  $("#response-choices").innerHTML = "";
  $("#response-feedback").className = "feedback";
  $("#response-feedback").innerHTML = "";
  $("#action-card").className = "mini-card";
  $("#sentence-card").className = "mini-card";
  $("#action-card").innerHTML = "";
  $("#sentence-card").innerHTML = "";
  bindRoleChoices();
}

function resetQuizOrder() {
  state.quizOrder = shuffleIndexes(scenarios.length);
  state.quizIndex = 0;
}

function shuffleIndexes(length) {
  const indexes = Array.from({ length }, (_, index) => index);
  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }
  return indexes;
}

function bindRoleChoices() {
  $("#role-choices").querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectRole(button.dataset.role);
    });
  });
}

function selectRole(roleId) {
  const scenario = currentScenario();
  const correctRole = recommendedRole(scenario);
  const isCorrect = roleId === correctRole;
  state.selectedRole = roleId;

  $("#role-choices").querySelectorAll(".choice-button").forEach((button) => {
    button.classList.toggle("is-correct", button.dataset.role === correctRole);
    button.classList.toggle("is-wrong", button.dataset.role === roleId && !isCorrect);
  });

  $("#quiz-feedback").className = `feedback is-visible ${isCorrect ? "" : "is-warning"}`;
  $("#quiz-feedback").innerHTML = isCorrect
    ? `<strong>좋은 선택입니다.</strong> 이 장면은 먼저 ${roleName(correctRole)}로 서서 ${scenario.focus}`
    : `<strong>다시 생각해 볼 지점이 있습니다.</strong> 이 장면에서는 ${roleName(correctRole)}부터 시작하는 편이 안정적입니다. ${scenario.focus}`;

  renderNextStep(correctRole);
}

function renderNextStep(roleId) {
  const scenario = currentScenario();
  $("#next-step-panel").className = "choice-panel is-muted";
  renderResponseChoices(roleId);
  $("#response-feedback").className = "feedback";
  $("#response-feedback").innerHTML = "";
  $("#action-card").className = "mini-card";
  $("#sentence-card").className = "mini-card";
  $("#action-card").innerHTML = "";
  $("#sentence-card").innerHTML = "";
}

function renderResponseChoices(roleId) {
  const scenario = currentScenario();
  const options = responseOptionsForScenario(scenario, roleId);
  $("#response-choices").innerHTML = options
    .map(
      (option) => `
        <button class="choice-button" type="button" data-response="${option.id}">
          <strong>${option.title}</strong>
          <span>${option.text}</span>
        </button>
      `,
    )
    .join("");

  $("#response-choices").querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectResponse(button.dataset.response, roleId);
    });
  });
}

function responseOptionsForScenario(scenario, roleId) {
  const action = scenario.actions.find((item) => item.role === roleId) || scenario.actions[0];
  const sentence = sentenceForScenario(roleId, scenario);
  return [
    {
      id: "role-based",
      correct: true,
      title: "역할에 맞춰 개입한다",
      text: `${action.title}. “${sentence.text}”`,
      feedback: "감정으로 밀어붙이기보다 현재 장면에서 필요한 역할과 공동체 기준을 함께 세우는 선택입니다.",
      action,
      sentence,
    },
    {
      id: "control",
      correct: false,
      title: "즉시 통제한다",
      text: "“너 또 왜 그래? 조용히 하라고 했지. 한 번만 더 하면 바로 벌점이야.”",
      feedback: "빠르게 멈출 수는 있지만 교사와 학생의 1대1 대치로 흐르기 쉽습니다.",
      action,
      sentence,
    },
    {
      id: "avoid",
      correct: false,
      title: "그냥 넘긴다",
      text: "“됐어, 그냥 하던 거 해.” 하고 장면을 정리하지 않은 채 넘어간다.",
      feedback: "갈등은 피할 수 있지만 공동체 기준이 흐려지고 같은 상황이 반복될 가능성이 큽니다.",
      action,
      sentence,
    },
  ];
}

function selectResponse(responseId, roleId) {
  const scenario = currentScenario();
  const options = responseOptionsForScenario(scenario, roleId);
  const selected = options.find((option) => option.id === responseId);

  $("#response-choices").querySelectorAll(".choice-button").forEach((button) => {
    const option = options.find((item) => item.id === button.dataset.response);
    button.classList.toggle("is-correct", option.correct);
    button.classList.toggle("is-wrong", option.id === responseId && !option.correct);
  });

  $("#response-feedback").className = `feedback is-visible ${selected.correct ? "" : "is-warning"}`;
  $("#response-feedback").innerHTML = selected.correct
    ? `<strong>적절한 언행입니다.</strong> ${selected.feedback}`
    : `<strong>아쉬운 선택입니다.</strong> ${selected.feedback}`;

  renderExplanation(selected.action, selected.sentence);
}

function renderExplanation(action, sentence) {
  $("#action-card").className = "mini-card is-visible";
  $("#action-card").innerHTML = `
    <span class="label">추천 행동</span>
    <strong>${action.title}</strong>
    <p>${action.detail}</p>
  `;
  $("#sentence-card").className = "mini-card is-visible";
  $("#sentence-card").innerHTML = `
    <span class="label">추천 언어</span>
    <strong>${roleName(sentence.role)}${sentence.level ? ` · ${sentence.level}` : ""}</strong>
    <p>${sentence.text}</p>
  `;
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
  if (state.quizOrder.length === 0) resetQuizOrder();
  if (delta > 0 && state.quizIndex === scenarios.length - 1) {
    resetQuizOrder();
  } else {
    state.quizIndex = (state.quizIndex + delta + scenarios.length) % scenarios.length;
  }
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
      state.sentenceFlipped = false;
      renderSentenceFilters();
      renderSentenceCard();
    });
  });
}

function renderSentenceCard() {
  const pool = sentencePool();
  const sentence = pool[state.sentenceIndex % pool.length];
  const insight = sentenceInsight(sentence);
  $("#practice-sentence-card").innerHTML = state.sentenceFlipped
    ? `
      <span class="label">${roleName(sentence.role)} · 포인트</span>
      <h3>${insight.title}</h3>
      <ul>
        <li><strong>목적</strong> ${insight.purpose}</li>
        <li><strong>연습</strong> ${insight.practice}</li>
        <li><strong>피하기</strong> ${insight.avoid}</li>
      </ul>
    `
    : `
      <span class="label">${roleName(sentence.role)}${sentence.level ? ` · ${sentence.level}` : ""} · ${state.sentenceIndex + 1}/${pool.length}</span>
      <h3>${sentence.text}</h3>
      <p>소리 내어 읽고, 포인트 보기를 눌러 이 문장의 쓰임을 확인하세요.</p>
    `;
  $("#flip-sentence").textContent = state.sentenceFlipped ? "문장 보기" : "포인트 보기";
}

function moveSentence(delta) {
  const pool = sentencePool();
  state.sentenceIndex = (state.sentenceIndex + delta + pool.length) % pool.length;
  state.sentenceFlipped = false;
  renderSentenceCard();
}

function sentenceInsight(sentence) {
  const role = getRole(sentence.role);
  const common = {
    title: role.short,
    purpose: role.description,
    practice: "문장을 그대로 읽은 뒤, 내 반 교실에서 자연스러운 말투로 다시 말해 봅니다.",
    avoid: "학생을 인격적으로 규정하거나, 교사와 학생의 1대1 힘겨루기로 만드는 표현을 피합니다.",
  };

  if (sentence.role === "observer") {
    return {
      ...common,
      practice: "누가 잘못했는지 말하기 전에 보이는 사실, 소리, 시선, 흐름만 말해 봅니다.",
      avoid: "“너 왜 그래?”처럼 의도나 성격을 추궁하는 말을 피합니다.",
    };
  }
  if (sentence.role === "summarizer") {
    return {
      ...common,
      practice: "이 행동 때문에 무엇이 끊겼는지 한 문장으로 정리해 봅니다.",
      avoid: "잘잘못 판정부터 하거나 장황하게 설교하는 반응을 피합니다.",
    };
  }
  if (sentence.role === "boundary") {
    return {
      ...common,
      practice: "공동체를 대표해 허용되는 것과 멈춰야 할 것을 차분히 말해 봅니다.",
      avoid: "응보적으로 혼내거나, 학생을 제압하려는 말투를 피합니다.",
    };
  }
  return {
    ...common,
    practice: "같은 문제가 반복되지 않도록 수업 방식, 학급 규칙, 학교 절차 중 어디로 연결할지 말해 봅니다.",
    avoid: "한 학생의 태도 문제로만 끝내거나 담임 혼자 떠안게 만드는 흐름을 피합니다.",
  };
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
  $("#practice-sentence-card").addEventListener("click", () => {
    state.sentenceFlipped = !state.sentenceFlipped;
    renderSentenceCard();
  });
  $("#flip-sentence").addEventListener("click", () => {
    state.sentenceFlipped = !state.sentenceFlipped;
    renderSentenceCard();
  });
  $("#next-sentence").addEventListener("click", () => moveSentence(1));
}

function init() {
  bindEvents();
  resetQuizOrder();
  renderStudyDeckFilter();
  renderStudyCard();
  renderQuiz();
  renderSentenceFilters();
  renderSentenceCard();
}

init();
