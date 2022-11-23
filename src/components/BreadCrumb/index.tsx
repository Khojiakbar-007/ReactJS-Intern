import { Typography } from "@mui/material";
import { ReactComponent as ChevronRight } from "../../assets/icons/double-chevron-right-icon.svg";
import CustomBox from "../CustomBox";

function BreadCrumb() {
  return (
    <CustomBox justifyContent="flex-start" gap="2px">
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "26px",
        }}
      >
        Главная страница
      </Typography>

      <ChevronRight />
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "26px",
          color: "var(--color-2)",
        }}
      >
        О Компании
      </Typography>
    </CustomBox>
  );
}

export default BreadCrumb;
