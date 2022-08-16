window.addEventListener('DOMContentLoaded', event => {
   
    const dtbTipoTurismo = document.getElementById('dtbTipoTurismo');
    if (dtbTipoTurismo) {
        new simpleDatatables.DataTable(dtbTipoTurismo)
    }
    const dtbTipoAtividade = document.getElementById('dtbTipoAtividade');
    if (dtbTipoAtividade) {
        new simpleDatatables.DataTable(dtbTipoAtividade)
    }
    
});

const dataTableTipoTurismo = new simpleDatatables.DataTable("#dtbTipoTurismo", {
    labels: {
        placeholder: "Buscar...",
        perPage: "Exibir {select} tipos",
        noRows: "Nenhum tipo de turismo cadastrado",
        noResults: "Nenhum tipo de turismo registro encontrado na busca ",
        info: "({page} de {pages})",
    }
});

const dataTableTipoAtividade = new simpleDatatables.DataTable("#dtbTipoAtividade", {
    labels: {
        placeholder: "Buscar ...",
        perPage: "Exibir {select} tipos",
        noRows: "Nenhum tipo de atividade cadastrado",
        noResults: "Nenhum tipo de atividade encontrado na busca",
        info: "({page} de {pages})",
    }
});

