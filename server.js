const app = require("./src/app");
const PORT = process.env.PORT || 4000;

app.set("port", PORT);

app.listen(app.get("port"), () => {
  console.log("App is now running");
});
