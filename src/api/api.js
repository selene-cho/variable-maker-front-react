import axios from 'axios';
import Cookies from 'js-cookie';

const host =
  window.location.hostname === 'localhost'
    ? 'http://127.0.0.1:8000'
    : 'http://223.130.129.40';
console.log(window.location.hostname);

/* 변수 추천 API */
export async function getTranslateWord(word = '') {
  const query = `word=${word}`;
  const response = await fetch(
    `${host}/api/v1/variabletranslate/search/?${query}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
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
  const response = await fetch(`${host}/api/v1/abbr/search/?${query}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('약어 추천 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

const instance = axios.create({
  baseURL: 'http://223.130.129.40/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    withCredentials: true,
  },
});

/* 회원 기본정보 - GET */
export const getMyInfo = () =>
  instance.get('users/myinfo/').then((res) => res.data);

/* 일반 로그인 - POST */
export const usernameLogIn = ({ username, password }) =>
  instance
    .post(
      'users/login/',
      { username, password },
      {
        headers: {
          'X-CSRFToken': Cookies.get('csrftoken') || '',
        },
      }
    )
    .then((res) => res.data);

/* 로그아웃 - POST */
export const logOut = () =>
  instance
    .post('users/logout/', null, {
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken') || '',
      },
    })
    .then((res) => res.data);

/* KAKAO 로그인 - POST */

export const kakaoLogin = (code) =>
  instance
    .post(
      'users/kakao/',
      { code },
      {
        headers: {
          'X-CSRFToken': Cookies.get('csrftoken') || '',
        },
      }
    )
    .then((res) => res.status);
