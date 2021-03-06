var now = moment();

$(document).ready(function(){ 
    forLoop();
    $("#currentDay").text(now.format("dddd MMMM DD, YYYY"));
  });


function forLoop(containerVar){
        var startTime = moment(8,"H");
        console.log(startTime);
    for (let i = 0; i < 10; i++){
        const containerVar=$(".container");
        var row = $("<div />", {class: 'row'});
        var timeColumn = $("<div />", {class:'hour'})
        // timeColumn.text(moment().from('HH'));
        timeColumn.text(startTime.format("HH:mm a"));
        row.append(timeColumn);
        containerVar.append(row);
        var taskArea = $("<input />", {class: 'col-sm', type: 'text', id: 'task-area'});
        taskArea.addClass(getTimeCssClass(startTime));
        inputArray.push(taskArea);
        var addButton = $("<button>Click here to save</button>", {class: 'saveBtn', id: 'add-button'});
        addButton.click(()=>clickButton(i));
        row.append(taskArea);
        row.append(addButton);
        startTime.add(1, "hour");
    }
}

function getTimeCssClass(checkTime){
    if (checkTime.isBefore(now)){
        return ("past");
    }
    if (checkTime.isSame(now)){
        return ("present");
    }
    if (checkTime.isAfter(now)){
        return ("future");
    }
}

// document.getElementById('task-area');

function clickButton(i){
    console.log(inputArray[i]);
    var input = document.getElementById('task-area').value;
    localStorage.setItem('input', input);
    localStorage.getItem('input', input);

}


var inputArray = []