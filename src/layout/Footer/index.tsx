import CenterBox from "../../components/CenterBox";
import CustomBox from "../../components/CustomBox";
import SmallText from "../../components/Typography/Text/SmallText";

import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./styles.scss";
import IconLink from "./IconLink";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container-fluid">
        <CenterBox>
          <CustomBox gap="4px" flexDirection="column" alignItems="flex-start">
            <SmallText>
              2022 © Все права защищены. Сделано в Everest.uz
            </SmallText>
            <SmallText>Крупнейший межотраслевой комплекс.</SmallText>
          </CustomBox>

          <CenterBox gap="24px">
            <IconLink>
              <TwitterIcon />
            </IconLink>
            <IconLink>
              <FacebookIcon />
            </IconLink>
            <IconLink>
              <TelegramIcon />
            </IconLink>
          </CenterBox>
        </CenterBox>
      </div>
    </footer>
  );
}

export default Footer;
