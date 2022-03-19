var categoryCount = 0;
var arrayCount = 0;
var arrayCount1;
var categoryArray = [];
var categoryName = [];

function addCat() {
    categoryCount = categoryArray.length;
    categoryCount++;

    if (categoryCount > 10) {
        categoryCount--;
        alert("Cannot have more than 10 categories!");
    } else {
        let newCat = $("#addCat").val();

        let newDiv = document.createElement('div');
        newDiv.className = "form-label-group";

        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = String(categoryCount + ".");
        newInput.className = "form-control";

        let newLabel = document.createElement('label');
        newLabel.htmlFor = String(categoryCount + ".");
        newLabel.innerHTML = String(categoryCount + ". Amount spent on " + newCat);

        newDiv.appendChild(newInput);
        newDiv.append(newLabel);
        $("#appendCat").append(newDiv);

        categoryName[arrayCount] = newCat;
        categoryArray[arrayCount] = String(categoryCount + ".");
        document.getElementById("catRemove").innerHTML = " " + categoryName[arrayCount] + " ";
        document.getElementById("addCat").value = "";


        arrayCount1 = categoryArray.length - 1;
        arrayCount++;
    }

}

function upCategory() {

    arrayCount1++;

    if (categoryArray[arrayCount1] == undefined) {
        arrayCount1--;
    } else {
        document.getElementById("catRemove").innerHTML = " " + categoryName[arrayCount1] + " ";
    }
}

function downCategory() {

    arrayCount1--;

    if (categoryArray[arrayCount1] == undefined) {
        arrayCount1++;
    } else {
        document.getElementById("catRemove").innerHTML = " " + categoryName[arrayCount1] + " ";
    }
}

function removeCategory() {
    let i, count = 0;

    if (categoryArray.length == 0) {
        console.log("do nothing");
    } else {
        let word = document.getElementById("catRemove").innerHTML.trim();
        let value = categoryName.indexOf(word);


        categoryArray.splice(value, 1);
        categoryName.splice(value, 1);
        $("#appendCat").empty();

        for (i = 0; i < categoryArray.length; i++) {

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

        if (categoryArray.length == 0) {
            document.getElementById("catRemove").innerHTML = " Selected Category ";
        } else {
            document.getElementById("catRemove").innerHTML = " " + categoryName[i - 1] + " ";
        }

        arrayCount1 = categoryArray.length - 1;
        arrayCount--;
    }
}


document.getElementById("populateCat").addEventListener("click", addCat);
document.getElementById("removeCatButton").addEventListener("click", removeCategory);
document.getElementById("rightArrowCat").addEventListener("click", upCategory);
document.getElementById("leftArrowCat").addEventListener("click", downCategory);