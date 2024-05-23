// import * as signalR from '@microsoft/signalr';

// class SignalRService {
//     private connection: signalR.HubConnection;

//     constructor() {
//         this.connection = new signalR.HubConnectionBuilder()
//             .withUrl("https://localhost:44340/notificationhub")
//             .configureLogging(signalR.LogLevel.Information)
//             .build();

//         this.connection.on("ReceiveNotification", (message) => {
//             this.handleNotification(message);
//         });
//     }

//     async startConnection() {
//         try {
//             await this.connection.start();
//             console.log("SignalR Connected.");
//         } catch (err) {
//             console.log("SignalR Connection Error: ", err);
//             setTimeout(() => this.startConnection(), 5000);
//         }
//     }

//     handleNotification(message: string) {
//         // Handle the notification here
//         alert(message);
//     }
// }

// export default SignalRService;

import * as signalR from '@microsoft/signalr';
'use client';
import { useEffect, useState } from "react";
import {
HubConnection,
HubConnectionBuilder,
LogLevel,
} from "@microsoft/signalr";


type Message = {
sender: string;
content: string;
sentTime: Date;
};

const NotificationAlert = () => {
const [connection, setConnection] = useState<HubConnection | null>(null);

useEffect(() => {
const connect = new HubConnectionBuilder()
.withUrl("https://localhost:44340/notificationhub")
.withAutomaticReconnect()
.configureLogging(LogLevel.Information)
.build();
setConnection(connect);
}, []);

useEffect(() => {
if (!connection) return;
connection.start()
.then(() => {
console.log("SignalR connection established successfully.");
connection.on("ReceiveNotification", (notification) => {
console.log(notification);
alert(notification);
});
// connection.invoke("RetrieveMessageHistory");
})
.catch((err) => console.error("Error while connecting to SignalR Hub:", err));

return () => {
if (connection) {
connection.off("SendMessage");
}
};
}, [connection]);

};

export default NotificationAlert;
// const url="https://localhost:44340/notificationhub"
// class Connector {
//     private connection: signalR.HubConnection;
//     private static instance: Connector;

//     private constructor() {
//         this.connection = new signalR.HubConnectionBuilder()
//             .withUrl(url)
//             .withAutomaticReconnect()
//             .configureLogging(signalR.LogLevel.Information)
//             .build();

//         this.connection.start()
//             .then(() => console.log("SignalR Connected."))
//             .catch(err => console.error("SignalR Connection Error: ", err));
//     }

//     public static getInstance(): Connector {
//         if (!Connector.instance) {
//             Connector.instance = new Connector();
//         }
//         return Connector.instance;
//     }

//     public onMessageReceived(callback: (username: string, message: string) => void): void {
//         this.connection.on("messageReceived", (username: string, message: string) => {
//             callback(username, message);
//         });
//     }

//     public sendMessage(username: string, message: string): void {
//         this.connection.send("newMessage", username, message)
//             .then(() => console.log("Message sent."))
//             .catch(err => console.error("Error sending message: ", err));
//     }

//     public stopConnection(): void {
//         this.connection.stop()
//             .then(() => console.log("SignalR Connection Stopped."))
//             .catch(err => console.error("Error stopping SignalR connection: ", err));
//     }
// }

// export default Connector.getInstance();
// class SignalRService {
//     private connection: signalR.HubConnection;

//     constructor() {
       
//         this.connection = new signalR.HubConnectionBuilder()
//             .withUrl("https://localhost:44340/notificationhub") // Ensure this URL matches the hub endpoint on the server
//             .configureLogging(signalR.LogLevel.Information)
//             .build();

//         this.connection.on("ReceiveNotification", (message) => {
//             this.handleNotification(message);
//         });
//     }

//     async startConnection() {
//         try { 
//             await this.connection.start();
//             console.log("SignalR Connected.");
//         } catch (err) {
//             console.log("SignalR Connection Error: ", err);
//             setTimeout(() => this.startConnection(), 5000);
//         }
//     }
//     async stopConnection() {
//         try {
//             await this.connection.stop();
//             console.log("SignalR Connection Stopped.");
//         } catch (err) {
//             console.log("Error while stopping SignalR connection: ", err);
//         }
//     }

//     handleNotification(message: string) {
//         // Handle the notification here
//         alert(message);
//     }
// }

// export default SignalRService;