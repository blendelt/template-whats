// Adicionando o link do CSS
const linkCss = document.createElement("link");
linkCss.rel = "stylesheet";
linkCss.href = "https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css";
document.head.appendChild(linkCss);

// Estilos CSS atualizados
const css = `
  .hide { display: none!important; }
  typebot-standard { position: relative; z-index: 9999; }
  #__next { position: relative; z-index: 9999; }
  .user-bar {
    width: 100%;
    height: 55px;
    background: #005e54;
    color: #fff;
    padding: 0;
    font-size: 24px;
    position: fixed;
    z-index: 99999;
    display: block;
    top: 0;
  }
  .user-bar:after {
    content: "";
    display: table;
    clear: both;
  }
  .user-bar div {
    float: left;
    transform: translateY(-50%);
    position: relative;
    top: 50%;
    margin-left: 10px;
  }
  .user-bar .actions {
    float: right;
    margin: 0 0 0 20px;
  }
  .user-bar .actions.more {
    margin: 0 12px 0 32px;
  }
  .user-bar .actions.attachment {
    margin: 0 0 0 30px;
  }
  .user-bar .actions.attachment i {
    display: block;
    transform: rotate(-45deg);
  }
  .user-bar .avatar {
    margin: 0 0 0 5px;
    width: 36px;
    height: 36px;
  }
  .user-bar .avatar img {
    border-radius: 50%;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .user-bar .name {
    font-size: 17px;
    font-weight: 600;
    text-overflow: ellipsis;
    letter-spacing: 0.3px;
    margin: 0 0 0 8px;
    overflow: hidden;
    white-space: nowrap;
    width: 150px;
  }
  .user-bar .status {
    display: block;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0;
  }
  .typebot-input .typebot-button {
    content: "";
    background: rgba(0, 138, 134, 1);
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    font-size: 0px;
  }
`;

// Verifica se o estilo já foi adicionado, senão, adiciona-o ao shadow DOM do typebot-standard
var cssId = 'myCss';  
if (!document.getElementById(cssId)) {
  var head = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
  var styleSheet = document.createElement("style");
  styleSheet.id = cssId;
  styleSheet.type = "text/css";
  styleSheet.innerText = css;
  head.appendChild(styleSheet);
}

// Localiza o container principal do Typebot
var elementoPai = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');

// Criação da barra de usuário
var userBar = document.createElement("div");
userBar.className = "user-bar";

// Botão "Voltar"
var backButton = document.createElement("div");
backButton.className = "back";
backButton.innerHTML = `<i class="zmdi zmdi-arrow-left"></i>`;  // Alterado para usar o ícone do material design

// Avatar do usuário
var avatar = document.createElement("div");
avatar.className = "avatar";
avatar.innerHTML = '<img src="'+var_avatar+'">';

// Criação do status que será exibido abaixo do nome do usuário
var varDivNameAndStatus = document.createElement("div");
varDivNameAndStatus.className = "name-status-div";

// Nome do usuário
var varName = document.createElement("div");
varName.className = "name";
varName.innerHTML = `${var_nome}`;

// Status
var varStatus = document.createElement("span");
varStatus.className = "status";

// Botões de ações (chamada e vídeo)
var phoneAction = document.createElement("div");
phoneAction.className = "actions phone-action";
phoneAction.innerHTML = `<i class="zmdi zmdi-phone"></i>`; // Alterado para usar o ícone do material design

var attachmentAction = document.createElement("div");
attachmentAction.className = "actions cam-action";
attachmentAction.innerHTML = `<i class="zmdi zmdi-camera"></i>`; // Alterado para usar o ícone do material design

var moretAction = document.createElement("div");
moretAction.className = "actions more-action";
moretAction.innerHTML = `<i class="zmdi zmdi-more-vert"></i>`; // Alterado para usar o ícone do material design

// Adiciona os componentes à barra de usuário
userBar.appendChild(backButton);
userBar.appendChild(avatar);
userBar.appendChild(varDivNameAndStatus);
userBar.appendChild(phoneAction);
userBar.appendChild(attachmentAction);
userBar.appendChild(moretAction);

// Adiciona a barra ao topo do container
if (elementoPai) {
  elementoPai.prepend(userBar);
}

// Verifica o status de digitação e atualiza o status
const botBody = elementoPai;
const status = varStatus;
setInterval(() => {
  const isTyping = botBody.querySelector('.bubble1');
  const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
  const inputContainer = botBody.querySelector('.typebot-input-container');
  if (inputContainer) {
    inputContainer.style.width = botBody.offsetWidth + "px";
  }

  const inputForm = botBody.querySelector('.typebot-input-form');
  if (inputForm) {
    inputForm.classList.remove("max-w-[350px]");
  }

  if (isTyping && sibling?.src) {
    status.innerText = 'gravando áudio...';
  } else if (isTyping) {
    status.innerText = 'digitando...';
  } else {
    status.innerText = 'online';
  }
}, 100);
