import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row-reverse;

    img {
        
        height: 48px;
        width: 324px;

        margin-top: 340px;
        margin-right: 306px;
    }

`;

export const Form = styled.form`
    width: 476px;
    min-height: 620px;
    border-radius: 16px;

    margin: 90px 108px 112px 108px;
    padding: 0 64px;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    font-size: 14px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700 };

    h1 {
        font-size: 32px;
        font-weight: 400;
        margin-top: 64px;
        margin-bottom: 32px;
    }

    p {
        display: flex;
        align-self: start;
        margin-bottom: 8px;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    }

    button, div {
        margin-bottom: 32px;
    }

    button {
        justify-content: center;
    }

`;