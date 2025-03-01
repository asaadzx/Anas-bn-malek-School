
import { serve } from "https://deno.land/std/http/server.ts";

const port = 3030;
console.log(`HTTP webserver running. Access it at: http://0.0.0.0:${port}/`);

serve(async (request) => {
  const url = new URL(request.url);
  let filePath = url.pathname;

  if (filePath === "/") {
    filePath = "/index.html";
  }

  try {
    const file = await Deno.readFile(`.${filePath}`);
    
    // Determine content type based on file extension
    const contentType = getContentType(filePath);
    
    return new Response(file, {
      status: 200,
      headers: {
        "content-type": contentType,
      },
    });
  } catch {
    return new Response("404 - Not Found", { status: 404 });
  }
}, { port });

// Helper function to determine content type
function getContentType(path: string): string {
  const extension = path.split('.').pop()?.toLowerCase();
  
  const contentTypes: Record<string, string> = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon'
  };
  
  return contentTypes[extension || ''] || 'text/plain';
}
