import React, { useState } from "react";
import Dog from "../Routes/img/catDog.jpg"
import * as S from "./Style/Style";

function Home(){
    return(
        <S.Div>
            <S.Titulo>Não compre, adote!</S.Titulo>
            <S.ParagrafoHome>Liza e Luck foram adotados! Então adote você também. </S.ParagrafoHome>
            <S.Figure>
                <S.Dog src={Dog} alt="oi"/>
            </S.Figure>
        </S.Div>
    )
}

export default Home