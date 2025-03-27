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

    function mudarQuantidade(id, quantidade){
        return carrinho.map(item => {
            if(item.id === id) item.quantidade += quantidade;
            return item;
        }).filter(item => item.quantidade > 0);
    }

    function adicionarProduto(novoProduto) {
        const temNoCarrinho = carrinho.some(item => item.id === novoProduto.id);
        if(!temNoCarrinho){
          novoProduto.quantidade = 1;
          return setCarrinho(carrinhoAnterior => [...carrinho, novoProduto])
        }
        setCarrinho(mudarQuantidade(novoProduto.id, 1))    
    }

    function removerProduto(id) {
        const produto = carrinho.find(item => item.id === id);
        const ehUltimo = produto.quantidade === 1;
        if(ehUltimo){
          return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(item => item.id !== id))
        }
        setCarrinho(mudarQuantidade(id, -1))
    }

    return {carrinho, setCarrinho, adicionarProduto, removerProduto};
}