const { username, password } = process.env;

// export const connectionstr = `mongodb+srv://+${username}+:+${password}+@cluster0.3ljlzz4.mongodb.net/authDb?retryWrites=true&w=majority&appName=Cluster0`;
export const connectionstr = `mongodb+srv://${username}:${password}@cluster0.3ljlzz4.mongodb.net/authDb?retryWrites=true&w=majority&appName=Cluster0`;
