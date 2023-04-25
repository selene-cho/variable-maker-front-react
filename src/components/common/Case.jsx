import styles from './Case.module.scss';

export default function Case({ changedCase, caseImg, children }) {
  return (
    <div className={styles.caseWrapper}>
      <div className={styles.caseName}>
        <img src={caseImg} alt={caseImg} />
        <p>{children}</p>
      </div>
      <p>{changedCase}</p>
    </div>
  );
}
