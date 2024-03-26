import styled from 'styled-components';
import Head from 'next/head';


const HeaderWrapper = styled.div`
    background-color: #05f5b6;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    @media screen and (max-width: 768px) {
        background-color: #f835d8;
    }
`;


const Title = styled.h1`
    height: 64px;
    pointer-events: none;
    font-family: 'Bungee Shade', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 48px;
    color: #f626bb;
    text-shadow: -1px -1px 0;
    @media screen and (max-width: 768px) {
        color: #1df5bc;
    }
`;

const Header =()=>(
    <>
        <Head>
            <title> Community Feed</title>
            <meta name='description' content='This is a community feed project for my cs class, using React'/>
        </Head>
        <HeaderWrapper>
            <Title> Community Feed</Title>
        </HeaderWrapper>
    </>
)
export default Header;
