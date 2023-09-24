import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import wwa1 from "../assets/img/wwa1.png";
import wwa2 from "../assets/img/wwa2.png";
import wwa3 from "../assets/img/wwa3.png";

function Whoweare() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <motion.div
        ref={containerRef}
        initial={{ x: isVisible ? 0 : "-100vw" }}
        animate={{ x: isVisible ? 0 : "-100vw" }}
        transition={{ type: "linear", duration: 1 }}
        className="flex flex-row items-center justify-between"
      >
        <div className="flex flex-row items-center justify-between">
          <img src={wwa1} className="w-[45%] mt-[2%]" />
          <div className="text-xl">
            Visiting Honduras gives us insight into the filtering processes of
            our plants
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={containerRef}
        initial={{ x: isVisible ? 0 : "100vw" }}
        animate={{ x: isVisible ? 0 : "100vw" }}
        transition={{ type: "linear", duration: 1 }}
        className="flex flex-row items-center justify-between"
      >
        <div className="flex items-center justify-between mt-[2%]">
          <img src={wwa2} className="w-[45%] mt-1" />
          <div className="ml-4 text-right">
            <img src={wwa3} className="w-[90%] mb-4 float-right" />
            <div className="w-[50%] float-right text-xl">
              Our annual trip to Honduras! We send members to Honduras every
              year to learn about the treatment plants and the local
              communities.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Whoweare;
