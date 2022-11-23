import CustomBox from "../../../components/CustomBox";
import H2 from "../../../components/Typography/H2";
import ListItem from "../ListItem";
import Images from "./Images";

const text = [
  "Глубокая переработка хлопкового волокна",
  "Производство растительных масел (хлопковое)",
  "Производство готовой (рыбной) продукции",
  "Производство молочных продукции",
  "Расширение системы капельного орошения",
  "Проекты по ирригации и мелиорации ",
];

function Section4() {
  return (
    <section className="img-section__sect-4 container-fluid pos-rel">
      <CustomBox gap="57px" alignItems="flex-start">
        <div data-aos="zoom-out-right">
          <Images />
        </div>

        <div data-aos="zoom-out-right">
          <CustomBox
            className="text"
            flexDirection="column"
            gap="31px"
            alignItems="flex-start"
          >
            <H2>Новые проекты</H2>
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

export default Section4;
