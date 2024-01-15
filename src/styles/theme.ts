import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "rgba(31, 32, 35, 0.75)",
  absoluteBackgroundColor: "rgb(31, 32, 35)",
  borderColor: "rgb(255, 255, 255)",
  textColor: "#F5F5F5",
  infoIconColor: "#2D2F34",
  iconColor: "#27292D",
  accentColor1: `rgb(108, 89, 209)`,
  accentColor2: "#00c6ff",
  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  absoluteBackgroundColor: "rgb(255, 255, 255)",
  borderColor: "rgb(31, 32, 35)",
  textColor: "black",
  infoIconColor: "#FAFAFA",
  iconColor: "white",
  accentColor1: `rgb(108, 89, 209)`,
  accentColor2: "#00c6ff",
  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Roboto';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`;
