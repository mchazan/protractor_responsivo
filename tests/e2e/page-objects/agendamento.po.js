//agendamento.po.js

class Agendamento{
	constructor(){
		this.firstOption = element(by.name('primeira-opcao'));
		this.secondOption = element(by.name('segunda-opcao'));
		this.dateScheduling1 = element(by.css('.primeiro-bloco .picker__table .picker__day--highlighted'));
		this.dateScheduling2 = element(by.css('.bloco-se-sim .picker--opened .picker__table .picker__day--highlighted'));
		this.period = element(by.id('installManhaPrimeiroPeriodo'));
		this.yesOption = element(by.id('maisOpcaoSim'));
		this.noOption = element(by.id('maisOpcaoNao'));
		this.confirmBtn = element(by.css('.js-confirmar-data-instalacao'));
	}

	selecionarAgendamentoSemSegundaOpcao(){
		this.firstOption.click();
		this.dateScheduling1.click();
		this.period.click();
		this.noOption.click();
		browser.sleep(1000);
		this.confirmBtn.click();
	}

	selecionarAgendamentoComSegundaOpcao(){
		this.firstOption.click();
		this.dateScheduling1.click();
		this.period.click();
		this.yesOption.click();
		this.secondOption.click();
		this.dateScheduling2.click();
		browser.sleep(1000);
		this.confirmBtn.click();
	}

}
module.exports = Agendamento;