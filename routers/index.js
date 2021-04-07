const router = require("express").Router();
const user = require("./userRouter");

router.use("/users", user);

module.exports = router;
