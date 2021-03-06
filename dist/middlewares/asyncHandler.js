"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var asyncHandler = function asyncHandler(cb) {
  return async function (req, res, next) {
    try {
      await cb(req, res, next);
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        err: "Something went wrong on the server",
        message: error.message
      });
    }
  };
};

var _default = asyncHandler;
exports["default"] = _default;
//# sourceMappingURL=asyncHandler.js.map