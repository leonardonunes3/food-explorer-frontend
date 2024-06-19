import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_500 };

    border-radius: 5px;
    border: ${({ $alternativeinput }) => $alternativeinput ? "none" : "solid" };
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.WHITE };
    background-color: ${({ theme, $alternativeinput }) => $alternativeinput ? theme.COLORS.BACKGROUND_DARK_900 : "transparent" };
    
    > input {
        height: 48px;
        width: 100%;
        padding: 16px;
        font-size: 16px;
        padding-left: ${({ $icon }) => $icon ? "132px" : "16px"};

        background-color: ${({ theme, $alternativeinput }) => $alternativeinput ? theme.COLORS.BACKGROUND_DARK_900 : "transparent" };
        color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        border-radius: 5px;
        border-color: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        }

    }

    svg {
        position: absolute;
        margin-left: 100px;
    }
    
`;