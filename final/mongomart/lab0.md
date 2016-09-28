# Lab0

Get the MongoMart application up and running. It doesn't do much (yet), but you should be able to run it and experiment with the UI.

- Download the MongoMart application from the handout.
- Install the dependencies.
- Make sure you have a mongod running version 3.2.x of MongoDB.
- Import the "item" collection: `mongoimport --drop -d mongomart -c item data/items.json`
- Import the "cart" collection: `mongoimport --drop -d mongomart -c cart data/cart.json`
- Run the application by typing `node mongomart.js` in the mongomart directory.
- In your browser, visit http://localhost:3000. 
