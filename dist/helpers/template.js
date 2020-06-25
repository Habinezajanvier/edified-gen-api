"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var template = function template(_ref) {
  var fullName = _ref.fullName,
      birthDate = _ref.birthDate,
      phone = _ref.phone,
      guardianName = _ref.guardianName,
      guardianPhone = _ref.guardianPhone,
      parentsId = _ref.parentsId,
      year = _ref.year,
      topic = _ref.topic,
      district = _ref.district,
      school = _ref.school,
      essay = _ref.essay;
  return "<!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <link\n          href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap\"\n          rel=\"stylesheet\"\n        />\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"/styles/styles.css\" />\n        <style>\n          body {\n            font-family: \"Roboto\", sans-serif;\n            font-size: 14px;\n          }\n          * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n          }\n          .container {\n            width: 80%;\n            margin: 0 auto;\n          }\n          header {\n            width: 100%;\n            margin-left: 20px;\n            margin-right: 20px;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n          }\n          h1 {\n            font-weight: bold;\n            font-size: 18pt;\n            color: rgb(37, 172, 228);\n          }\n          .content {\n            margin: 40px 20px;\n          }\n          p {\n            line-height: 30px;\n          }\n          h2 {\n            margin: 20px 0 10px 0;\n            font-size: 16px;\n          }\n          ul {\n            margin-left: 40px;\n          }\n          .ending {\n            margin: 40px 0;\n          }\n          a {\n            text-decoration: none;\n            font-weight: bold;\n            color: black;\n          }\n        </style>\n        <title>Covid-19 competition</title>\n      </head>\n      <body>\n        <div class=\"container\">\n          <header>\n            <h1>COVID-19 Response competition</h1>\n          </header>\n          <div class=\"content\">\n            <p>\n              Hello Admin<br />\n              Hoping you are doing well<br />\n              This is the submission for Covid-19 essay competition by  <span>".concat(fullName, "</span> \n            </p>\n            <h4>The information about the application are:</h4>\n            <ul>\n              <li id=\"name\">Applicant's full name: ").concat(fullName, "</li>\n              <li id=\"phone\">Applicant's birth date: ").concat(birthDate, "</li>\n              <li id=\"phone\">Applicant's phone: ").concat(phone, "</li>\n              <li id=\"email\">Guardian/parent's full name:").concat(guardianName, "</li>\n              <li id=\"email\">Guardian/parent's phone:").concat(guardianPhone, "</li>\n              <li id=\"email\">Guardian/parent's Id:").concat(parentsId, "</li>\n              <li id=\"college\">Applicant's district: ").concat(district, "</li>\n              <li id=\"college\">Applicant's school: ").concat(school, "</li>\n              <li id=\"level\">Year of study: ").concat(year, "</li>\n              <li id=\"topic\">Topic selected: ").concat(topic, "</li>\n            </ul>\n            <div class=\"ending\">\n              <h4>Below is the essay:</h4>\n              <p>\n                ").concat(essay, "\n              </p>\n            </div>\n          </div>\n        </div>\n      </body>\n    </html>\n    ");
};

var _default = template;
exports["default"] = _default;
//# sourceMappingURL=template.js.map