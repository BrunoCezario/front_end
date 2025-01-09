// Função para adicionar itens ao localStorage
function addItem() {
        const newItem = {
            nome: 'Item ' + new Date().toLocaleTimeString(),
            descricao: 'Bem vindo a USS Enterprise recruta ' + Math.floor(Math.random() * 100)
        };
        // O Math.floor()método estático sempre arredonda para baixo e 
        // retorna o maior inteiro menor ou igual a um determinado número.

        // O Math.random()método estático retorna um número pseudoaleatório de ponto
        //  flutuante   que é maior ou igual a 0 e menor que 1, com distribuição 
        //  aproximadamente uniforme sobre esse intervalo — que você 
        //  pode então escalar para o seu intervalo desejado. 

        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));

        exibirItens();
    }

    // Função para exibir a lista
    function exibirItens() {
        const itemList = document.getElementById('itemList');
        let items = JSON.parse(localStorage.getItem('items')) || [];
        
        itemList.innerHTML = '';
        
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `(${index + 1}) Nome: ${item.nome}, Descrição: ${item.descricao}`;
            itemList.appendChild(li);
        });
    }

    // Função para limpar a lista do localStorage
    function clearList() {
        localStorage.removeItem('items'); // Remove a lista do localStorage
        exibirItens(); // Atualiza a interface para refletir as alterações
    }

    // Eventos
    document.getElementById('addItemButton').addEventListener('click', addItem);
    document.getElementById('clearListButton').addEventListener('click', clearList);

    // Exibir itens ao carregar a página
    displayItems();
