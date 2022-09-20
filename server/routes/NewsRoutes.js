const NewsController = require("../controllers/NewsController");

module.exports = (app) => {
  app.post("/api/add-news", NewsController.createNews); // add news route
  app.get("/api/get-by-category/:categoryName", NewsController.getByCategory); // get news by category route
  app.get("/api/get-headlines", NewsController.getAllHeadline); // get all headlines route
  app.get("/api/get-all-news/", NewsController.getAllNews) // get all news route
  app.put("/api/update-news/", NewsController.updateNews) //update news route
  app.delete("/api/delete-news/", NewsController.deleteNews) // delete news route
};
