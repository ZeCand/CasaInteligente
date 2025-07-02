"use client"

import Image from 'next/image'; // Importa o componente Image

const features = [
  {
    title: "Siri",
    description: "Find untapped areas to explore effortlessly.",
    image: "/HomePod.png", // Adiciona o caminho da imagem
  },
  {
    title: "Google Assistant",
    description: "Craft content that resonates and inspires trust.",
    image: "/Home.webp", // Adiciona o caminho da imagem
  },
  {
    title: "Alexa",
    description: "Get actionable insights instantly at a glance.",
    image: "/alexaD.jpg", // Adiciona o caminho da imagem
  },
];

const AssistentesVoz = () => {

  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}



  return (
    <div id="AssistentesVoz" className="min-h-screen flex items-center justify-center py-12" onClick={() => Desvantagens('QuadrosEletricos')}>
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Assistentes de Voz
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col text-start">
              <div className="mb-5 sm:mb-6 w-full aspect-[4/5] bg-muted rounded-xl relative"> {/* Adiciona 'relative' aqui para posicionamento da imagem */}
                {/* Usa o componente Image do Next.js */}
                <Image
                  src={feature.image}
                  alt={feature.title} // Adiciona um alt text para acessibilidade
                  fill // Preenche o elemento pai
                  className="object-cover rounded-xl" // Certifica que a imagem cobre o espaço e mantém as bordas arredondadas
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Otimização para diferentes tamanhos de ecrã
                />
              </div>
              <span className="text-2xl font-semibold tracking-tight">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssistentesVoz;