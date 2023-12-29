import { PropsWithChildren, useContext } from "react";

import { ThemeContext } from "@/components/providers/ThemeProvider";
import Header from "./Header/Header";
import * as Style from "./index.styled";
export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const context = useContext(ThemeContext);
  return (
    <Style.App>
      <Style.Background src="https://uhdwallpapers.org/download/macos-monterey_897687/1920x1080/" />
      <Style.Content>
        <Header switchTheme={() => context?.switchTheme()}></Header>
        {children}
      </Style.Content>
    </Style.App>
  );
};
