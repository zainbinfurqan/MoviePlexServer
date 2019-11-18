db = require('../Connection/Connection');


exports.SaveUserLocation = async (req, res) => {
    console.log(req.body)
    await res.send("userLocation")
}

