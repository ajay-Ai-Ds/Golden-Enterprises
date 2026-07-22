import { generateSeoContentWithAi } from "./openai";

export async function generateSeoPayload(service: string, area: string, city: string = "Chennai") {
  return await generateSeoContentWithAi(service, area, city);
}
