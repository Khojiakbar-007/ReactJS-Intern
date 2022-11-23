import { ReactComponent as BGDotsCyan } from "../../../assets/icons/bg-dots-cyan.svg";
import { ReactComponent as BGDotsYellow } from "../../../assets/icons/bg-dots-yellow.svg";
import Image from "./Image";

const animations = [
  "fade-down-right",
  "fade-down-left",
  "fade-right",
  "zoom-in",
  "fade-left",
  "fade-up-right",
  "fade-up-left",
];

function ImgBox() {
  return (
    <div className="hero__images-container">
      {animations.map((animation, i) => (
        <Image
          num={i + 1}
          animation={animation}
          key={i}
        />
      ))}

      <div className="dots dots--cyan" data-aos="fade-right">
        <BGDotsCyan />
      </div>
      <div className="dots dots--yellow" data-aos="fade-left">
        <BGDotsYellow />
      </div>
    </div>
  );
}

export default ImgBox;
