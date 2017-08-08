CREATE DATABASE bamazon_db;

USE DATABASE bamazon_db;

CREATE TABLE products (

  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_id INT(5),
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INT(6),
  stock_quantity INTEGER(5),
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (12356,"Flux Capaciter", "Who Knows", 89.95, 6);

INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (12358,"Delorian", "Automotive", 24500, 4);

INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (12360,"Gray's Sports Almanac", "Sport Memorbilia", 29.99, 25);

INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (12362,"Hover Board", "Sports Equipment", 299.99, 100);

INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (12364,"Mr. Fusion", "Automotive", 89.95, 6);

INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (12366,"Nike Air Mags", "Shoes", 65.95, 50);

INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (12366,"6-Pack Pepsi Perfect", "Soda", 15.99, 200);

INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (12366,"Self Drying Jacket", "Clothes", 124.99, 25);

INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (12366,"Plutonium", "Radioactive Sales", 16,000, 1);

INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (12366,"Dehydrated Pizza", "Food", 9.99, 500);


