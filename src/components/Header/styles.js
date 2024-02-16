import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 104px;
    width: 100%;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK_600 };
    display: flex;
`;