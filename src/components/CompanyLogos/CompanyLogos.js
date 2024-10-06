import slider1Img from "../../assets/slider/logo1.svg";
import slider2Img from "../../assets/slider/logo2.svg";
import slider3Img from "../../assets/slider/logo3.svg";
import slider4Img from "../../assets/slider/logo4.svg";
import slider5Img from "../../assets/slider/logo5.svg";
import slider6Img from "../../assets/slider/logo6.svg";
import slider7Img from "../../assets/slider/logo7.svg";
import slider8Img from "../../assets/slider/logo8.svg";
import slider9Img from "../../assets/slider/logo9.svg";
import slider10Img from "../../assets/slider/logo10.svg";
import styles from "./CompanyLogos.module.css";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-10 text-center text-n-1/50">
        Shop with our top brands
      </h5>

      <div
        className={styles.slider}
        style={{ "--width": "100px", "--height": "4rem", "--quantity": 10 }}
      >
        <div className={styles.list}>
          <div
            className={`${styles.item} scale-[0.8] md:scale-[1]`}
            style={{ "--position": 1 }}
          >
            <img src={slider1Img} alt="" />
          </div>
          <div
            className={`${styles.item} scale-[0.8] md:scale-[1]`}
            style={{ "--position": 2 }}
          >
            <img src={slider2Img} alt="" />
          </div>
          <div
            className={`${styles.item} scale-[0.8] md:scale-[1]`}
            style={{ "--position": 3 }}
          >
            <img src={slider3Img} alt="" />
          </div>
          <div
            className={`${styles.item} scale-[0.8] md:scale-[1]`}
            style={{ "--position": 4 }}
          >
            <img src={slider4Img} alt="" />
          </div>
          <div
            className={`${styles.item} scale-[0.8] md:scale-[1]`}
            style={{ "--position": 5 }}
          >
            <img src={slider5Img} alt="" />
          </div>
          <div
            className={`${styles.item} scale-[0.8] md:scale-[1]`}
            style={{ "--position": 6 }}
          >
            <img src={slider6Img} alt="" />
          </div>
          <div
            className={`${styles.item} scale-[0.8] md:scale-[1]`}
            style={{ "--position": 7 }}
          >
            <img src={slider7Img} alt="" />
          </div>
          <div
            className={`${styles.item} scale-[0.8] md:scale-[1]`}
            style={{ "--position": 8 }}
          >
            <img src={slider8Img} alt="" />
          </div>
          <div
            className={`${styles.item} scale-[0.8] md:scale-[1]`}
            style={{ "--position": 9 }}
          >
            <img src={slider9Img} alt="" />
          </div>
          <div
            className={`${styles.item} scale-[0.8] md:scale-[1]`}
            style={{ "--position": 10 }}
          >
            <img src={slider10Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
