// monteSuaCombinação.specs.js

	const Data = require('../data-test/data_test.js');
	const Cep = require('../page-objects/cepPage.po.js');
	const Plano = require('../page-objects/planosPage.po.js');
	const Helper = require('../helper.js');

	const cp = new Cep();
	const pp = new Plano();
	const helper = new Helper();

describe('Monte sua combinação', function(){

	beforeEach( function(){
		helper.visit();
		helper.waitElementVisibility(element(by.id('cep')));
	});

	afterEach( function(){
		browser.executeScript('window.sessionStorage.clear();');
		browser.executeScript('window.localStorage.clear();');
		browser.driver.manage().deleteAllCookies();
	});

		it('selecionarProdutoInternet', function(){
		console.log('selecionarProdutoInternet - Cenário 1 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(3000);
		pp.selecionarSetaPreview('internet', 'esquerda', '2');
		browser.sleep(3000);
		pp.selecionarRemoverProduto('132');
		var sucesso = element(by.css('.selecionar-132'));
		helper.validaMsg(sucesso,'produtoSelecionado');
	});

	it('removerProdutoInternet', function(){
		console.log('removerProdutoInternet - Cenário 2 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(3000);
		pp.selecionarSetaPreview('internet', 'esquerda', '2');
		browser.sleep(3000);
		pp.selecionarRemoverProduto('132');
		pp.selecionarRemoverProduto('132');
		var sucesso = element(by.css('.selecionar-132'));
		helper.validaMsg(sucesso,'produto');
	});

	it('selecionarProdutoTv', function(){
		console.log('selecionarProdutoTv - Cenário 3 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(3000);
		pp.selecionarSetaPreview('tv', 'esquerda', '1');
		browser.sleep(3000);
		pp.selecionarRemoverProduto('116');
		var sucesso = element(by.css('.selecionar-116'));
		helper.validaMsg(sucesso,'produtoSelecionado');
	});

	it('selecionarProdutoFone', function(){
		console.log('selecionarProdutoFone - Cenário 4 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(3000);
		pp.selecionarRemoverProduto('102');
		var sucesso = element(by.css('.selecionar-102'));
		helper.validaMsg(sucesso,'produtoSelecionado');
	});

	it('selecionarProdutoCelular', function(){
		console.log('selecionarProdutoCelular - Cenário 5 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(3000);
		pp.selecionarRemoverProduto('4401');
		var sucesso = element(by.css('.selecionar-4401'));
		helper.validaMsg(sucesso,'produtoSelecionado');
	});

})
