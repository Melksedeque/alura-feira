import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCarrinhoContext } from 'common/context/Carrinho';

function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext()
  const produtoNoCarrinho = carrinho.find(item => item.id === id);
  
  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            color="secondary" onClick={() => removerProduto(id)}
            disabled={!produtoNoCarrinho?.quantidade}
          >
            <RemoveIcon />
          </IconButton>
          {produtoNoCarrinho?.quantidade || 0}
          <IconButton color='primary' onClick={() => adicionarProduto({id, nome, valor, foto})}>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)