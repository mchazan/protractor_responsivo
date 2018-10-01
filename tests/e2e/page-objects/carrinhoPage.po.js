//carrinhoPage.po.js
class Carrinho{
	constructor(){
		this.limparCarrinho = element(by.css('.carrinho-desktop .clear .delete'));
		this.finalizar = element(by.css('.carrinho-desktop #finalizar-assinatura'));
		this.excluirItem = element(by.css('.carrinho-desktop .limpar-internet'));
		this.botaoFechar = element(by.css('#modal-turbine-modal-lg .close'));
	}

	limpaCarrinho(){
		this.limparCarrinho.click();
	}

	finalizarAssinatura(){
		this.finalizar.click();
	}

		excluirItemCarrinho(){
		this.excluirItem.click();
	}

	fecharModalAdicionais(){
		this.botaoFechar.click();
	}

}
module.exports = Carrinho;
