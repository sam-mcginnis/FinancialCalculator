// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var arrayOfsetData = [];
var arrayOfsetLabel = [];
var arrayOfsetColor = [];
var setMonth = [];
var percentTotal = [];
var modalGroceryList = []
var modalCashWithdrawlList = []
var modalTransportationList = []
var modalChipotleList = []
var modalTakeOutList = []
var modalotherSpendingList = []
var modalBillsList = []
var theValueOfI;
var tooltipLabel
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
    },
    options: {
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = percentTotal[theValueOfI];

                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return tooltipLabel + ': $' + tooltipData + ' (' + tooltipPercentage + '%)';
                }
            }
        },
        onClick: function() {
            let list = document.getElementById("myList");
            let modalHeader = document.getElementById("modalHeader");
            let listOption
            console.log(theValueOfI)
            if (tooltipLabel === "Groceries")
                listOption = modalGroceryList[theValueOfI]

            if (tooltipLabel === "Resturant/Food")
                listOption = modalTakeOutList[theValueOfI]

            if (tooltipLabel === "Other Spending")
                listOption = modalotherSpendingList[theValueOfI]

            if (tooltipLabel === "Transportation")
                listOption = modalTransportationList[theValueOfI]

            if (tooltipLabel === "Cash Withdrawl")
                listOption = modalCashWithdrawlList[theValueOfI]

            if (tooltipLabel === "Chipotle")
                listOption = modalChipotleList[theValueOfI]

            if (tooltipLabel === "Bills")
                listOption = modalBillsList[theValueOfI]

            if (typeof listOption !== "undefined") {
                while (list.firstChild) {
                    list.removeChild(list.firstChild);
                }
                listOption.forEach((item) => {
                    let li = document.createElement("li");
                    li.innerText = item;
                    list.appendChild(li);
                })
                modalHeader.innerHTML = tooltipLabel
                $("#myModal").modal('show');
            }
        }
    }
});

function getColor() {
    return (
        "#" + Math.random().toString(16).slice(2, 8)
    );
}

function sortPieDate(month, catgName, bills, colors) {
    let i = 0;
    let A1 = [];
    let A2 = [];

    for (i = 0; i < month.length; i++) {

        let day = month[i].split(" ");

        if (day[0] == "Jan") {
            month[i] = "01" + day[1];
        } else if (day[0] == "Feb") {
            month[i] = "02" + day[1];
        } else if (day[0] == "Mar") {
            month[i] = "03" + day[1];
        } else if (day[0] == "Apr") {
            month[i] = "04" + day[1];
        } else if (day[0] == "May") {
            month[i] = "05" + day[1];
        } else if (day[0] == "Jun") {
            month[i] = "06" + day[1];
        } else if (day[0] == "Jul") {
            month[i] = "07" + day[1];
        } else if (day[0] == "Aug") {
            month[i] = "08" + day[1];
        } else if (day[0] == "Sep") {
            month[i] = "09" + day[1];
        } else if (day[0] == "Oct") {
            month[i] = "10" + day[1];
        } else if (day[0] == "Nov") {
            month[i] = "11" + day[1];
        } else if (day[0] == "Dec") {
            month[i] = "12" + day[1];
        } else {
            day = month[i].split("/");
            month[i] = day[0] + day[1];
        }
        A1 = [month[i], catgName[i], bills[i], colors[i]];
        A2.push(A1);
    }

    A2.sort(function(a, b) {
        return a[0] - b[0];
    });


    for (i = 0; i < month.length; i++) {
        let day = A2[i][0].slice(0, 2);
        let day2 = A2[i][0].slice(2);


        if (day == "01") {
            month[i] = "Jan " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];

        } else if (day == "02") {
            month[i] = "Feb " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];
        } else if (day == "03") {
            month[i] = "Mar " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];
        } else if (day == "04") {
            month[i] = "Apr " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];
        } else if (day == "05") {
            month[i] = "May " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];

        } else if (day == "06") {
            month[i] = "Jun " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];

        } else if (day == "07") {
            month[i] = "Jul " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];
        } else if (day == "08") {
            month[i] = "Aug " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];
        } else if (day == "09") {
            month[i] = "Sep " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];
        } else if (day == "10") {
            month[i] = "Oct " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];
        } else if (day == "11") {
            month[i] = "Nov " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];
        } else if (day == "12") {
            month[i] = "Dec " + day2;
            catgName[i] = A2[i][1];
            bills[i] = A2[i][2];
            colors[i] = A2[i][3];
        } else
            continue;

    }
}

function updateConfigByMutating(chart, setData, setLabel, setColor, month) {
    chart.data.labels = arrayOfsetLabel[arrayOfsetLabel.length - 1];
    chart.data.datasets[0].backgroundColor = arrayOfsetColor[arrayOfsetColor.length - 1];
    chart.data.datasets[0].data = arrayOfsetData[arrayOfsetData.length - 1]
    chart.data.datasets[0].month = setMonth[setMonth.length - 1];
    document.getElementById("displayMonth").innerHTML = " " + setMonth[setMonth.length - 1] + " ";
    document.getElementById("displayMonthRemove").innerHTML = " " + setMonth[setMonth.length - 1] + " ";

    chart.update();
}

function calculatePie() {
    let creditFlag = "Online Banking payment to CRD 1046"

    let setLabel = []
    let setColor = []
    let setData = []
    let gArray = []
    let cwArray = []
    let tArray = []
    let chArray = []
    let osArray = []
    let toArray = []
    let bArray = []

    let groceriesColors = "#0d47a1"
    let rentColors = "#ff003f"
    let cashColor = "#4caf50"
    let transportationColor = "#ff8c00"
    let chipotleColor = "#fbec5d"
    let miscellaneousColor = "#4b0082"
    let takeOutColor = "#00ffef"
    let billsColor = "#194d33"

    let groceriesList = ["CVS/PHARMACY", "WALGREENS", "TARGET", "WALGREENS", "SAFEWAY"]
    let transportationList = ["SHELL", "NNT", "Spin", "SPIN", "LIM*RIDE", "FASTRAK"]
    let takeOutandSnackList = ["SOBO", "TACO", "GUSS", "SQ", "TST", "BOTH", "GYU-KAKU", "DELAUER'S", "CHICK-FIL-A", "Subway", "XOLO"]
    let billsList = ["DEPT", "ACE", "HOMEOWNERS", "PG&E", "COMCAST"]
    let billsTotal = 0
    let cashTotal = 0
    let takeOutandSnackTotal = 0
    let groceriesTotal = 0
    let transportationTotal = 0
    let chipotleTotal = 0
    let miscellaneousSpending = 0
    let spent = 0
    let totalSpendingCategories = 0


    let count = 0;

    for (let i = 0; i <= categoryName.length - 1; i++) {
        count++;
        let target = String(count + ".");
        let value = parseFloat(document.getElementById(target).value);
        totalSpendingCategories += value
        setData[i] = value;
        setLabel[i] = categoryName[i];
        setColor[i] = getColor();
    }
    const excelFile = document.getElementById('DC')
    readXlsxFile(excelFile.files[0]).then(function(data) {
        console.log(data)
        for (let i = 7; i < data.length; i++) {
            let singleTransaction = data[i][2]
            let category = data[i][1]
            let date = (data[i][0]).toString().split(" ", 3)
            if (singleTransaction < 0) {
                if (category.includes(creditFlag)) {
                    //Do Nothing
                } else if (groceriesList.includes(category.split(" ")[0])) {
                    groceriesTotal += singleTransaction
                    gArray.push(category + ": " + date.join(" ") + "- $" + Math.abs(parseFloat(singleTransaction).toFixed(2)))
                } else if (transportationList.includes(category.split(" ")[0])) {
                    transportationTotal += singleTransaction
                    tArray.push(category + ": " + date.join(" ") + "- $" + Math.abs(parseFloat(singleTransaction).toFixed(2)))
                } else if (takeOutandSnackList.includes(category.split(" ")[0])) {
                    takeOutandSnackTotal += singleTransaction
                    toArray.push(category + ": " + date.join(" ") + "- $" + Math.abs(parseFloat(singleTransaction).toFixed(2)))
                } else if (billsList.includes(category.split(" ")[0])) {
                    billsTotal += singleTransaction
                    bArray.push(category + ": " + date.join(" ") + "- $" + Math.abs(parseFloat(singleTransaction).toFixed(2)))
                } else if (category.split(" ")[0] === "OAKLAND" && category.split(" ")[1] === "GROCER") {
                    takeOutandSnackTotal += singleTransaction
                    toArray.push(category + ": " + date.join(" ") + "- $" + Math.abs(parseFloat(singleTransaction).toFixed(2)))
                } else if (category.split(" ")[0] === "CHIPOTLE") {
                    chipotleTotal += singleTransaction
                    chArray.push(category + ": " + date.join(" ") + "- $" + Math.abs(parseFloat(singleTransaction).toFixed(2)))
                } else if (category.split(" ")[0] === "1150") {
                    var rent = singleTransaction
                } else if (category.split(" ")[0] === "BKOFAMERICA") {
                    cashTotal += singleTransaction
                    cwArray.push(category + ": " + date.join(" ") + "- $" + Math.abs(parseFloat(singleTransaction).toFixed(2)))
                } else if (category.split(" ")[0] === "UBER") {
                    if (category.split(" ")[1] === "TRIP") {
                        transportationTotal += singleTransaction
                        tArray.push(category + ": " + date.join(" ") + "- $" + Math.abs(parseFloat(singleTransaction).toFixed(2)))
                    } else {
                        takeOutandSnackTotal += singleTransaction
                        toArray.push(category + ": " + date.join(" ") + "- $" + Math.abs(parseFloat(singleTransaction).toFixed(2)))
                    }
                } else {
                    miscellaneousSpending += singleTransaction
                    osArray.push(category + ": " + date.join(" ") + "- $" + Math.abs(parseFloat(singleTransaction).toFixed(2)))
                }

                spent += singleTransaction
            }
        }
        billsTotal = Math.abs(parseFloat(billsTotal).toFixed(2))
        cashTotal = Math.abs(parseFloat(cashTotal).toFixed(2))
        takeOutandSnackTotal = Math.abs(parseFloat(takeOutandSnackTotal).toFixed(2))
        groceriesTotal = Math.abs(parseFloat(groceriesTotal).toFixed(2))
        transportationTotal = Math.abs(parseFloat(transportationTotal).toFixed(2))
        chipotleTotal = Math.abs(parseFloat(chipotleTotal).toFixed(2))
        miscellaneousSpending = Math.abs(parseFloat(miscellaneousSpending).toFixed(2))
        rent = Math.abs(parseFloat(rent).toFixed(2))
        spent = Math.abs(parseFloat(spent).toFixed(2)) + totalSpendingCategories

        setLabel.push("Groceries")
        setData.push(groceriesTotal)
        setColor.push(groceriesColors)

        setLabel.push("Rent")
        setData.push(rent)
        setColor.push(rentColors)

        setLabel.push("Bills")
        setData.push(billsTotal)
        setColor.push(billsColor)

        setLabel.push("Cash Withdrawl")
        setData.push(cashTotal)
        setColor.push(cashColor)

        setLabel.push("Transportation")
        setData.push(transportationTotal)
        setColor.push(transportationColor)

        setLabel.push("Chipotle")
        setData.push(chipotleTotal)
        setColor.push(chipotleColor)

        setLabel.push("Other Spending")
        setData.push(miscellaneousSpending)
        setColor.push(miscellaneousColor)

        setLabel.push("Resturant/Food")
        setData.push(takeOutandSnackTotal)
        setColor.push(takeOutColor)

        modalGroceryList.push(gArray)
        modalCashWithdrawlList.push(cwArray)
        modalChipotleList.push(chArray)
        modalTakeOutList.push(toArray)
        modalTransportationList.push(tArray)
        modalotherSpendingList.push(osArray)
        modalBillsList.push(bArray)

        setMonth.push(refinedDate)
        arrayOfsetData.push(setData)
        arrayOfsetLabel.push(setLabel)
        arrayOfsetColor.push(setColor)
        percentTotal.push(spent)

        theValueOfI = arrayOfsetData.length - 1;

        sortPieDate(setMonth, arrayOfsetLabel, arrayOfsetData, arrayOfsetColor)

        updateConfigByMutating(myPieChart, setData, setLabel, setColor, refinedDate);
    })
}

function downMonth() {

    theValueOfI--;

    if (arrayOfsetData[theValueOfI] == undefined) {
        theValueOfI++;

    } else {

        document.getElementById("displayMonth").innerHTML = " " + setMonth[theValueOfI] + " ";
        myPieChart.data.datasets[0].data = arrayOfsetData[theValueOfI];
        myPieChart.data.datasets[0].backgroundColor = arrayOfsetColor[theValueOfI];
        myPieChart.data.labels = arrayOfsetLabel[theValueOfI];
        myPieChart.update();

    }

}

function upMonth() {

    theValueOfI++;

    if (arrayOfsetData[theValueOfI] == undefined) {
        theValueOfI--;
    } else {

        document.getElementById("displayMonth").innerHTML = " " + setMonth[theValueOfI] + " ";
        myPieChart.data.datasets[0].data = arrayOfsetData[theValueOfI];
        myPieChart.data.datasets[0].backgroundColor = arrayOfsetColor[theValueOfI];
        myPieChart.data.labels = arrayOfsetLabel[theValueOfI];
        myPieChart.update();

    }

}

document.getElementById("calculateExcel").addEventListener("click", calculatePie);
document.getElementById("leftArrow").addEventListener("click", downMonth);
document.getElementById("rightArrow").addEventListener("click", upMonth);