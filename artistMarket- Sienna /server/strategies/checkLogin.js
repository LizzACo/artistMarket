module.exports = function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.stats(400).json({
            "result": "error",
            "msg": "not authenticated"
        })
    }
}