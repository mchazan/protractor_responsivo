|ENV|URL|
|---|---|
|DEV|net.dev.mindteam.me|
|QA|net.qa.mindteam.me|
|PREPROD|assine3.net.com.br|

```bash
npm run protractor:ENV
```

Os testes de interface (e2e) são escritos usando a ferramenta Protractor e Mocha.
A aplicação não é desenvolvida em AngularJs, mas mesmo assim é possível utilizar
o Protractor nos testes, que inicialmente foi desenvolvido apenas para aplicações
desenvolvidas com AngularJs.

  Este projeto tenta atender as melhores práticas descritas no site oficial do
Protractor.

  A arquitetura do projeto está descrita abaixo:
1. O projeto encontra-se na pasta: "tests/e2e";

2. O arquivo "protractor.conf.js" contém todas as configurações necessárias para
execução dos testes, como endereço do selenium, os browsers onde os testes serão
executados, e também a baseUrl do projeto.

3. O arquivo "helper.js" é usado para funções genéricas que são usadas nos testes,
como tempo de espera, espera por elementos visíveis, etc.

4. Na pasta "page-objects" consta a especificação dos elementos por página.
Não é o teste em si. Esta é a forma de melhor manutenção e separação de
responsabilidades.

5. Na pasta "specs" contém os testes, especificados por páginas. Cada arquivo "spec"
tem seção de "describe", que descreve a suite a ser testada. E possui também os
casos de testes descritos nas seções "it".

6. Na pasta "data-test" contém a massa de dados utilizada nos testes:
Arquivos:
data_test.js - Dados utilizados para os testes;


Para rodar os testes localmente via terminal:
* protractor

Considerações importantes:
  Neste projeto estamos usando Protractor com Mocha e Chai (plugins: chai e chai as promissed)

- Se for necessário rodar somente uma suíte de testes ou somente um teste específico,
alterar o "describe" ou "it", acrescentando a palavra "only" na suíte ou teste.
Exemplo: describe.only / it.only

- Se for necessário pular uma suíte de testes ou somente um teste específico,
alterar o "describe" ou "it", acrescentando a palavra "skip" na suíte ou teste.
Exemplo: describe.skip / it.skip


Para maiores informações, veja a documentação oficial das ferramentas:
* Protractor - "http://www.protractortest.org/#/"
* Mocha - "https://mochajs.org/"
* Chai - "http://chaijs.com/"
