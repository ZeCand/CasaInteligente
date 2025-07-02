"use client"
import {
  IconMoneybagMinus,
  IconDevices,
  IconTrashX,
  IconSpy,
  IconMessagesOff,
  IconMoodPuzzled,
} from '@tabler/icons-react';
import React from "react";


const features = [
  {
    icon: IconMoneybagMinus ,
    title: "Custo Inicial",
    description:
      "O investimento inicial pode ser elevado, exigindo um planeamento cuidadoso do orçamento.",
  },
  {
    icon: IconMoodPuzzled,
    title: "Complexidade e Instalação",
    description:
      "A instalação pode exigir conhecimentos técnicos específicos e, por vezes, profissionais especializados.",
  },
  {
    icon: IconDevices ,
    title: "Dependência Tecnológica",
    description:
      "A funcionalidade do sistema depende da tecnologia e da sua manutenção contínua.",
  },
  {
    icon: IconSpy ,
    title: "Privacidade e Segurança Cibernética",
    description:
      "A proteção de dados e a segurança contra ataques cibernéticos são cruciais.",
  },
  {
    icon: IconTrashX ,
    title: "Obsolescência Tecnológica",
    description:"A rápida evolução tecnológica pode tornar os sistemas desatualizados em pouco tempo.",
  },
  {
    icon: IconMessagesOff,
    title: "Interoperabilidade Limitada",
    description: "A integração com sistemas mais antigos pode ser um desafio devido à compatibilidade.",
  },
];

const DesvantagensSection = () => {

  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

  return (
    <div id="Desvantagens" className="min-h-screen flex items-center justify-center py-12" onClick={() => Desvantagens('HomeAssistantPro')}>
      
      <div>
        
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Desvantagens De Uma Casa Inteligente
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
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

export default DesvantagensSection;
