const fs = require('fs')

exports.handler = () => {
    fs.readFile('/opt/lambdaHelper.js', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data);
    });

    return {
        success: true
    }
}
