document.addEventListener("DOMContentLoaded", function () {
    /*---- table data -----*/
    const data = [
        { id: 1, name: "Emir Wicks", email: "emir.wicks@mail.com", verified: "Yes" },
        { id: 2, name: "Zaina Goldsmith", email: "zaina.goldsmith@mail.com", verified: "Yes" },
        { id: 3, name: "Mahima Lopez", email: "mahima.lopez@mail.com", verified: "Yes" },
        { id: 4, name: "Pharrell Murray", email: "pharrell.murray@mail.com", verified: "Yes" },
        { id: 5, name: "Annika Mcbride", email: "annika.mcbride@mail.com", verified: "Yes" },
        { id: 6, name: "Fatimah Clark", email: "fatimah.clark@mail.com", verified: "Yes" },
        { id: 7, name: "Klaudia Rhodes", email: "klaudia.rhodes@mail.com", verified: "Yes" },
        { id: 8, name: "Tillie Lucero", email: "tillie.lucero@mail.com", verified: "Yes" },
        { id: 9, name: "Sabrina Stephenson", email: "sabrina.stephenson@mail.com", verified: "Yes" },
        { id: 10, name: "Annie Smith", email: "annie.smith@mail.com", verified: "Yes" },
    ];
    
    const tbody = document.getElementById("tbody");
    
    data.forEach(item => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td>#${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.verified}</td>
            <td>
                <span class="material-icons me-4 pointer" data-bs-toggle="modal" data-bs-target="#viewModal">visibility</span>
                <span class="material-icons pointer" data-bs-toggle="modal" data-bs-target="#editModal">edit</span>
            </td>
        `;
        tbody.appendChild(tableRow);
    });

    
    /*---- table Id sortIcon -----*/
    const table__idSort = document.getElementById("table__idSort");
    const table__downIcon = document.getElementById("table__downIcon");
    const table__upIcon = document.getElementById("table__upIcon");
    table__idSort.addEventListener("click", function(){
        table__upIcon.classList.toggle("d-none");
        table__downIcon.classList.toggle("d-none");
    })

    /*---- viewModal arrowIcon-----*/
    const viewModal__arrowBtn = document.getElementById("viewModal__arrowBtn");
    const viewModal__upIcon = document.getElementById("viewModal__upIcon");
    const viewModal__downIcon = document.getElementById("viewModal__downIcon");
    const viewModal__saveBlock = document.getElementById("viewModal__saveBlock");

    viewModal__arrowBtn.addEventListener("click", function () {
        viewModal__upIcon.classList.toggle("d-none");
        viewModal__downIcon.classList.toggle("d-none");
        viewModal__saveBlock.classList.toggle("d-none");
    });
});