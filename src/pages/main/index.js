import React,{ useState } from 'react';
import axios from 'axios';
import * as S from './styles';
import { useHistory } from 'react-router-dom';

export default function Main(props){
    const [usuario,setUsuario] = useState('');
    const history = useHistory();
    const [erro, setErro] = useState(false);

    const handlePesquisar = () => {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
            const repositories = response.data;
            const repositoriesName = [];
            repositories.map((repository) => {
                repositoriesName.push(repository.name);
            });
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
            history.push('repositories');            
        })
        .catch( err => {
            setErro(true);
            console.log(erro)
        })
    }
    return(
        <S.HomeContainer>
            <S.Content>
                <S.Input className='usuarioInput' value={usuario } placeholder='Usuário' onChange={e => setUsuario(e.target.value)}/>
                <S.Button type='S.Button' onClick={handlePesquisar} >Pesquisar</S.Button>
            </S.Content>
            { erro ? <S.ErrorMsg> Ocorreu um erro. Tente novamente. </S.ErrorMsg> : ''}
        </S.HomeContainer>
    )

}