import axios from "axios";

export const API_URL = import.meta.env.VITE_STRAPI_API_URL;
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
console.log(`${API_URL}/entries?populate=*`);
console.log("API_KEY", API_KEY);

// Erstelle eine Axios-Instanz
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Beispiel: Alle Einträge abrufen
export const fetchEntries = async () => {
  try {
    const response = await api.get("/entries?populate=tags");
    console.log("API Response:", response.data); // Debugging
    return response.data;
  } catch (error) {
    console.error("Fehler beim Abrufen der Einträge:", error);
    throw error;
  }
};

// Beispiel: Spezifischen Eintrag abrufen
export const fetchEntryById = async (id) => {
  try {
    const response = await api.get(`/entries?populate=*/${id}`);
    return response.data;
  } catch (error) {
    console.error("Fehler beim Abrufen des Eintrags:", error);
    throw error;
  }
};