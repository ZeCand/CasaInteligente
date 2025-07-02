import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";

const LampadasData = [
  {
    id: 1,
    name: "Philips Hue - Lâmpada LED",
    price: "56,95€",
    imageUrl: "/Iluminação1.jpg",
    url:"https://amzn.eu/d/1VQA13b"
  },
  {
    id: 2,
    name: "Govee Neon Rope Light 2",
    price: "101,65€",
    imageUrl: "/Iluminação2.jpg",
    url: "https://amzn.eu/d/0QbfyGh"
  },
  {
    id: 3,
    name: "PHILIPS Hue 2",
    price: "128.35€",
    imageUrl: "/Iluminação3.jpg",
    url:"https://amzn.eu/d/dyWez4n"
  },
];

const Produtos_Lampadas = () => {


const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}



  return (
    <div className="min-h-screen flex items-center justify-center py-12" id="Lampadas" onClick={() => Desvantagens('Tomadas')}>
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Iluminação
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">

          {LampadasData.map((lampadaData) => (
        <Card key={lampadaData.id} className="flex flex-col"> {/* ESSENCIAL: Adicionar a 'key' */}
          <CardHeader>
            {/* Nome do produto: Agora usa lampadaData.name */}
            <h4 className="text-lg font-semibold">{lampadaData.name}</h4>
            {/* Preço do produto: Agora usa lampadaData.price */}
            <p className="text-md text-gray-700">{lampadaData.price}</p>
          </CardHeader>

          <CardContent className="flex-grow"> {/* 'flex-grow' ajuda a imagem a preencher o espaço */}
            {/* Imagem do produto: Agora usa lampadaData.imageUrl e lampadaData.name para o alt */}
            <img
              src={lampadaData.imageUrl}
              alt={lampadaData.name}
              className="h-72 w-full object-cover rounded"
            />
          </CardContent>

          <CardFooter className="gap-2 mt-auto"> {/* 'mt-auto' para alinhar os botões no fundo */}
            {/* Botão "Loja": Agora abre o URL específico do produto */}
            <a href={lampadaData.url} target="_blank" rel="noopener noreferrer">
                <Button className="h-8 w-20" variant="outline">Loja</Button>
            </a>
            {/* O botão "Próximo" foi removido pois não é necessário com múltiplos cartões */}
          </CardFooter>
        </Card>
      ))}

        </div>
      </div>
    </div>
  );
};

export default Produtos_Lampadas;
