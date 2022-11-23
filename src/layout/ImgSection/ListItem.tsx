import CustomBox from "../../components/CustomBox";
import BigText from "../../components/Typography/Text/BigText";
import { ReactComponent as DiamondIcon } from "../../assets/icons/rectangle-icon.svg";

type ListItemPropsType = {
  children: string;
};

function ListItem({ children }: ListItemPropsType) {
  return (
    <CustomBox gap="6px" justifyContent="flex-start" alignItems="center">
      <DiamondIcon />
      <BigText>{children}</BigText>
    </CustomBox>
  );
}

export default ListItem;
