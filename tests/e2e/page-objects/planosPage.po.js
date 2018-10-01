//planosPage.po.js
class Plano{
	constructor(){
		this.carrosselLeftInternet = element(by.css('div#internet .swiper-button-prev'));
		this.carrosselRightInternet = element(by.css('div#internet .swiper-button-next'));
		this.carrosselLeftTv = element(by.css('div#tv .swiper-button-prev'));
		this.carrosselRightTv = element(by.css('div#tv .swiper-button-next'));
		this.carrosselLeftFone = element(by.css('div#fone .swiper-button-prev'));
		this.carrosselRightFone = element(by.css('div#fone .swiper-button-next'));
		this.carrosselLeftCelular = element(by.css('div#celular .swiper-button-prev'));
		this.carrosselRightCelular = element(by.css('div#celular .swiper-button-next'));
		this.iconeDetalhe = element(by.css('table#132 .info'));

		this.produto;
		this.direcao;
	}

	selecionarSetaPreview(produto, direcao, qtd){
		if (produto == 'internet') {
			if (direcao == 'esquerda') {
				for(let x = 0; qtd > x; x++){
					this.carrosselLeftInternet.click();
				}
			}else {
				for(let x = 0; qtd > x; x++){
					this.carrosselRightInternet.click();
				}
			}
		}else if (produto == 'tv') {
			if (direcao == 'esquerda') {
				for(let x = 0; qtd > x; x++){
					this.carrosselLeftTv.click();
				}
			} else {
				for(let x = 0; qtd > x; x++){
					this.carrosselRightTv.click();
				}
			}
		}else if (produto == 'fone') {
			if (direcao == 'esquerda') {
				for(let x = 0; qtd > x; x++){
					this.carrosselLeftFone.click();
				}
			}else {
				for(let x = 0; qtd > x; x++){
					this.carrosselRightFone.click();
				}
			}
		}else if (produto == 'celular') {
			if (direcao == 'esquerda') {
				for(let x = 0; qtd > x; x++){
					this.carrosselLeftCelular.click();
				}
			} else{
				for(let x = 0; qtd > x; x++){
					this.carrosselRightCelular.click();
				}
			}
		}
	}

	selecionarRemoverProduto(id){
		this.produto = element(by.css('.selecionar-' + id));
		this.produto.click();
	}

}
module.exports = Plano;
