import {Routes, Route} from 'react-router-dom'
import ArtigoLista from './components/ArtigoLista'
import Artigo from './components/Artigo'

function Router() {
 return (
    <Routes>
        <Route path='artigos' element={<ArtigoLista/>}/>
        <Route path='artigos/:name' element={<Artigo/>} />
    </Routes>
 )
}

export default Router