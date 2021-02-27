const asyncHandler = (cb) => async (req, res, next) => {
  try {
    await cb(req, res, next);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ err: "Something went wrong on the server", message: error.message });
  }
};

export default asyncHandler;
