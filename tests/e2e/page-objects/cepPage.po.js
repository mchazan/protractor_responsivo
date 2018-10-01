//cepPage.po.js
class Cep{
	constructor(){
		this.firstField = element(by.id('cep'));
		this.numberField = element(by.id('number'));
		this.buttonConfirm = element(by.name('continuar'));
		this.linkNSMC = element(by.css('.nao-sei-cep'));
		//this.addressLink = element(by.css('div#address > a[data-target="#modal-cep"]'));
		this.addressLink = element(by.id('modalCep'));
		this.buttonClose = element(by.css('.closeCep'));
	}

	preencherCep(cep){
		this.firstField.sendKeys(cep.cep1);
		this.numberField.sendKeys(cep.num);
		this.buttonConfirm.click();
	}

	preencherCepVazio(cep){
		this.firstField.sendKeys(cep.cep1);
		this.numberField.sendKeys(cep.num);
	}

	preencherNumVazio(cep){
		this.numberField.sendKeys(cep.num);
		this.firstField.sendKeys(cep.cep1);
	}

	clicarLinkNSMC(){
		this.linkNSMC.click();
	}

	mudarCep(){
		this.addressLink.click();
	}

	fecharModalCep(){
		this.addressLink.click();
		browser.sleep(2000);
		this.buttonClose.click();
	}

}
module.exports = Cep;
