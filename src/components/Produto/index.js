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
  const { carrinho, setCarrinho } = useCarrinhoContext()
  function adicionarProduto(novoProduto) {
    const temNoCarrinho = carrinho.some(item => item.id === novoProduto.id);
    if(!temNoCarrinho){
      novoProduto.quantidade = 1;
      return setCarrinho(carrinhoAnterior => [...carrinho, novoProduto])
    }
    setCarrinho(carrinhoAnterior => carrinhoAnterior.map(item => {
      if(item.id === novoProduto.id) item.quantidade += 1;
      return item;
    }))    
  }
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
            color="secondary"
          >
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={() => adicionarProduto({id, nome, valor, foto})}>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)