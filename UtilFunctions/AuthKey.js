const bcrypt = require('bcrypt');
const saltRounds = 9;

const myPlaintextPassword = (Math.floor(100000 + Math.random() * 9000000)).toString()

const GenerateAuthkey = async () => {
    let abc;
    await bcrypt.hash(myPlaintextPassword, saltRounds).then(function (hash) {
        abc = hash
    });
    return abc;
}

module.exports = {
    _baseAuthKey: GenerateAuthkey,

}
