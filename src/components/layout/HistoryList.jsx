import { FcSurvey } from 'react-icons/fc';
import styles from './HistoryList.module.scss';
import { IoClose } from 'react-icons/io5';

export default function HistoryList({ keywords, onDeleteKeyword }) {
  return (
    <>
      <h1 className={styles.title}>
        <FcSurvey className={styles.icon} />
        최근 검색 기록
      </h1>
      <ul className={styles.historyList}>
        {keywords.map(({ id, text }) => {
          return (
            <li className={styles.historyItem} key={id}>
              <span>{text}</span>
              <button
                className={styles.deleteButton}
                onClick={() => {
                  onDeleteKeyword(id);
                }}
              >
                <IoClose />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
