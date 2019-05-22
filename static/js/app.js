// from data.js
var tableData = data;
console.log(tableData);

// Reference to the table body
var tbody = d3.select("tbody");

// Arrow function
// Create rows
data.forEach((tableData) => {
  var row = tbody.append("tr");
// From each object append data ato each cell populating all rows
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
// console.log(value)
  });
});

// Filter button logic





