"use client"
import {
  Lamp,
  ShieldCheck,
  Refrigerator,
  Blinds,
  TvMinimalPlay,
  AirVent,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Lamp,
    title: "Iluminação",
    description:
      "Ajustar a luz perfeita para cada momento, poupando energia e criando ambientes.",
  },
  {
    icon: AirVent,
    title: "Climatização",
    description:
      "Manter a casa sempre à temperatura ideal, otimizando o conforto e sem preocupar com o consumo.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Proteja o seu lar com sistemas inteligentes que o alertam e agem por si.",
  },
  {
    icon: Blinds,
    title: "Estores e Persianas",
    description:
      "Controle a privacidade e a entrada de luz natural com um simples toque",
  },
  {
    icon: Refrigerator,
    title: "Eletrodomésticos",
    description:
      "Eletrodomésticos conectados facilitam as suas tarefas diárias e gerem-se a si próprios.",
  },
  {
    icon: TvMinimalPlay,
    title: "Sistemas de Áudio e Vídeo",
    description:
      "Desfrute de entretenimento integrado e personalizado em qualquer divisão.",
  },
];

const Vantagens = () => {


  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}




  return (
    <div id="nova-seccao" className="min-h-screen flex items-center justify-center py-12"
    onClick={() => Desvantagens('Desvantagens')} >
      
      <div>
        
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Vantagens De Uma Casa Inteligente
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5 bg-neutral-100/20"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vantagens;
