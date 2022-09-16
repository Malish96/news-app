const db = require("../models");

module.exports = {
  validateUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const validatedUser = await db.Users.findOne({
        limit: 1,
        where: {
          email: email,
          password: password,
        },
        order: [["createdAt", "DESC"]],
      });
      if (!validatedUser) {
        const response = {
          error: false,
          statusCode: 200,
          message: "Error username or password incorrect",
          data: {},
        };
        res.status(404).json(response);
      }
      const response = {
        error: false,
        statusCode: 200,
        message: "Editor sucessfully validated",
        data: validatedUser,
      };

      return res.status(200).json(response);
    } catch (err) {
      return res.status(404);
    }
  },

  addEditor: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = await db.Users.create({
        name,
        email,
        password,
        userRole: 2,
      });
      return res.json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
