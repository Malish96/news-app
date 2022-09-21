const db = require("../models");

module.exports = {
  addNewsCategory: async (req, res) => {
    const { name } = req.body;
    try {
      const newsCategory = await db.NewsCategories.create({ name });
      return res.json(newsCategory);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },


  getAllNewsCategory: async (req, res) => {
    try {
      const newsCategory = await db.NewsCategories.findAll();
      return res.json(newsCategory);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
