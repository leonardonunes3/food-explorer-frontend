import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK_1000 };
    border-radius: 5px;

    height: 32px;
    width: fit-content;

    font-size: 14px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT_100 };

    margin: 24px 12px 0 0;
    padding: 4px 8px 4px 8px;
`;