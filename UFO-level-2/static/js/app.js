// from data.js
var tableData = data;

// Create "tr" and "td" under "tbody" and insert data to cells
var tbody = d3.select("table > tbody");
data.forEach((element) =>{
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key, value]) => {
        var cell = row.append("td")
        cell.text(value)
    });
});


var botton = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

botton.on("click", function(){
    // clear out the prior outputs
    tbody.html("");
    console.log("The botton has clicked");
    // stop the page from refresh
    d3.event.preventDefault();
    var inputData = inputField.property("value");
    console.log(inputData);
    // Display data on html
    var outputData = data.filter((date) => date.datetime === inputData);
    outputData.forEach((output)=>{
        row = tbody.append("tr");
        Object.entries(output).forEach(([key,value])=>{
            cell = row.append("td");
            cell.text(value)
        });
    console.log(outputData);
    });
});
