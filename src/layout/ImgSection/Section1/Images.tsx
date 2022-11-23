import {ReactComponent as YellowDots} from '../../../assets/icons/bg-dots-yellow.svg'

function Images() {
  return (
    <div className="images">
      <div className="dots">
        <YellowDots/>
      </div>

      <div className="image-cont image-cont--1">
        <img
          className="image-cont__back"
          src="./assets/img-section/Img-1.3.png"
          alt="production"
        />
        <img
          className="image-cont__front"
          src="./assets/img-section/Img-1.1.png"
          alt="production"
        />
      </div>
      
      <div className="image-cont image-cont--2">
        <img
          className="image-cont__back"
          src="./assets/img-section/Img-1.3.png"
          alt="production"
        />
        <img
          className="image-cont__front"
          src="./assets/img-section/Img-1.2.png"
          alt="production"
        />
      </div>

      <div className="image-cont image-cont--3">
        <img
          className="image-cont__back"
          src="./assets/img-section/Img-1.2.png"
          alt="production"
        />
        <img
          className="image-cont__front"
          src="./assets/img-section/Img-1.3.png"
          alt="production"
        />
      </div>
    </div>
  );
}

export default Images;
