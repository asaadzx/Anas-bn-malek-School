import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.114.0/http/file_server.ts";

const server = serve({ port: 3030 });

console.log("HTTP webserver running. Access it at: http://localhost:3030/");

for await (const request of server) {
  const url = new URL(request.url, `http://${request.headers.get("host")}`);
  let filePath = url.pathname;

  if (filePath === "/") {
    filePath = "/index.html";
  }

  try {
    const response = await serveFile(request, `.${filePath}`);
    request.respond(response);
  } catch {
    request.respond({ status: 404, body: "404 - Not Found" });
  }
}