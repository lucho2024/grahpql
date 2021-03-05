import express from "express";
import { graphqlHTTP } from "express-graphql"; // ES6
import { connect } from "./database";
import schema from './schema'


const app = express();
connect();

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});



app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    context:{
      messageId:"test"
    }
  })
);

app.listen(2000, () => console.log("Server on port 2000"));
