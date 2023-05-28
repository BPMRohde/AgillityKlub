const { executeSQL } = require('../model/dbConnect');

const getStaevner = (req, res) => {
    (async () => {
        let stævner = await executeSQL('select * from staevne');
        console.log(stævner);
        res.render('admin', {stævner: stævner});
    })();
}

const create = (req, res) => {
    (async () => {
        await executeSQL('insert into stævne (navn, dato) VALUES('+"'"+req.body.navn+"'"+', '+"'"+req.body.dato+"'"+')');
        let stævner = await executeSQL('select * from staevne');
        console.log(stævner);
        res.render('admin', {stævner: stævner});
    })();
}

const deleteStaevne = (req, res) =>{
    (async () => {
        await executeSQL('delete From Contestans Where staevneid= '+req.params.id);
        await executeSQL('delete From staevneKategori Where staevneid='+req.params.id);
        await executeSQL('delete From staevne Where id='+req.params.id);
        let stævner = await executeSQL('select * from staevne');
        console.log(stævner);
        res.render('admin', {stævner: stævner});
    })();
}

module.exports = {
    getStaevner,
    create,
    deleteStaevne
}