const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
const webSocket = require("./socket");

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const mongodbConnect = require("./models/index");
mongodbConnect();

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log(__dirname, "/index.html");
  res.sendFile(__dirname + "/index.html");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/servers", require("./routes/server"));
app.use("/api/servers", require("./routes/channel"));
app.use("/api/servers", require("./routes/messages"));

const server = app.listen(port, () =>
  console.log(`App is listening on port ${port}`)
);
webSocket(server, app);
