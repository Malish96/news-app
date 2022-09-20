const UserController = require("../controllers/UsersController");

module.exports = (app) => {
  app.post("/api/add-editor", UserController.addEditor); // add editor route
  app.post("/api/validate-editor", UserController.validateUser); // validate user route
  app.get("/api/get-all-editors/", UserController.getAllUsers) // get all users route
};
