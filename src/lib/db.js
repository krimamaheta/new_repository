const{username,password}=process.env

//      const username=process.env.username;
export const connectionstr="mongodb+srv://"+username+":"+password+"@cluster0.lqaocmn.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"