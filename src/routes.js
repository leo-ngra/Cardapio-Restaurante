import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Sobre from 'pages/Sobre';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
       
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}