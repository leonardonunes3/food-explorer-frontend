import styled from "styled-components";

export const Container = styled.div`
    height: 462px;
    width: 304px;

    display: flex;
    flex-direction: column;

    margin-top: 24px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_200 };
    opacity: ${({ opacity }) => opacity };

    p {
        margin-top: 16px;
        align-self: center;

        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_400 };
        text-align: center;
        font-family: "Roboto", sans-serif;
    }

    h1 {
        margin-top: 16px;
        align-self: center;

        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.LIGHT_300 };
        text-align: center;
    }

    h2 {
        margin-top: 16px;
        align-self: center;

        font-size: 32px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE_200 };
        text-align: center;
        font-family: "Roboto", sans-serif;
    }
    
`;

export const Action = styled.button`
 
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_200 };
    color: white;
    width: fit-content;
    height: fit-content;
    border: none;

    margin: 16px 16px 0 0;

`;

export const DishImage = styled.button`
    margin-left: 64px;
    margin-top: 24px;
    background: transparent;
    border: none;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Frame = styled.div`
    margin: 16px 48px 0 48px;
`;
