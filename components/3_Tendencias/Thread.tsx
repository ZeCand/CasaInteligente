import { IconBatteryEco, IconBroadcast, IconNetwork, IconSeparatorVertical, IconSquareNumber6, IconTerminal, IconTopologyStar, IconWifi } from "@tabler/icons-react";
import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
  Wifi,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: IconSquareNumber6,
    title: "Baseado em IPv6 Nativo",
    description:
      "Cada dispositivo Thread tem um endereço IP único, permitindo a comunicação direta com a internet sem a necessidade de gateways de tradução de protocolo. Simplifica a arquitetura da rede.",
  },
  {
    icon: IconBroadcast,
    title: "Rede em Malha Robusta",
    description:
      "Como Zigbee e Z-Wave, cria uma rede mesh onde os dispositivos alimentados pela corrente atuam como repetidores de sinal, expandindo o alcance e garantindo resiliência.",
  },
  {
    icon: IconBatteryEco,
    title: "Baixo Consumo de Energia",
    description:
      "    Otimizado para longos períodos de funcionamento com bateria, ideal para sensores e outros dispositivos de baixa largura de banda.",
  },
  {
    icon: IconTerminal,
    title: "Responsividade Superior",
    description: "O Matter e o Thread são uma dupla que veio para simplificar a sua casa inteligente. Juntos, garantem que os dispositivos de diferentes marcas funcionem em conjunto, sem complicações."
  },
  {
    icon: IconSeparatorVertical,
    title: "Matter e Interoperabilidade",
    description:
      "Parecido com o Zigbee, também cria redes mesh de baixa energia, mas noutra frequência, focando na fiabilidade e compatibilidade. Precisa de um hub.",
  }
];

const PaginaThread = () => {

    const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center py-12" id="Thread" onClick={() => Desvantagens('HomeIO')}>
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Thread
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6  mx-auto px-6">
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

export default PaginaThread;
