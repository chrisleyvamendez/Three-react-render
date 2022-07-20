import React from "react";
import styled from 'styled-components';
import Viewer from "./components/FirstSection/Viewer";
import TextSection, {FirstCard} from "./components/FirstSection/About";
import Info, { CardInfo } from "./components/SecondSection/moreInfo";


export default function App () {
    return (
        <>
        <section>
            <TextSection/>
            <FirstCard/>
            <Viewer/>
        </section>
        <section>
            <Info/>
            <CardInfo/>
        </section>
        </>


   
        
    )
}

const Card = styled.div`
  background-color: papayawhip;
  justify-content:center;
  height: 100vh;
  width: 100vh;
`;