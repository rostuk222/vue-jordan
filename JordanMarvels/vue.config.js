const path = require("path");

module.exports = {
    filenameHashing: false,
    outputDir: path.resolve(__dirname, "../vue-jordan"),
    devServer: {
        https: true
    }
}