
import ArtigoPreview from "./artigoPreview"
import './ArtigoLista.css'

export const dataBase = [
    {
      nome: 'Css Grid',
      tipo: 'Front-end',
      imagem: '../public/img/css-grid.png',
      conteudo: 'CSS Grid Layout introduz um sistema bi-dimensional de grid (literalmente "grades") para CSS. Grids podem ser usados para o design de layouts de grandes seções de uma webpage, assim como de pequenos elementos de interface. Esse artigo apresenta o CSS Grid Layout e a terminologia que é parte da especificação CSS Grid Layout Level 1.'
    },
    {
      nome: 'Css Colors',
      tipo: 'Front-end',
      imagem: '../public/img/css-colors.png',
      conteudo: 'O tipo de dado CSS <color> indica uma cor no espaço sRGB. Uma cor pode ser descrita em qualquer uma destas formas: usando uma palavra chave, usando o sistema de coordenada-cúbica RGB (via #-hexadecimal ou das notações funcional rgb() e rgba()) ou usando o sistema de coordenada-cilíndrica HSL (via hsl() e notações funcionais hsla() )'
    },
    {
      nome: 'Css variables',
      tipo: 'Front-end',
      imagem: '../public/img/css-variables.jpg',
      conteudo: 'Propriedades personalizadas (às vezes chamadas de variáveis CSS ou variáveis em cascata) são entidades definidas por autores CSS que contêm valores específicos a serem reutilizados em um documento. Eles são definidos usando a notação de propriedade personalizada (por exemplo, --main-color: black;) e são acessados usando a função var() (por exemplo, cor: var(--main-color);).'
    },
  ]

function ArtigoLista () {
    
      return (
        <section className='box-artigos'>
          {dataBase.map((artigo,i) => (
            <div className='cardArtigo' key={i}>
              <ArtigoPreview nome={artigo.nome} tipo={artigo.tipo} imagem={artigo.imagem} conteudo={artigo.conteudo} />
            </div>
          ))
          }
        </section>
        )
}

export default ArtigoLista