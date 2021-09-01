const glob = require("glob")

// options is optional
exports.handler = () => { 
    glob("/*", function (err, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    for (filename in files) {
      console.log(filename);
    };

    return {
      success: true,
    }
  })
}
