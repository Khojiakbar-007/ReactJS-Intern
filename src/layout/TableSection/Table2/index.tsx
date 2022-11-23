import CustomBox from "../../../components/CustomBox";
import H2 from "../../../components/Typography/H2";
import CustomTable from "../CustomTable";

const data = [
  "Хлопковолокно",
  "Семена хлопчатника",
  "Линт",
  "Рис",
  "Тушка",
  "Рыбная мука",
];

function Table2() {
  return (
    <section className="table--1 container-fluid">
      <CustomBox flexDirection="column" gap="31px" alignItems="flex-start">
        <H2>Промышленная продукция</H2>

        <CustomTable data={data} />
      </CustomBox>
    </section>
  );
}

export default Table2;
