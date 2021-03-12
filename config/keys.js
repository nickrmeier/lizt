if (process.env.NODE_ENV === 'production') {
    // in production, return production keys
    module.exports = require('./prod');
} else {
    // return development keys
    module.exports = require('./dev');
}
