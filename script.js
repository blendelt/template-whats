function criarBarra(var_nome, var_avatar) {
    // Verificar se o elemento pai existe
    const elementoPai = document.getElementsByTagName("typebot-standard")[0]?.shadowRoot?.querySelector('.typebot-container');
    if (!elementoPai) {
        console.error("Elemento pai não encontrado!");
        return;
    }

    // Criar a barra do usuário
    const userBar = document.createElement("div");
    userBar.className = "user-bar";
    userBar.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f1f1f1;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    `;

    // Botão de voltar
    const backButton = document.createElement("button");
    backButton.innerText = "Voltar";
    backButton.style.cssText = `
        border: none;
        background-color: transparent;
        color: #007bff;
        cursor: pointer;
        font-size: 16px;
    `;
    backButton.addEventListener("click", () => {
        window.location.href = "https://www.google.com"; // Redirecionar para o Google
    });

    // Avatar
    const avatar = document.createElement("div");
    avatar.style.cssText = `
        display: flex;
        align-items: center;
    `;
    avatar.innerHTML = `<img src="${var_avatar}" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">`;

    // Nome e Status
    const name = document.createElement("div");
    name.innerHTML = `
        <strong>${var_nome}</strong><br>
        <span style="font-size: 12px; color: gray;">Online</span>
    `;

    avatar.appendChild(name);

    // Ações (Exemplo: Telefone e Anexo)
    const actions = document.createElement("div");
    actions.style.cssText = `
        display: flex;
        gap: 10px;
    `;
    actions.innerHTML = `
        <button style="border: none; background-color: transparent; cursor: pointer;">
            📞
        </button>
        <button style="border: none; background-color: transparent; cursor: pointer;">
            📷
        </button>
    `;

    // Montar a barra
    userBar.appendChild(backButton);
    userBar.appendChild(avatar);
    userBar.appendChild(actions);

    // Adicionar ao topo do container
    elementoPai.prepend(userBar);
}
