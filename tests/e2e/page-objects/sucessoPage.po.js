//sucessoPage.po.js
class Sucesso{
	constructor(){
		this.finalizaPedido = element(by.css('.text-uppercase .text-center .font-weight-bold'));
	}

	selecionarOferta(){
		this.oferta.click();
		browser.sleep(2000);
		this.finalizaPedido.click();
	}

}
module.exports = Sucesso;
