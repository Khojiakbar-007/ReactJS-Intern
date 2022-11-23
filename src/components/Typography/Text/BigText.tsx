import { Typography } from "@mui/material";

type BigTextChildrenType = {
  children: string;
  lineHeight?: string;
};

function BigText({ children, lineHeight }: BigTextChildrenType) {
  return (
    <Typography
      sx={{
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: lineHeight || "30px",
      }}
    >
      {children}
    </Typography>
  );
}

export default BigText;
