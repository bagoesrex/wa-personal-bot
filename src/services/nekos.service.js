import { nekosClient } from "../clients/nekos.client.js";

export async function getRandomNekoImage() {
  try {
    const response = await nekosClient.get();
    return response.data?.url ?? "No response";
  } catch (error) {
    throw new Error("Failed to get response from Nekos API");
  }
}
