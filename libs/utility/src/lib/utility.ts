export function requireLogin(req, res, next) {
    req.get("Authorization") === "PASSWORD123" ? next() : res.sendStatus(401)
}