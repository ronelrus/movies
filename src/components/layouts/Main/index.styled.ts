import styled from 'styled-components';

export const App = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
`;
export const Content = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Background = styled.img`
    width: 100%;
    height: 100%;
    z-index: -55;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 75%;
    object-fit: cover;
    `;
