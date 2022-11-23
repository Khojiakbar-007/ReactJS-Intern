import CustomBox from "../../../components/CustomBox";
import H2 from "../../../components/Typography/H2";
import ListItem from "../ListItem";
import Images from "./Images";

const text = [
  "Переработка хлопка сырца",
  "Переработка риса",
  "Переработка рыбы",
  "Краска индиго",
];

function Section2() {
  return (
    <section className="img-section__sect-2 container-fluid pos-rel">
      <CustomBox gap="57px" alignItems="center" justifyContent="flex-start">
        <div data-aos="zoom-out-right">
          <Images />
        </div>
        
        <div data-aos="zoom-out-left">
          <CustomBox
            className="text"
            flexDirection="column"
            gap="31px"
            alignItems="flex-start"
          >
            <H2>Производство</H2>
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
      </CustomBox>
    </section>
  );
}

export default Section2;
