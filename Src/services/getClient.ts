import axios from "axios";

export async function getClients() {
  const response = await axios.get(
    "https://6467e436e99f0ba0a81a3167.mockapi.io/api/v1/clients"
  );
  const listaClients = response.data;
  return listaClients;
}
