// @ts-nocheck

// export const API_BASE_URL = "http://127.0.0.1:8000";
export const API_BASE_URL = "http://145.137.70.184:8000";

export async function checkAnswer(answer) {
  const response = await fetch(`${API_BASE_URL}/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answer }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data.detail === "string"
        ? data.detail
        : data.detail?.message || "Er is iets fout gegaan"
    );
  }

  return data;
}

export async function getCases() {
  const response = await fetch(`${API_BASE_URL}/mystery`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data.detail === "string"
        ? data.detail
        : data.detail?.message || "Kon case niet ophalen."
    );
  }

  return [
    {
      id: 1,
      victim: "BART",
      title: data.title,
      description: data.description,
    },
  ];
}

export async function resetGame() {
  const response = await fetch(`${API_BASE_URL}/game/reset`, {
    method: "POST",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data.detail === "string"
        ? data.detail
        : data.detail?.message || "Kon game niet resetten."
    );
  }

  return data;
}