const glob = require("glob")

exports.handler = () => { 
    glob("/opt/*", function (err, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    if (err) {
        console.log(err)
    }

    console.log(files);
    //for (const filename of files) {
    //  console.log(filename);
    //};

    })

    return {
      success: true,
    }
}
