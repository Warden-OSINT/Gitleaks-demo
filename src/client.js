// Cliente de ejemplo (demo de Warden: el token es falso).
const SERVICE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZW1vLXNlcnZpY2UiLCJpYXQiOjE3NjcyMjU2MDAsInJvbGUiOiJhZG1pbiJ9.Sd_8KB8T8yraheihSDlnMD8B12A3j4NBgGjQtpmzAj0';

export async function fetchReport(id) {
  return fetch(`https://api.example.com/reports/${id}`, {
    headers: { authorization: `Bearer ${SERVICE_TOKEN}` },
  });
}
