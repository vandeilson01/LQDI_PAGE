<h1 align="center"> 
	 LQDI Teste 🚀  
</h1>


## :hammer: Teste

 Este é o teste feito pela empresa LQDI Digital e realizado pelo autor deste repositório para a vaga de
 desenvolvedor Desenvolvedor PHP Sênior/Pleno.
  
## 🚗 Executar o projeto(Siga as instruções abaixo para execução)

```
°
$ git clone project.git

**°...**
$ backend 
$ cd\back
```


//instalar as depedencias do composer

```
°
$ composer install

° caso queira somente atualizar
$ composer update

° crie o arquivo de configurações
$ cp .env.example .env

° gerando chave do projeto
$ php artisan key:generate
```


```

//criar banco de dados

//no seu banco de dados

CREATE DATABASE `laravel`
ou
CREATE DATABASE laravel
```
```
//no arquivo de configurção .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```


```
**voltando ao backend**
$ php artisan migrate --seed

$ php artisan db:seed MailsSeeder

$ php artisan db:seed RegistrationSeeder

```

//configurar o recebebimento de emails 
//MailTrap 

////no arquivo de configurção .env
MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=nome
MAIL_PASSWORD=senha
MAIL_ENCRYPTION=tls
```

```
**°...**
$ php artisan serve

```


**links**

```
http://localhost:8000

//rotas da api 
//interessados
http://localhost:8000/mails :get
http://localhost:8000/email/plus :post

//inscricoes
http://localhost:8000/registrations :get
http://localhost:8000/email/send :post
```



**Frontend**
```
$ cd ..
$ cd /front
**instalar depedências**
$ npm install

**iniciar front end do projeto**
$ npm start

**(opcional)**
**Rodar testes**
$ npm teste

**Rodar em produção**
$ npm run build
```


```

**Links**

http://localhost:3000/
ou
http://localhost:3000/home

//interessados
http://localhost:3000/mails

//inscricoes
http://localhost:3000/registrations


//pagina não encontrada
http://localhost:3000/*

```


<h3>Telas</h3>

**Página principal**
<img src="https://user-images.githubusercontent.com/60020510/193612061-92155fbc-28b0-4b6d-b19f-cfd0c3f66629.png">
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

//demostracao

https://youtu.be/wbUN55Y-QBg


## 🙂 Autor

Vandeilson Correia Fernandes