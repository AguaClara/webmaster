import styles from './footer.module.css';
import AguaClara from "../assets/img/AguaClara_Logo.png";

function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
            <img src={AguaClara} alt="AguaClara Logo" />
        </div>
        <div className={styles.footerMiddle}>
          <h3 className={styles.footerHeading}>Contact</h3>
          <p className={styles.footerText}>
            <a className={styles.inst} href="https://www.instagram.com/cuaguaclara/">Instagram</a>
            <br />
            <a className={styles.inst} href="https://www.linkedin.com/company/aguaclara-at-cornell/">LinkedIn</a>
            <br />
            <a className={styles.inst} href="https://www.facebook.com/CUAguaClara/">Facebook</a>
            <br />
            <a className={styles.inst} href="https://github.com/AguaClara">GitHub</a>
          </p>
        </div>
        <div className={styles.footerRight}>
          <h3 className={styles.footerHeading}>Donate</h3>
          <a href="https://www.aguaclara.org/donate/" className={styles.footerButton}>
            Donate Now
          </a>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p className={styles.footerCopyrightText}>
          &copy; 2023 AguaClara Cornell
        </p>
      </div>
    </footer>
  );
};

export default Footer;
