const mongoose = require("mongoose");

const connect = () => {
  if (process.env.NODE_ENV === "development") {
    mongoose.set(debug, true);
  }
  const { MONGO_ID, MONGO_PASSWORD } = process.env;

  mongoose
    .connect(`mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`, {
      dbName: "discord",
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongodb connected...!"))
    .catch((error) => {
      console.error(error);
    });
};

mongoose.connection.on("error", (error) => {
  console.error(`Mongodb error: ${error}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB is disconnected. Attempt to reconnect.");
});

module.exports = connect;
