import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 104px;
    width: 100%;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK_600 };
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;

    img {
        margin-left: 124px;
        margin-right: 32px;
    }

    > svg {
        margin-left: 32px;
        margin-right: 124px;
        cursor: pointer;
    }

    button {
        height: 56px;
        width: fit-content;
        margin-left: 32px;
        padding-right: 46px;
        white-space: nowrap;

        padding-left: ${({ $isadmin }) => $isadmin ? "80px" : ""};
        padding-right: ${({ $isadmin }) => $isadmin ? "80px" : ""};

        > svg {
            margin-left: 46px;
            margin-right: 8px;
        }

        
    }
`;

export const LogOut = styled.button`
    display: flex;
    background-color: transparent;
    border: 0;
`;