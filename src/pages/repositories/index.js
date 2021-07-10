import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';

export default function Repositories(){
    const [ history, setHistory ] = useState([]);
    const [repositories, setRepositories] = useState([]);

    useEffect(() => { 
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
        } else {
            history.push('/')
        }
    },[])

    return(
        <div>
            <S.Title>Repositório</S.Title> 
                <S.List>
                    { repositories.map( repository => {
                        return(  
                                <S.ListItem>{ repository }</S.ListItem>
                            )
                    })}
                </S.List>
                <S.LinkHome to='/'>Voltar</S.LinkHome>
        </div>
    )
}