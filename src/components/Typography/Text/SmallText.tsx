import { Typography } from "@mui/material";

type SmallTextChildrenType = {
  children: string;
  lineHeight?: string;
};

function SmallText({ children }: SmallTextChildrenType) {
  return (
    <Typography
      sx={{
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "21px",
        opacity: '0.8'
      }}
    >
      {children}
    </Typography>
  );
}

export default SmallText;
