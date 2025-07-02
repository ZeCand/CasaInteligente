"use client"

import Image from 'next/image'; // Importa o componente Image

const features = [
  {
    title: "Siri",
    description: "Find untapped areas to explore effortlessly.",
    image: "/HomePod.png",
    Marca: "Apple",
    Data_Criação: "Fevereiro de 2018",
    Principal_Vantagem: "Qualidade de áudio premium e integração perfeita no ecossistema Apple" // Adiciona o caminho da imagem
  },
  {
    title: "Google Home",
    description: "Craft content that resonates and inspires trust.",
    image: "/Home.jpg",
    Marca: "Google",
    Data_Criação: "Novembro de 2016",
    Principal_Vantagem: "Integração profunda com os serviços Google" // Adiciona o caminho da imagem
  },
  {
    title: "Amazon Echo",
    description: "Get actionable insights instantly at a glance.",
    image: "/alexaD.jpg",
    Marca: "Amazon",
    Data_Criação: "Novembro de 2014",
    Principal_Vantagem: "Larga compatibilidade com dispositivos de casa inteligente e uma vasta biblioteca de skills" // Adiciona o caminho da imagem
  },
];

const AssistentesVoz2 = () => {

  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}



  return (
    <div id="AssistentesDeVoz2" className="min-h-screen flex items-center justify-center py-12" onClick={() => Desvantagens('QuadrosEletricos')}>
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
              <div className='flex flex-col text-lg gap-1'>

                <div className='flex gap-2'>
                  <strong>Marca:</strong>
                  <p>{feature.Marca}</p>
                </div>
                <div className='flex gap-2'>
                  <strong>Data Criação:</strong>
                  <p>{feature.Data_Criação}</p>
                </div>
               
                  <strong>Principal Vantangem:</strong>
                  <p>{feature.Principal_Vantagem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssistentesVoz2;