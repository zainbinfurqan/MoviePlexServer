db = require('../Connection/Connection');


exports.SaveUserLocation = async (req, res) => {
    console.log(req.body.latitude)
    //  res.send({msg:'userlocation'})
    await db.beginTransaction(function (err) {
        if (err) { throw err; }

        db.query(`INSERT INTO userlocation(Longitude, Latitude) VALUES ('${req.body.longitude}','${req.body.latitude}')`, (err, result) => {
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
                    await res.send({ msg: 'done' })
                }
                console.log('Transaction Complete.');
            });
        });
    });
}

