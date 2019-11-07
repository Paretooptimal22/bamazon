// get node packages
const inquirer = require(`inquirer`)
const mysql = require(`mysql2`)

// create connection to bamazon_db
const db = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  database: `bamazon_db`,
  password: `password`
})

// query item_id, product_name, & price from products and display in terminal
const viewTable = () => {
  db.query(`SELECT item_id, product_name, price FROM products`, (e, data) => {
    if (e) {
      console.log(e)
    }
    // loop through each item in array and console log ID, Product, and Price
    console.log(`Items For Sale:`)
    for (let i = 0; i < data.length; i++) {
      console.log(`
      ID: ${data[i].item_id}, Product: ${data[i].product_name}, Price: ${data[i].price}
      `)
    }
  })
}

// prompt main menu questions
const main = () => {
  viewTable()
  inquirer.prompt({
    type: `number`,
    name: `ID`,
    message: `Please Enter The Product ID You Want To Purchase`
  },
  {
    type: `number`,
    name: `Qty`,
    message: `Please Enter Qty To Purchase`
  })
}

main()
