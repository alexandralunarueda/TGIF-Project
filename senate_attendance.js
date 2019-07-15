
var members= data.results[0].members;
console.log(members);



let statistics = {
    reps: 0,
    rep_votes:0,
    dems: 0,
    dems_votes:0,
    ind: 0,
    ind_votes:0,

};

function calcStatsc(){

members.forEach(member =>{
    if(member.party == 'R'){
        statistics.reps++;
        statistics.rep_votes +=member.votes_with_party_pct;
    }
    if(member.party =='D'){
        statistics.dems++;
        statistics.dems_votes +=member.votes_with_party_pct;

    }
    if(member.party =='I'){
        statistics.ind++;
        statistics.ind_votes +=member.votes_with_party_pct;

    }
});

statistics.totalAvgR = statistics.rep_votes/statistics.reps;
statistics.totalAvgD = statistics.dems/statistics.dems;
statistics.totalAvgI = statistics.ind_votes/statistics.ind;
}
calcStatsc();


function paintTable(){
     document.getElementById('numbReps').innerHTML=statistics.reps;
    document.getElementById('votesReps').innerHTML=statistics.totalAvgR.toFixed(2);  
    document.getElementById('numbDems').innerHTML=statistics.dems;
     document.getElementById('votesDems').innerHTML=statistics.totalAvgD.toFixed(2);  
    document.getElementById('numbInd').innerHTML=statistics.ind;
    document.getElementById('votesInd').innerHTML=statistics.totalAvgI.toFixed(2);  
}
paintTable();

//engaged//







let table=document.getElementById("missedtable");
let ordenados= members.sort(function (a,b){return b.missed_votes_pct-a.missed_votes_pct});

let diezprimeros = ordenados.slice(0,(members.length*0,10));

for(let i= 0; i< diezprimeros.length;i++){
    let row = document.createElement('tr');
    row.insertCell().textContent = diezprimeros[i].first_name;
    row.insertCell().textContent=diezprimeros[i].missed_votes;
    row.insertCell().textContent=diezprimeros[i].missed_votes_pct + "%";
    
    table.append(row);
}

let table2=document.getElementById("menosmissed");
let ordenados2= members.sort(function (a,b){return a.missed_votes_pct-b.missed_votes_pct});

let diezprimeros2 = ordenados2.slice(0,(members.length*0,10));

for(let i= 0; i< diezprimeros2.length;i++){
    let row = document.createElement('tr');
    row.insertCell().textContent = diezprimeros2[i].first_name;
    row.insertCell().textContent=diezprimeros2[i].missed_votes;
    row.insertCell().textContent=diezprimeros2[i].missed_votes_pct + "%";
    
    table2.append(row);
}

