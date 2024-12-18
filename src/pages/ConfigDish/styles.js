import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
    grid-area: content;

    h1 {
        margin-left: 122px;
        margin-top: 24px;
        font-size: 32px;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
    }
`;

export const GoBack = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;

    color: ${({theme}) => theme.COLORS.LIGHT_300 };
    margin-left: 122px;
    margin-top: 24px;

    h2 {
        font-size: 24px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_300 };
        margin-left: 4px;
    }
`;

export const Frame = styled.div`
    margin: 32px 122px 0 122px;

    h2 {
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_400 };
    }
`;

export const BigInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_800 };
    color: ${({ theme }) => theme.COLORS.LIGHT_500 };

    border-radius: 5px;
    border: none;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.WHITE };
    background-color: ${({ theme }) =>  theme.COLORS.BACKGROUND_DARK_900 };
    
    > textarea {
        height: 172px;
        width: 100%;
        padding: 16px;
        font-size: 16px;
        font-family: "Roboto", sans-serif;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900 };
        color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        border-radius: 5px;
        border-color: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        }

    }
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${({ $last }) => $last ? "0 0 32px 0" : "0 32px 32px 0" };
    width: ${({ $scale }) => $scale ? "100%" : "" };
    white-space: nowrap;

    h2 {
       margin-bottom: 16px;
    }
    
    input:focus {
        outline: none;
    }
`;

export const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SecondRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ThirdRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const UploadButton = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK_800 };
    color: ${({theme}) => theme.COLORS.WHITE };

    height: 48px;
    border: 0;
    padding: 12px 32px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;

    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        margin-right: 8px;
    }
    > img {
        margin-right: 16px;
    }
`;

export const ButtonFrame = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 32px 0 116px 0;
    
    > button:first-of-type {
        width: 172px;
        background-color: ${({theme}) => theme.COLORS.LIGHT_RED_BUTTON };
    }

    > button:nth-of-type(2) {
        width: 135px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK_800 };
        margin-right: 32px;
    }
`;

export const Ingredients = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;

    border-radius: 5px;
    border: "none";
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.WHITE };
    background-color: ${({ theme }) =>  theme.COLORS.BACKGROUND_DARK_900};
`;

export const AddButton = styled.button`
    display: flex;
    align-items: center;
    width: 116px;

    border-radius: 8px;
    border: dashed;
    border-width: 1px;
    background-color: transparent;
    border-color:${({ theme }) => theme.COLORS.LIGHT_500 };
    height: 32px;

    color: ${({ theme }) => theme.COLORS.LIGHT_500 };
    font-size: 16px;
    font-family: "Roboto", sans-serif;

    margin-left: 16px;

    input {
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        border: none;

        display: flex;
        width: 68px;
        margin-left: 16px;
        margin-right: 8px;
    }

    input:focus {
        outline: none;
    }
`;

export const Tag = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;

    border-radius: 8px;
    border-width: 1px;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600 };
    height: 32px;

    > p {
        margin-left: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100 };
        font-size: 16px;
        font-family: "Roboto", sans-serif;
    }

    margin-left: 16px;

`;

export const Exclude = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;

    margin-left: 8px;
    margin-right: 16px;
`;