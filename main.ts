import { Hono } from "https://deno.land/x/hono/mod.ts";
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";
import api from "./server/api.ts";
const __dirname = new URL(".", import.meta.url).pathname.substring(1);
import { join } from "https://deno.land/std/path/mod.ts";

console.log(`__dirname: ${__dirname}`);

const app = new Hono();
app.route("/api", api);

const staticRoot = __dirname.includes("flesh-n-blood")
  ? "/client/dist/"
  : `flesh-n-blood/client/dist/`;
app.use("/*", serveStatic({ root: staticRoot }));
app.get("/", serveStatic({ path: join(staticRoot, "index.html") }));

Deno.serve({ hostname: "0.0.0.0" }, app.fetch);
