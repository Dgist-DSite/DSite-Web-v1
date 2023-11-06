export const Constant = {
  categoryList: ["안드로이드", "웹", "iOS", "서버", "게임", "임베디드", "창업", "기타"],
  railList: ['홈', '로드맵', '컨퍼런스', 'IT 뉴스'],

}

export function generateRailPath(e) {
  let result;
  switch (e) {
    case '홈':
      result = '';
      break;
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