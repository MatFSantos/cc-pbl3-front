# Informações de instalação e uso

Esse *READ ME* informa o que deve ser usado e como deve ser usado para quê a aplicação interface funcione corretamente.

### Dependências da interface

A interface foi construída com ***Javascript***, utilizando o *framework* *front-end* ***React.js***. Logo, antes de tudo é necessário ter o ***Node.js*** na versão 14.17.6 (versão utilizada), *software* que permite a execução de códigos ***javascript*** fora do *browser* (navegador web). Com o ***Node.js*** você poderá fazer a instalação das dependências da interface.

Após instalar o  ***Node.js*** e baixar o repositório, execute o comando ``npm i`` ou ``npm install`` na pasta raiz do projeto e espere o processo terminar. Após isso suas dependências foram instaladas.

### Rodando a interface

Após todas as dependências instaladas, é a hora de rodar a interface. Para isso, na pasta raiz execute os comandos: 

``npm run build`` e ``npm run start``

O primeiro monta os arquivos da interface, já o segundo executa o servidor e inicia a interface. Por fim, é só abrir o *front-end* no seu *browser*, no endereço local, na porta 3000 (porta padrão) ``localhost:3000``.

#### adendo

É importante informar que, caso o endereço da *API* seja alterado, basta acessar o arquivo ``/src/data/hooks/pages/useIndex.page.ts`` e alterar os endereços das companhias no inicio do arquivo.

 Após isso basta refazer os passos da sessão anterior

