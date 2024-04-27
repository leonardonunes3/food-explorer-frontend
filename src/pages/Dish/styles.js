import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer";

`;

export const Content = styled.div`
    grid-area: content;
`;

export const GoBack = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;

    color: ${({theme}) => theme.COLORS.LIGHT_300 };
    margin-left: 122px;
    margin-top: 24px;

    h2 {
        font-size: 24px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
    }
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: row;

    img {
        margin-left: 122px;
        margin-top: 42px;
    }
`;

export const Description = styled.div`
    margin: 87px 122px 0 48px;

    h1 {
        font-size: 40px;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_300 };
    }

    p {
        font-size: 24px;
        font-family: "Poppins", sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_300 };
        margin-top: 24px;
    }
    
`;

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Box = styled.div`
    margin-top: 48px;
    width: fit-content;
`;
