const excelFile = document.getElementById('excelFile')

function loadExcel(){
    let stmtTotal = 0
    let stmtCount = 0
    let stmtTransaction = []
    let stmtCategory = []
    readXlsxFile(excelFile.files[0]).then(function(data){
        console.log(data)
        for( let i = 7; i < data.length; i++){
            stmtTransaction[stmtCount] = data[i][2]
            stmtCategory[stmtCount] = data[i][1].split(" ")[0]
            stmtCount++
        }
        console.log(stmtTransaction.reduce((a,b) => a + b))
        console.log(stmtCategory)
    })    
}

document.getElementById('calculateExcel').addEventListener('click', loadExcel)
