var valueofIforRemove;
function keepTrack(){
    valueofIforRemove = myLineChart.data.labels.length -1;
    theValueOfI = arrayOfsetData.length - 1;
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
    for(let i = 0; i <= arrayOfsetData.length - 1; i++)
    {   
        let pieAreaIndex = setMonth[i].indexOf(word);
        if(pieAreaIndex != -1)
        {
            modalGroceryList.splice(i, 1)
            modalCashWithdrawlList.splice(i, 1)
            modalTransportationList.splice(i, 1)
            modalChipotleList.splice(i, 1)
            modalTakeOutList.splice(i, 1)
            modalotherSpendingList.splice(i, 1)
            
            arrayOfsetData.splice(i, 1);
            arrayOfsetLabel.splice(i, 1); 
            arrayOfsetColor.splice(i, 1); 
            setMonth.splice(i,1);  
            percentTotal.splice(i, 1);
            myPieChart.data.datasets[0].data = arrayOfsetData[arrayOfsetData.length-1];
            myPieChart.data.datasets[0].backgroundColor = arrayOfsetColor[arrayOfsetColor.length-1];
            if(arrayOfsetLabel[arrayOfsetLabel.length-1] == undefined)
            {
                myPieChart.data.labels = []    
            }
            else{
                myPieChart.data.labels = arrayOfsetLabel[arrayOfsetLabel.length-1];
            }
            break;
        }
    
    }
    
    
    myLineChart.data.labels.splice(areaIndex, 1);
    myLineChart.data.datasets[0].data.splice(areaIndex, 1);
    myLineChart.data.datasets[1].data.splice(areaIndex, 1);

    myBarChart.data.labels.splice(areaIndex, 1);
    myBarChart.data.datasets[0].data.splice(areaIndex, 1);
    myBarChart.data.datasets[1].data.splice(areaIndex, 1);

    
    theValueOfI = percentTotal.length -1;

    myLineChart.update();
    myBarChart.update();    
    myPieChart.update();
    if (arrayOfsetData[arrayOfsetData.length - 1] == undefined || myLineChart.data.labels[myLineChart.data.labels.length -1] == undefined)
    {
        document.getElementById("displayMonth").innerHTML = " Selected Month ";
        document.getElementById("displayMonthRemove").innerHTML= " Selected Month ";

    }
    else{
        document.getElementById("displayMonth").innerHTML = " " + setMonth[setMonth.length -1] + " ";
        document.getElementById("displayMonthRemove").innerHTML= " " + setMonth[setMonth.length -1] + " ";
    }

}
document.getElementById("removeButton").addEventListener("click", keepTrack);
document.getElementById("calculateExcel").addEventListener("click", keepTrack);
document.getElementById("leftArrowRemove").addEventListener("click", downMonthRemove);
document.getElementById("rightArrowRemove").addEventListener("click", upMonthRemove);
document.getElementById("removeButton").addEventListener("click", removeButton);


