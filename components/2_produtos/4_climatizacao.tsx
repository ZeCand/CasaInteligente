import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";

const Climatizacao = [
  {
    id: 1,
    name: "Netatmo cabeças térmicas",
    price: "210,42€",
    imageUrl: "/1_termo.webp",
    url: "https://amzn.eu/d/eDbXWx7" // Imagem de exemplo
  },
  {
    id: 2,
    name: "AQARA ZIGBEE 3.0 HUB",
    price: "50,81€",
    imageUrl: "/2_termo.jpg",
    url:"https://amzn.eu/d/apZ7Sn4" // Imagem de exemplo
  },
  {
    id: 3,
    name: "GOOGLE Nest 3",
    price: "224,97€",
    imageUrl: "/3_termo.jpg",
    url:"https://www.worten.pt/produtos/termostato-inteligente-google-nest-3a-geracao-branco-outlet-caixa-aberta-8480835" // Imagem de exemplo
  },
];

const Produtos_Climatizacao = () => {



  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center py-12" id="Clima" onClick={() => Desvantagens('Segurança')}>
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Climatização
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">

          {Climatizacao.map((ClimatizacaoData) => (
        <Card key={ClimatizacaoData.id} className="flex flex-col"> {/* ESSENCIAL: Adicionar a 'key' */}
          <CardHeader>
            {/* Nome do produto: Agora usa ClimatizacaoData.name */}
            <h4 className="text-lg font-semibold">{ClimatizacaoData.name}</h4>
            {/* Preço do produto: Agora usa ClimatizacaoData.price */}
            <p className="text-md text-gray-700">{ClimatizacaoData.price}</p>
          </CardHeader>

          <CardContent className="flex-grow"> {/* 'flex-grow' ajuda a imagem a preencher o espaço */}
            {/* Imagem do produto: Agora usa ClimatizacaoData.imageUrl e ClimatizacaoData.name para o alt */}
            <img
              src={ClimatizacaoData.imageUrl}
              alt={ClimatizacaoData.name}
              className="h-72 w-full object-cover rounded"
            />
          </CardContent>

          <CardFooter className="gap-2 mt-auto"> {/* 'mt-auto' para alinhar os botões no fundo */}
            {/* Botão "Loja": Agora abre o URL específico do produto */}
            <a href={ClimatizacaoData.url} target="_blank" rel="noopener noreferrer">
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

export default Produtos_Climatizacao;
