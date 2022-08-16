window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple)
    }
    
});

const dataTable = new simpleDatatables.DataTable("#datatablesSimple", {
    labels: {
        placeholder: "Buscar...",
        perPage: "Exibir {select} registros",
        noRows: "Nenhum registro cadastrado",
        noResults: "Nenhum registro encontrado na busca",
        info: "({page} de {pages})",
    }
});