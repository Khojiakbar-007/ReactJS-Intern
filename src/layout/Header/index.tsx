import { Typography } from "@mui/material";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo-icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import CenterBox from "../../components/CenterBox";
import CustomBox from "../../components/CustomBox";

import "./styles.scss";

const fontStyles = {
  lineHeight: "115.5%",
  letterSpacing: "-0.292683px",
  fontFamily: "Poppins, sans-serif",
};

const bigFontStyles = {
  fontWeight: "800",
  fontSize: "32px",
  ...fontStyles,
};

const smallFontStyles = {
  marginTop: "-4px",
  fontWeight: "500",
  fontSize: "14px",
  ...fontStyles,
};

function Header() {
  return (
    <header id="header">
      <div className="container-fluid">
        <CustomBox>
          <a href="#">
            <CustomBox justifyContent="flex-start" gap="13px">
              <LogoIcon />
              <CenterBox gap="-4px" flexDirection="column">
                <Typography sx={bigFontStyles}>TCT</Typography>
                <Typography sx={smallFontStyles}>CLUSTER</Typography>
              </CenterBox>
            </CustomBox>
          </a>

          <span className="pointer">
            <MenuIcon />
          </span>
        </CustomBox>
      </div>
    </header>
  );
}

export default Header;
