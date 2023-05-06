<h1 align="center"> 
	 LQDI Teste 🚀  
</h1>


## :hammer: Teste

 Este é um teste feito para a empresa LQDI Digital e realizado pelo autor deste repositório para a vaga de Desenvolvedor PHP Sênior/Pleno.
 
 
 <h5>Nota: As inscrições também estão sendo salvas em Json porem cada inscrição tem seu proprio arquivo e 
	o nome de cada arquivo é o mesmo que o Código ID da inscrição.</h5>
	<h5Envio de inscrições por Email.</h5>




## 📹 Demonstração

**Cadastro de interessados**
<video src="https://user-images.githubusercontent.com/60020510/236608494-e7b80f06-c347-46e2-a53d-4ad4e33908a6.mp4"/>

**Inscrições**
<video src="https://user-images.githubusercontent.com/60020510/236608305-a06bea6d-e90d-4fed-b977-24ff11875e72.mp4"/>


**<a href="https://youtu.be/nQog__XMpnE">Vídeo Completo</a>**

## 🕸️ Baixar e Executar o projeto(Siga as instruções abaixo para execução)


**Baixar Teste**
```
$ git clone https://github.com/vandeilson01/LQDI_Teste.git
````
**Iniciar BackEnd**
```
Acessar pasta
$ cd LQDI_Teste\backend

Instalar as depedências do composer
$ composer install

Caso queira somente atualizar
$ composer update

Criando o arquivo de configurações
$ cp .env.example .env

Gerando chave do projeto
$ php artisan key:generate
```
**Banco de dados**

```
No seu banco de dados

CREATE DATABASE `laravel`
ou
CREATE DATABASE laravel
```

**No arquivo .env deve ficar assim**
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

**Gerando banco de dados e informações**
```
Tabelas e informações iniciais
$ php artisan migrate --seed

Dados de emails interessados
$ php artisan db:seed MailsSeeder

Dados de inscrições
$ php artisan db:seed RegistrationSeeder
```

**Configurar o recebimento de emails com MailTrap** 
<h4>Acesse o <a href="https://mailtrap.io/">Mailtrap</a> e crie uma conta</h4>
<img src="https://user-images.githubusercontent.com/60020510/236472535-b3263313-5768-4906-b5a5-7bb34876f24a.png">

<h4>Copie os dados de configurações e substitua no .env</h4>

**No arquivo .env deve ficar assim**
```
MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=nome
MAIL_PASSWORD=senha
MAIL_ENCRYPTION=tls
```

**Rode o BackEnd na sua maquina**
```
$ php artisan serve
```
	

**FrontEnd**
```
Acessar pasta
$ cd LQDI_Teste\frontend

Instalar depedências
$ npm install

Caso queira somente atualizar
$ npm update
```

**Rode o FrontEnd na sua maquina**
```
$ npm start

(opcional)

Rodar testes
$ npm teste

Rodar em produção
$ npm run build
```

## 🔗 Links 


**BackEnd**

```
Rotas da API

Principal: 
(get): http://localhost:8000

Interessados
(get): http://localhost:8000/mails
(post): http://localhost:8000/email/plus

Inscrições:
(get): http://localhost:8000/registrations
(post): http://localhost:8000/email/send 

```

**FrontEnd**

```
Rotas das Páginas

Home:
(get): http://localhost:3000/
ou
(get): http://localhost:3000/home

Interessados:
(get): http://localhost:3000/mails

Inscricoes:
(get): http://localhost:3000/registrations


Página 404:
(get): http://localhost:3000/*
```

## 📚 Pastas

**BackEnd**

<img height="400" src="https://user-images.githubusercontent.com/60020510/236469500-bfd8f99b-7ffa-4f37-a2f8-c06b28921333.png">

**FrontEnd**

<img height="400" src="https://user-images.githubusercontent.com/60020510/236470693-564a9abf-e8fa-406b-a046-e31beba19a18.png">

## 🚅 Telas

**Desktop**

<img src="https://user-images.githubusercontent.com/60020510/236469571-6ec75d8f-67f0-4d87-b382-a8e2a98da838.png">

**Mobile**

<img src="https://user-images.githubusercontent.com/60020510/236469564-89ba5bf3-ea3b-4380-bf10-44dd3492682d.png">


**Emails interessados**

<img height="400" src="https://user-images.githubusercontent.com/60020510/236469561-ca8e04cd-2fed-4075-8eb5-c7b81e4799be.png">

**Inscrições**

<img height="400" src="https://user-images.githubusercontent.com/60020510/236474521-a792c43e-15ba-4760-a01c-472dd72b0872.png">


## 🛠️ Tecnologias utilizadas

**🩹 Depedências**

| Depedência | Versão |
| --- | --- |
| Composer | 2.5.* |

**☕ BackEnd**

| Linguagem | Versão |
| --- | --- |
| PHP | 8.* |

| Framework | Versão |
| --- | --- |
| Laravel | 9.* |

<br/>

**🎨 FrontEnd**

| Linguagem | Versão |
| --- | --- |
| HTML | 5 |
| CSS | 3 |
| JavaScript | ES6 |

| Framework | Versão |
| --- | --- |
| ReactJs | 18.* |


 <h4>Biblioteca(s): </h4>
 
- ReactBootstrap
- Sweetalert2
- Jquery

<br/>

## 🙂 Autor

Vandeilson Correia Fernandes
