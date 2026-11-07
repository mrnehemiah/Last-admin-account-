const users=[
{name:'John',role:'Buyer',status:'Active'},
{name:'Amina',role:'Seller',status:'Suspended'}
];
const tbody=document.getElementById('usersTable');
users.forEach(u=>{
const tr=document.createElement('tr');
tr.innerHTML=`<td>${u.name}</td><td>${u.role}</td><td>${u.status}</td><td>
<button>View</button><button>Suspend</button><button>Activate</button>
<button>Delete</button><button>Restore</button></td>`;
tbody.appendChild(tr);
});