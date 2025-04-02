// src/mirage/server.ts
import { createServer } from "miragejs";
import { coachRoutes } from "./routes/coachroutes";

export function makeMockServer() {
  return createServer({
    routes() {
      this.namespace = "api"; // ✅ Matches /api
      coachRoutes.call(this);
    },
  });
}
