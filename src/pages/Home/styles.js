import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto;
    grid-template-areas: 
    "header"
    "content";

`;

export const Carousel = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: content;

    margin-bottom: 48px;

    > h1 {
        margin: 64px 124px 0 124px;
        font-size: 32px;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
    }
`;

export const CarouselCards = styled.div`
    width: 1222px;
    height: 462px;
    margin: 0 124px;
    display: flex;
    
    --swiper-theme-color: #FFF;
    --swiper-navigation-size: 40px;

`;

export const Banner = styled.div`
    display: flex;
    grid-area: content;
    position: relative;

    > img {
        margin-left: 54px;
        margin-top: 26px;
        position: absolute;
    }

    div {
        height: 260px;
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK_600 };
        margin: 164px 124px 0 124px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        margin-left: 598px;
        margin-bottom: 8px;

        font-family: "Poppins", sans-serif;
        font-size: 40px;
        font-weight: 500;

        color: ${({theme}) => theme.COLORS.LIGHT_300 };
    }

    p {
        margin-left: 598px;

        font-size: 16px;
        font-family: "Roboto", sans-serif;

        color: ${({theme}) => theme.COLORS.LIGHT_300 };
    }
    
`;

export const Content = styled.div`
    overflow: scroll;
`;