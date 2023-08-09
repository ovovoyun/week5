import"./ckeditor-34aa5aca.js";document.addEventListener("DOMContentLoaded",function(){const a=[{id:1,name:"Emir Wicks",email:"emir.wicks@mail.com",verified:"Yes"},{id:2,name:"Zaina Goldsmith",email:"zaina.goldsmith@mail.com",verified:"Yes"},{id:3,name:"Mahima Lopez",email:"mahima.lopez@mail.com",verified:"Yes"},{id:4,name:"Pharrell Murray",email:"pharrell.murray@mail.com",verified:"Yes"},{id:5,name:"Annika Mcbride",email:"annika.mcbride@mail.com",verified:"Yes"},{id:6,name:"Fatimah Clark",email:"fatimah.clark@mail.com",verified:"Yes"},{id:7,name:"Klaudia Rhodes",email:"klaudia.rhodes@mail.com",verified:"Yes"},{id:8,name:"Tillie Lucero",email:"tillie.lucero@mail.com",verified:"Yes"},{id:9,name:"Sabrina Stephenson",email:"sabrina.stephenson@mail.com",verified:"Yes"},{id:10,name:"Annie Smith",email:"annie.smith@mail.com",verified:"Yes"}],t=document.getElementById("tbody");a.forEach(e=>{const i=document.createElement("tr");i.innerHTML=`
            <td>#${e.id}</td>
            <td>${e.name}</td>
            <td>${e.email}</td>
            <td>${e.verified}</td>
            <td>
                <span class="material-icons me-4 pointer" data-bs-toggle="modal" data-bs-target="#viewModal">visibility</span>
                <span class="material-icons pointer" data-bs-toggle="modal" data-bs-target="#editModal">edit</span>
            </td>
        `,t.appendChild(i)});const d=document.getElementById("table__idSort"),n=document.getElementById("table__downIcon"),m=document.getElementById("table__upIcon");d.addEventListener("click",function(){m.classList.toggle("d-none"),n.classList.toggle("d-none")})});
