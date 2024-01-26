const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const GET = async ({ endpoint }: { endpoint: string }) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    headers: HEADERS,
  });

  return response.json();
};

export { API_BASE_URL, GET, HEADERS };
