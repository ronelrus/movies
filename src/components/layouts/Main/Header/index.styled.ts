import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    min-height: 100px;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor};
    // background-color: ${props => props.theme.backgroundColor};
    top: 0;
    position: sticky;
    overflow: hidden;
    z-index: 50;
    @media (max-width: 768px) and (min-width: 576px)  { 
        min-height: 60px;
    }
    @media (max-width: 576px)  {
        min-height: 60px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 5px ${props => props.theme.accentColor1};
    padding: 0px 20px;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 10vmin;
    box-sizing: border-box;

    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {     
        width: 100%;
    }
    @media (max-width: 576px)  {   
        width: 100%;
    }
`;

export const Logo = styled.div`
    display: flex;
    width: 100%;
    flex: 1 1 auto;
    flex-direction: row;
    align-items: flex-start;
    margin: 10px 0px;
`;

export const Img = styled.img`
    display: flex;
    height: 30px;
    cursor: pointer;
`;
export const Name = styled.span`
    display: inline-flex;
    justify-self: center !important;
    align-items: center;
    font-size: ${props => props.theme.textSizeTextM};
    font-weight: 500;
    font-family: Roboto;
    letter-spacing: 1px;
    margin: 5px 0px 0px 0px;
    cursor: pointer;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const LogoWrapper = styled.div`
    justify-self: flex-start !important;
    display: inline-flex;
    width: 50%;
`;

export const Buttons = styled.div`
   display:flex;
`;

export const myBlock = styled.div`
    self-align: end;
`;
