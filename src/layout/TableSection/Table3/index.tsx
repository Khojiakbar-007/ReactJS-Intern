import CustomBox from "../../../components/CustomBox";
import H2 from "../../../components/Typography/H2";
import CustomTable from "../CustomTable";

const data = [
  "Механизация",
  "Строительство",
  "Общественное питание",
  "Услуги логистики",
  "Туристические услуги",
];

function Table3() {
  return (
    <section className="table--1 container-fluid">
      <CustomBox flexDirection="column" gap="31px" alignItems="flex-start">
        <H2>Оказываемые услуги</H2>

        <CustomTable data={data} />
      </CustomBox>
    </section>
  );
}

export default Table3;
