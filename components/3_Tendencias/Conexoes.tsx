import { IconNetwork, IconTopologyStar, IconWifi } from "@tabler/icons-react";
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
    icon: IconWifi,
    title: "Wi-Fi",
    description:
      "Presente em todo o lado e rápido, perfeito para aparelhos que gastam muitos dados (como câmaras). No entanto, consome mais bateria e não é o melhor para redes mesh.",
  },
  {
    icon: IconNetwork,
    title: "Zigbee",
    description:
      "Gasta pouca energia e cria redes mesh robustas, ideais para aparelhos a bateria (sensores, lâmpadas). Precisa de um hub.",
  },
  {
    icon: IconTopologyStar,
    title: "Z-Wave",
    description:
      "Parecido com o Zigbee, também cria redes mesh de baixa energia, mas noutra frequência, focando na fiabilidade e compatibilidade. Precisa de um hub.",
  }
];

const ConexoesPagina = () => {

    const Desvantagens = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12" id="conexoes" onClick={() => Desvantagens('Thread')}>
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Unleash Your Creativity
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

export default ConexoesPagina;
