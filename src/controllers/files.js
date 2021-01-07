import aws from "aws-sdk";

aws.config.region = "us-east-2";

const { S3_BUCKET } = process.env;

export const getSignedUrl = (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query["file-name"];
    const fileType = req.query["file-type"];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: "public-read"
    };

    s3.getSignedUrl("putObject", s3Params, (err, data) => {
      if (err) {
        return res.status(400).send({ err: "Can not get signed request" });
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      res.status(201).send({ msg: "Signed url request returned", data: returnData });
    });
  }
