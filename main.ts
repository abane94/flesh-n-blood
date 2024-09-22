import { Env, Hono, MiddlewareHandler } from "https://deno.land/x/hono/mod.ts";
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";
import api from "./server/api.ts";
const __dirname = new URL(".", import.meta.url).pathname.substring(1);
import { join } from "https://deno.land/std/path/mod.ts";
import { parseArgs } from "https://deno.land/std/cli/mod.ts";

console.log(`__dirname: ${__dirname}`);
console.log(
  `--deno-compiled-exe: ${Deno.args.includes("--deno-compiled-exe")}`,
);
console.log(Deno.args);
console.log(`cwd: ` + Deno.cwd());

const flags = parseArgs(Deno.args, {
  // boolean: ["help", "color"],
  string: ["host", "port"],
  default: { host: "0.0.0.0", port: "8000" },
});

const isCompiled = Deno.args.includes("--deno-compiled-exe");

const app = new Hono();
app.route("/api", api);

const staticRoot = isCompiled
  ? join(Deno.cwd(), "client")
  : (__dirname.includes("flesh-n-blood")
    ? "/client/dist/"
    : `flesh-n-blood/client/dist/`);

app.use(
  "/*" as unknown as MiddlewareHandler<Env, never, {}>,
  serveStatic({ root: staticRoot }) as unknown as MiddlewareHandler<
    Env,
    never,
    {}
  >,
);
app.get(
  "/",
  serveStatic({
    path: join(staticRoot, "index.html"),
  }) as unknown as MiddlewareHandler<
    Env,
    never,
    {}
  >,
);

const port = Number.parseInt(flags.port);
Number.isNaN(port) ? 8000 : port;

Deno.serve({
  hostname: flags.host || "0.0.0.0",
  port: Number.isNaN(port) ? 8000 : port,
}, app.fetch);
