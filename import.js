const contentfulImport = require("contentful-import");

const options = {
  contentFile: "./contentful-export.json",
  spaceId: "xxx",
  managementToken: "xxx-xxx-xxx-xxx",
  environmentId: "develop",
};

contentfulImport(options)
  .then(() => {
    console.log("Data imported successfully");
  })
  .catch((err) => {
    console.log("Oh no! Some errors occurred!", err);
  });
