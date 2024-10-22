import { getCollection } from "astro:content";
import { experimental_AstroContainer as AstroContainer } from "astro/container";

export async function GET() {
  const collection = await getCollection("mods");
  const mods = [];
  for (const mod of collection) {
    const { title, author, download, source } = mod.data;
    const { Content } = await mod.render();
    const container = await AstroContainer.create();
    const content = await container.renderToString(Content);
    mods.push({ title, author, download, source, description: content });
  }

  return new Response(JSON.stringify(mods), {
    headers: { "content-type": "application/json" }
  });
}
