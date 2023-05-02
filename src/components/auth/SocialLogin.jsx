import { RiKakaoTalkFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styles from './SocialLogin.module.scss';
import { FcGoogle } from 'react-icons/fc';

export default function SocialLogin() {
  const kakaoParams = {
    client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
    response_type: 'code',
  };
  const kakao_params = new URLSearchParams(kakaoParams).toString();

  return (
    <>
      <button className={styles.kakao}>
        <Link
          to={`https://kauth.kakao.com/ouath/authorize?${kakao_params}`}
          className={styles.link}
        >
          <RiKakaoTalkFill className={styles.sns} />
          카카오 로그인
        </Link>
      </button>
      <button className={styles.google}>
        <Link to="/" className={styles.link}>
          <FcGoogle className={styles.sns} />
          구글 로그인
        </Link>
      </button>
    </>
  );
}
