import styles from "./styles/Header.module.css";

const Header = () => {
    return(
        <div>
            <div className={styles.mainParent}>
                <div className={styles.mainLogo}>
                    <img src="/icons/grapeLogo.png" alt= "" width="200px"/> 
                </div>
                <div className={styles.mainList}>GRAPE</div>
                <div className={styles.mainList}>JUNIOR</div>
                <div className={styles.mainList}>SENIOR</div>
                <div className={styles.mainList}>MANAGEMENT</div>
                <div className={styles.cartParent}>
                    <div className={styles.cart} />
                    <img className={styles.cart} alt="" src="/icons/person.png" />
                    <div className={styles.frameChild} />
                    <img className={styles.cart} alt="" src="/icons/menu.png" />
                </div>
            </div>
        </div>
    );
}

export default Header;