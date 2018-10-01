// alterarCEP.specs.js

	const Data = require('../data-test/data_test.js');
	const Cep = require('../page-objects/cepPage.po.js');
	const Plano = require('../page-objects/planosPage.po.js');
	const DadosPessoais = require('../page-objects/dadosPessoais.po.js');
	const EnderecoPagamento = require('../page-objects/endereco.po.js');
	const Helper = require('../helper.js');

	const cp = new Cep();
	const pp = new Plano();
	const dp = new DadosPessoais();
	const ep = new EnderecoPagamento();
	const helper = new Helper();

describe('Fluxo de cep', function(){

	beforeEach( function(){
		helper.visit();
		helper.waitElementVisibility(element(by.id('cep')));
	});

	afterEach( function(){
		browser.executeScript('window.sessionStorage.clear();');
		browser.executeScript('window.localStorage.clear();');
		browser.driver.manage().deleteAllCookies();
	});

	it('validaNomeCidade', function(){
		console.log('validar nome da cidade no header - Cenário 1 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		helper.waitElementVisibility(element(by.css('.local')));
		browser.sleep(3000);
		var sucesso = element(by.css('.local'));
		helper.validaMsg(sucesso,'cidadePadrao');
	});

	it('validaCep', function(){
		console.log('validar codigo do cep no header - Cenário 2 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		helper.waitElementVisibility(element(by.css('.local')));
		browser.sleep(3000);
		var sucesso = element(by.css('.zipcode'));
		helper.validaMsg(sucesso,'cepSP1');
	});

	it('validaAlteracaoCep', function(){
		console.log('validar codigo do cep no header - Cenário 3 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		helper.waitElementVisibility(element(by.css('.local')));
		browser.sleep(3000);
		cp.mudarCep();
		helper.waitElementVisibility(element(by.id('cep')));
		cp.preencherCep(Data.cepEnderecoBarueri);
		helper.waitElementVisibility(element(by.css('.local')));
		browser.sleep(3000);
		var sucesso = element(by.css('.local'));
		helper.validaMsg(sucesso,'cidadeAtual');
	});

	it('validaXModalCep', function(){
		console.log('validar fechamento do modal de cep - Cenário 4 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(5000);
		cp.fecharModalCep();
		helper.waitElementVisibility(element(by.css('.zipcode')));
		var sucesso = element(by.css('.zipcode'));
		helper.validaMsg(sucesso,'cepSP1');
	});

	it('validaCampoCepVazio', function(){
		console.log('validar campo cep vazio - Cenário 5 - INÍCIO');
		cp.preencherCepVazio(Data.cepEnderecoVazio);
		helper.waitElementVisibility(element(by.css('.invalid-feedback')));
		var sucesso = element(by.css('.invalid-feedback'));
		helper.validaMsg(sucesso,'campoCepObrigatorio');
	});

	it('validaCampoNumVazio',function(){
		console.log('validar campo número vazio - Cenário 6 - INÍCIO');
		cp.preencherNumVazio(Data.cepEnderecoVazio);
		helper.waitElementVisibility(element(by.css('.invalid-feedback')));
		var sucesso = element(by.css('.invalid-feedback'));
		helper.validaMsg(sucesso,'campoNumObrigatorio');
	});

	xit('validaLinkNaoSeiMeuCep',function(){
		console.log('validar link Não sei meu CEP - Cenário 7 - INÍCIO');
		browser.sleep(3000);
		cp.clicarLinkNSMC();
		var sucesso = element(by.css('.tituloimagem'));
		helper.validaMsg(sucesso,'Busca CEP - Endereço');
	});

})
