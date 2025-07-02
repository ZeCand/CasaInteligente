import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";

const LampadasData = [
  {
    id: 1,
    name: "XIAOMI Mi LED",
    price: "25,99€",
    imageUrl: "/1_lampada.webp",
    url: "https://www.worten.pt/produtos/lampada-inteligente-xiaomi-mi-led-smart-wi-fi-rgb-7269789"
  },
  {
    id: 2,
    name: "Shelly 1 Mini Gen4",
    price: "17,99 €",
    imageUrl: "/2_lampada.webp",
    url: "https://mauser.pt/catalog/product_info.php?products_id=095-5812&utm_source=shellypt&utm_medium=referral&utm_campaign=shellypt&utm_term=shelly_1_mini_gen4"
  },
  {
    id: 3,
    name: "Shelly BLU Motion ",
    price: "19,90€",
    imageUrl: "/3_lampada.jpg",
    url:"https://www.pcdiga.com/casa-e-ar-livre/smart-home-e-iluminacao/sensores-e-detetores/modulo-automacao-shelly-blu-motion-sensor-de-movimento-095-2323-3800235266700?gad_source=1&gad_campaignid=22584598316&gbraid=0AAAAADN6klNzRF1AJpmaHMUwITYkpV6mp&gclid=CjwKCAjwsZPDBhBWEiwADuO6y6sDH-UxzhwZriQApP71h-dI1GC4WligWCD-L_gekNfB-ewSLxeM3BoC_YkQAvD_BwE"
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
            <a href={lampadaData.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
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
