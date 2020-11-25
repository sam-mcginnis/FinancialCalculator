var firstTime;

function storeData(){
    let area = {
        month: myLineChart.data.labels,
        data0: myLineChart.data.datasets[0].data,
        data1: myLineChart.data.datasets[1].data
    }
    let bar = {
        month: myBarChart.data.labels,
        data0: myBarChart.data.datasets[0].data,
        data1: myBarChart.data.datasets[1].data
    }
    let pie= {
        month: myPieChart.data.datasets[0].month,
        data0: myPieChart.data.datasets[0].data,
        data1: myPieChart.data.labels,
        data2: myPieChart.data.datasets[0].backgroundColor,
        data3: arrayOfsetData,
        data4: arrayOfsetLabel,
        data5: arrayOfsetColor,
        data6: theValueOfI,
        data7: categoryCount,
        data8: arrayCount,
        data9: arrayCount1,
        data10: categoryArray,
        data11: categoryName,
        data12: valueofIforRemove,
        data13: percentTotal,
        data14: setMonth


    }
    
    localStorage.setItem("lineChart", JSON.stringify(area));
    localStorage.setItem("barChart", JSON.stringify(bar));
    localStorage.setItem("pieChart", JSON.stringify(pie));

}

function saveChanges() { 
    let i, count= 0;
    firstTime= JSON.parse(localStorage.getItem("firstTime"));


    if(firstTime == null){
        let popup = document.getElementById("myPopup");
        popup.classList.add("show");
        localStorage.setItem("firstTime", "false");

    }
    else{
        
        let line = JSON.parse(localStorage.getItem("lineChart"));
        let bar = JSON.parse(localStorage.getItem("barChart"));
        let pie = JSON.parse(localStorage.getItem("pieChart"));

        myLineChart.data.labels = line.month;
        myLineChart.data.datasets[0].data = line.data0;
        myLineChart.data.datasets[1].data = line.data1;
        myLineChart.update();

        myBarChart.data.labels = bar.month;
        myBarChart.data.datasets[0].data = bar.data0;
        myBarChart.data.datasets[1].data = bar.data1;
        myBarChart.update();

        myPieChart.data.labels = pie.data1;
        myPieChart.data.datasets[0].data = pie.data0;
        myPieChart.data.datasets[0].month = pie.month;
        myPieChart.data.datasets[0].backgroundColor = pie.data2;
        arrayOfsetData = pie.data3;
        arrayOfsetLabel = pie.data4;
        arrayOfsetColor = pie.data5;
        theValueOfI = pie.data6;
        categoryCount = pie.data7;
        arrayCount = pie.data8;
        arrayCount1 = pie.data9;
        categoryArray = pie.data10;
        categoryName = pie.data11;
        valueofIforRemove = pie.data12;
        percentTotal = pie.data13;
        setMonth = pie.data14;

        for(i=0; i< categoryArray.length; i++)
            {

                count++;

                let newDiv = document.createElement('div');
                newDiv.className = "form-label-group";
        
                let newInput = document.createElement("input");
                newInput.type = "text";
                newInput.id = String(count + ".");
                newInput.className = "form-control";
        
                let newLabel = document.createElement('label');
                newLabel.htmlFor = String(count + ".");
                newLabel.innerHTML = String(count + ". Amount spent on " + categoryName[i]);
        
                newDiv.appendChild(newInput);
                newDiv.append(newLabel);
                $("#appendCat").append(newDiv);
        
                categoryArray[i] = String(count + ".");
            }
        
        if (arrayOfsetData[arrayOfsetData.length - 1] == undefined || myLineChart.data.labels[myLineChart.data.labels.length -1] == undefined)
        {
            document.getElementById("displayMonth").innerHTML = " Selected Month ";
            document.getElementById("displayMonthRemove").innerHTML= " Selected Month ";

        }
        if(arrayOfsetData[arrayOfsetData.length - 1] != undefined || myLineChart.data.labels[myLineChart.data.labels.length -1] != undefined){
            document.getElementById("displayMonth").innerHTML = " " + setMonth[setMonth.length -1] + " ";
            document.getElementById("displayMonthRemove").innerHTML= " " + setMonth[setMonth.length -1] + " ";
        }

        if(categoryArray.length == 0)
        {
            document.getElementById("catRemove").innerHTML = " Selected Category ";    
        }
        if(categoryArray.length != 0){
            document.getElementById("catRemove").innerHTML = " " + categoryName[i - 1] + " ";
        }    
        myPieChart.update(); 
    }
}
function Directions() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
document.getElementById("thePopUp").addEventListener("click", Directions);
window.addEventListener("load", saveChanges);
window.addEventListener("beforeunload", storeData);
