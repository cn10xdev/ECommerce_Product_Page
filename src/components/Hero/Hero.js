import { MouseParallax } from "react-just-parallax";
import styles from "./Hero.module.css";
import { useRef } from "react";
// import Generating from "./Generating";
// import Notification from "./Notification";
// import CompanyLogos from "./CompanyLogos";

import Section from "../Sections/Section";
import curve from "../../assets/hero/curve.png";
import background from "../../assets/hero/hero-background.jpg";
import centerImg from "../../assets/hero/main.jpg";
import Gradient from "../HeroStructure/Gradient";
import { heroIcons } from "../../constants/heroParallex";
import HeroNotification from "../HeroNotification/HeroNotification";
import CompanyLogos from "../CompanyLogos/CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[8rem] lg:pt-[12rem] md:pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative"
        ref={parallaxRef}
      >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6">
            Let's explore unique branded &nbsp;clothing&nbsp; with {` `}
            <span className="inline-block relative">
              EcomGrove{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unlock a World of Possibilities with E-commerce!. Innovative
            Solutions At Unbeatable Prices. A Different Kind Of Company. A
            Different Kind Of Ecommerce.
          </p>
          <div className="w-full flex items-center justify-center">
            <button
              className={`text-white relative p-3 capitalize rounded-full shadow-slate-950 shadow-inner bg-[#AC6AFF] hover:bg-transparent btn flex items-center justify-center ${styles.btnMain}`}
            >
              Get started
            </button>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 mb-12">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={centerImg}
                  className="w-full scale-[3] translate-y-[8%] lg:scale-[1] md:scale-[1.5] sm:scale-[3] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <MouseParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </MouseParallax>

                <MouseParallax isAbsolutelyPositioned>
                  <HeroNotification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Top Customer"
                  />
                </MouseParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[200%] lg:-top-[104%]">
            <img
              src={background}
              className="w-full opacity-40 scale-[2.2] lg:scale-[1] md:scale-[1.5] sm:scale-[2]"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block " />
      </div>
    </Section>
  );
};

export default Hero;
