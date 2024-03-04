const { usernamee, passwordd } = process.env;

export const connectionstr = "mongodb+srv://" + usernamee + ":" + passwordd + "@cluster0.lqaocmn.mongodb.net/foodDB?retryWrites=true&w=majority&appName=Cluster0"