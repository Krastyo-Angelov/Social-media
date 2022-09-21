const router = require("express").Router();
const User = require("../models/User");

//РЕГИСТРАЦИЯ
router.post("/register", async (req, res) =>{
    const user = await new User({
        username: "Krastyo",
        email: "krastyoangelov123@gmail.com",
        password: "4400",
    })

    user.save();
});

module.exports = router;