<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conta Comercial</title>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Estilos em JavaScript
            const style = document.createElement('style');
            style.textContent = `
                /* Estilização da barra de topo */
                .top-bar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background-color: #f5f5f5;
                    color: #333;
                    text-align: center;
                    font-size: 14px;
                    padding: 10px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                }

                /* Container principal */
                .container {
                    margin-top: 60px; /* Espaço para a barra fixa */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                }

                /* Input de envio */
                .input-container {
                    display: flex;
                    align-items: center;
                    border: 1px solid #ccc;
                    border-radius: 20px;
                    padding: 10px;
                    width: 100%;
                    max-width: 400px;
                    background-color: #fff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    margin-bottom: 20px; /* Espaço entre componentes */
                }

                .input-container input {
                    flex: 1;
                    border: none;
                    outline: none;
                    font-size: 16px;
                    padding: 5px;
                }

                .input-container button {
                    border: none;
                    background-color: transparent;
                    cursor: pointer;
                    font-size: 16px;
                    color: #007bff;
                }

                .input-container button:hover {
                    color: #0056b3;
                }

                /* Estilização dos botões principais */
                .button {
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 16px;
                    color: #fff;
                    background-color: #007bff;
                    border: none;
                    border-radius: 5px;
                    text-align: center;
                    text-decoration: none;
                    cursor: pointer;
                    margin: 10px;
                }

                .button:hover {
                    background-color: #0056b3;
                }

                .button.red {
                    background-color: #dc3545;
                }

                .button.red:hover {
                    background-color: #a71d2a;
                }
            `;
            document.head.appendChild(style);

            // Estrutura HTML
            const body = document.body;

            // Barra fixa no topo
            const topBar = document.createElement('div');
            topBar.className = 'top-bar';
            topBar.textContent = 'Conta Comercial';
            body.appendChild(topBar);

            // Container principal
            const container = document.createElement('div');
            container.className = 'container';
            body.appendChild(container);

            // Input de envio
            const inputContainer = document.createElement('div');
            inputContainer.className = 'input-container';

            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Escreva sua mensagem...';

            const button = document.createElement('button');
            button.textContent = 'Enviar';

            inputContainer.appendChild(input);
            inputContainer.appendChild(button);
            container.appendChild(inputContainer);

            // Botões principais
            const configButton = document.createElement('a');
            configButton.className = 'button';
            configButton.href = '#';
            configButton.textContent = 'Configurações';

            const deleteButton = document.createElement('a');
            deleteButton.className = 'button red';
            deleteButton.href = '#';
            deleteButton.textContent = 'Excluir Conta';

            container.appendChild(configButton);
            container.appendChild(deleteButton);
        });
    </script>
</head>
<body>
</body>
</html>
