const {
  selectAllUser,
  register,
  login,
} = require("../controller/userController");

const router = require("express").Router();

router.get("/selectAll", selectAllUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
