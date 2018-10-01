const cepEnderecoSP = {
	cep1:'05793-250',
	num:'243'
};

const cepEnderecoBarueri = {
	cep1:'06454-000',
	num:'585'
};

const cepEnderecoVazio = {
	cep1:'',
	num:''
};

const cepEnderecoClaro = {
	cep1:'49080-000',
	num:'150'
};

const dadosPessoais = {
	nome:'Marcelo Chazan',
	email:'marcelo.chazan@globalhitss.com.br',
	nomeMae:'Ana Chazan',
	tel:'(11) 91111-1111',
	telAdd:'(11) 1234-5678',
	cpf:'072.882.265-22',
	rg:'112223334',
	dtNasc:'10/10/1990'
};

const dadosPessoaisEmpresa = {
	nome:'Marcelo Chazan',
	email:'marcelo.chazan@globalhitss.com.br',
	nomeMae:'Ana Chazan',
	tel:'(11) 91111-1111',
	telAdd:'(11) 1234-5678',
	cpf: '873.678.134-71',
	cnpj:'88274175000138',
	rg:'112223334',
	dtNasc:'10/10/1990'
};

const dadosPessoaisIncorretos = {
	nome:'a',
	email:'a@a.com.br',
	nomeMae:'a',
	tel:'9',
	telAdd:'1',
	cpf:'123',
	rg:'123',
	dtNascInvMenor:'11',
	dtNascInv:'11/11/1111',
	dtNascMenorIdade:'01/01/2015',
	vazio:' '
};

const mensagens = {
	pedidoSucesso:'SEU PEDIDO FOI RECEBIDO COM SUCESSO',
	campoObrigatorio:'Campo obrigatório',
	campoIncorreto:'Campo inválido',
	campoCepObrigatorio: 'Informe o CEP',
	campoNumObrigatorio: 'Informe o número',
	dicaFlutuante:'?',
	carrinho:'ADICIONAR',
	carrinhoCheio:'DETALHES DA OFERTA',
	produto:'SELECIONAR',
	produtoSelecionado:'REMOVER',
	totalCarrinho:'R$ 0,00',
	carrinhoVazio:'Escolha os pacotes de sua preferência e monte o plano ideal para você.',
	cidadeAtual: 'Barueri - SP',
	cidadePadrao:'Sao Paulo - SP',
	cepSP1:'CEP: 05793-250'
};

module.exports = {
	cepEnderecoSP,
	cepEnderecoBarueri,
	cepEnderecoVazio,
	cepEnderecoClaro,
	dadosPessoais,
	dadosPessoaisEmpresa,
	dadosPessoaisIncorretos,
	mensagens
};
