import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";

import './styles.scss'

function TableSection() {
  return (
    <section className="table-section">
      <Table1/>
      <Table2/>
      <Table3/>
      <Table4/>
    </section>
  );
}

export default TableSection;
