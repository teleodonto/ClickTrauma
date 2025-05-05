# ClickTrauma

O **ClickTrauma** é um aplicativo educativo desenvolvido na Faculdade de Odontologia da UERJ para auxiliar profissionais e estudantes de odontologia no diagnóstico, manejo e prevenção de traumatismos dentários em dentes decíduos.

## 📋 Objetivo do Aplicativo

O objetivo principal é fornecer informações claras e acessíveis sobre trauma dental, permitindo:  
✅ Aprendizado interativo com quizzes.  
✅ Consulta rápida a informações diagnósticas e condutas.  
✅ Uso offline, sem necessidade de backend ativo.

O app foi inicialmente desenvolvido em 2016 como projeto da mestranda **Maria Berry**, orientada pela Profa. Dra. Maria Isabel de Castro de Souza, para ser distribuído em dispositivos iOS e Android.

## 🏗 Tecnologias Utilizadas

- **Ionic 1.x (AngularJS)** → Framework para desenvolvimento híbrido mobile.  
- **Cordova** → Empacotamento para dispositivos móveis.  
- **Bower** → Gerenciamento de dependências front-end (bibliotecas Angular, Ionic).  
- **Local JSON** → Armazenamento de dados de perguntas e usuários, sem necessidade de backend.  
- **PWA Adaptation** → Manifesto + Service Worker para transformar o app em um Progressive Web App moderno.

## 🛠 Funcionalidades do Aplicativo

1. **Conceito de Traumatismo** → Explicações sobre o que é traumatismo dentário.  
2. **Como Diagnosticar** → Orientações para identificar os tipos de trauma.  
3. **Condutas Clínicas** → Procedimentos recomendados para tratamento.  
4. **Sequelas** → Informações sobre as consequências possíveis.  
5. **Como Evitar** → Dicas de prevenção.  
6. **Teste seus Conhecimentos** → Quiz interativo com perguntas e respostas.  
7. **Saiba Mais** → Recursos e referências adicionais.

## 🏛 Estrutura Técnica

- Diretório principal:
  - `www/` → Contém o app Ionic.
    - `backend-prototipo/perguntas.json` → Banco local de perguntas.
    - `backend-prototipo/usuarios.json` → Usuários e senhas.
    - `templates/` → Telas HTML.
    - `js/` → Código AngularJS (app.js, controllers.js, etc.).
    - `lib/` → Dependências externas instaladas via Bower.
    - `resources/` → Ícones e splash screens.
- Manifesto (`manifest.json`) e Service Worker (`service-worker.js`) adicionados para PWA.
- Rodando localmente com `http-server`:
  ```
  npm install -g http-server
  http-server www -p 8080
  ```
