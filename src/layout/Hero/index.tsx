import BreadCrumb from "../../components/BreadCrumb";
import ButtonY from "../../components/Button";
import CenterBox from "../../components/CenterBox";
import CustomBox from "../../components/CustomBox";
import H1 from "../../components/Typography/H1";
import BigText from "../../components/Typography/Text/BigText";
import ImgBox from "./ImgBox";

import "./styles.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="container-fluid">
        <CustomBox gap="85px" alignItems="flex-start" flexDirection="column">
          <BreadCrumb />

          <CenterBox gap="129px">
            <CustomBox
              className="hero__about"
              gap="40px"
              alignItems="flex-start"
              flexDirection="column"
            >
              {/* prettier-ignore */}
              <CustomBox gap="24px" alignItems="flex-start" flexDirection="column">
              <H1 />
              <BigText>
                ТСТ Cluster – крупнейший межотраслевой комплекс, объединяющий
                несколько отраслей экономики, направленных на производство и
                переработку сельскохозяйственного сырья, животноводства и
                рыбоводства. Получение из данного сырья готовой продукции,
                доводимой до конечного потребителя.
              </BigText>
              </CustomBox>
              <ButtonY />
            </CustomBox>

            {/* Container with images -> */}
            <ImgBox />
          </CenterBox>
        </CustomBox>
      </div>
    </section>
  );
}

export default Hero;
