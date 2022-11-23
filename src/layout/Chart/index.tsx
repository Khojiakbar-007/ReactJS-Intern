import { useEffect, useState } from "react";
import CustomBox from "../../components/CustomBox";
import H2 from "../../components/Typography/H2";
import Numbers from "./Numbers";
import RadialChart from "./RadialChart";

import "./styles.scss";

function Chart() {
  const [chartStart, setChartStart] = useState(false);
  useEffect(() => {
    document.addEventListener("aos:in:chart-visible", () => {
      setChartStart(true);
      console.log("chart triggered");
    });
    console.log("listener added");
  }, []);

  return (
    <section className="chart">
      <CustomBox
        gap="25px"
        flexDirection="column"
        alignItems="flex-start"
        className="container-fluid"
      >
        <H2>
          <CustomBox justifyContent="flex-start" gap="32px">
            <span>Общая площадь:</span> <span>36 879,7</span>
          </CustomBox>
        </H2>

        <CustomBox
          className="chart-numbers-cont"
          justifyContent="space-between"
        >
          <RadialChart chartStart={chartStart} setChartStart={setChartStart} />
          <Numbers chartStart={chartStart} />
        </CustomBox>
      </CustomBox>
    </section>
  );
}

export default Chart;
