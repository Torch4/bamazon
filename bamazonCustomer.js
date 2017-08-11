var mysql = require('mysql');
var inquirer= require('inquirer');

var connection = mysql.createConnection({
	host:"localhost",
	port: 3306,
	user: "root",
	password: "sarah0114",
  database: "bamazon_db"
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

function handleResults(res) { 
    var productList = [];
    
    for (var i = 0; i < res.length; i++) {
        var product = "ID: " + res[i].product_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity;
        var productChoice = {name: product, }
//push into big list, return big product list 
   }
};

function displayProducts(products) {
          inquirer.prompt([{
            name: "id",
            type: "input",
            message: "Which ID of the product would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false && value <= 10) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "quantity",
            type: "input",
            message: "How much would you like to purchase?",
            validate: function(value) {
                if (isNaN(value)) {
                    return false;
                } else {
                    return true;
                }
            }
        }

    ]).then(function(answer) { });  

// use the passed in products as choices
  // in your inquirer
};


connection.query("SELECT * FROM products", function(error, results, fields) {
  if (error) {
    throw error;
  } else {
    products = handleResults(results);
    displayProducts(products); 
  }
});




//         var query = "SELECT department-name, stock_quantity, price FROM products WHERE ?"
//         connection.query(query, { product_id: answer.id }, function(err, res) {

//             if (res[0].stock_quantity >= answer.quantity) {

//                 var dept = res[0].DepartmentName;
//                 var adjustedquantity = res[0].stock_quantity - answer.quantity;
//                 var purchasePrice = (answer.quantity * res[0].Price).toFixed(2);

//                 var query2 = " UPDATE products SET ? WHERE ?";
//                 connection.query(query2, [{ stock_quantity: adjustedQuantity }, { product_id: answer.id }],

//                     function(err, res) {

//                         if (err) throw err;
//                         console.log("Success! Your total is $" + purchasePrice + "\nYour item(s) will be shipped to you in 3-5 business days.");

//                     });



//                 var query3 = "SELECT TotalSales FROM Departments WHERE ?"
//                 connection.query(query3, { DepartmentName: dept }, function(err, data) {

//                     if (err) throw err

//                     var currentSales = data[0].TotalSales;
//                     var adjustedSales = currentSales + parseFloat(purchasePrice);





//                     var query4 = "UPDATE Departments SET ? WHERE ? "
//                     connection.query(query4, [{ TotalSales: adjustedSales }, { department_name: dept }], function(err, data) {

//                         if (err) throw err
//                         start();


//                     })

//                 })

//             } else {
//                 console.log("Sorry, there are " + res[0].stock_quantity + " units in stock for this product");
//                 console.log("\n-----------------------------------------\n");

//                 start();

//             }

            

//         })

//     })
// }
