// from data.js
var tableData = data;
console.log(tableData);
var tbody = d3.select("tbody");
function buildTable(data){
// Reference to the table body
tbody.html("");
// Create rows with Arrow function
data.forEach((tableData) => {
  var row = tbody.append("tr");
// From each object append data ato each cell populating all rows
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
// console.log(value)
  });
});
};
buildTable(tableData);

// Filter button logic

var submit = d3.select("#filter-btn");

function FilterData(){
  d3.event.preventDefault(); 
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue)
  var filteredData = data.filter(ufoS => ufoS.datetime === inputValue);
  console.log(filteredData);
  buildTable(filteredData);
};

d3.select("#filter-btn").on("click",FilterData);


