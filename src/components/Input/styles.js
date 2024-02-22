import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_800 };
    color: ${({ theme }) => theme.COLORS.LIGHT_500 };

    margin-bottom: 32px;
    border-radius: 5px;
    border: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.WHITE };
    
    > input {
        height: 48px;
        width: 100%;
        padding: 16px;

        font-size: 16px;

        background: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_500 };

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        }

    }
    
`;