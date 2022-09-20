const db = require("../models");

module.exports = {
  //create news
  createNews: async (req, res) => {
    try {
      if (!req.body) {
        return res.status(500).json({ message: "Create news failed" });
      }
      const news = await db.News.create(req.body);
      return res.json(news);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //get news by category
  getByCategory: async (req, res) => {
    const newsCategory = req.params.categoryName;
    try {
      const news = await db.News.findAll({
        where: {
          newsCategory: newsCategory,
        },
        order: [["createdAt", "DESC"]],
      });
      return res.json(news);
    } catch (err) {
      console.log(err);
      return res.status(404);
    }
  },
  //get news headlines
  getAllHeadline: async (req, res) => {
    const { topic } = req.body;
    try {
      const news = await db.News.findAll({
        attributes: ["topic"],
        order: [["createdAt", "DESC"]],
      });
      return res.json(news);
    } catch (err) {
      console.log(err);
      return res.status(404);
    }
  },

  getAllNews: async (req, res) => {
    try {
      const news = await db.News.findAll();
      const count = await db.News.count();
      const response = {
        error: false,
        statusCode: 200,
        message: "Data retrieved sucessfully! ",
        data: {
          data: news,
          total: count,
        },
      };
      return res.json(response);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  updateNews: async (req, res) => {
    const getid = req.body.id;
    console.log("Update id" + getid);
    try {
      const updateTask = await db.News.update(req.body, {
        where: { id: getid },
      });
      if (updateTask >= 1) {
        return res.json({
          message: "News Updated",
        });
      } else {
        return res.json({
          message: "Error Updating News",
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  deleteNews: async (req, res) => {
    const getid = req.body.id;
    console.log("Delete Task id " + getid);
    try {
      const deleteTask = await db.News.destroy({ where: { id: getid } });
      if (deleteTask >= 1) {
        return res.json({
          message: "News Deleted",
        });
      } else {
        return res.json({
          message: "Error Deleting News",
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
