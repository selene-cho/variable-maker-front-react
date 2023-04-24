import styles from "./Abbreviation.module.scss";
import { HiOutlineCode } from "react-icons/hi";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { FcSearch } from "react-icons/fc";
import { BsChatSquareText } from "react-icons/bs";
import pascalImg from "../images/Pascal.png";
import camelImg from "../images/camel.png";
import snakeImg from "../images/snake.png";

export default function Abbreviation() {
  return (
    <div className={styles.container}>
      <div className={styles.variableWrapper}>
        <div className={styles.content}>
          <header>
            <HiOutlineCode className={styles.icon} />
            <p>
              이 단어는 <span>100</span>명이 검색했어요 🧐
            </p>
          </header>
          <div className={styles.result}>
            <p>
              🤔 &nbsp; '&nbsp;<span></span> ' 약어 추천 부탁해!
            </p>
            <TbArrowBigDownLinesFilled className={styles.arrow} />
            <p>
              🤓 &nbsp; 추천 약어는 '&nbsp;
              <span></span> ' 입니다.
            </p>
            <div className={styles.chagedCase}>
              <div className={styles.case}>
                <div className={styles.caseName}>
                  <img
                    className={styles.snakeImg}
                    src={snakeImg}
                    alt="{snakeImg}"
                  />
                  <p>snake_case</p>
                </div>
                <p></p>
              </div>
              <div className={styles.case}>
                <div className={styles.caseName}>
                  <img
                    className={styles.camelImg}
                    src={camelImg}
                    alt={camelImg}
                  />
                  <p>camelCase</p>
                </div>
                <p></p>
              </div>
              <div className={styles.case}>
                <div className={styles.caseName}>
                  <img
                    className={styles.pascalImg}
                    src={pascalImg}
                    alt={pascalImg}
                  />
                  <p>pascalCase</p>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className={styles.searchWrapper}>
        <div className={styles.search}>
          <BsChatSquareText className={styles.icon} />
          <input
            type="search"
            name="search"
            placeholder="줄이고 싶은 변수명을 입력해주세요. &nbsp; (단어만 입력헤주세요)"
          />
          <button type="submit">
            <FcSearch className={styles.icon} />
          </button>
        </div>
      </form>
    </div>
  );
}
