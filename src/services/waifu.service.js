import { waifuClient } from "../clients/waifu.client.js";

export async function getMeguminImage() {
  try {
    const response = await waifuClient.get("/sfw/megumin");
    return response.data?.url ?? "No response";
  } catch (error) {
    throw new Error("Failed to get response from Waifu API");
  }
}
