// Clear the login cookie token from the client
const handleLogout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.status(200).send({ message: "Logged out successfully" });
};

module.exports = {
  handleLogout,
};
