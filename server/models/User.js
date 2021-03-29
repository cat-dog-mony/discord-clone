const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "이름이 입력되지 않았습니다. 이름을 입력해주세요"],
    minlength: [2, "이름은 2자 이상 입력해야 합니다."],
    maxlength: [20, "이름은 최대 20자까지 입력할 수 있습니다."],
  },
  email: {
    type: String,
    required: [true, "이메일이 입력되지 않았습니다. 이메일을 입력해주세요"],
    unique: true, //왜 이건 동작안하지...
  },
  password: {
    type: String,
    minlength: [8, "비밀번호는 2자 이상 입력해야 합니다."],
  },
  image: String,
});

userSchema.pre("save", async function (next) {
  const saltRounds = 10;
  try {
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
      next();
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = function (password) {
  const user = this;
  return new Promise(async function (resolve, reject) {
    try {
      const result = await bcrypt.compare(password, user.password);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

userSchema.methods.generateToken = function () {
  let user = this;
  return new Promise(async function (resolve, reject) {
    try {
      const token = await jwt.sign(
        user._id.toHexString(),
        process.env.SECRET_TOKEN
      );
      user.token = token;
      await user.save();
      resolve(token);
    } catch (error) {
      reject(error);
    }
  });
};

userSchema.statics.findByToken = function (token) {
  let user = this;
  return new Promise(async (resolve, reject) => {
    try {
      const decode = jwt.verify(token, `${process.env.SECRET_TOKEN}`);
      console.log("decoded:", decode);
      user = await user.findOne({ _id: decode });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = mongoose.model("User", userSchema);
