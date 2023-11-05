import './footer.css';
import AguaClara from "../assets/img/AguaClara_Logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-white text-center py-4 mt-20">
      <div className="container mx-auto">
        <p>&copy; 2023 AguaClara Cornell</p>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-5">
        <div className="w-1/3">
          <img src={AguaClara} alt="" />
        </div>
        <div className="w-1/3">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p>
            <a className="text-blue-500 hover:text-blue-700" href="https://www.instagram.com/cuaguaclara/">Instagram</a>
            <br />
            <a className="text-blue-500 hover:text-blue-700" href="https://www.linkedin.com/company/aguaclara-at-cornell/">LinkedIn</a>
            <br />
            <a className="text-blue-500 hover:text-blue-700" href="https://www.facebook.com/CUAguaClara/">Facebook</a>
            <br />
            <a className="text-blue-500 hover:text-blue-700" href="https://github.com/AguaClara">GitHub</a>
          </p>
        </div>
        <div className="w-1/3">
          <h3 className="text-2xl font-semibold">Donate</h3>
          <a href="https://www.aguaclara.org/donate/" className="bg-white text-blue-500 hover:bg-blue-300 hover:text-white px-4 py-2 rounded-full font-semibold">Donate Now</a>
        </div>
      </div>
      <div className="bg-blue-300 py-2">
        <p className="text-white text-sm">&copy; 2023 AguaClara Cornell</p>
      </div>
    </footer>
  );
};

export default Footer;
