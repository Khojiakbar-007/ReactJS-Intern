import CustomBox from "../../../components/CustomBox";
import H2 from "../../../components/Typography/H2";
import CustomTable from "../CustomTable";

const data = [
  "Хлопок",
  "Пшеница",
  "Рис (шалы)",
  "Коконы",
  "Картофель",
  "Маш",
  "Соя",
  "Рыба",
];

function Table1() {
  return (
    <section className="table--1 container-fluid">
      <CustomBox flexDirection="column" gap="31px" alignItems="flex-start">
        <H2>Выращивание сельхозкультур</H2>

        <CustomTable data={data} />
      </CustomBox>
    </section>
  );
}

export default Table1;
