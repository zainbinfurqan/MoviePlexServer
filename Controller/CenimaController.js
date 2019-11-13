db = require('../Connection/Connection');

exports.getAllCenima = async (req, res) => {
    console.log("get all cenimas")
    try {
        await db.beginTransaction(function (err) {
            if (err) { throw err; }

            db.query('SELECT * FROM cenimasdetails', (err, result) => {
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
                        console.log("result")
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

}

exports.postCenima = async (req, res) => {
    // console.log("get all cenimas")
    try {
        // const result = await db.query('SELECT * FROM some_table');
        res.send("add cenima")
        // console.log(result)

    }
    catch (err) {
        console.log(err)
    }
}

exports.putCenima = async (req, res) => {
    // console.log("get all cenimas")
    try {
        // const result = await db.query('SELECT * FROM some_table');
        res.send("update cenima")
        // console.log(result)

    }
    catch (err) {
        console.log(err)
    }
}

exports.deletCenima = async (req, res) => {
    // console.log("get all cenimas")
    try {
        // const result = await db.query('SELECT * FROM some_table');
        res.send("delete cenima")
        // console.log(result)

    }
    catch (err) {
        console.log(err)
    }
}