fs = require('fs');

module.exports = {
    PasswordReset: fs.readFileSync(__dirname + "/PasswordReset.html", "utf8"),
}
