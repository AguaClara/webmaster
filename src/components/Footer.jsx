import './footer.css';
import AguaClara from "../assets/img/AguaClara_Logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          
         
            <img src={AguaClara} alt="" />
          
          
        </div>
        <div className="footer-middle">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">
            <a className='inst' href="https://www.instagram.com/cuaguaclara/">Instagram</a>
            <br />
            <a className='inst' href="https://www.linkedin.com/company/aguaclara-at-cornell/">LinkedIn</a>
            <br />
            <a className='inst' href="https://www.facebook.com/CUAguaClara/">Facebook</a>
            <br />
            <a className='inst' href="https://github.com/AguaClara">GitHub</a>
          </p>
        </div>
        <div className="footer-right">
          <h3 className="footer-heading">Donate</h3>
          <a href="https://www.aguaclara.org/donate/" className="footer-button">
            Donate Now
          </a>
        
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-copyright-text">
          &copy; 2023 AguaClara Cornell
        </p>
      </div>
    </footer>
  );
};

export default Footer;
