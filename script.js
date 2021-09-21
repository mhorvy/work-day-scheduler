$(document).ready(function(){ 
    const containerVar=$(".container");
    var row = $("<div />", {class: 'row'});
    var timeColumn = $("<div />", {class:'col-1'})
    timeColumn.text(moment().format('HH'));
    row.append(timeColumn);
    forLoop();
    containerVar.append(row);
    var taskArea = $("<input />", {class: 'col-sm', type: 'text', id: 'task-area'});
    var addButton = $("<button>Click here to save!</button>", {class: 'col-1', id: 'add-button'});
    row.append(taskArea);
    row.append(addButton);
  });

function forLoop(containerVar){
    var test = 0;
    for (let i = 0; i < 24; i++){
        const containerVar=$(".container");
        var row = $("<div />", {class: 'row'});
        var timeColumn = $("<div />", {class:'col-1'})
        // timeColumn.text(moment().from('HH'));
        timeColumn.text(i);
        row.append(timeColumn);
        containerVar.append(row);
        var taskArea = $("<input />", {class: 'col-sm', type: 'text', id: 'task-area'});
        var addButton = $("<button>Click here to save!</button>", {class: 'col-1', id: 'add-button'});
        addButton.click(()=>clickButton(i));
        row.append(taskArea);
        row.append(addButton);
    }
}

document.getElementById('task-area');

function clickButton(i){
    console.log(i);
    localStorage.setItem(i, );
    localStorage.getItem()
}

