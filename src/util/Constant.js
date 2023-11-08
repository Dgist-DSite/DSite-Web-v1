export const Constant = {
  categoryList: ["안드로이드", "웹", "iOS", "서버", "게임", "임베디드", "창업", "기타"],
  topRailList: ['로드맵', '컨퍼런스', 'IT 뉴스'],
  bottomRailList: ['개인정보 처리방침'],
  roadmapList: ['대소고인', '안드로이드', '웹', 'iOS', '서버', '자료구조', '알고리즘', 'PM', '게임', '임베디드']
}

export const nodeList = [
  {
    id: 0,
    xPos: 5,
    yPos: 10,
    text: '인터넷'
  }, {
    id: 3,
    xPos: 26,
    yPos: 12,
    text: '언어배우기'
  }, {
    id: 4,
    xPos: 26,
    yPos: 30,
    text: '데이터베이스'
  }, {
    id: 5,
    xPos: 10,
    yPos: 56,
    text: '운영체제'
  }, {
    id: 6,
    xPos: 16,
    yPos: 70,
    text: 'API'
  }, {
    id: 7,
    xPos: 50,
    yPos: 66,
    text: '웹 보안'
  }
]

export const detailList = [
  {
    id: 1,
    xPos: 11,
    yPos: 15,
    text: 'HTTP란 무엇인가?'
  }, {
    id: 2,
    xPos: 11,
    yPos: 18,
    text: '인터넷 작동 원리'
  }, {
    id: 8,
    xPos: 36,
    yPos: 15,
    text: 'javascript'
  }, {
    id: 9,
    xPos: 36,
    yPos: 18,
    text: 'python'
  }, {
    id: 10,
    xPos: 36,
    yPos: 21,
    text: 'java'
  }, {
    id: 11,
    xPos: 26,
    yPos: 43,
    text: 'RDBMS'
  }, {
    id: 12,
    xPos: 26,
    yPos: 40,
    text: 'NoSQL'
  }, {
    id: 13,
    xPos: 36,
    yPos: 40,
    text: 'ORM'
  }, {
    id: 14,
    xPos: 36,
    yPos: 43,
    text: 'DB 개론'
  }, {
    id: 15,
    xPos: 26,
    yPos: 67,
    text: 'REST'
  }, {
    id: 16,
    xPos: 26,
    yPos: 64,
    text: 'JSON'
  }, {
    id: 17,
    xPos: 26,
    yPos: 61,
    text: 'Auth'
  }, {
    id: 18,
    xPos: 20,
    yPos: 56,
    text: 'OS 작동 원리'
  }, {
    id: 19,
    xPos: 20,
    yPos: 50,
    text: '메모리'
  }, {
    id: 20,
    xPos: 20,
    yPos: 53,
    text: '프로세스'
  }, {
    id: 21,
    xPos: 60,
    yPos: 60,
    text: '해싱알고리즘'
  }, {
    id: 22,
    xPos: 60,
    yPos: 57,
    text: 'SSL/TLS'
  }, {
    id: 23,
    xPos: 60,
    yPos: 54,
    text: 'CORS'
  }
]

export const pathList = [
  {
    startNodeId: 0,
    endNodeId: 1,
    type: 3
  }, {
    startNodeId: 0,
    endNodeId: 2,
    type: 3
  }, {
    startNodeId: 3,
    endNodeId: 4,
    type: 1
  }, {
    startNodeId: 0,
    endNodeId: 3,
    type: 1
  }, {
    startNodeId: 4,
    endNodeId: 5,
    type: 0
  }, {
    startNodeId: 5,
    endNodeId: 6,
    type: 3
  }, {
    startNodeId: 6,
    endNodeId: 7,
    type: 2
  }, {
    startNodeId: 3,
    endNodeId: 8,
    type: 3
  }, {
    startNodeId: 3,
    endNodeId: 9,
    type: 3
  }, {
    startNodeId: 3,
    endNodeId: 10,
    type: 3
  }, {
    startNodeId: 4,
    endNodeId: 11,
    type: 1
  }, {
    startNodeId: 4,
    endNodeId: 14,
    type: 1
  }, {
    startNodeId: 5,
    endNodeId: 19,
    type: 2
  }, {
    startNodeId: 6,
    endNodeId: 17,
    type: 2
  }, {
    startNodeId: 7,
    endNodeId: 23,
    type: 2
  }
];

export function generateTopRailPath(e) {
  let result;
  switch (e) {
    case '로드맵':
      result = 'roadmap'
      break;
    case '컨퍼런스':
      result = 'conference';
      break;
    case 'IT 뉴스':
      result = 'itnews';
      break;
  }
  return result;
}

export function generateBottomRailPath(e) {
  let result;
  switch (e) {
    case '개인정보 처리방침':
      result = '/policy';
      break;
  }
  return result
}