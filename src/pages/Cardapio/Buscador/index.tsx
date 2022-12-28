import { memo, useMemo } from 'react';
import { CgSearch } from 'react-icons/cg';

import styles from './Buscador.module.scss';

interface Props {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({ busca, setBusca }: Props) {
  const elemento = useMemo(() => <CgSearch size={20} color='#4c4d5e' />, []);
  return (
    <div className={styles.buscador}>
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder='Buscar'
      />

      {elemento}
    </div>

  );
}

export default memo(Buscador);