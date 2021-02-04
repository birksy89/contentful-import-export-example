const contentfulExport = require("contentful-export");

const options = {
  spaceId: "xxx",
  managementToken: "xxx-xxx-xxx-xxx",
  environmentId: "develop",
  queryEntries: ["content_type=Blog"],
  //   Ignore assets - Find with non-existant ID
  //   queryAssets: ["sys.id=0000"],
  contentOnly: true,
  //   Is the same as:
  //   skipContentModel: true,
  //   skipEditorInterfaces: true,
  //   skipRoles: true,
  //   skipWebhooks: true,
};

contentfulExport(options)
  .then((result) => {
    console.log("Your space data:", result);
  })
  .catch((err) => {
    console.log("Oh no! Some errors occurred!", err);
  });
