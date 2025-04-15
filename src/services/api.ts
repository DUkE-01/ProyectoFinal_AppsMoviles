import axios from 'axios';

const API_BASE = 'https://adamix.net/defensa_civil/';

export const getServicios = async () => {
  const response = await axios.get(`${API_BASE}/servicios`);
  return response.data;
};

// Ejemplo para enviar datos de voluntario
export const postVoluntario = async (data: {
  cedula: string;
  nombre: string;
  correo: string;
  // ...otros campos
}) => {
  const response = await axios.post(`${API_BASE}/voluntarios`, data);
  return response.data;
};