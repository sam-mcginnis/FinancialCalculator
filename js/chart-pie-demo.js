// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var arrayOfsetData = [];
var arrayOfsetLabel = [];
var arrayOfsetColor = [];
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
					var total = Number($("#totalBudget").val());

					var tooltipPercentage = Math.round((tooltipData / total) * 100);
					return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
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
function updateConfigByMutating(chart, setData, setLabel, setColor) {
  chart.data.labels = setLabel;
  chart.data.datasets[0].backgroundColor = setColor;
  chart.data.datasets[0].data = setData;
  chart.data.datasets[0].month.push(refinedDate);
  document.getElementById("displayMonth").innerHTML = " " + arrayOfsetData[theValueOfI][categoryName.length] + " ";
  document.getElementById("displayMonthRemove").innerHTML = " " + arrayOfsetData[theValueOfI][categoryName.length] + " ";

  chart.update();
}

function calculatePie(){
  let setLabel= [];
  let setColor = []
  
  let count= 0;
  let setData = [];
  for(let i = 0; i <=categoryName.length -1; i++)
  {
    count++;
    let target = String(count + ".");
    let value = Number(document.getElementById(target).value);
    setData[i] = value;
    setLabel[i] = categoryName[i];
    setColor[i] = getColor();
  }

  
 if(refinedDate != "lid Da" && refinedDate != undefined){
  setData.push(refinedDate);
  arrayOfsetData.push(setData);
  arrayOfsetLabel.push(setLabel);
  arrayOfsetColor.push(setColor);

  theValueOfI = arrayOfsetData.length - 1;

  updateConfigByMutating(myPieChart, setData, setLabel, setColor);
 
 }
}
function downMonth(){

  theValueOfI--;

  if(arrayOfsetData[theValueOfI] == undefined){
    theValueOfI++;

  }
  else{
      
    document.getElementById("displayMonth").innerHTML = " " + arrayOfsetData[theValueOfI][arrayOfsetData[theValueOfI].length-1] + " ";
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
      
    document.getElementById("displayMonth").innerHTML = " " + arrayOfsetData[theValueOfI][arrayOfsetData[theValueOfI].length-1] + " ";
    myPieChart.data.datasets[0].data = arrayOfsetData[theValueOfI];
    myPieChart.data.datasets[0].backgroundColor = arrayOfsetColor[theValueOfI];
    myPieChart.data.labels = arrayOfsetLabel[theValueOfI];
    myPieChart.update();

  }

}

document.getElementById("populateGraphs").addEventListener("click", calculatePie);
document.getElementById("leftArrow").addEventListener("click", downMonth);
document.getElementById("rightArrow").addEventListener("click", upMonth);
