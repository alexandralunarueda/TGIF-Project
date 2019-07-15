
var members= data.results[0].members;
console.log(members);

let table=document.getElementById("mytable2");

for(let i= 0; i< members.length;i++){
let row = document.createElement('tr');
row.insertCell().textContent = members[i].first_name;
row.insertCell().textContent=members[i].party;
row.insertCell().textContent=members[i].state;
row.insertCell().textContent=members[i].seniority;
row.insertCell().textContent=members[i].votes;
table.append(row);
}
