//TODO - create model for if we don't find the userID to create an entry for user - below is closeish?
export async function register(userID) {
    try {
        const [user] = await query("SELECT * FROM user WHERE user.username = ?", [userID]);
        if (user) {
            return { error: "userID is already in use", success: false };
        }
        const uuid = uuidv4();
        await query("INSERT INTO user (userID , uuid) VALUES ( ? , ?)", [userID, uuid]);
        return { data: "succesfully registered", success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

//TODO - remove password check , we're going to rely on google auth and then auto add an entry for them if they don't exist
export async function login(username, password) {
    try {
        const [user] = await query("SELECT * FROM user WHERE user.username = ?", [username]);
        if (!user) {
            return { error: "invalid Username or password", success: false };
        }
        const match = bcrypt.compare(password, user.password);
        if (!match) return { error: "Invalid username or Password", success: false };
        //get by userID and if not an error , send back
        const { data, error } = await getByUser(user.id);
        if (error) {
            console.error(err);
            return { error: "Something went wrong 🤷‍♂️", success: false };
        }
        return {
            data: { user: { username: user.username }, favorites: data },
            success: true,
            id: user.id,
        };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}
