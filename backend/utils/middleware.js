const jwt = require("jsonwebtoken")

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next()
}

const verifyToken = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    request.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return response.status(403).json({ error: "Invalid token" });
  }
};

module.exports = {
  requestLogger,
  verifyToken
}