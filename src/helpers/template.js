const template = ({
  fullName,
  birthDate,
  phone,
  guardianName,
  guardianPhone,
  parentsId,
  year,
  topic,
  district,
  school,
  essay
}) => `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/styles/styles.css" />
        <style>
          body {
            font-family: "Roboto", sans-serif;
            font-size: 14px;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .container {
            width: 80%;
            margin: 0 auto;
          }
          header {
            width: 100%;
            margin-left: 20px;
            margin-right: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          h1 {
            font-weight: bold;
            font-size: 18pt;
            color: rgb(37, 172, 228);
          }
          .content {
            margin: 40px 20px;
          }
          p {
            line-height: 30px;
          }
          h2 {
            margin: 20px 0 10px 0;
            font-size: 16px;
          }
          ul {
            margin-left: 40px;
          }
          .ending {
            margin: 40px 0;
          }
          a {
            text-decoration: none;
            font-weight: bold;
            color: black;
          }
        </style>
        <title>Covid-19 competition</title>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>COVID-19 Response competition</h1>
          </header>
          <div class="content">
            <p>
              Hello Edified Generation Rwanda<br />
              Hoping you are doing well<br />
              This is the submission for Covid-19 essay competition by  <span>${fullName}</span> 
            </p>
            <h4>The information about the application are:</h4>
            <ul>
              <li id="name">Applicant's full name: ${fullName}</li>
              <li id="phone">Applicant's birth date: ${birthDate}</li>
              <li id="phone">Applicant's phone: ${phone}</li>
              <li id="email">Guardian/parent's full name:${guardianName}</li>
              <li id="email">Guardian/parent's phone:${guardianPhone}</li>
              <li id="email">Guardian/parent's Id:${parentsId}</li>
              <li id="college">Applicant's district: ${district}</li>
              <li id="college">Applicant's school: ${school}</li>
              <li id="level">Year of study: ${year}</li>
              <li id="topic">Topic selected: ${topic}</li>
            </ul>
            <div class="ending">
              <h4>Below is the essay:</h4>
              <p>
                ${essay}
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;

export default template;
