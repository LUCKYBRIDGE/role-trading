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

const state = {
  view: "theory",
  scenarioId: scenarios[0].id,
  roleId: "observer",
  actionId: scenarios[0].actions[0].id,
  category: "all",
  libraryRole: "all",
  search: "",
};

const $ = (selector) => document.querySelector(selector);

function getRole(roleId) {
  return roles.find((role) => role.id === roleId);
}

function getScenario(scenarioId) {
  return scenarios.find((scenario) => scenario.id === scenarioId);
}

function roleName(roleId) {
  return getRole(roleId)?.name || roleId;
}

function visibleScenarios() {
  if (state.category === "all") return scenarios;
  return scenarios.filter((scenario) => scenario.category === state.category);
}

function selectScenario(scenarioId) {
  const scenario = getScenario(scenarioId);
  state.scenarioId = scenario.id;
  state.roleId = scenario.recommended[0];
  const action = scenario.actions.find((item) => item.role === state.roleId) || scenario.actions[0];
  state.actionId = action?.id || null;
}

function renderScenarioOptions(select, useFilter = true) {
  const options = useFilter ? visibleScenarios() : scenarios;
  if (!options.some((scenario) => scenario.id === state.scenarioId)) {
    selectScenario(options[0].id);
  }
  select.innerHTML = options
    .map((scenario) => `<option value="${scenario.id}">${scenario.title}</option>`)
    .join("");
  select.value = state.scenarioId;
}

function renderScenarioDetail() {
  const scenario = getScenario(state.scenarioId);
  $("#scenario-detail").innerHTML = `
    <div class="scenario-meta">
      <span>${scenario.category}</span>
      <span>긴급도 ${scenario.urgency}</span>
    </div>
    <h3>${scenario.title}</h3>
    <p>${scenario.situation}</p>
    <div class="focus-box">${scenario.focus}</div>
    <div class="tag-row">
      ${scenario.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
}

function renderRoleSelector() {
  const scenario = getScenario(state.scenarioId);
  $("#role-selector").innerHTML = roles
    .map(
      (role) => `
        <button class="role-option ${role.id === state.roleId ? "is-active" : ""}" type="button" data-role="${role.id}">
          <span>${role.name}</span>
          ${scenario.recommended.includes(role.id) ? '<small>추천</small>' : ""}
        </button>
      `,
    )
    .join("");

  $("#role-selector").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.roleId = button.dataset.role;
      const nextAction = getScenario(state.scenarioId).actions.find((action) => action.role === state.roleId);
      state.actionId = nextAction?.id || null;
      renderScenarioPractice();
    });
  });
}

function renderRoleDetail() {
  const role = getRole(state.roleId);
  $("#role-detail").innerHTML = `
    <p><strong>${role.short}</strong></p>
    <p>${role.description}</p>
  `;
}

function renderRoleFeedback() {
  const scenario = getScenario(state.scenarioId);
  const isRecommended = scenario.recommended.includes(state.roleId);
  $("#role-feedback").innerHTML = isRecommended
    ? `<strong>적절한 선택</strong><span>이 장면에서는 ${roleName(state.roleId)} 역할이 실제 개입으로 이어지기 좋습니다.</span>`
    : `<strong>주의</strong><span>이 역할도 가능하지만, 지금 장면에서는 ${scenario.recommended.map(roleName).join(", ")}부터 시작하는 편이 안정적입니다.</span>`;
  $("#role-feedback").classList.toggle("is-warning", !isRecommended);
}

function renderActionSelector() {
  const scenario = getScenario(state.scenarioId);
  const currentRoleActions = scenario.actions.filter((action) => action.role === state.roleId);
  const actions = currentRoleActions.length ? currentRoleActions : scenario.actions;
  if (!actions.some((action) => action.id === state.actionId)) {
    state.actionId = actions[0]?.id || null;
  }

  $("#action-selector").innerHTML = actions
    .map(
      (action) => `
        <button class="action-option ${action.id === state.actionId ? "is-active" : ""}" type="button" data-action="${action.id}">
          <strong>${action.title}</strong>
          <span>${roleName(action.role)}</span>
        </button>
      `,
    )
    .join("");

  $("#action-selector").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.actionId = button.dataset.action;
      renderActionDetail();
      renderDecisionSummary();
    });
  });

  renderActionDetail();
}

function renderActionDetail() {
  const scenario = getScenario(state.scenarioId);
  const action = scenario.actions.find((item) => item.id === state.actionId);
  $("#action-detail").innerHTML = action
    ? `<p><strong>${action.title}</strong></p><p>${action.detail}</p>`
    : `<p>이 역할에 맞는 행동을 직접 정해 보세요.</p>`;
}

function filteredSentencesForPractice() {
  const scenario = getScenario(state.scenarioId);
  const base = sentences.filter((sentence) => sentence.role === state.roleId);
  if (state.roleId !== "system") return base.slice(0, 9);

  if (scenario.id === "mocking-language" || scenario.id === "conflict-voices") {
    return base.filter((sentence) => sentence.level !== "수업 안 시스템").slice(0, 9);
  }
  if (scenario.id === "group-stuck") {
    return base.filter((sentence) => sentence.level !== "학년부·학교 시스템").slice(0, 9);
  }
  return base.slice(0, 9);
}

function renderSentenceGrid() {
  const items = filteredSentencesForPractice();
  $("#sentence-count").textContent = `${items.length}개 추천`;
  $("#sentence-grid").innerHTML = items
    .map(
      (sentence) => `
        <button class="sentence-card" type="button" data-text="${escapeAttribute(sentence.text)}">
          <span class="sentence-meta">${roleName(sentence.role)}${sentence.level ? ` · ${sentence.level}` : ""}</span>
          ${sentence.text}
        </button>
      `,
    )
    .join("");

  $("#sentence-grid").querySelectorAll(".sentence-card").forEach((button) => {
    button.addEventListener("click", () => {
      $("#sentence-grid").querySelectorAll(".sentence-card").forEach((card) => card.classList.remove("is-selected"));
      button.classList.add("is-selected");
      $("#draft-sentence").value = button.dataset.text;
      updateFeedback();
      renderDecisionSummary();
    });
  });
}

function updateFeedback() {
  const text = $("#draft-sentence").value;
  const role = getRole(state.roleId);
  const checks = {
    fact: /지금|방금|이어지|보이|상황|분위기|목소리|흐름/.test(text),
    "not-person": /누가|흐름|수업|설명|발표|활동|상황|이어지/.test(text) && !/너는|맨날|왜 그래/.test(text),
    boundary: /허용하지|멈춥|선|넘지|기준|않겠습니다/.test(text),
    system: /담임|학급|학년부|학교|절차|회의|규칙|방식|활동|질문|설명 5분/.test(text),
  };

  document.querySelectorAll(".check-item").forEach((item) => {
    item.classList.toggle("is-on", checks[item.dataset.check] || item.dataset.check === role.check);
  });
}

function renderScenarioPractice() {
  renderScenarioOptions($("#scenario-select"));
  renderScenarioDetail();
  renderRoleSelector();
  renderRoleDetail();
  renderRoleFeedback();
  renderActionSelector();
  renderSentenceGrid();
  renderDecisionSummary();
  updateFeedback();
}

function renderDecisionSummary() {
  const scenario = getScenario(state.scenarioId);
  const action = scenario.actions.find((item) => item.id === state.actionId);
  const sentence = $("#draft-sentence").value.trim() || "아직 작성하지 않았습니다.";
  $("#decision-summary").innerHTML = `
    <div>
      <p class="eyebrow">선택 요약</p>
      <h3>${scenario.title}</h3>
    </div>
    <dl>
      <div><dt>역할</dt><dd>${roleName(state.roleId)}</dd></div>
      <div><dt>행동</dt><dd>${action ? action.title : "직접 선택"}</dd></div>
      <div><dt>언어</dt><dd>${sentence}</dd></div>
    </dl>
  `;
}

function renderFlowBoard() {
  const scenario = getScenario($("#flow-scenario-select").value || state.scenarioId);
  $("#flow-board").innerHTML = roles
    .map((role, index) => {
      const sample = sentences.find((sentence) => sentence.role === role.id)?.text || "";
      return `
        <section class="flow-step">
          <h3>${index + 1}. ${role.name}</h3>
          <p>${role.short}. ${role.description}</p>
          <textarea data-flow-role="${role.id}" aria-label="${role.name} 문장">${sample}</textarea>
        </section>
      `;
    })
    .join("");

  $("#flow-board")
    .querySelectorAll("textarea")
    .forEach((textarea) => {
      const saved = localStorage.getItem(`flow:${scenario.id}:${textarea.dataset.flowRole}`);
      if (saved) textarea.value = saved;
      textarea.addEventListener("input", () => {
        localStorage.setItem(`flow:${scenario.id}:${textarea.dataset.flowRole}`, textarea.value);
      });
    });
}

function renderLibraryFilters() {
  const options = [{ id: "all", name: "전체" }, ...roles];
  $("#library-filters").innerHTML = options
    .map(
      (option) => `
        <button class="filter-chip ${option.id === state.libraryRole ? "is-active" : ""}" type="button" data-role="${option.id}">
          ${option.name}
        </button>
      `,
    )
    .join("");

  $("#library-filters").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.libraryRole = button.dataset.role;
      renderLibrary();
    });
  });
}

function renderLibraryList() {
  const query = state.search.trim().toLowerCase();
  const list = sentences.filter((sentence) => {
    const roleMatches = state.libraryRole === "all" || sentence.role === state.libraryRole;
    const textMatches =
      !query ||
      sentence.text.toLowerCase().includes(query) ||
      roleName(sentence.role).toLowerCase().includes(query) ||
      (sentence.level || "").toLowerCase().includes(query);
    return roleMatches && textMatches;
  });

  $("#library-count").textContent = `${list.length}개`;
  $("#library-list").innerHTML = list
    .map(
      (sentence) => `
        <div class="sentence-row">
          <strong>${roleName(sentence.role)}${sentence.level ? ` · ${sentence.level}` : ""}</strong>
          ${sentence.text}
        </div>
      `,
    )
    .join("");
}

function renderLibrary() {
  renderLibraryFilters();
  renderLibraryList();
}

function switchView(view) {
  state.view = view;
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((viewEl) => {
    viewEl.classList.toggle("is-visible", viewEl.id === `${view}-view`);
  });
}

function escapeAttribute(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function bindEvents() {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelectorAll("[data-view-jump]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.viewJump));
  });

  $("#scenario-select").addEventListener("change", (event) => {
    selectScenario(event.target.value);
    renderScenarioPractice();
  });

  $("#draft-sentence").addEventListener("input", () => {
    updateFeedback();
    renderDecisionSummary();
  });

  document.querySelectorAll(".scenario-filters .filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      document.querySelectorAll(".scenario-filters .filter-chip").forEach((chip) => {
        chip.classList.toggle("is-active", chip === button);
      });
      const first = visibleScenarios()[0];
      selectScenario(first.id);
      $("#draft-sentence").value = "";
      renderScenarioPractice();
    });
  });

  $("#reset-practice").addEventListener("click", () => {
    state.category = "all";
    document.querySelectorAll(".scenario-filters .filter-chip").forEach((chip) => {
      chip.classList.toggle("is-active", chip.dataset.category === "all");
    });
    selectScenario(scenarios[0].id);
    $("#scenario-select").value = state.scenarioId;
    $("#draft-sentence").value = "";
    renderScenarioPractice();
  });

  $("#flow-scenario-select").addEventListener("change", renderFlowBoard);

  $("#copy-flow").addEventListener("click", async () => {
    const lines = Array.from($("#flow-board").querySelectorAll("textarea")).map((textarea) => {
      return `${roleName(textarea.dataset.flowRole)}: ${textarea.value.trim()}`;
    });
    await navigator.clipboard.writeText(lines.join("\n"));
    $("#copy-flow").textContent = "복사됨";
    setTimeout(() => {
      $("#copy-flow").textContent = "흐름 복사";
    }, 1400);
  });

  $("#search-input").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderLibraryList();
  });
}

function init() {
  renderScenarioOptions($("#scenario-select"));
  renderScenarioOptions($("#flow-scenario-select"), false);
  bindEvents();
  renderScenarioPractice();
  renderFlowBoard();
  renderLibrary();
}

init();
