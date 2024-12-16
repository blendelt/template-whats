function criarBarra(var_nome, var_avatar) {

  // Estilos CSS embutidos diretamente no JavaScript
  const css = `
    .typebot-chat-view {
      padding-top: 70px;
      gap: 20px; /* Ajusta o espaço entre as mensagens dentro do chat */
    }

    div > div.typebot-chat-view.scroll-smooth.gap-2 > div > div > div.flex.flex-col.flex-1.gap-2 > div {
      margin-top: 20px; /* Espaço entre as mensagens */
    }

    .typebot-host-bubble {
      padding-right: 50px;
      height: calc(100% + 0px);
      margin-bottom: 15px; /* Ajusta o espaço entre as bolhas de mensagens */
    }

    .typebot-guest-bubble {
      position: relative;
      border-radius: 5px 0 5px 5px;
      margin-bottom: 15px; /* Ajusta o espaço entre as bolhas de mensagens */
    }

    /* Outras regras de estilo para ícones, bordas, etc. */
    .timeNow {
      animation: 300ms fadeIn;
      animation-fill-mode: forwards;
      visibility: hidden;
    }

    @keyframes fadeIn {
      99% { visibility: hidden; }
      100% { visibility: visible; }
    }

    /* Ajustes nos ícones e no botão de envio */
    .typebot-input-container {
      position: fixed;
      bottom: 10px;
      right: 15px;
      height: 50px;
    }
    .typebot-input-form .text-input {
      border-radius: 40px !important;
      height: 50px;
      z-index: 999 !important;
    }
    .typebot-input-form .typebot-button {
      content: "";
      background: rgba(0, 138, 134, 1);
      border-radius: 30px !important;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border: none;
      font-size: 0px;
      color: transparent;
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

  // Remove o scroll no ios
  const bodyType = document.querySelector('body');
  let scrollPosition = 0;
  scrollPosition = window.pageYOffset;
  bodyType.style.overflow = 'hidden';
  bodyType.style.position = 'fixed';
  bodyType.style.top = `-${scrollPosition}px`;
  bodyType.style.width = '100%';

  // Localiza o container principal do Typebot
  var elementoPai = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');

  // Criação da barra de usuário (similar à do WhatsApp)
  var userBar = document.createElement("div");
  userBar.className = "user-bar";

  // Botão "Voltar"
  var backButton = document.createElement("div");
  backButton.className = "back";
  backButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
  </svg>`;

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
  varName.innerHTML = `<div style="display: flex;">${var_nome}<span data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span></div>`;

  // Status
  var varStatus = document.createElement("span");
  varStatus.className = "status";

  varDivNameAndStatus.appendChild(varName);
  varDivNameAndStatus.appendChild(varStatus);

  // Botões de ações (chamada e vídeo)
  var phoneAction = document.createElement("div");
  phoneAction.className = "actions phone-action";
  phoneAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>`;

  var attachmentAction = document.createElement("div");
  attachmentAction.className = "actions cam-action";
  attachmentAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/></svg>`;

  var moretAction = document.createElement("div");
  moretAction.className = "actions more-action";
  moretAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160ZM480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400ZM480-640q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>`;

  // Adiciona as partes da barra ao elemento pai
  userBar.appendChild(backButton);
  userBar.appendChild(avatar);
  userBar.appendChild(varDivNameAndStatus);
  userBar.appendChild(phoneAction);
  userBar.appendChild(attachmentAction);
  userBar.appendChild(moretAction);

  // Insere a barra de usuário no topo
  elementoPai.insertBefore(userBar, elementoPai.firstChild);
}

