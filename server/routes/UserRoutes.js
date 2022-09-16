const UserController = require("../controllers/UsersController");

module.exports = (app) => {
  app.post("/api/add-editor", UserController.addEditor); // add editor route
  app.post("/api/validate-user", UserController.validateUser); // validate user route
};
