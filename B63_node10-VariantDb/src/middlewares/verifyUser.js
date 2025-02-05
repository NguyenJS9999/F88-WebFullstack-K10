import jwt from "jsonwebtoken";
import User from "../models/User.js";
import env from "../configs/config.env.js";

async function verifyUser(req, res, next) {
  // Buoc 1: Kiem tra token có được gửi trong headers hay không?
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  console.log(token);
  console.log(env.JWT_SECRET);
  const decoded = jwt.verify(token, env.JWT_SECRET);
  if (!decoded) {
    return res.status(401).json({
      message: "Un Authorized",
    });
  }

  // Bước 2: Xác thực user dựa vào payload, phân quyền
  const userExist = await User.findById(decoded._id);
  if (!userExist || userExist.role !== "admin") {
    return res.status(401).json({
      message: "Un Authorized",
    });
  }

  next();
}

export default verifyUser;
