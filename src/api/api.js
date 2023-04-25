/* 변수 추천 API */

export async function getTranslateWord(word = '') {
  const query = `word=${word}`;
  const response = await fetch(
    `http://223.130.128.91/api/v1/variabletranslate/search/?${query}`
  );
  if (!response.ok) {
    throw new Error('변수 추천 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

/* 약어 추천 API */

export async function getAbbr(word = '') {
  const query = `word=${word}`;
  const response = await fetch(
    `http://223.130.128.91/api/v1/abbr/search/?${query}`
  );
  if (!response.ok) {
    throw new Error('약어 추천 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

// curl -X POST --data-urlencode

// POST "https://hooks.slack.com/services/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"

// Content-type: application/json

// "payload= {
//   \"channel\": \"#일반\",
//   \"text\": \"이 항목은 #개의 일반에 포스트되며 webhookbot이라는 봇에서 제공됩니다.\"
// }"
