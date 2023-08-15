document.addEventListener("DOMContentLoaded", function () {
    /*---- table data -----*/
    const data = [
        { subTitle: "Chapter Assignment 2", time: "4", title: "Please check this file…", name: "Emily Wang" },
        { subTitle: "Chapter Assignment 1", time: "12", title: "My Homework", name: "David Xu" },
        { subTitle: "Final Assignment", time: "18", title: "Have a problem with this…", name: "Tony Wei" },
        { subTitle: "Final Assignment", time: "19", title: "Did I do it right?", name: "Christina Lin" },
    ];
    
    const listItems = data.map(item => {
        const activeClass = (item === data[0]) ? "active" : "";
        
        return `
            <li class="list-group-item list-group-item-action p-12 ${activeClass}">
                <div class="d-flex justify-content-between mb-1">
                    <h5 class="fs-12 mb-0">${item.subTitle}</h5>
                    <span class="fs-12">${item.time} hrs ago</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <h4 class="fs-6 fw-bold mb-0">${item.title}</h4>
                    <span class="fs-12 text-gray600">${item.name}</span>
                </div>
            </li>
        `;
    });
    
    const list = document.getElementById("assignment-list");
    list.innerHTML = listItems.join("");
});