import React,{ useState } from 'react';
import axios from 'axios';
import * as S from './styles';

export default function Main(){
    const [usuario,setUsuario] = useState('');

    const handlePesquisar = () => {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
    }
    return(
        <S.Container>
            <S.Input className='usuarioInput' value={usuario } placeholder='Usuário' onChange={e => setUsuario(e.target.value)}/>
            <S.Button type='S.Button' onClick={handlePesquisar} >Pesquisar</S.Button>
        </S.Container>
    )

}