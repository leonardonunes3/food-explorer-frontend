import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.RED_BUTTON };
    color: ${({theme}) => theme.COLORS.WHITE };

    height: 48px;
    border: 0;
    padding: 12px 24px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;

    display: flex;
    flex-direction: row;
    align-items: center;

`;
