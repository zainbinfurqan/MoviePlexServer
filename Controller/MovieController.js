db = require('../Connection/Connection');

exports.getAllMovies = (req, res) => {
    // console.log("get all cenimas")
    res.send("get all movies")
}

exports.postMovie = (req, res) => {
    // console.log("get all cenimas")
    res.send("add movie")
}

exports.putMovie = (req, res) => {
    // console.log("get all cenimas")
    res.send("update movie")
}

exports.deletMovie = (req, res) => {
    // console.log("get all cenimas")
    res.send("delete movie")
}

exports.getMovieByCenimaId = async (req, res) => {
    console.log(req.params)
    try {
        await db.beginTransaction(function (err) {
            if (err) { throw err; }

            db.query(`SELECT * FROM moviedetails WHERE CenimaID =${req.params.cenimaId} `, (err, result) => {
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
                        // console.log(result)/
                        res.send(result)
                    }
                    console.log('Transaction Complete.');
                });
            });
        });
    }
    catch (err) {
        console.log(err)
    }
    // res.send("get movies by cenima id")
}