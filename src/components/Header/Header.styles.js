import styled from "styled-components";

export const Wrapper = styled.div `
    max-width: 100%;
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 10px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img `
    width:150px;
    height:auto; 

    @media screen and (max-width: 500px){
        width:100px
    }

`;

export const TMDBLogoImg = styled.img `
    width:150px;
    height:auto; 

    @media screen and (max-width: 500px){ 
        width:100px
    }
`;