//entry -> output
console.log(__dirname);

module.exports = {
    entry: './src/app.js' //where it should start
    output: {
        path:'', //absolute path
        filename:'bundle.js'
    }
};