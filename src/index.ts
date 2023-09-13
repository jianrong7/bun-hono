import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));
app.get("/ping", (c) => c.text("pong"));
app.get("/morecomplicatedping", (c) => {
  const hello = "hello";
  return c.json({ message: `${hello} pong` });
});

export default app;
