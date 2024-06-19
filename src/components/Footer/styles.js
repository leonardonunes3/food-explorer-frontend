import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;
    height: 77px;
    width: 100%;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK_600 };
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
       margin-left: 124px;
    }

    p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.LIGHT_200 };
        font-family: "Roboto", sans-serif;
        margin-right: 124px;
    }
`;