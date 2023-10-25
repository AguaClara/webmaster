import AguaClara from "../assets/img/AguaClara_Logo.png";

function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-black">
      <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">

        {/* Left - Logo */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img src={AguaClara} alt="AguaClara Logo" className="w-64" /> {/* Adjusted size here */}
        </div>

        {/* Middle - Contact */}
        <div className="flex flex-col items-start mb-4 md:mb-0 md:ml-12">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <a className="text-black hover:underline mb-1" href="https://www.instagram.com/cuaguaclara/">Instagram</a>
          <a className="text-black hover:underline mb-1" href="https://www.linkedin.com/company/aguaclara-at-cornell/">LinkedIn</a>
          <a className="text-black hover:underline mb-1" href="https://www.facebook.com/CUAguaClara/">Facebook</a>
          <a className="text-black hover:underline" href="https://github.com/AguaClara">GitHub</a>
        </div>

        {/* Right - Donate */}
        <div className="flex flex-col items-start ml-12">
          <h3 className="text-lg font-semibold mb-2">Donate</h3>
          <a href="https://www.aguaclara.org/donate/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Donate Now
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center">
        <p>&copy; 2023 AguaClara Cornell</p>
      </div>
    </footer>
  );
};

export default Footer;
