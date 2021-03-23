"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Partners",
      [
        {
          name: "Kepler",
          logo: "https://edgen-projects.s3.amazonaws.com/Log2.png",
          partnerWeb: "https://www.kepler.org",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bdf",
          logo: "https://edgen-projects.s3.amazonaws.com/bdf_logo.png",
          partnerWeb: "https://www.bdf.rw/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "iAndm",
          logo: "https://edgen-projects.s3.amazonaws.com/i",
          partnerWeb: "https://www.imbank.com/rwanda/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "bk",
          logo: "https://edgen-projects.s3.amazonaws.com/bank-of-kigali-vector-logo.png",
          partnerWeb: "https://www.bk.rw/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "cnru",
          logo: "https://edgen-projects.s3.amazonaws.com/logo final.png",
          partnerWeb: "http://www.unesco.rw/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "rdb",
          logo: "https://edgen-projects.s3.amazonaws.com/RDB-Logo-1.jpg",
          partnerWeb: "https://rdb.rw/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "rca",
          logo: "https://edgen-projects.s3.amazonaws.com/RCA.png",
          partnerWeb: "http://www.rca.gov.rw/home/#.XvD1gpMza3I",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "reb",
          logo: "https://edgen-projects.s3.amazonaws.com/reb-rwanda.jpg",
          partnerWeb: "http://reb.rw/index.php?id=6",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "luckyBets",
          logo: "https://edgen-projects.s3.amazonaws.com/SPORT GAME RWANDA.png",
          partnerWeb: "http://luckybetrwanda.com/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "franceEmbacy",
          logo: "https://edgen-projects.s3.amazonaws.com/Log3.jpg",
          partnerWeb: "https://rw.ambafrance.org/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "ur",
          logo: "https://edgen-projects.s3.amazonaws.com/Log1.jpg",
          partnerWeb: "https://ur.ac.rw",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "ralc",
          logo: "https://edgen-projects.s3.amazonaws.com/Log4.jpg",
          partnerWeb: "https://www.ralc.gov.rw/index.php?id=2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "unesco",
          logo: "https://edgen-projects.s3.amazonaws.com/logo final.png",
          partnerWeb: "https://en.unesco.org/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "kigaliCity",
          logo: "https://edgen-projects.s3.amazonaws.com/Log6.png",
          partnerWeb: "https://kigalicity.gov.rw/index.php?id=5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "germanyEmbacy",
          logo: "https://edgen-projects.s3.amazonaws.com/Log7.png",
          partnerWeb: "https://kigali.diplo.de/rw-en",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "myCultrue",
          logo: "https://edgen-projects.s3.amazonaws.com/Log8.jpg",
          partnerWeb: "http://www.myculture.gov.rw/index.php?id=2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "ralsa",
          logo: "https://edgen-projects.s3.amazonaws.com/ralsa.jpeg",
          partnerWeb: "http://ralsa.myculture.gov.rw/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "dusome",
          logo: "https://edgen-projects.s3.amazonaws.com/dusome.jpg",
          partnerWeb: "http://rwandareads.rw/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "save",
          logo: "https://edgen-projects.s3.amazonaws.com/save the children.jpg",
          partnerWeb: "https://rwanda.savethechildren.net/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("Partners", null, {});
  }
};
