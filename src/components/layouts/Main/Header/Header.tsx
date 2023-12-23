import Button from "@/components/common/Button/Button";
import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  console.log(props)
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Style.LogoWrapper>
            <Style.Img src="https://yts.mx/assets/images/website/logo-YTS.svg"></Style.Img>
          </Style.LogoWrapper>
          <Style.Name>HD movies</Style.Name>
        </Style.Logo>

        <Style.Buttons>
          <Button
            name={<VscSymbolColor />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
