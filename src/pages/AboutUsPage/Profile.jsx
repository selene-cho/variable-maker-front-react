import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { SiVelog, SiTistory } from 'react-icons/si';
import styles from './Profile.module.scss';

export default function Profile({
  profileImg,
  name,
  tech,
  content,
  children,
  GithubLink,
  VelogLink,
  TistoryLink,
}) {
  return (
    <>
      <div className={styles.profile}>
        <img className={styles.profileImg} src={profileImg} alt={profileImg} />
        <div className={styles.introduce}>
          <p>{tech}</p>
          <p>{name}</p>
          <div className={styles.sns}>
            <Link to={GithubLink} target="_blank">
              <AiFillGithub className={`${styles.icon} ${styles.github}`} />
            </Link>
            {VelogLink && (
              <Link to={VelogLink} target="_blank">
                <SiVelog className={`${styles.icon} ${styles.velog}`} />
              </Link>
            )}
            {TistoryLink && (
              <Link to={TistoryLink} target="_blank">
                <SiTistory className={`${styles.icon} ${styles.tistory}`} />
              </Link>
            )}
          </div>
        </div>
      </div>
      <p className={styles.content}>{children}</p>
    </>
  );
}
