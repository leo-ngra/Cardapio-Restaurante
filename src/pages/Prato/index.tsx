import { lazy } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';

import styles from './Prato.module.scss';
import cardapio from 'data/cardapio.json';

const TagsPrato = lazy(() => import('components/TagsPrato'));
const NotFound = lazy(() => import('pages/NotFound'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));

export default function Prato() {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id));
  
  if(!prato){
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />} />
      <Route index element={
        <>
          <button className={styles.voltar} onClick={() => navigate(-1)}>
            {'< Voltar'}
          </button>      
          <section className={styles.container}>
            <h1 className={styles.titulo}>
              {prato.title}
            </h1>
            <div className={styles.imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <div className={styles.conteudo}>
              <p className={styles.conteudo__descricao}>
                {prato.description}
              </p>
            </div>

            <TagsPrato {...prato} />
          </section>
        </>
      } />
    </Routes>
  );
}