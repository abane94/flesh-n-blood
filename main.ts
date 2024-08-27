import {
  createHelperFunctions,
  type TaggedUnion,
} from "npm:ts-tagged-union@1.1.1";

import { Hono } from "https://deno.land/x/hono/mod.ts";
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";
import api from "./server/api.ts";
const __dirname = new URL(".", import.meta.url).pathname.substring(1);
import { join } from "https://deno.land/std/path/mod.ts";

console.log(`__dirname: ${__dirname}`);

// Define a tagged union type
// export type Color = TaggedUnion<{
//     rgb: { r: number; g: number; b: number }
//     primary: {}
//     secondary: {}
//   }>

//   // Get helper functions for the type
//   export const Color = createHelperFunctions<Color>()

//   // Create with a data constructor
//   const rgb = Color.rgb({ r: 255, g: 31, b: 0 })
//   const primary = Color.primary() // {} can be omitted

//   console.log(rgb) // { r: 255, g: 31, b: 0, [Symbol(defaultTagKey)]: 'rgb' }
//   console.log(primary) // { [Symbol(defaultTagKey)]: 'primary' }

const db: Record<string, any> = {};

const app = new Hono();
app.route("/api", api);
// app.use('/*', serveStatic({ root: join(__dirname, 'client', 'dist').substring(1) }));
// app.get('', serveStatic({ path: join(__dirname, 'client', 'dist', 'index.html').substring(1) }));

const staticRoot = __dirname.includes("flesh-n-blood")
  ? "/client/dist/"
  : `flesh-n-blood/client/dist/`;
// app.use("/*", serveStatic({ root: `flesh-n-blood/client/dist/` }));
// app.get("/", serveStatic({ path: "flesh-n-blood/client/dist/index.html" }));
app.use("/*", serveStatic({ root: staticRoot }));
app.get("/", serveStatic({ path: join(staticRoot, "index.html") }));

// app.get('/', (c) => c.text('Hello Deno!'));

// app.get('/api/hello', (c) => {
//   return c.json({
//     ok: true,
//     message: 'Hello Hono!',
//   })
// });

// app.get('/api/join', (c) => {
//   const id = guid();
//   db[id] = true;
//   return c.json({
//     ok: true,
//     message: 'Joined',
//     guid: id
//   });
// });

// app.get('/api/list', (c) => {

//   return c.json({
//     ok: true,
//     message: 'List',
//     users: Object.keys(db)
//   });
// });

Deno.serve({ hostname: "0.0.0.0" }, app.fetch);

// function guid() {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//       const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
//       return v.toString(16);
//   });
// }
