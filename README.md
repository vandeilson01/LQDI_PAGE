<h1 align="center"> 
	 LQDI Teste 🚀  
</h1>


## :hammer: Teste

 Este é o teste feito pela empresa LQDI Digital e realizado pelo autor deste repositório para a vaga de
 desenvolvedor Desenvolvedor PHP Sênior/Pleno.
 
 
 <h5>Nota: As inscrições também estão sendo salvas em Json porem casa inscrião tem seu proprio aqruivo e 
	o nome de cada arquivo é o mesmo que o ID da inscrição</h5>

**<a href='https://youtu.be/wbUN55Y-QBg'>Demostração</a>**

## 🕸️ Baixar e Executar o projeto(Siga as instruções abaixo para execução)

**° Baixar Teste**
```
$ git clone https://github.com/vandeilson01/LQDI_Teste
````
**°Iniciar Backend**
```
Acessar pasta
$ cd\backend

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

**Configurar o recebebimento de emails com MailTrap** 
<h4>Acesse o <a href="https://mailtrap.io/">Mailtrap</a> e crie uma conta</h4>
<img src="">

<h4>Copie os dados de congiruações e substitua no .env</h4>

**No arquivo .env deve ficar assim**
```
MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=nome
MAIL_PASSWORD=senha
MAIL_ENCRYPTION=tls
```

**Rode o Backend na sua maquina**
```
$ php artisan serve
```
	

**Frontend**
```
Acessar pasta
$ cd ..
$ cd /frontend

Instalar depedências
$ npm install
```

**Rode o Frontend na sua maquina**
```
$ npm start

(opcional)

Rodar testes
$ npm teste

Rodar em produção
$ npm run build
```

## 🔗 Links 


**Backend**

```
Rotas da API

Principal: 
(get): http://localhost:8000

Iinteressados
(get): http://localhost:8000/mails
(post): http://localhost:8000/email/plus

Inscrições:
(get): http://localhost:8000/registrations
(post): http://localhost:8000/email/send 

```

**Frontend**

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


**Backend**
<img src="https://user-images.githubusercontent.com/60020510/193612061-92155fbc-28b0-4b6d-b19f-cfd0c3f66629.png">

**Frontend**
<img src="https://user-images.githubusercontent.com/60020510/193612061-92155fbc-28b0-4b6d-b19f-cfd0c3f66629.png">

## 🚅 Telas

**Desktop**
<img src="https://user-images.githubusercontent.com/60020510/193612061-92155fbc-28b0-4b6d-b19f-cfd0c3f66629.png">

**Mobile**
<img src="https://user-images.githubusercontent.com/60020510/193612097-35104bb2-b400-4ea0-bafe-c59b4eb302d8.png">


**Ação Formulario de Inscrições**
<img src="https://user-images.githubusercontent.com/60020510/193612097-35104bb2-b400-4ea0-bafe-c59b4eb302d8.png">
<img src="https://user-images.githubusercontent.com/60020510/193612097-35104bb2-b400-4ea0-bafe-c59b4eb302d8.png">




## 🛠️ Tecnologias utilizadas

**🩹 Depedências**

| Depedência | Versão |
| --- | --- |
| Composer | 2.5.* |

**☕ Back end**

| Linguagem | Versão |
| --- | --- |
| PHP | 8.* |

| Framework | Versão |
| --- | --- |
| Laravel | 9.* |

<br/>

**🎨 Front End**

| Linguagem | Versão |
| --- | --- |
| HTML | 5 |
| CSS | 3 |
| JavaScript | ES6 |

| Framework | Versão |
| --- | --- |
| ReactJs | 18.* |


 <h4>Biblioteca(s): </h4>
 
- RectBootstrap
- Sweetalert2
- Jquery

<br/>

## 🙂 Autor

Vandeilson Correia Fernandes
