import CustomBox from "../../../components/CustomBox";
import NumberLayout from "./NumberLayout";

const data = [
  { text: "Виноградники", color: "#8742F7", amount: 1.6 },
  { text: "Сады", color: "#DE42F7", amount: 106.1 },
  { text: "Земли под застройку", color: "#F74299", amount: 104.6 },
  {
    text: "Земли, не используемые в сельском хозяйстве",
    color: "#F74242",
    amount: 858.6,
  },
  { text: "Дороги", color: "#F77842", amount: 403.9 },
  { text: "Пастбища", color: "#FFC701", amount: 67.4 },
  { text: "Многолетние деревья", color: "#42F7A0", amount: 10.3 },
  { text: "Леса", color: "#42CCF7", amount: 56.3 },
  { text: "Подводные земли", color: "#4295F7", amount: 5068.0 },
  { text: "Площадь орошаемых земель", color: "#6D96FF", amount: 30205.4 },
];

function Numbers({ chartStart }: { chartStart: boolean }) {
  return (
    <div data-aos="zoom-in" className="numbers">
      {chartStart ? (
        <CustomBox gap="24px" flexDirection="column">
          {data.map((d) => (
            <NumberLayout {...d} />
          ))}
        </CustomBox>
      ) : null}
    </div>
  );
}

export default Numbers;
