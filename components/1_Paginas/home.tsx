// components/HomeAssistantIframe.tsx
"use client"
import React from 'react';

const HomeAssistantIframe: React.FC = () => {

const scrollToSection2 = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }




  return (



        <div id='HomeAssistant' className="min-h-screen flex items-center justify-center" onClick={() => scrollToSection2('AssistentesVoz')}>
      <div className="w-full">
    <div className="flex justify-center items-center h-screen">
      <iframe
        src="https://demo.home-assistant.io/?frontpage"
        title="Home Assistant Demo"
        className="w-full h-full max-w-screen-xl border-0 rounded-lg shadow-xl"
        allowFullScreen
      ></iframe>
    </div>
    </div>
    </div>
  );
};

export default HomeAssistantIframe;

// pages/index.tsx (Exemplo de como usar no seu ficheiro de página)
// import HomeAssistantIframe from '../components/HomeAssistantIframe';

// export default function HomePage() {
//   return (
//     <main>
//       <HomeAssistantIframe />
//     </main>
//   );
// }