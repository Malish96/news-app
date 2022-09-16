const NewsCategoryController = require("../controllers/NewsCategoryController");

module.exports = (app) => {
  app.post("/api/add-news-category", NewsCategoryController.addNewsCategory); // add news-category route
  app.get("/api/get-all-news-category", NewsCategoryController.getAllNewsCategory); // get all news category route
};
