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

// filter by date tag
var botton = d3.select("#filter-btn-table");
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
// filter by city tag
var cityBotton = d3.select("#filter-btn-city");
var cityInputField = d3.select("#city");

cityBotton.on("click",function(){
    // Clear out prior outputs 
    tbody.html("");
    console.log("The filter by city botton has been clicked.");
    // Prevent refreshing
    d3.event.preventDefault();
    // city input data 
    var cityInputData = cityInputField.property('value');
    // To filter the data
    var cityOutput = data.filter((city) => city.city === cityInputData);
    // Display on html
    cityOutput.forEach((cityResult) => {
      row = tbody.append("tr");
      Object.entries(cityResult).forEach(([key,value])=>{
      var citydata = row.append("td");
      citydata.text(value);
      });
  });
});


// filter by state tag
var stateBotton = d3.select("#filter-btn-state");
var stateInputField = d3.select("#state");
stateBotton.on("click", function(){
  tbody.html("");
  console.log("The filter by state button has been clicked.");
  d3.event.preventDefault();

  var stateInput = stateInputField.property("value");
  var stateOutpute = data.filter((state) => state.state === stateInput);
  stateOutpute.forEach((stateResult)=>{
    row = tbody.append("tr"); 
    Object.entries(stateResult).forEach(([key,value]) => {
    var stateData = row.append("td");
    stateData.text(value);
    });
  });
});


// filter by Country tag
var countryBotton = d3.select("#filter-btn-country");
var contryInputField = d3.select("#country");
countryBotton.on("click",function(){
  tbody.html("");
  console.log("The filter by country button has been clicked.");
  d3.event.preventDefault();

  var countryInput = contryInputField.property("value");
  var countryOutput = data.filter((country) => country.country === countryInput);

  countryOutput.forEach((countryResult)=>{
    row = tbody.append("tr");
    Object.entries(countryResult).forEach(([key,value])=>{
      var countryData = row.append("td");
      countryData.text(value);
    });
  });
});

// filter by Shape tag
var shapeBotton = d3.select("#filter-btn-shape");
var shapeInputField = d3.select("#shape");
shapeBotton.on("click",function(){
  tbody.html("");
  console.log("The filter by shape button has been clicked.");
  d3.event.preventDefault();

  var shapeInput = shapeInputField.property("value")
  var shapeOutput = data.filter((shape) => shape.shape === shapeInput);

  shapeOutput.forEach((shapeResult)=>{
    row = tbody.append("tr");
    Object.entries(shapeResult).forEach(([key,value])=>{
      var shapeData = row.append("td");
      shapeData.text(value);
    });
  });
});
