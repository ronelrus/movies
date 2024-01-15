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
    background: ${props => props.theme.absoluteBackgroundColor};
    display: flex;
    position: relative;
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
    background: none;
    width: 28px;
    height: 28px;
    font-size: 40px;
    color: ${props => props.theme.textColor};
    position: fixed;
    border: 0;
    cursor: pointer;
    z-index: 118;
`;  