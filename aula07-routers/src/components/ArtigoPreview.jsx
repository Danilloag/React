import './artigoPreview.css'
import { Link } from 'react-router-dom'

function ArtigoPreview({ nome, imagem, tipo }) {

   return (
      <>
         <img src={imagem} />
         <span>{tipo}</span>
         <h3>{nome}</h3>
         <Link to={nome}>Saiba mais</Link>

      </>
   )
}

export default ArtigoPreview