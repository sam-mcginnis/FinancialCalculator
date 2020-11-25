// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: "Total spent on Debit Card",
      lineTension: 0.3,
      backgroundColor: "rgba(255, 77, 136,0.2)",
      borderColor: "rgba(255, 77, 136,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(255, 77, 136,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255, 77, 136,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [],
    },
    {
      label: "Total spent on Credit Card",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
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
          max: 7500,
          maxTicksLimit: 10
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

function sortDate(month, MB, monthBudget){
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


function addAreaData(chart, label, debit, credit) {
  
  chart.data.labels.push(label);

  chart.data.datasets[0].data.push(debit);

  chart.data.datasets[1].data.push(credit);

  sortDate(myLineChart.data.labels, myLineChart.data.datasets[0].data, myLineChart.data.datasets[1].data);
  
  chart.update();
}

function calculateLine(){

  let debit = Number(document.getElementById("totalDebit").value);
  let credit = Number(document.getElementById("totalCredit").value);
  
  

  if (refinedDate == undefined || refinedDate == "lid Da"){
    alert("Must select date first");
  }
  else{
    addAreaData(myLineChart, refinedDate, debit, credit);
  }
}
document.getElementById("populateGraphs").addEventListener("click", calculateLine);
