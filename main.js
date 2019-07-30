var members= data.results[0].members;
    console.log(members);

populateStates();


// document.getElementById("republicanCheckbox").addEventListener("click", test);
// document.getElementById("democratCheckbox").addEventListener("click", test);
// document.getElementById("independentCheckbox").addEventListener("click", test);
// document.getElementById("stateSelector").addEventListener("change", test);
   


    

    
//  function test(){

    

//     let checkrep = document.getElementById("republicanCheckbox");
//     let checkdem = document.getElementById("democratCheckbox");
//     let checkind = document.getElementById("independentCheckbox");
//     let currentState = document.getElementById("stateSelector").value;
    
//     let checkseleccionados = [];
//     for (let i= 0; i< members.length; i++){
//         if(checkrep.checked && members[i].party=="R" && (currentState==members[i].state || 
//         currentState=="All")){
//         checkseleccionados.push(members[i]);
//     }
//     if(checkdem.checked && members[i].party=="D" && (currentState==members[i].state || 
//         currentState=="All")){
//         checkseleccionados.push(members[i]);
//     }
//     if(checkind.checked && members[i].party=="I" && (currentState==members[i].state || 
//     currentState=="All")){
//         checkseleccionados.push(members[i]);
//     }
    
//     if(!checkrep.checked && !checkdem.checked && !checkind.checked){
//         checkseleccionados=members;
//     }
   


// console.log(checkseleccionados);
// creartablapp(checkseleccionados);
//  }
// }

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



/*hasta aqui*/

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





// // (local function)(member: any): void

// // members.forEach(function(member){
// //     let row =document.createElement("tr");
// //     row.insertCell().textContent=member.first_name;
// //     row.insertCell().textContent=member.party;
// //     row.insertCell().textContent=member.state;
// //     row.insertCell().textContent=member.sseniority;
// // table.append(row);
// // }
