import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: stretch;
    flex-direction: row-reverse;
`;

export const Form = styled.form`
    width: 476px;
    border-radius: 16px;

    margin: 142px 108px;
    padding: 0 64px;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

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
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    }
`;