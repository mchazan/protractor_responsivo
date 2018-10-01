// finalizarCompra.specs.js

	const Data = require('../data-test/data_test.js');
	const Cep = require('../page-objects/cepPage.po.js');
	const Carrinho = require('../page-objects/carrinhoPage.po.js');
	const Plano = require('../page-objects/planosPage.po.js');
	const DadosPessoais = require('../page-objects/dadosPessoais.po.js');
	const Agendamento = require('../page-objects/agendamento.po.js');
	const EnderecoPagamento = require('../page-objects/endereco.po.js');
	const Oferta = require('../page-objects/sucessoPage.po.js');
	const Helper = require('../helper.js');

	const cp = new Cep();
	const ca = new Carrinho();
	const pp = new Plano();
	const dp = new DadosPessoais();
	const ag = new Agendamento();
	const ep = new EnderecoPagamento();
	const oferta = new Oferta();
	const helper = new Helper();

describe('Fluxo do Carrinho', function(){

	beforeEach( function(){
		helper.visit();
		helper.waitElementVisibility(element(by.id('cep')));
	});

	afterEach( function(){
		browser.executeScript('window.sessionStorage.clear();');
		browser.executeScript('window.localStorage.clear();');
		browser.driver.manage().deleteAllCookies();
	});

	it('validarCarrinhoComProduto', function(){
		console.log('validarCarrinhoComProduto - Cenário 1 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		helper.waitElementVisibility(element(by.css('.monte-sua-combinacao-content')));
		browser.sleep(2000);
		pp.selecionarRemoverProduto('106');
		var carrinho = element(by.css('.detalhes-oferta'));
		helper.validaMsg(carrinho,'carrinhoCheio');
	});

	it('validarCarrinhoSemProduto', function(){
		console.log('validarCarrinhoSemProduto - Cenário 2 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		helper.waitElementVisibility(element(by.css('.monte-sua-combinacao-content')));
		var carrinho = element(by.css('.total'));
		helper.validaMsg(carrinho, 'totalCarrinho');
	});

	//Botão x não consegui acertar o seletor
	xit('validarExclusaoDeProdutoNoCarrinho', function(){
		console.log('validarExclusaoDeProdutoNoCarrinho - Cenário 3 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		helper.waitElementVisibility(element(by.css('.monte-sua-combinacao-content')));
		browser.sleep(3000);
		pp.selecionarRemoverProduto('132');
		helper.waitElementVisibility(element(by.css('.limpar-internet')));
		ca.excluirItemCarrinho();
		browser.sleep(3000);
		var carrinho = element(by.css('.total'));
		helper.validaMsg(carrinho, 'totalCarrinho');
	});

	//Não consegui definir um seletor
	xit('validarAlteracaoDeProdutoNoCarrinho', function(){
		console.log('validarAlteracaoDeProdutoNoCarrinho - Cenário 4 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		helper.waitElementVisibility(element(by.css('.monte-sua-combinacao-content')));
		pp.selecionarRemoverProduto('132');

		var carrinho = element(by.css('.total'));
		helper.validaMsg(carrinho, 'totalCarrinho');
	});

	it('limparCarrinhoProduto', function(){
		console.log('limparCarrinhoProduto - Cenário 5 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(4000);
		pp.selecionarRemoverProduto('187');
		browser.sleep(1000);
		ca.fecharModalAdicionais();
		browser.sleep(2000);
		pp.selecionarRemoverProduto('116');
		browser.sleep(1000);
		ca.fecharModalAdicionais();
		browser.sleep(2000);
		ca.limpaCarrinho();
		var sucesso = element(by.css('.internet .cart-add'));
		helper.validaMsg(sucesso, 'carrinho');
	});

	it('limparCarrinhoPreco', function(){
		console.log('limparCarrinhoPreco - Cenário 6 - INÍCIO');
		cp.preencherCep(Data.cepEnderecoSP);
		browser.sleep(3000);
		pp.selecionarRemoverProduto('106');
		browser.sleep(1000);
		pp.selecionarRemoverProduto('124');
		browser.sleep(3000);
		ca.limpaCarrinho();
		var sucesso = element(by.css('.total'));
		helper.validaMsg(sucesso, 'totalCarrinho');
	});

})
