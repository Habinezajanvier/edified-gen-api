"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Projects",
      [
        {
          projectUrl:
            "https://edified-programs-docs.s3.amazonaws.com/programs/Scholarship.pdf",
          description:
            "This project benefit vulnerable, brilliant and most disadvantaged youth in both primary and secondary schools to access education with.",
          title: "SCHOLARSHIPS PROJECT",
          projectThumbnail:
            "https://edgen-projects.s3.amazonaws.com/scholarship.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectUrl:
            "https://edified-programs-docs.s3.amazonaws.com/programs/SEIZE+EMPLOYMENT.pdf",
          description:
            "The “Seize Employment project is mentorship&amp; youth empowerment program  ...",
          title: "SEIZE EMPLOYMENT PROJECT",
          projectThumbnail: "https://edgen-projects.s3.amazonaws.com/seize-emp.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectUrl:
            "https://edified-programs-docs.s3.amazonaws.com/programs/Girls+in+ICT.pdf",
          description:
            "International Girls in ICT Day, an initiative backed by all ITU Member States in ITU Plenipotentiary Resolution.  ...",
          title: "GIRLS IN ICT PROJECT",
          projectThumbnail: "https://edgen-projects.s3.amazonaws.com/girls-ict.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectUrl:
            "https://edified-programs-docs.s3.amazonaws.com/programs/Together+We+can+Project.pdf",
          description:
            "Together we can project is a school-based project which is being implemented by Edified  ...",
          title: "TOGETHER WE CAN PROJECT",
          projectThumbnail:
            "https://edgen-projects.s3.amazonaws.com/together-we.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectUrl:
            "https://edified-programs-docs.s3.amazonaws.com/programs/Annual+Summit.pdf",
          description:
            "Since 2015, Edified Generation Rwanda has been implementing different project aiming to strive for the socioeconomic development of Rwanda citizens especially youth...",
          title: "ANNUAL SUMMIT PROGRAM",
          projectThumbnail:
            "https://edgen-projects.s3.amazonaws.com/annual-summit.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects", null, {});
  }
};
