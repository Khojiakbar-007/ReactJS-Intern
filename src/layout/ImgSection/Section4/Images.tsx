import { ReactComponent as YellowDots } from "../../../assets/icons/bg-dots-yellow.svg";
import { ReactComponent as CyanDots } from "../../../assets/icons/bg-dots-cyan.svg";

function Images() {
  return (
    <div className="images pos-rel">
      <div className="dots dots--1">
        <YellowDots />
      </div>

      <div className="dots dots--2">
        <CyanDots />
      </div>

      <div className="image-cont image-cont--1">
        <img
          className="image-cont__back"
          src="./assets/img-section/Img-3.2.png"
          alt="production"
        />
        <img
          className="image-cont__front"
          src="./assets/img-section/Img-4.1.png"
          alt="production"
        />
      </div>

      <div className="image-cont image-cont--2">
        <img
          className="image-cont__back"
          src="./assets/img-section/Img-4.1.png"
          alt="production"
        />
        <img
          className="image-cont__front"
          src="./assets/img-section/Img-4.2.png"
          alt="production"
        />
      </div>

      <div className="image-cont image-cont--3">
        <img
          className="image-cont__back"
          src="./assets/img-section/Img-4.1.png"
          alt="production"
        />
        <img
          className="image-cont__front"
          src="./assets/img-section/Img-4.2.png"
          alt="production"
        />
      </div>
    </div>
  );
}

export default Images;
