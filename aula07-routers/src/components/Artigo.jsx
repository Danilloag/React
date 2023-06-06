import { dataBase } from './ArtigoLista'
import { useParams, useLocation } from 'react-router-dom'
import './Artigo.css'

function Artigo({ nome, tipo, imagem, conteudo }) {

    const { name } = useParams();
    const artigoEscolhido = dataBase.find((artigo) => artigo.nome == name)
    const {pathname} = useLocation();

    return (
        <>
            <nav>
                {pathname}
            </nav>

            <article>
                <img src={artigoEscolhido.imagem} />
                <span>{artigoEscolhido.tipo}</span>
                <h1>{artigoEscolhido.nome}</h1>
                <p>{artigoEscolhido.conteudo}</p>
            </article>
        </>
    )
}

export default Artigo