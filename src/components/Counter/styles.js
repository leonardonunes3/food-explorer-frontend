import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    margin: 16px 48px 0 48px;

`;

export const ButtonIcon = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-self: center;
    margin-right: 16px;

    :hover {
        opacity: 0.7;
    }
`;

export const Number = styled.div`
    display: flex;
    align-self: center;

    margin-right: 16px;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-family: "Roboto", sans-serif;
`;