/* 변수 추천 API */

export async function getTranslateWord(word = '') {
  const query = `word=${word}`;
  const response = await fetch(
    `http://223.130.128.91/api/v1/variabletranslate/search/?${query}`
  );
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

/* 약어 추천 API */
