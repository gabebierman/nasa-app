export default function validateData(req, res, next) {
    const { userID } = req.body;
    if (!userID) {
        return res.send({
            error: "UserID does not meet requirements. Please try signing in again",
            success: false,
        });
    }
    return next();
}
