import { useEffect } from "react";
import styles from "./AboutUsAd.module.scss";

export default function AboutUsAd() {
  // 광고 생성 함수
  const KakaoLoadOne = () => {
    let ins = document.createElement("ins");
    let scr = document.createElement("script");

    ins.className = "kakao_ad_area";
    ins.style = "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute("data-ad-width", "160");
    ins.setAttribute("data-ad-height", "600");
    ins.setAttribute("data-ad-unit", "DAN-nNjs3aJ7PBpLfXOK");

    document.querySelector(".adfitOne").appendChild(ins);
    document.querySelector(".adfitOne").appendChild(scr);
  };
  useEffect(() => {
    KakaoLoadOne();
  }, []);

  return (
    <>
      <div className={styles.aboutUsAd}>
        <div className="adfitOne"></div>
      </div>
    </>
  );
}
