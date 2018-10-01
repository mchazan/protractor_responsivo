//pagamento.po.js
class pagamento{
	constructor(){
		this.abaDebito = element(by.css('.aba-debito-conta'));
		this.abaBoleto = element(by.css('.aba-boleto'));
		this.vencimentoDebito = element(by.name('paymentDay'));
		this.vencimentoBoleto = element(by.name('paymentDay'));
		this.banco = element(by.name('bankNumber'));
		this.agencia = element(by.id('agencyNumber'));
		this.conta = element(by.id('accountNumber'));
		this.prosseguir = element(by.css('button.desktop[data-action="prosseguir-confirmacao"]'));
	}

	selecionarBoleto(){
		this.abaBoleto.click();
		this.vencimentoBoleto.$('option[value="5"]').click();
		this.prosseguir.click();
	}

	selecionarDcc(){
		this.vencimentoDebito.$('option[value="5"]').click();
		this.banco.$('option[value="341"]').click();
		this.agencia.sendKeys('0001');
		this.conta.sendKeys('12345-6');
		this.prosseguir.click();
	}

}
module.exports = pagamento;
