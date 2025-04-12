import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { UsuarioContext } from './Usuario';

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
    const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
    return(
        <CarrinhoContext.Provider value={{carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos, valorTotalCarrinho, setValorTotalCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos, valorTotalCarrinho, setValorTotalCarrinho} = useContext(CarrinhoContext);
    const { formaPagamento } = usePagamentoContext();
    const { setSaldo } = useContext(UsuarioContext);
    if(!carrinho || !setCarrinho){
        throw new Error('useCarrinhoContext deve ser usado dentro de um CarrinhoProvider');
    }

    // TODO: Alterar função mudarQuantidade para não permitir quantidade negativa
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

    function efetuarCompra() {
        setCarrinho([]);
        setSaldo(saldoAtual => saldoAtual - valorTotalCarrinho);
        setQuantidadeProdutos(0);
    }

    useEffect(() => {
        const {novoTotal, novaQuantidade}  = carrinho.reduce((contador, produto) => ({
            novaQuantidade: contador.novaQuantidade + produto.quantidade,
            novoTotal: contador.novoTotal + (produto.preco * produto.quantidade)
        }), {
            novaQuantidade: 0,
            novoTotal: 0
        })
        setQuantidadeProdutos(novaQuantidade);
        setValorTotalCarrinho(novoTotal * formaPagamento.juros);
    }, [carrinho, setQuantidadeProdutos, setValorTotalCarrinho, formaPagamento]);

    return {carrinho, setCarrinho, adicionarProduto, removerProduto, quantidadeProdutos, setQuantidadeProdutos, valorTotalCarrinho, efetuarCompra};
}