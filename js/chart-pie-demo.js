// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var arrayOfsetData = [];
var theValueOfI;
var nameOfTheMonth = document.getElementById("displayMonth").innerHTML;
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Bills", "Fun", "Gas", "Groceries"],
    datasets: [{
      month: [],
      data: [],
      backgroundColor: ['#007bff', '#dc3545', '#636300', '#28a745'],
    }],
  },
});

function updateConfigByMutating(chart, setData) {
  chart.data.datasets[0].data = setData;
  chart.data.datasets[0].month.push(refinedDate);
  document.getElementById("displayMonth").innerHTML = " " + arrayOfsetData[theValueOfI][4] + " ";
  document.getElementById("displayMonthRemove").innerHTML = " " + arrayOfsetData[theValueOfI][4] + " ";

  chart.update();
}

function calculatePie(){
  //console.log(date);
  let budget = Number($("#inputUserame").val());
  let groceries =Number($("#inputFood").val());
  let bills = Number($("#inputBills").val());
  let gas = Number($("#inputGas").val());
  let fun = Number($("#inputFun").val());
  let setData = [bills, fun, gas, groceries];  

  
 if(refinedDate != undefined){
  setData.push(refinedDate);
  arrayOfsetData.push(setData);
  
  theValueOfI = arrayOfsetData.length - 1;

  updateConfigByMutating(myPieChart, setData);
 
 }
}
function downMonth(){

  theValueOfI--;

  if(arrayOfsetData[theValueOfI] == undefined){
    theValueOfI++;

  }
  else{
      
    document.getElementById("displayMonth").innerHTML = " " + arrayOfsetData[theValueOfI][4] + " ";
    myPieChart.data.datasets[0].data = arrayOfsetData[theValueOfI];
    myPieChart.update();

  }

}
function upMonth(){

  theValueOfI++;

  if(arrayOfsetData[theValueOfI] == undefined){
    theValueOfI--;
  }
  else{
      
    document.getElementById("displayMonth").innerHTML = " " + arrayOfsetData[theValueOfI][4] + " ";
    myPieChart.data.datasets[0].data = arrayOfsetData[theValueOfI];
    myPieChart.update();

  }

}

document.getElementById("populateGraphs").addEventListener("click", calculatePie);
document.getElementById("leftArrow").addEventListener("click", downMonth);
document.getElementById("rightArrow").addEventListener("click", upMonth);
