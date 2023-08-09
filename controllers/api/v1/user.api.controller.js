const db = require('../../../models');
const User = db.users;

module.exports = {
    login: async (req, res) => {
        try {
            // const userPassword = parseInt(req.body.password);

            const user = await User.findOne({
                where: {
                    password: req.body.password
                }
            });

            if (!user) {
                return res.status(404).json({ msg: "User Tidak Ditemukan" });
            }

            const userId = user.id;

            res.status(200).json({ 
                msg: "Login berhasil",
                data: {
                    userId: userId,
                    username: user.username
                }
            });

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}