import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_800 };
    color: ${({ theme }) => theme.COLORS.LIGHT_500 };

    margin-bottom: 32px;
    border-radius: 5px;
    border: ${({ alternativeInput }) => alternativeInput ? "none" : "solid" };
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.WHITE };
    
    > input {
        height: 48px;
        width: 100%;
        padding: 16px;

        font-size: 16px;

        background-color: ${({ theme, alternativeInput }) => alternativeInput ? theme.COLORS.BACKGROUND_DARK_900 : "transparent" };
        color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        border-radius: 5px;
        border-color: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        }

    }
    
`;