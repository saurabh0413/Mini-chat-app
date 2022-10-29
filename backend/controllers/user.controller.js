const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async () => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password || !pic) {
    res.staus(400);
    throw new Error("Please enter all fields");
  }

  
});
