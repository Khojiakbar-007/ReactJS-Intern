import { Typography } from "@mui/material";
import CustomBox from "../../../components/CustomBox";
import IncreasingNumber from "./IncreasingNumber";

type NumberLayoutPropsType = {
  text: string;
  color: string;
  amount: number;
};

function NumberLayout({ text, color, amount }: NumberLayoutPropsType) {
  return (
    <CustomBox gap="16px">
      {/* prettier-ignore */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.0011" cy="12.0005" r="9" stroke={color} strokeWidth="6"/>
      </svg>

      <Typography
        className="numbers__desc"
        sx={{
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "20px",
        }}
      >
        {text}
      </Typography>

      <p className="numbers__amount">
        <IncreasingNumber>{amount}</IncreasingNumber>
      </p>
    </CustomBox>
  );
}

export default NumberLayout;
