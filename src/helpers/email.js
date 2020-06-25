import template from "./template";

export default ({
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
}) => {
  const body = template({
    fullName,
    birthDate,
    phone,
    guardianName,
    guardianPhone,
    parentsId,
    district,
    school,
    year,
    topic,
    essay
  });

  const msg = {
    to: process.env.USER_EMAIL,
    from: process.env.ADMIN_EMAIL,
    subject: "Edified Generation Rwanda Application Submission",
    text: "Edified Generation Rwanda application",
    html: body
  };
  return msg;
};
