// from data.js
var tableData = data;
// Check data is being accessed
console.log(tableData);
// Select the table body from the HTL
var tbody = d3.select("tbody");
// Create function to populate the table
function buildTable(data){
  // Reset the html body content
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
// Run function to create the table
buildTable(tableData);

// Filter button logic
var submit = d3.select("#filter-btn");

// Create funtion for fitlering the data based o date selected.
function FilterData(){
  // Avoind page refresh
  d3.event.preventDefault(); 
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  // Check imput value has been captured
  console.log(inputValue)
  var filteredData = data.filter(ufoS => ufoS.datetime === inputValue);
  // Check filtered data for table has been captured
  console.log(filteredData);
  buildTable(filteredData);
};
// Event to trigger new table to populate based on date selection and button click 
d3.select("#filter-btn").on("click",FilterData);


