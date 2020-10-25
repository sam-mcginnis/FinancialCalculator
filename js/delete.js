var valueofIforRemove;
function keepTrack(){
    valueofIforRemove = myLineChart.data.labels.length -1;

}
function downMonthRemove(){
    let monthArray = myLineChart.data.labels;

    valueofIforRemove--;
    if(monthArray[valueofIforRemove] == undefined){
        valueofIforRemove++;
  
    }
    else{
        
      document.getElementById("displayMonthRemove").innerHTML = " " + monthArray[valueofIforRemove] + " ";
    }
  
}
function upMonthRemove(){
    let monthArray = myLineChart.data.labels

    valueofIforRemove++;
    if(monthArray[valueofIforRemove] == undefined){
        valueofIforRemove--;
    }
    else{
        
      document.getElementById("displayMonthRemove").innerHTML = " " + monthArray[valueofIforRemove] + " ";
  
    }
  
}
function removeButton(){
    let word = document.getElementById("displayMonthRemove").innerHTML.trim();
    let areaIndex = myLineChart.data.labels.indexOf(word);
    
    myLineChart.data.labels.splice(areaIndex, 1);
    myLineChart.data.datasets[0].data.splice(areaIndex, 1);

    myBarChart.data.labels.splice(areaIndex, 1);
    myBarChart.data.datasets[0].data.splice(areaIndex, 1);
    myBarChart.data.datasets[1].data.splice(areaIndex, 1);


    myLineChart.update();
    myBarChart.update();    

    document.getElementById("displayMonthRemove").innerHTML= " " + myLineChart.data.labels[myLineChart.data.labels.length -1] + " ";

}
document.getElementById("populateGraphs").addEventListener("click", keepTrack);
document.getElementById("leftArrowRemove").addEventListener("click", downMonthRemove);
document.getElementById("rightArrowRemove").addEventListener("click", upMonthRemove);
document.getElementById("removeButton").addEventListener("click", removeButton);

