// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var arrayOfsetData = [];
var arrayOfsetLabel = [];
var arrayOfsetColor = [];
var setMonth = [];
var percentTotal = [];
var theValueOfI;
var nameOfTheMonth = document.getElementById("displayMonth").innerHTML;
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      month: [],
      data: [],
      backgroundColor: [],
    }],
  },options: {
		tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
          var allData = data.datasets[tooltipItem.datasetIndex].data;
					var tooltipLabel = data.labels[tooltipItem.index];
          var tooltipData = allData[tooltipItem.index];
          var total = percentTotal[theValueOfI];
          
					var tooltipPercentage = Math.round((tooltipData / total) * 100);
					return tooltipLabel + ': $' + tooltipData + ' (' + tooltipPercentage + '%)';
				}
			}
		}
	}
});
function getColor() {
  return (
    "#" + Math.random().toString(16).slice(2, 8)
  );
}

function sortPieDate(month, catgName, bills, colors){
  let i = 0;
  let A1 = [];
  let A2 = [];   
   
  for(i = 0; i < month.length; i++)
  {

    let day =month[i].split(" ");

    if(day[0] == "Jan"){
      month[i] = "01" + day[1];
    }
    else if(day[0] == "Feb"){
      month[i] = "02" + day[1];
    }
    else if(day[0] == "Mar"){
      month[i] = "03" + day[1];
    }
    else if(day[0] == "Apr"){
      month[i] = "04" + day[1];
    }
    else if(day[0] == "May"){
      month[i] = "05" + day[1];
    }
    else if(day[0] == "Jun"){
      month[i] = "06" + day[1];
    }
    else if(day[0] == "Jul"){
      month[i] = "07" + day[1];
    }
    else if(day[0] == "Aug"){
      month[i] = "08" + day[1];
    }
    else if(day[0] == "Sep"){
      month[i] = "09" + day[1];
    }
    else if(day[0] == "Oct"){
      month[i] = "10" + day[1];
    }
    else if(day[0] == "Nov"){
      month[i] = "11" + day[1];
    }
    else if(day[0] == "Dec"){
      month[i] = "12" + day[1];
    }
    else{
      day =month[i].split("/");
      month[i] = day[0] + day[1];
    }
    A1 = [month[i], catgName[i], bills[i], colors[i]];
    A2.push(A1);
  }
  
  A2.sort(function(a, b) {
    return a[0] - b[0];
  });
  
  
  for(i = 0; i < month.length; i++)
  {
    let day = A2[i][0].slice(0, 2);
    let day2 = A2[i][0].slice(2);


    if(day == "01"){
      month[i] = "Jan " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];

    }
    else if(day == "02"){
      month[i] = "Feb " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];
    }
    else if(day == "03"){
      month[i] = "Mar " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];
    }
    else if(day == "04"){
      month[i] = "Apr " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];
    }
    else if(day == "05"){
      month[i] = "May " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];

    }
    else if(day == "06"){
      month[i] = "Jun " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];

    }
    else if(day == "07"){
      month[i] = "Jul " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];
    }
    else if(day == "08"){
      month[i] = "Aug " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];
    }
    else if(day == "09"){
      month[i] = "Sep " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];
    }
    else if(day == "10"){
      month[i] = "Oct " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];
    }
    else if(day == "11"){
      month[i] = "Nov " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];
    }
    else if(day == "12"){
      month[i] = "Dec " + day2;
      catgName[i] = A2[i][1];
      bills[i] = A2[i][2];
      colors[i] = A2[i][3];
    }
    else
      continue;
    
  }
}

function updateConfigByMutating(chart, setData, setLabel, setColor, month) {
  chart.data.labels = arrayOfsetLabel[arrayOfsetLabel.length -1];
  chart.data.datasets[0].backgroundColor = arrayOfsetColor[arrayOfsetColor.length -1];
  chart.data.datasets[0].data = arrayOfsetData[arrayOfsetData.length -1]
  chart.data.datasets[0].month = setMonth[setMonth.length -1];
  document.getElementById("displayMonth").innerHTML = " " + setMonth[setMonth.length - 1] + " ";
  document.getElementById("displayMonthRemove").innerHTML = " " + setMonth[setMonth.length - 1] + " ";

  chart.update();
}

function calculatePie(){
  let setLabel= [];
  let setColor = []
  let setData = [];
  let budget = parseFloat($("#totalBudget").val());

  let count= 0;
  
  for(let i = 0; i <=categoryName.length -1; i++)
  {
    count++;
    let target = String(count + ".");
    let value = parseFloat(document.getElementById(target).value);
    setData[i] = value;
    setLabel[i] = categoryName[i];
    setColor[i] = getColor();
  }

  setMonth.push(refinedDate);
  arrayOfsetData.push(setData);
  arrayOfsetLabel.push(setLabel);
  arrayOfsetColor.push(setColor);
  percentTotal.push(budget);

  theValueOfI = arrayOfsetData.length - 1;

  sortPieDate(setMonth, arrayOfsetLabel, arrayOfsetData, arrayOfsetColor)

  updateConfigByMutating(myPieChart, setData, setLabel, setColor, refinedDate);
 

}
function downMonth(){

  theValueOfI--;

  if(arrayOfsetData[theValueOfI] == undefined){
    theValueOfI++;

  }
  else{
      
    document.getElementById("displayMonth").innerHTML = " " + setMonth[theValueOfI] + " ";
    myPieChart.data.datasets[0].data = arrayOfsetData[theValueOfI];
    myPieChart.data.datasets[0].backgroundColor = arrayOfsetColor[theValueOfI];
    myPieChart.data.labels = arrayOfsetLabel[theValueOfI];
    myPieChart.update();

  }

}
function upMonth(){

  theValueOfI++;

  if(arrayOfsetData[theValueOfI] == undefined){
    theValueOfI--;
  }
  else{
      
    document.getElementById("displayMonth").innerHTML = " " + setMonth[theValueOfI] + " ";
    myPieChart.data.datasets[0].data = arrayOfsetData[theValueOfI];
    myPieChart.data.datasets[0].backgroundColor = arrayOfsetColor[theValueOfI];
    myPieChart.data.labels = arrayOfsetLabel[theValueOfI];
    myPieChart.update();

  }

}

document.getElementById("populateGraphs").addEventListener("click", calculatePie);
document.getElementById("leftArrow").addEventListener("click", downMonth);
document.getElementById("rightArrow").addEventListener("click", upMonth);
