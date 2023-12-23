import git from "../assets/img/socials/github.png";
import linkedin from "../assets/img/socials/linkedin.png";
import reach from "../assets/img//socials/Reach.png";
import insta from "../assets/img/socials/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-[#003C08] text-white rounded-tl-3xl rounded-tr-3xl">
      <div className="flex flex-row justify-between items-center py-16 px-12">
        <p className="text-white text-sm">&copy; 2023 AguaClara Cornell</p>
        <div className="flex flex-row items-center space-x-8">
          <a href="https://github.com/AguaClara" className="w-8 h-8">
            <img src={git} alt="GitHub Logo" className="w-full h-full" />
          </a>
          <a
            href="https://www.linkedin.com/company/aguaclara-at-cornell/mycompany/"
            className="w-8 h-8"
          >
            <img src={linkedin} alt="LinkedIn Logo" className="w-full h-full" />
          </a>
          <a href="https://www.aguaclarareach.org" className="w-8 h-8">
            <img src={reach} alt="AguaClara Reach Logo" className="h-full" />
          </a>
          <a
            href="https://www.instagram.com/cuaguaclara/?hl=en"
            className="w-8 h-8"
          >
            <img src={insta} alt="Instagram Logo" className="w-full h-full" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
