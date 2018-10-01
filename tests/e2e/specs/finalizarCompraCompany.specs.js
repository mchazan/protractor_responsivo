// finalizarCompraCompany.specs.js

	const Data = require('../data-test/data_test.js');
	const Cep = require('../page-objects/cepPage.po.js');
	const Plano = require('../page-objects/planosPage.po.js');
	const DadosPessoais = require('../page-objects/dadosPessoais.po.js');
	const EnderecoPagamento = require('../page-objects/endereco.po.js');
	const Oferta = require('../page-objects/sucessoPage.po.js');
	const Helper = require('../helper.js');

	const cp = new Cep();
	const pp = new Plano();
	const dp = new DadosPessoais();
	const ep = new EnderecoPagamento();
	const oferta = new Oferta();
	const helper = new Helper();

describe('Fluxo de compra empresas', function(){

	beforeEach(function(){
		helper.visitCompany();
		helper.waitElementVisibility(element(by.id('cep1')));
	});

	afterEach(function(){
    	browser.driver.manage().deleteAllCookies();
	});

	xit('finalizarCompraDccEmail', function(){
		console.log('finalizarCompraDccEmail - Cenário 1 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		helper.waitElementVisibility(element(by.css('.pacotes')));
		pp.selecionarPlanoCompany('internet');
		pp.finalizarEscolha();
		helper.waitElementVisibility(element(by.buttonText('Prosseguir')));
		dp.preencherDadosPessoaisEmpresa(Data.dadosPessoaisEmpresa);
		helper.waitElementVisibility(element(by.id('abaEnderecoPagamento')));
		ep.selecionarFormaFatura('email');
		ep.preencherEndereco();
		ep.selecionarDcc();
		browser.sleep(5000);
		helper.waitElementVisibility(element(by.css('div#pedido-recebido > div.holder > div.content-intro > h1.main-title')));
		var sucesso = element(by.css('div#pedido-recebido > div.holder > div.content-intro > h1.main-title'));
		helper.validaMsg(sucesso,'pedidoSucesso');
	});

	xit('finalizarCompraBoletoEmail', function(){
		console.log('finalizarCompraBoletoEmail - Cenário 2 - INÍCIO');
		cp.preencherCep(Data.cepEndereco);
		helper.waitElementVisibility(element(by.css('.pacotes')));
		pp.selecionarPlano('internet');
		pp.finalizarEscolha();
		helper.waitElementVisibility(element(by.buttonText('Prosseguir')));
		dp.preencherDadosPessoais(Data.dadosPessoais);
		helper.waitElementVisibility(element(by.id('abaEnderecoPagamento')));
		ep.selecionarFormaFatura('email');
		ep.preencherEndereco();
		ep.selecionarBoleto();
		browser.sleep(5000);
		helper.waitElementVisibility(element(by.css('div#pedido-recebido > div.holder > div.content-intro > h1.main-title')));
		var sucesso = element(by.css('div#pedido-recebido > div.holder > div.content-intro > h1.main-title'));
		helper.validaMsg(sucesso,'pedidoSucesso');

	});

	xit('finalizarCompraDccCorreio', function(){
		console.log('finalizarCompraDccCorreio - Cenário 3 - INÍCIO');
		cp.preencherCep(Data.cepEndereco);
		helper.waitElementVisibility(element(by.css('.pacotes')));
		pp.selecionarPlano('internet');
		pp.finalizarEscolha();
		helper.waitElementVisibility(element(by.buttonText('Prosseguir')));
		dp.preencherDadosPessoais(Data.dadosPessoais);
		helper.waitElementVisibility(element(by.id('abaEnderecoPagamento')));
		browser.sleep(5000);
		ep.selecionarFormaFatura('correio');
		ep.preencherEndereco();
		ep.selecionarDcc();
		browser.sleep(5000);
		helper.waitElementVisibility(element(by.css('div#pedido-recebido > div.holder > div.content-intro > h1.main-title')));
		var sucesso = element(by.css('div#pedido-recebido > div.holder > div.content-intro > h1.main-title'));
		helper.validaMsg(sucesso,'pedidoSucesso');
	});

	xit('finalizarCompraBoletoCorreio', function(){
		console.log('finalizarCompraBoletoCorreio - Cenário 4 - INÍCIO');
		cp.preencherCep(Data.cepEndereco);
		helper.waitElementVisibility(element(by.css('.pacotes')));
		pp.selecionarPlano('internet');
		pp.finalizarEscolha();
		helper.waitElementVisibility(element(by.buttonText('Prosseguir')));
		dp.preencherDadosPessoais(Data.dadosPessoais);
		helper.waitElementVisibility(element(by.id('abaEnderecoPagamento')));
		browser.sleep(5000);
		ep.selecionarFormaFatura('correio');
		ep.preencherEndereco();
		ep.selecionarBoleto();
		browser.sleep(5000);
		helper.waitElementVisibility(element(by.css('div#pedido-recebido > div.holder > div.content-intro > h1.main-title')));
		var sucesso = element(by.css('div#pedido-recebido > div.holder > div.content-intro > h1.main-title'));
		helper.validaMsg(sucesso,'pedidoSucesso');
	});

	xit('finalizarCompraComBoleto-AlteraçãoDeEndereço', function(){
		console.log('finalizarCompraComBoletoAlteraçãoDeEndereço - Cenário 5 - INÍCIO');
		cp.preencherCep(Data.cepEndereco);
		helper.waitElementVisibility(element(by.css('.pacotes')));
		pp.selecionarPlano('internet');
		pp.finalizarEscolha();
		helper.waitElementVisibility(element(by.buttonText('Prosseguir')));
		dp.preencherDadosPessoais(Data.dadosPessoais);
		helper.waitElementVisibility(element(by.id('abaEnderecoPagamento')));
		ep.selecionarFormaFatura('correio');
		ep.preencherEndereco();
		ep.selecionarBoleto();
		browser.sleep(5000);
		helper.waitElementVisibility(element(by.css('div#pedido-recebido > div.holder > div.content-intro > h1.main-title')));
		var sucesso = element(by.css('div#pedido-recebido > div.holder > div.content-intro > h1.main-title'));
		helper.validaMsg(sucesso,'pedidoSucesso');
	});

	xit('finalizarCompraComOferta', function(){
		console.log('finalizarCompraComOferta - Cenário 6 - INÍCIO');
		cp.preencherCep(Data.cepEndereco);
		helper.waitElementVisibility(element(by.css('.pacotes')));
		pp.selecionarPlano('internet');
		pp.finalizarEscolha();
		helper.waitElementVisibility(element(by.buttonText('Prosseguir')));
		dp.preencherDadosPessoais(Data.dadosPessoais);
		helper.waitElementVisibility(element(by.id('abaEnderecoPagamento')));
		ep.selecionarFormaFatura('correio');
		ep.preencherEndereco();
		ep.selecionarBoleto();
		browser.sleep(125000);
		oferta.selecionarOferta();
		browser.sleep(5000);
		helper.waitElementVisibility(element(by.css('div#pagina-boas-vindas > div.box-boas-vindas-timeline > div.holder > div.content-intro > h1.main-title')));
		var sucesso = element(by.css('div#pagina-boas-vindas > div.box-boas-vindas-timeline > div.holder > div.content-intro > h1.main-title'));
		helper.validaMsg(sucesso,'pedidoSucesso');
	});

})
