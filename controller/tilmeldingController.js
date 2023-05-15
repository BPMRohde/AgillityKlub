const registerCompetitor = (req, res) => {
    /* 
    (async () =>{
        let articles = await executeSQL('Insert Into')
        res.status(200).json({'article': articles})
    })();
    */
   let info = req.body;
   res.json({Info: info})
   console.log(req.body)
   console.log('Deltager oprettet');
}

module.exports = {
    registerCompetitor
}