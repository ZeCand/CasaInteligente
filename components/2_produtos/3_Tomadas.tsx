import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";

const TomadasData = [
  {
    id: 1,
    name: "TP-LINK Smart Tapo P100",
    price: "10,99€",
    imageUrl: "/tomada1.webp",
    url: "https://www.worten.pt/produtos/tomada-tp-link-smart-tapo-p100-7071630" // Imagem de exemplo
  },
  {
    id: 2,
    name: "PHILIPS Hue Smart Plug",
    price: "27,99€",
    imageUrl: "/tomada2.webp",
    url:"https://www.worten.pt/produtos/ficha-inteligente-philips-hue-smart-plug-7071427" // Imagem de exemplo
  },
  {
    id: 3,
    name: "NEDIS Schuko WIFIP121FWT",
    price: "14,99€",
    imageUrl: "/tomada3.webp",
    url:"https://www.worten.pt/produtos/tomada-inteligente-nedis-schuko-wifip121fwt-7630949" // Imagem de exemplo
  },
];

const Produtos_Tomadas = () => {


 const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center py-12" id="Tomadas" onClick={() => Desvantagens('Clima')}>
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Tomadas
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">

          {TomadasData.map((TodamadaData) => (
        <Card key={TodamadaData.id} className="flex flex-col"> {/* ESSENCIAL: Adicionar a 'key' */}
          <CardHeader>
            {/* Nome do produto: Agora usa TodamadaData.name */}
            <h4 className="text-lg font-semibold">{TodamadaData.name}</h4>
            {/* Preço do produto: Agora usa TodamadaData.price */}
            <p className="text-md text-gray-700">{TodamadaData.price}</p>
          </CardHeader>

          <CardContent className="flex-grow"> {/* 'flex-grow' ajuda a imagem a preencher o espaço */}
            {/* Imagem do produto: Agora usa TodamadaData.imageUrl e TodamadaData.name para o alt */}
            <img
              src={TodamadaData.imageUrl}
              alt={TodamadaData.name}
              className="h-72 w-full object-cover rounded"
            />
          </CardContent>

          <CardFooter className="gap-2 mt-auto"> {/* 'mt-auto' para alinhar os botões no fundo */}
            {/* Botão "Loja": Agora abre o URL específico do produto */}
            <a href={TodamadaData.url} target="_blank" rel="noopener noreferrer">
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

export default Produtos_Tomadas;
