db = require('../Connection/Connection');
const moment = require('moment')

exports.SaveUserLocation = async (req, res) => {
    // console.log(req)
    //  res.send({msg:'userlocation'})
    await db.beginTransaction(function (err) {
        if (err) { throw err; }
        let currentData = moment().format('YYYY-MM-DD HH-MM');
        db.query(`INSERT INTO userlocation(userIP,Longitude, Latitude,Time) VALUES 
        ('${req.body.ipAddress}','${req.body.longitude}','${req.body.latitude}','${currentData}')`, (err, result) => {
            if (err) {
                db.rollback(function () {
                    throw err;
                });
            }

            db.commit(function (err) {
                if (err) {
                    db.rollback(function () {
                        throw err;
                    });
                } else {
                    // console.log("result")
                    res.send({ msg: 'done' })
                }
                console.log('Transaction Complete.');
            });
        });
    });
}

