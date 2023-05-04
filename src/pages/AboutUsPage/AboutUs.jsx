import styles from "./AboutUs.module.scss";
import yoontaeImg from "../../images/lyt.jpeg";
import daheeImg from "../../images/cdh.jpg";
import royImg from "../../images/roy.webp";
import Profile from "./Profile";
import AboutUsAd from "./AboutUsAd";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.team}>
          Team. 로이
          <p>with ROCKET-DAN</p>
        </h1>
        <img className={styles.royImg} src={royImg} alt={royImg} />
      </header>
      <section className={styles.profile}>
        <div className={styles.profileWrapper}>
          <Profile
            profileImg={daheeImg}
            GithubLink={"https://github.com/selene-cho"}
            VelogLink={"https://velog.io/@fullmoon29"}
            name={"조다희"}
            tech={"[ FRONT-END ]"}
          >
            ✈️ 인천공항 지상직원에서 프론트엔드 개발자로 👩🏻‍💻
          </Profile>
        </div>
        <div className={styles.profileWrapper}>
          <Profile
            profileImg={yoontaeImg}
            GithubLink={"https://github.com/yesaroun"}
            TistoryLink={"https://yesaroun.tistory.com/"}
            name={"이윤태"}
            tech={"[ BACK-END ]"}
          >
            ✨ 예사로움을 지향하는 백엔드 개발자 👨🏻‍💻
          </Profile>
        </div>
      </section>
      <section className={styles.updateInfo}>
        <h1>UPDATE INFO</h1>
        <p>v1.0.0-alpha</p>
        <p>2023.05.04</p>
      </section>
      <AboutUsAd></AboutUsAd>
    </div>
  );
}
