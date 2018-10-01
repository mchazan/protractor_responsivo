// finalizarCompra.specs.js

	const Data = require('../data-test/data_test.js');
	const Cep = require('../page-objects/cepPage.po.js');
	const Plano = require('../page-objects/planosPage.po.js');
	const Carrinho = require('../page-objects/carrinhoPage.po.js');
	const DadosPessoais = require('../page-objects/dadosPessoais.po.js');
	const Agendamento = require('../page-objects/agendamento.po.js');
	const Endereco = require('../page-objects/endereco.po.js');
	const Pagamento = require('../page-objects/pagamento.po.js');
	const Oferta = require('../page-objects/sucessoPage.po.js');
	const Helper = require('../helper.js');

	const cp = new Cep();
	const pp = new Plano();
	const ca = new Carrinho();
	const dp = new DadosPessoais();
	const ag = new Agendamento();
	const en = new Endereco();
	const pg = new Pagamento();
	const oferta = new Oferta();
	const helper = new Helper();

describe('Fluxo de compra', function(){

	beforeEach( function(){
		helper.visit();
		helper.waitElementVisibility(element(by.id('cep')));
	});

	afterEach( function(){
		browser.executeScript('window.sessionStorage.clear();');
		browser.executeScript('window.localStorage.clear();');
		browser.driver.manage().deleteAllCookies();
	});

	fit('finalizarCompraDccEmail', function(){
		console.log('finalizarCompraDccEmail - Cenário 1 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(4000);
		helper.waitElementVisibility(element(by.css('.selecionar-106')));
		pp.selecionarRemoverProduto('106');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		dp.preencherDadosPessoais(Data.dadosPessoais, 'CN1');
		browser.sleep(3000);
		en.preencherEndereco();
		en.selecionarDataInstalacao1();
		browser.sleep(5000);
		en.prosseguirParaPagamento();
		browser.sleep(5000);
		pg.selecionarDcc();
		helper.waitElementVisibility(element(by.css('h2.text-uppercase.text-center.font-weight-bold')));
		var sucesso = element(by.css('h2.text-uppercase.text-center.font-weight-bold'));
		helper.validaMsg(sucesso,'pedidoSucesso');
	});

	fit('finalizarCompraBoletoEmail', function(){
		console.log('finalizarCompraBoletoEmail - Cenário 2 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(4000);
		helper.waitElementVisibility(element(by.css('.selecionar-106')));
		pp.selecionarRemoverProduto('106');
		browser.sleep(3000);
		ca.finalizarAssinatura();
		dp.preencherDadosPessoais(Data.dadosPessoais, 'CN1');
		browser.sleep(3000);
		en.preencherEndereco();
		en.selecionarDataInstalacao1();
		browser.sleep(5000);
		en.prosseguirParaPagamento();
		browser.sleep(5000);
		pg.selecionarBoleto();
		helper.waitElementVisibility(element(by.css('h2.text-uppercase.text-center.font-weight-bold')));
		var sucesso = element(by.css('h2.text-uppercase.text-center.font-weight-bold'));
		helper.validaMsg(sucesso,'pedidoSucesso');
	});

	it('finalizarCompraDccCorreio', function(){
		console.log('finalizarCompraDccCorreio - Cenário 3 - INÍCIO');
	});

	it('finalizarCompraBoletoCorreio', function(){
		console.log('finalizarCompraBoletoCorreio - Cenário 4 - INÍCIO');
	});

	it('finalizarCompraComBoleto-AlteraçãoDeEndereço', function(){
		console.log('finalizarCompraComBoletoAlteraçãoDeEndereço - Cenário 5 - INÍCIO');
	});

	//Deprecated
	xit('finalizarCompraComOferta', function(){
		console.log('finalizarCompraComOferta - Cenário 6 - INÍCIO');
	});

	it('finalizarCompraProdutoInternet', function(){
		console.log('finalizarCompraProdutoInternet - Cenário 7 - INÍCIO');
	});

	it('finalizarCompraProdutoTv', function(){
		console.log('finalizarCompraProdutoTv - Cenário 8 - INÍCIO');
	});

	//Com bug
	xit('finalizarCompraProdutoCelular', function(){
		console.log('finalizarCompraProdutoCelular - Cenário 9 - INÍCIO');
	});

	it('finalizarCompraComAgendamentoComSegundaOpcao', function(){
		console.log('finalizarCompraDccEmail - Cenário 10 - INÍCIO');
	});

	it('finalizarCompraComAgendamentoSemSegundaOpcao', function(){
		console.log('finalizarCompraDccEmail - Cenário 11 - INÍCIO');
	});

})
