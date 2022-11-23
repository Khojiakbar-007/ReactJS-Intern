import CustomBox from "../../../components/CustomBox";
import H2 from "../../../components/Typography/H2";
import ListItem from "../ListItem";
import Images from "./Images";

const text = [
  "Услуги сельхозтехники",
  "Услуги перевозки грузов",
  "Услуги общественного питания",
  "Строительство",
];

function Section3() {
  return (
    <section className="img-section__sect-3 container-fluid pos-rel">
      <CustomBox gap="1px" alignItems="flex-start">
        <div data-aos="zoom-out-right">
          <CustomBox
            className="text"
            flexDirection="column"
            gap="31px"
            alignItems="flex-start"
          >
            <H2>Сельское хозяйство</H2>
            <CustomBox
              className="points"
              flexDirection="column"
              gap="24px"
              alignItems="flex-start"
            >
              {text.map((t) => (
                <ListItem key={t}>{t}</ListItem>
              ))}
            </CustomBox>
          </CustomBox>
        </div>

        <div data-aos="zoom-out-left">
          <Images />
        </div>
      </CustomBox>
    </section>
  );
}

export default Section3;
