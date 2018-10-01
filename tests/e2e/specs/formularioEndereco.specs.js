// formularioEndereco.specs.js
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
	const en = new Endereco();
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

		it('validarFormularioEndereco', function(){
			console.log('validarFormularioEndereco - Cenário 1 - INÍCIO');
			cp.preencherCep(Data.cepEnderecoSP);
			browser.sleep(3000);
			helper.waitElementVisibility(element(by.css('.selecionar-106')));
			pp.selecionarRemoverProduto('106');
			browser.sleep(3000);
			ca.finalizarAssinatura();
			dp.preencherDadosPessoais(Data.dadosPessoais, 'CN1');
			en.preencherEndereco();
			//helper.validaMsg(erro,'campoObrigatorio');
		});
	})
