import CustomBox from "../../../components/CustomBox";
import H2 from "../../../components/Typography/H2";
import BigText from "../../../components/Typography/Text/BigText";
import Images from "./Images";

function Section1() {
  return (
    <section className="img-section__sect-1 container-fluid pos-rel">
      <CustomBox gap="42px" alignItems="flex-start">
        <div data-aos="zoom-out-right">
          <CustomBox
            className="text"
            flexDirection="column"
            gap="31px"
            alignItems="flex-start"
          >
            <H2>Сельское хозяйство</H2>
            <BigText>
              Выращивание хлопка, зерновых культур (пшеница, рис), картофель,
              выращивание бобовых и масляных (маш, соя), кормовые культуры,
              выращивание прочих не многолетних культур, растение индигоферы,
              получение коконов, животноводство, рыбное хозяйство
            </BigText>
          </CustomBox>
        </div>

        <div data-aos="zoom-out-left">
          <Images />
        </div>
      </CustomBox>
    </section>
  );
}

export default Section1;
