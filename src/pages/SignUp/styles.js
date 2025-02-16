import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row-reverse;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG} ) {
        flex-direction: column-reverse;
        align-items: center;
        min-height: 800px;
    }

    img {
        
        height: 48px;
        width: 324px;

        margin-top: 340px;
        margin-right: 306px;

        @media (max-width: ${DEVICE_BREAKPOINTS.XL} ) {
            margin-right: 0px;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.LG} ) {
            margin-top: 0px;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.SM} ) {
            width: 90%;
            padding: 0 46px;
        }
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

    text-align: center;
    font-size: 14px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700 };

    @media (max-width: ${DEVICE_BREAKPOINTS.LG} ) {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_400 };
        margin-top: 74px;
        margin-bottom: 62px;
        min-height: 0px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM} ) {
        width: 90%;
        padding: 0 46px;

        input {
            font-size: 12px;
        }
    }

    h1 {
        font-size: 32px;
        font-weight: 400;
        margin-top: 64px;
        margin-bottom: 32px;
        @media (max-width: ${DEVICE_BREAKPOINTS.LG} ) {
            display: none;
        } 
    }

    p {
        display: flex;
        align-self: start;
        margin-bottom: 8px;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        @media (max-width: ${DEVICE_BREAKPOINTS.SM} ) {
            font-size: 12px;
        }
        color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    }

    button, div {
        margin-bottom: 32px;
        @media (max-width: ${DEVICE_BREAKPOINTS.SM} ) {
            font-size: 12px;
        }
    }

    button {
        justify-content: center;
    }

`;