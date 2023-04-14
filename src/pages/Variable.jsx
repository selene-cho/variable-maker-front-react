import { HiOutlineCode } from 'react-icons/hi';
import styles from './Variables.module.scss';
import { CiDesktopMouse1 } from 'react-icons/ci';
import { TbArrowBigDownLinesFilled } from 'react-icons/tb';

export default function Variable() {
  return (
    <>
      <div className={styles.container}>
        <header>
          <HiOutlineCode className={styles.icon} />
          <p>
            이 단어는 <span>100</span>명이 검색했어요 🧐
          </p>
        </header>
        <div className={styles.result}>
          <p>
            🤔 &nbsp; ' <span>variable</span> ' 변수명 추천 부탁해!
          </p>
          <TbArrowBigDownLinesFilled className={styles.arrow} />
          <p>
            🤓 &nbsp; 추천 변수명은 ' <span>변수명</span> ' 입니다.
          </p>
        </div>
      </div>
      <div className={styles.toDictionary}>
        무슨 뜻일까?? &nbsp;단어 뜻 검색
        <CiDesktopMouse1 className={styles.icon} /> &nbsp;Go!Go!
      </div>
    </>
  );
}
