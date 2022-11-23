import { Typography } from "@mui/material";
import CustomBox from "../../CustomBox";
import { ReactComponent as LineDecorator } from "../../../assets/icons/beauty-line-icon.svg";

type H2ChildrenType = {
  children: string | React.ReactElement;
};

function H2({ children }: H2ChildrenType) {
  return (
    <CustomBox flexDirection="column" gap="5px" alignItems="flex-start">
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "32px",
          lineHeight: "37px",
        }}
      >
        {children}
      </Typography>
      <LineDecorator />
    </CustomBox>
  );
}

export default H2;
