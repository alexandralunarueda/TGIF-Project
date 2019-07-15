
// console.log(data.results[0].members);
// var miembros = data.results[0].members;

// var myjson=JSON.stringify(data);
// // document.getElementById("mitabla").innerHTML = myjson

// function createTable(senate) {
//  let tbody = document.getElementById("mytable");

//  for (let i = 0; i < miembros.length; i++) {

//      let tr = document.createElement("tr");

//      let name = document.createElement("td");
//      name.textContent = miembros[i].first_name + " " + miembros[i].last_name + miembros[i].middle_name;

//      let party = document.createElement("td");
//      party.textContent = miembros[i].party;

//      let state = document.createElement("td");
//      state.textContent = miembros[i].state;

//      let seniority = document.createElement("td");
//      seniority.textContent = miembros[i].seniority;

//      let votes = document.createElement("td");
//      votes.textContent = miembros[i].votes_with_party_pct;

//      tr.append(name, party, state, seniority, votes);

//      tbody.appendChild(tr);
//  }

// }
// createTable();



var members= data.results[0].members;
    console.log(members);

let table=document.getElementById("mytable");

for(let i= 0; i< members.length;i++){
    let row = document.createElement('tr');
    row.insertCell().textContent = members[i].first_name;
    row.insertCell().textContent=members[i].party;
    row.insertCell().textContent=members[i].state;
    row.insertCell().textContent=members[i].seniority;
    row.insertCell().textContent=members[i].votes;
    table.append(row);
}




// (local function)(member: any): void

// members.forEach(function(member){
//     let row =document.createElement("tr");
//     row.insertCell().textContent=member.first_name;
//     row.insertCell().textContent=member.party;
//     row.insertCell().textContent=member.state;
//     row.insertCell().textContent=member.sseniority;
// table.append(row);
// }
