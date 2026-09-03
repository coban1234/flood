import { xmlUrlset, urls } from "../data/urls";

export function GET() {
  return new Response(xmlUrlset(urls), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
