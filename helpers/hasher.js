const bcrypt = require("bcryptjs");

const hash = (pass) => {
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(pass, salt);
  return hashed;
};

const compare = (pass, dbPass) => {
  const compared = bcrypt.compareSync(pass, dbPass);
  return compared;
};

module.exports = {
  hash,
  compare,
};
