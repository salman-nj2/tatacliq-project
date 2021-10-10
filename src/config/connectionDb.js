
//server host name
const HOST = "localhost";

//remote database name
// const DATABASE = "bluemercurydb";
const DATABASE = "myFirstDatabase";

//database credentials
const USERNAME = "nikhil";
const PASSWORD = "nikhil";

//default app port
const PORT = 3000;

//default connection url
// const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.1bi7u.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;
const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.m8jlw.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

//mongoose options for connection
const MONGOOSE_OPTIONS = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}

module.exports = {HOST, PORT, DATABASE, USERNAME, PASSWORD, DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS}