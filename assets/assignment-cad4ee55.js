import"./dataTables.bootstrap5-2a2d4a4a.js";document.addEventListener("DOMContentLoaded",function(){const e=[{subTitle:"Chapter Assignment 2",time:"4",title:"Please check this file…",name:"Emily Wang"},{subTitle:"Chapter Assignment 1",time:"12",title:"My Homework",name:"David Xu"},{subTitle:"Final Assignment",time:"18",title:"Have a problem with this…",name:"Tony Wei"},{subTitle:"Final Assignment",time:"19",title:"Did I do it right?",name:"Christina Lin"}],s=e.map(t=>`
            <li class="list-group-item p-12 ${t===e[0]?"active":""}">
                <div class="d-flex justify-content-between mb-1">
                    <h5 class="fs-12 mb-0">${t.subTitle}</h5>
                    <span class="fs-12">${t.time} hrs ago</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <h4 class="fs-6 fw-bold mb-0">${t.title}</h4>
                    <span class="fs-12 text-gray600">${t.name}</span>
                </div>
            </li>
        `),i=document.getElementById("assignment-list");i.innerHTML=s.join("")});
