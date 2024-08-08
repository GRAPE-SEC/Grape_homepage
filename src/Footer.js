import styles from "./styles/Footer.module.css";

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.frameParent15}>
                <div className={styles.buyYourDreamPlantsParent}>
                    <div className={styles.largeAssortment}>{`GRAPE `}</div>
                </div>
                <div className={styles.groupParent2}>
                    <div className={styles.mainList}>
                        Instagram: grape_hacking
                    </div>
                    <img className={styles.frameChild12} alt="" src="/icons/instagram.png" />
                </div>
                </div>
                <div className={styles.frameParent16}>
                <div className={styles.buyYourDreamPlantsParent}>
                    <b className={styles.information}>GRAPE</b>
                    <div className={styles.largeAssortment}>Pre-Hackademy</div>
                    <div className={styles.largeAssortment}>Github</div>
                    <div className={styles.largeAssortment}>질문 게시판</div>
                    <div className={styles.largeAssortment}>전체 공지</div>
                </div>
                <div className={styles.buyYourDreamPlantsParent}>
                    <b className={styles.information}>JUNIOR</b>
                    <div className={styles.largeAssortment}>Hackademy</div>
                    <div className={styles.largeAssortment}>과제 제출</div>
                </div>
                <div className={styles.buyYourDreamPlantsParent}>
                    <b className={styles.information}>SENIOR</b>
                    <div className={styles.largeAssortment}>프로젝트</div>
                </div>
                </div>
                <div className={styles.allRightReserved}>
                    2024 all Right Reserved Term of use GRAPE
            </div>
        </div>
    );
}

export default Footer;