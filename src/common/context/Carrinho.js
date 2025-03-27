import { createContext, useContext } from 'react';
import { useState } from 'react';

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    return(
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {carrinho, setCarrinho} = useContext(CarrinhoContext);
    if(!carrinho || !setCarrinho){
        throw new Error('useCarrinhoContext deve ser usado dentro de um CarrinhoProvider');
    }

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

    function removerProduto(id) {
        const produto = carrinho.find(item => item.id === id);
        const ehUltimo = produto.quantidade === 1;
        if(ehUltimo){
          return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(item => item.id !== id))
        }
        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(item => {
          if(item.id === id) item.quantidade -= 1;
          return item;
        }))
    }

    return {carrinho, setCarrinho, adicionarProduto, removerProduto};
}