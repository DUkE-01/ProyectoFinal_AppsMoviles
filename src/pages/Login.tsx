import { IonButton, IonInput, IonPage } from "@ionic/react";
import axios from "axios";
import { useState } from "react";

// Define la URL base de la API aquí
const API_BASE = "https://adamix.net/defensa_civil";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await axios.post(`${API_BASE}/login`, { email, password });
    if (response.data.success) {
      localStorage.setItem('token', response.data.token);
      // Redirigir a dashboard
    }
  };

  return (
    <IonPage>
      <IonInput 
        placeholder="Correo" 
        onIonChange={e => setEmail(e.detail.value!)} 
      />
      <IonInput 
        type="password" 
        placeholder="Contraseña" 
        onIonChange={e => setPassword(e.detail.value!)} 
      />
      <IonButton onClick={handleLogin}>Iniciar Sesión</IonButton>
    </IonPage>
  );
};

export default Login;