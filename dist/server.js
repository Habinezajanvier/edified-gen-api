"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

/* eslint-disable no-unused-vars */
var app = (0, _express["default"])(); // const corsOptions = {
//   origin: /http:\/\/localhost:3000\/*/
// };

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());
app.use("/api", _routes["default"]);
app.use(function (req, res, next) {
  res.status(404).send({
    err: "Page not found"
  });
});
var PORT = process.env.PORT || 5000; // eslint-disable-next-line no-console

app.listen(PORT, function () {
  return console.log("App listening on 5000");
});
//# sourceMappingURL=server.js.map