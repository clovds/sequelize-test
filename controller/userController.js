const { compare } = require("../helpers/hasher");
const { generateToken } = require("../helpers/jwt");
const { User } = require("../models");

module.exports = {
  selectAllUser: async (req, res, next) => {
    try {
      const response = await User.findAll({});
      return res
        .status(200)
        .send({ status: 200, message: "OK", data: response });
    } catch (err) {
      next(err);
    }
  },
  register: async (req, res, next) => {
    try {
      const { name, email, password, telephone } = req.body;
      const response = await User.create({
        name,
        email,
        password,
        telephone,
      });

      return res
        .status(200)
        .send({ status: 200, message: "OK", data: response });
    } catch (err) {
      next(err);
    }
  },
  login: async (req, res, next) => {
    try {
      const { name, password } = req.body;
      const user = await User.findOne({
        where: {
          name,
        },
      });

      if (!user) {
        const err = {
          name: "badRequest",
          message: "invalid email or password",
        };
        next(err);
      } else {
        const comparedPassword = compare(password, user.password);
        if (!comparedPassword) {
          const err = {
            name: "badRequest",
            message: "invalid email or password",
          };
          next(err);
        } else {
          const access_token = generateToken({
            id: user.id,
            email: user.email,
            name: user.name,
            telephone: user.telephone,
          });
          res.status(200).json({ access_token });
        }
      }
    } catch (err) {
      next(err);
    }
  },
};
