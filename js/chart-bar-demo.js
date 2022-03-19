 // Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: "Total debits",
      backgroundColor: "rgba(255, 0, 0, 1)",
      borderColor: "rgba(255, 0, 0, 1)",
      data: [],
    }, 
    {
      label: "Total credits",
      backgroundColor: "rgba(0, 100, 0, 1)",
      borderColor: "rgba(0, 100, 0, 1)",
      data: [],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 12
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10000,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

function sortBarDate(month, MB, monthBudget){
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
    A1 = [month[i], MB[i], monthBudget[i]];
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
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else if(day == "02"){
      month[i] = "Feb " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else if(day == "03"){
      month[i] = "Mar " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else if(day == "04"){
      month[i] = "Apr " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];
    }
    else if(day == "05"){
      month[i] = "May " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else if(day == "06"){
      month[i] = "Jun " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else if(day == "07"){
      month[i] = "Jul " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else if(day == "08"){
      month[i] = "Aug " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else if(day == "09"){
      month[i] = "Sep " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else if(day == "10"){
      month[i] = "Oct " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else if(day == "11"){
      month[i] = "Nov " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else if(day == "12"){
      month[i] = "Dec " + day2;
      MB[i] = A2[i][1];
      monthBudget[i] = A2[i][2];

    }
    else
      continue;
    
  }
}

function addData(chart, label, data, budget) {
  
  chart.data.labels.push(label);

  chart.data.datasets[0].data.push(parseFloat(data).toFixed(2));

  chart.data.datasets[1].data.push(parseFloat(budget).toFixed(2));

  sortBarDate(myBarChart.data.labels, myBarChart.data.datasets[0].data, chart.data.datasets[1].data);


  document.getElementById('scrollHere').scrollIntoView();
  chart.update();
}

function calculate(){
  
  if(refinedDate != undefined)  {
    addData(myBarChart, refinedDate, Total, budget);
  }
}
function loadExcel(){
    const excelFile = document.getElementById('DC')
    readXlsxFile(excelFile.files[0]).then(function(data){
      let spent = data[3][2]
      let earned = data[2][2]
        if(refinedDate != undefined)  {
          addData(myBarChart, refinedDate, Math.abs(spent), earned);
        }
    })    
}

document.getElementById('calculateExcel').addEventListener('click', loadExcel)

   