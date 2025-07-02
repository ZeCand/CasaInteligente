import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";

const SegurancaData = [
  {
    id: 1,
    name: "Amazon RNIG Video Doorbell",
    price: "209,89€",
    imageUrl: "/Ring1.jpg",
    url: "https://www.worten.pt/produtos/campainha-inteligente-amazon-rnig-video-doorbell-2a-geracao-com-bateria-niquel-mrkean-0840080525501" // Imagem de exemplo
  },
  {
    id: 2,
    name: "Google Nest Cam",
    price: "14,49€",
    imageUrl: "/Cam2.jpg",
    url: "https://www.worten.pt/produtos/capa-protetora-de-silicone-para-google-nest-cam-branco-mrkean-7314280592708" // Imagem de exemplo
 // Imagem de exemplo
  },
  {
    id: 3,
    name: "Ring Alarm",
    price: "439,57€",
    imageUrl: "/Cam3.jpg", // Imagem de exemplo
    url:"https://www.pccomponentes.pt/ring-alarm-sistema-de-seguranca-wifi-com-alarme-branco?utm_source=369493&utm_medium=afi&utm_campaign=www.google.com&sv1=affiliate&sv_campaign_id=369493&awc=20983_1751389756_8ee00cd5f8f4362dff80a685ce17255c&utm_term=deeplink&utm_content=b9cc72ea-d52a-4a8f-9e6c-fe9c5b3a2575"
  },
];

const Produtos_Seguranca = () => {


  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center py-12" id="Segurança" onClick={() => Desvantagens('Televisao')}>
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Segurança
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">

          {SegurancaData.map((seguranca) => (
        <Card key={seguranca.id} className="flex flex-col"> {/* ESSENCIAL: Adicionar a 'key' */}
          <CardHeader>
            {/* Nome do produto: Agora usa seguranca.name */}
            <h4 className="text-lg font-semibold">{seguranca.name}</h4>
            {/* Preço do produto: Agora usa seguranca.price */}
            <p className="text-md text-gray-700">{seguranca.price}</p>
          </CardHeader>

          <CardContent className="flex-grow"> {/* 'flex-grow' ajuda a imagem a preencher o espaço */}
            {/* Imagem do produto: Agora usa seguranca.imageUrl e seguranca.name para o alt */}
            <img
              src={seguranca.imageUrl}
              alt={seguranca.name}
              className="h-72 w-full object-cover rounded"
            />
          </CardContent>

          <CardFooter className="gap-2 mt-auto"> {/* 'mt-auto' para alinhar os botões no fundo */}
            {/* Botão "Loja": Agora abre o URL específico do produto */}
            <a href={seguranca.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
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

export default Produtos_Seguranca;
