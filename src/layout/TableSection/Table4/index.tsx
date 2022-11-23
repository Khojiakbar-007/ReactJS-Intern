import CustomBox from "../../../components/CustomBox";
import H2 from "../../../components/Typography/H2";
import CustomTable from "../CustomTable";

const data = [
  "Поступление, всего",
  "Налоговые платежи",
  "Численность работников",
  "Выплаченная зарплата",
  "Средняя зарплата",
];

function Table4() {
  return (
    <section className="table--1 container-fluid">
      <CustomBox flexDirection="column" gap="31px" alignItems="flex-start">
        <H2>Другие статистические данные</H2>

        <CustomTable data={data} />
      </CustomBox>
    </section>
  );
}

export default Table4;
