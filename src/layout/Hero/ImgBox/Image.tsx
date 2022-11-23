type ImagePropType = {
  num: number;
  animation: string;
};

function Image({ num, animation }: ImagePropType) {
  return (
    <div
      className={`image anim-image-${num}`}
      data-aos={animation}
      data-aos-once="true"
      data-aos-duration="800"
      data-aos-delay="500"
    >
      <img src={`\\assets\\hero-images\\hero-img${num}.png`} alt="Man" />
    </div>
  );
}

export default Image;
