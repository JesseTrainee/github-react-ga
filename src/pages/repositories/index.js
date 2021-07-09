import React from 'react';
import * as S from './styles';

export default function Repositories(){
    return(
        <div>
            <S.Title>Repositório</S.Title> 
            <S.List>
                <S.ListItem>Repositório 1</S.ListItem>
                <S.ListItem>Repositório 2</S.ListItem>
                <S.ListItem>Repositório 3</S.ListItem>
                <S.ListItem>Repositório 4</S.ListItem>
                <S.ListItem>Repositório 5</S.ListItem>
            </S.List>
        </div>
    )
}