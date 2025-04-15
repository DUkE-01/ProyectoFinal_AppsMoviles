import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

// Configuración del slider
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
};

const sliderImages = [
  { id: 1, src: '/assets/slides/slide1.jpg', alt: 'Rescate en emergencias' },
  { id: 2, src: '/assets/slides/slide2.jpg', alt: 'Capacitación comunitaria' },
  { id: 3, src: '/assets/slides/slide3.jpg', alt: 'Ayuda humanitaria' },
];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Defensa Civil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Slider con Swiper */}
        <Swiper
          modules={[Autoplay]}
          {...slideOpts}
          className="custom-slider"
        >
          {sliderImages.map((image) => (
            <SwiperSlide key={image.id}>
              <IonImg 
                src={image.src} 
                alt={image.alt}
                style={{ 
                  width: '100%', 
                  height: '300px', 
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ion-padding">
          <h2 style={{ textAlign: 'center' }}>Bienvenido a la App de la Defensa Civil</h2>
          <p style={{ textAlign: 'center' }}>Desliza para ver nuestras acciones.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;