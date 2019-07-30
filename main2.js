
// var members= data.results[0].members;
// console.log(members);

// let table=document.getElementById("mytable2");

// for(let i= 0; i< members.length;i++){
// let row = document.createElement('tr');
// row.insertCell().textContent = members[i].first_name;
// row.insertCell().textContent=members[i].party;
// row.insertCell().textContent=members[i].state;
// row.insertCell().textContent=members[i].seniority;
// row.insertCell().textContent=members[i].votes;
// table.append(row);
// }

var members= data.results[0].members;
    console.log(members);

populateStates();

document.getElementById("republicanCheckbox").addEventListener("click", test);
document.getElementById("democratCheckbox").addEventListener("click", test);
document.getElementById("independentCheckbox").addEventListener("click", test);
document.getElementById("stateSelector").addEventListener("change", test);

function test() {
    let checkboxD = document.getElementById("democratCheckbox");
   
    let checkboxR = document.getElementById("republicanCheckbox");
  
    let checkboxI = document.getElementById("independentCheckbox");
   
    
    let filteredmembers = [];
    let finalFilteredMembers = [];
    let currentState = document.getElementById("stateSelector").value;
    if (!checkboxD.checked && !checkboxR.checked && !checkboxI.checked) {
      filteredmembers = Array.from(members);
    } else {
      for (let j = 0; j < members.length; j++) {
        if (checkboxD.checked && members[j].party == "D") {
          filteredmembers.push(members[j]);
        }
        if (checkboxR.checked && members[j].party == "R") {
          filteredmembers.push(members[j]);
        }
        if (checkboxI.checked && members[j].party == "I") {
          filteredmembers.push(members[j]);
        }
      }
    }
    if(currentState == "All") {
      creartablapp(filteredmembers)
    }
    else {
      for(var i = 0; i < filteredmembers.length; i++) {
        if(currentState == filteredmembers[i].state) {
          finalFilteredMembers.push(filteredmembers[i])
        }
      }
      creartablapp(finalFilteredMembers)
    }
  }


function creartablapp(array_members){
let table=document.getElementById("mytable");
mytable.innerHTML = '';
for(let i= 0; i< array_members.length;i++){
    let row = document.createElement('tr');
    row.insertCell().textContent = array_members[i].first_name;
    row.insertCell().textContent=array_members[i].party;
    row.insertCell().textContent=array_members[i].state;
    row.insertCell().textContent=array_members[i].seniority;
    row.insertCell().textContent=array_members[i].votes;
    table.append(row);
}
}
creartablapp(members);

function populateStates(){
    let states =[];
    for (let i=0; i < members.length; i++){
        if(!states.includes(members[i].state)){
            states.push(members[i].state)
        }
    }
    states.sort();
    for (let i=0; i < states.length; i++){
        let opcion= document.createElement("option");
        opcion.innerHTML=states[i];
        document.getElementById("stateSelector").append(opcion);
    }
}
