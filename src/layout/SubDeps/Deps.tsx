import CustomBox from "../../components/CustomBox";
import BigText from "../../components/Typography/Text/BigText";
import { ReactComponent as CheckIcon } from "../../assets/icons/check-icon.svg";

function Deps() {
  return (
    <ul data-aos="zoom-in" className="sub-deps__departments">
      <li>
        <CustomBox gap="11px" justifyContent="flex-start">
          <CheckIcon /> <BigText>OOO “TCT AGRO CLUSTER”</BigText>
        </CustomBox>
      </li>
      <li>
        <CustomBox gap="11px" justifyContent="flex-start">
          <CheckIcon /> <BigText>OOO “TCT FISH CLUSTER”</BigText>
        </CustomBox>
      </li>
      <li>
        <CustomBox gap="11px" justifyContent="flex-start">
          <CheckIcon /> <BigText>OOO “TCT RICE”</BigText>
        </CustomBox>
      </li>
      <li>
        <CustomBox gap="11px" justifyContent="flex-start">
          <CheckIcon /> <BigText>OOO “TASHKENT COTTON TEXTILE”</BigText>
        </CustomBox>
      </li>
      <li>
        <CustomBox gap="11px" justifyContent="flex-start">
          <CheckIcon /> <BigText>OOO “TCT ESSEN”</BigText>
        </CustomBox>
      </li>
    </ul>
  );
}

export default Deps;
