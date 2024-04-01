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
    width: 1122px;
    height: 462px;
    margin: 20px auto;

    --swiper-theme-color: #FFF;
    --swiper-navigation-size: 40px;
`;