"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSignedUrl = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

_awsSdk["default"].config.region = "us-east-2";
var S3_BUCKET = process.env.S3_BUCKET;

var getSignedUrl = function getSignedUrl(req, res) {
  var s3 = new _awsSdk["default"].S3();
  var fileName = req.query["file-name"];
  var fileType = req.query["file-type"];
  var s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read"
  };
  s3.getSignedUrl("putObject", s3Params, function (err, data) {
    if (err) {
      return res.status(400).send({
        err: "Can not get signed request"
      });
    }

    var returnData = {
      signedRequest: data,
      url: "https://".concat(S3_BUCKET, ".s3.amazonaws.com/").concat(fileName)
    };
    res.status(201).send({
      msg: "Signed url request returned",
      data: returnData
    });
  });
};

exports.getSignedUrl = getSignedUrl;
//# sourceMappingURL=files.js.map