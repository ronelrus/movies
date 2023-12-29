import styled from 'styled-components';

export const Films = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
   
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;

export const Title = styled.span`
    letter-spacing: 1px;
    font-weight: 600;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    margin: .5em 0px;
    align-items: center;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
`;

export const List = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr ;
    }
`;

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 15px 0;
`;

export const SearchRow = styled.div`
    display: flex;
    width: 100%;
    margin: 5px 0;
`;

export const SearchInput = styled.input`
    width: calc(100% - 100px);
    border: 0;
    border-radius: 10px;
    padding: 0 10px;
`;

export const SearchButton = styled.button`
    width: 100px;
    border: 0;
    border-radius: 15px;
`;

export const SearchBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 100px;
`;

export const SearchRadio = styled.input`
`;

export const SearchRadioLabel = styled.label`
`;

export const SearchSelect = styled.select`

`;

export const SearchSelectOption = styled.option`
`;

export const ListEmpty = styled.div`
    display: flex;
    width: 100%;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    box-sizing: border-box;
    text-align: center;
    justify-content: space-around;
`;

export const EmptyItems = styled.div`
    display: block;
    margin: 15px 0;
    border-radius: 20px;
    width: 500px;
    padding: 20px 0px;
    box-sizing: border-box;
    color: ${props=> props.theme.textColor};
    font-size: ${props => props.theme.textSizeTextL};
    background-color: ${props => props.theme.backgroundColor};
`;
