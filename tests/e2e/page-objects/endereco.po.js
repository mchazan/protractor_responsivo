// endereco.po.js
class endereco{
	constructor(){
		this.logradouro = element(by.name('installationType'));
		this.endereco = element(by.name('installationAddress'));
		this.numero = element(by.name('installationNumber'));
		this.bairro = element(by.name('installationDistrict'));
		this.complemento = element(by.name('installationComplement'));
		this.cidade = element(by.name('installationCity'));
		this.estado = element(by.name('installationState'));
		this.cep = element(by.name('installationZipcode'));
		this.email = element(by.name('invoiceEmail'));
		this.receberFaturaEmail = element(by.name('invoiceType1'));
		this.receberFaturaCorreio = element(by.name('invoiceType2'));
		this.data1 = element.all(by.css('.day.active')).get(0);
		this.data2 = element.all(by.css('.day.active')).get(1);
		this.opcaoData1 = element(by.id('schedulePeriod11'));
		this.opcaoData2 = element(by.id('schedulePeriod21'));
		this.prosseguir = element(by.css('button.desktop[data-action="prosseguir-pagamento"]'));
	}

	selecionarFormaFatura(tipo){
		if (tipo == 'correio') {
			browser.sleep(3000);
			this.receberFaturaCorreio.click();
		}
	}

	preencherEndereco(){
		this.logradouro.$('option[value="Avenida"]').click();
		this.endereco.sendKeys('teste da silva');
		this.bairro.sendKeys('Vila Teste');
		this.complemento.sendKeys('complemento');
		//this.email.sendKeys('teste@teste.com');
	}

	selecionarDataInstalacao1(){
		this.data1.click();
		this.opcaoData1.click();
	}

	selecionarDataInstalacao2(){
		this.data2.click();
		this.opcaoData2.click();
	}

	prosseguirParaPagamento(){
		this.prosseguir.click();
	}

	preencherEnderecoJsonDefault(){
		this.logradouro.$('option[value="Rua"]').click();
		this.endereco.sendKeys('teste da silva');
		this.numero.sendKeys('4');
		this.bairro.sendKeys('Vila Teste');
		this.complemento.sendKeys('complemento');
		this.cidade.sendKeys('São Paulo');
		//this.estado.
		this.cep.sendKeys('02221-000');
	}

	preencherEnderecoFaturaCorreioMesmoEndereco(){
		this.logradouro.$('option[value="Rua"]').click();
		this.endereco.sendKeys('teste da silva');
		this.bairro.sendKeys('Vila Teste');
		this.complemento.sendKeys('complemento');
		this.numero.sendKeys('100');
	}

	preencherEnderecoFaturaCorreioEnderecoDiferente(){
		this.logradouro.$('option[value="Rua"]').click();
		this.endereco.sendKeys('teste da silva');
		this.bairro.sendKeys('Vila Teste');
		this.complemento.sendKeys('complemento');
		this.numero.sendKeys('100');
	}

}
module.exports = endereco;
