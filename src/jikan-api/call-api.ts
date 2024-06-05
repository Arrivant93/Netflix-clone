"use server";

export const callApi = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Gérer la réponse
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch data from the provided URL.");
  }
};