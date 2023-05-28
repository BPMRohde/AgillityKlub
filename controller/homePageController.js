const { executeSQL } = require('../model/dbConnect');

const getStaevner = (req, res) => {
    (async () => {
        let stævner = await executeSQL('select * from staevne');
        console.log(stævner);
        res.render('index', {stævner: stævner});
    })();
}
module.exports = {
    getStaevner
}