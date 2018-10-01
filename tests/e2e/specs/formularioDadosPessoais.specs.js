// formularioDadosPessoais.specs.js
	const Data = require('../data-test/data_test.js');
	const Cep = require('../page-objects/cepPage.po.js');
	const Carrinho = require('../page-objects/carrinhoPage.po.js');
	const Plano = require('../page-objects/planosPage.po.js');
	const DadosPessoais = require('../page-objects/dadosPessoais.po.js');
	const Endereco = require('../page-objects/endereco.po.js');

	const Helper = require('../helper.js');

	const cp = new Cep();
	const ca = new Carrinho();
	const pp = new Plano();
	const dp = new DadosPessoais();
	const helper = new Helper();

describe('Formulario Validação De Campos', function(){

	beforeEach( function(){
		helper.visit();
		helper.waitElementVisibility(element(by.id('cep')));
	});

	afterEach( function(){
		browser.executeScript('window.sessionStorage.clear();');
		browser.executeScript('window.localStorage.clear();');
		browser.driver.manage().deleteAllCookies();
	});

	//Falta seletor para assert
	it('validarFormularioDadosPessoais', function(){
		console.log('validarFormularioDadosPessoais - Cenário 1 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(3000);
		helper.waitElementVisibility(element(by.css('.selecionar-106')));
		pp.selecionarRemoverProduto('106');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		dp.preencherDadosPessoais(Data.dadosPessoais, 'CN1');
		//helper.validaMsg(erro,'campoObrigatorio');
	});

	it('validarCampoNomeVazio', function(){
		console.log('validarCampoNomeVazio - Cenário 2 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(3000);
		helper.waitElementVisibility(element(by.css('.selecionar-106')));
		pp.selecionarRemoverProduto('106');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		dp.preencherCampoUnico('nome','');
		dp.preencherCampoUnico('email','teste@email.com');
		browser.sleep(3000);
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoObrigatorio');
	});

	it('validarCampoEmailVazio', function(){
		console.log('validarCampoEmailVazio - Cenário 3 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(3000);
		helper.waitElementVisibility(element(by.css('.selecionar-106')));
		pp.selecionarRemoverProduto('106');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		dp.preencherCampoUnico('email','');
		dp.preencherCampoUnico('nome','teste');
		browser.sleep(3000);
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoObrigatorio');
	});

	it('validarCampoTelVazio', function(){
		console.log('validarCampoTelVazio - Cenário 4 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(3000);
		helper.waitElementVisibility(element(by.css('.selecionar-106')));
		pp.selecionarRemoverProduto('106');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		dp.preencherCampoUnico('tel','');
		dp.preencherCampoUnico('nome','teste');
		browser.sleep(3000);
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoObrigatorio');
	});


	xit('validarCampoCpfVazio', function(){
		console.log('validarCampoCpfVazio - Cenário 5 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('cpf','');
		dp.preencherCampoUnico('nome','teste');
		browser.sleep(3000);
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoObrigatorio');
	});

	xit('validarCampoRgVazio', function(){
		console.log('validarCampoRgVazio - Cenário 6 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('rg','');
		dp.preencherCampoUnico('nome','teste');
		browser.sleep(3000);
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoObrigatorio');
	});

	xit('validarCampoDataNascVazio', function(){
		console.log('validarCampoDataNascVazio - Cenário 7 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('dtNasc','');
		dp.preencherCampoUnico('nome','teste');
		browser.sleep(3000);
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoObrigatorio');
	});

	xit('validarCampoNomeInv', function(){
		console.log('validarCampoNomeInv - Cenário 8 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('nome','a');
		dp.preencherCampoUnico('email','teste@teste.com');
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoIncorreto');
	});

	xit('validarCampoEmailInv', function(){
		console.log('validarCampoEmailInv - Cenário 9 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('nome','a');
		dp.preencherCampoUnico('email','teste@teste.com');
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoIncorreto');
	});

	xit('validarCampoTelInv', function(){
		console.log('validarCampoCelDDDInv - Cenário 10 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('tel','1');
		dp.preencherCampoUnico('nome','Teste');
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoIncorreto');
	});

	xit('validarCampoTelAdicionalInv', function(){
		console.log('validarCampoTelNumInv - Cenário 11 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('telAdicional','1');
		dp.preencherCampoUnico('nome','Teste');
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoIncorreto');
	});

	xit('validarCampoCpfInv', function(){
		console.log('validarCampoCpfInv - Cenário 12 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('cpf','352');
		dp.preencherCampoUnico('nome','Teste');
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoIncorreto');
	});

	xit('validarCampoRgInv', function(){
		console.log('validarCampoRgInv - Cenário 13 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('rg','123');
		dp.preencherCampoUnico('nome','Teste');
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoIncorreto');
	});

	xit('validarCampoDataNascInv', function(){
		console.log('validarCampoDataNascInv - Cenário 14 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('dtNasc','99/99/9999');
		dp.preencherCampoUnico('nome','Teste');
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoIncorreto');
	});

	xit('validarCampoDataNascInvApenasDia', function(){
		console.log('validarCampoDataNascInvApenasDia - Cenário 15 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('dtNasc','11');
		dp.preencherCampoUnico('nome','Teste');
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoIncorreto');
	});

	xit('validarCampoDataNascInvMenorIdade', function(){
		console.log('validarCampoDataNascInvMenorIdade - Cenário 16 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		dp.preencherCampoUnico('dtNasc','10/10/2015');
		dp.preencherCampoUnico('nome','Teste');
		var erro = element(by.css('.text-danger'));
		helper.validaMsg(erro,'campoIncorreto');
	});

	xit('validarDicaflutuanteEmail', function(){
		console.log('validarDicaflutuanteEmail - Cenário 17 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		var dica = element(by.css('.col-md-6 .info'));
		helper.validaMsg(dica,'dicaFlutuante');
	});

	f
	xit('validarDicaflutuanteDaNasc', function(){
		console.log('validarDicaflutuanteEmail - Cenário 18 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		//helper.waitElementVisibility(element(by.css('.pacotes')));
		//ca.selecionarRemoverProduto('132');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		helper.waitElementVisibility(element(by.css('.checkout')));
		var dica = element(by.css('.col-md-4 .info'));
		helper.validaMsg(dica,'dicaFlutuante');
	});

})
