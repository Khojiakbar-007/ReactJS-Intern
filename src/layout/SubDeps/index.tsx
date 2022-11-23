import H2 from "../../components/Typography/H2";
import CustomBox from "../../components/CustomBox";
import Deps from "./Deps";

import "./styles.scss";

function SubDeps() {
  return (
    <section className="sub-deps">
      <div className="container-fluid">
        <CustomBox flexDirection="column" gap="31px" alignItems="flex-start">
          <H2>Предприятия, работающие в ООО “TCT CLUSTER”</H2>

          <CustomBox gap="135px" alignItems="flex-start">
            <Deps />
            <Deps />
          </CustomBox>
        </CustomBox>
      </div>
    </section>
  );
}

export default SubDeps;
