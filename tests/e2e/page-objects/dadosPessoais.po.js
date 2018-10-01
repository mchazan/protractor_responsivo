// dadosPessoais.po.js
const Data = require('../data-test/data_test.js');

class DadosPessoais {
	constructor(){
		//this.abaDadosPessoais = element(by.css(''));
		this.nome = element(by.name('name'));
		this.email = element(by.name('email'));
		this.nomeMae = element(by.name('motherName'));
		this.tel = element.all(by.name('phone'));
		this.telAdicional = element.all(by.name('additionalPhone'));
		this.cpf = element(by.name('cpf'));
		this.cnpj = element(by.name('cnpj'));
		this.rg = element(by.name('rg'));
		this.dtNasc = element(by.name('birthdate'));
		this.prosseguir = element(by.css('button.desktop[data-action="prosseguir-endereco"]'));
	}

	preencherDadosPessoais(dadosPessoais, cenario){
		this.nome.sendKeys(dadosPessoais.nome +" "+ cenario);
		this.email.sendKeys(dadosPessoais.email);
		this.tel.sendKeys(dadosPessoais.tel);
		this.telAdicional.sendKeys(dadosPessoais.telAdd);
		this.cpf.sendKeys(dadosPessoais.cpf);
		this.rg.sendKeys(dadosPessoais.rg);
		this.dtNasc.sendKeys(dadosPessoais.dtNasc);
		this.nomeMae.sendKeys(dadosPessoais.nomeMae);
		this.prosseguir.click();
	}

	preencherDadosPessoaisEmpresa(dadosPessoaisEmpresa){
		this.nome.sendKeys(dadosPessoaisEmpresa.nome);
		this.email.sendKeys(dadosPessoaisEmpresa.email);
		this.tel.sendKeys(dadosPessoaisEmpresa.celDDD);
		this.telAdicional.sendKeys(dadosPessoaisEmpresa.telDDD);
		this.cnpj.sendKeys(dadosPessoaisEmpresa.cnpj);
		this.rg.sendKeys(dadosPessoaisEmpresa.rg);
		this.dtNasc.sendKeys(dadosPessoaisEmpresa.dtNasc);
		this.prosseguir.click();
	}

	preencherDadosPessoaisCelular(dadosPessoais){
		this.nome.sendKeys(dadosPessoais.nome);
		this.email.sendKeys(dadosPessoais.email);
		this.nomeMae.sendKeys(dadosPessoais.nomeMae);
		this.celDDD.sendKeys(dadosPessoais.celDDD);
		this.celNum.sendKeys(dadosPessoais.celNum);
		this.cpf.sendKeys(dadosPessoais.cpf);
		this.dtNasc.sendKeys(dadosPessoais.dtNasc);
		this.prosseguir.click();
	}

	prosseguirFormulario(){
		this.prosseguir.click();
	}

	preencherCampoUnico(campo, dado){
		switch(campo){
			case 'nome':
				this.nome.sendKeys(dado);
			break;
			case 'email':
				this.email.sendKeys(dado);
			break;
			case 'tel':
				this.tel.sendKeys(dado);
			break;
			case 'telAdicional':
				this.telAdicional.sendKeys(dado);
			break;
			case 'cpf':
				this.cpf.sendKeys(dado);
			break;
			case 'rg':
				this.rg.sendKeys(dado);
			break;
			case 'dtNasc':
				this.dtNasc.sendKeys(dado);
			break;
		}
	}

}

module.exports = DadosPessoais;
