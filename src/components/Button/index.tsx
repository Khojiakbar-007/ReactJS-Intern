import { Button } from "@mui/material";
import { ReactComponent as PlayIcon } from "../../assets/icons/play-icon.svg";
import CenterBox from "../CenterBox";

function ButtonY() {
  return (
    <Button
      href="https://www.youtube.com/watch?v=I_40JFauCFk"
      target='_blank'
      rel="noopener noreferrer"
      variant="contained"
      sx={{
        backgroundColor: "var(--color-2)",
        textTransform: "none",
        padding: "14px 28px",
        borderRadius: "12px",
        fontWeight: "500",
        fontSize: "22px",
        lineHeight: "30px",
        "&:hover": {
          backgroundColor: "#ffcd1a",
        },
      }}
    >
      <CenterBox gap="16px">
        Смотреть видео <PlayIcon />
      </CenterBox>
    </Button>
  );
}

export default ButtonY;
