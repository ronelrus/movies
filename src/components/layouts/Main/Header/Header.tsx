import Button from "@/components/common/Button/Button";
import React, { useContext } from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";
import { FilmsContext } from "@/components/templates/Films/FilmsContext";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  const { useSearch } = useContext(FilmsContext);

  const LogoHandler = () => {
    useSearch('');
  };

  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Style.LogoWrapper>
              <Style.Img src="https://yts.mx/assets/images/website/logo-YTS.svg" onClick={ LogoHandler }></Style.Img>
          </Style.LogoWrapper>
          <Style.Name onClick={ LogoHandler }>HD movies</Style.Name>
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
