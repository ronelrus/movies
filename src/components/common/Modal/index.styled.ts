import styled from "styled-components"


export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 115;
    display: block;
    background: rgba(0, 0, 0, .70);;
    width: 100%;
    height: 100%;
    
`;

export const ModalBody = styled.div`
    width: fit-content;
    background: ${props => props.theme.backgroundColor};
    display: block;
    top: 0;
    height: 100%;
    margin: 0 auto;
    z-index: 116;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0;
    }

`;

export const Close = styled.button`
    width: 28px;
    height: 28px;
    position: relative;
    background: url('https://cdn-icons-png.flaticon.com/512/1828/1828778.png');
    background-size: cover;
    border: 0;
    cursor: pointer;
    float: inline-end;
    margin: 7px 7px 0 0;
    z-index: 118;
`;