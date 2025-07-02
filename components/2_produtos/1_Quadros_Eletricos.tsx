import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";

const quadrosData = [
  {
    id: 1,
    name: "Shelly Pro 4PM",
    price: "120€",
    imageUrl: "/1_quadro.jpg",
    url: "https://www.pcdiga.com/casa-e-ar-livre/smart-home-e-iluminacao/modulos-e-comutadores-domotica/modulo-automacao-shelly-pro-4pm-nivel-pro-controla-4-canais-num-unico-dispositivo-pro-4pm-3800235268049" // Imagem de exemplo
  },
  {
    id: 2,
    name: "Phasak Sirius PH 7315",
    price: "147,99 €",
    imageUrl: "/2_quadro.webp",
    url: "https://mauser.pt/catalog/product_info.php?products_id=076-0736&utm_source=google&utm_medium=cpc&utm_campaign=shopping_catalog_pt_011&utm_content=feed&gad_source=1&gad_campaignid=18776098047&gbraid=0AAAAAD_BV8lEo4NQWZul2Gnt-u7iJEdoN&gclid=CjwKCAjwsZPDBhBWEiwADuO6yw0SLRt5UJBQJmUpLQdkKS82Wp0_T7RKqx0EIDj_Ud4_aNO7Gf_OIBoCt5QQAvD_BwE" // Imagem de exemplo
 // Imagem de exemplo
  },
  {
    id: 3,
    name: "Shelly Pro 3EM-3CT63",
    price: "121,77€",
    imageUrl: "/3_quadro.webp", // Imagem de exemplo
    url:"https://smartify.pt/products/shelly-pro-3em-3ct63-medidor-de-energia-monofasico-wifi-bluetooth"
  },
];

const Quadros_eletricos = () => {

  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}



  return (
    <div className="min-h-screen flex items-center justify-center py-12" id="QuadrosEletricos" onClick={() => Desvantagens('Lampadas')}>
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Quadros Elétricos
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">

          {quadrosData.map((quadroData) => (
    <Card key={quadroData.id}>
      <CardHeader>
        
        {/* Nome do produto */}
        <h4 className="text-lg font-semibold">{quadroData.name}</h4> 
        {/* Preço do produto */}
        <p className="text-md text-gray-700">{quadroData.price}</p> 
      </CardHeader>
      
      <CardContent>
        {/* Imagem do produto */}
        <img 
          src={quadroData.imageUrl} 
          alt={quadroData.name} 
          className="h-72 w-full object-cover rounded" 
        />
      </CardContent>
      
      <CardFooter className="gap-2">
        <Button className="h-8 w-20" variant="outline" onClick={() => window.open(quadroData.url, '_blank')}>Comprar</Button>
      </CardFooter>
    </Card>
    ))}

        </div>
      </div>
    </div>
  );
};

export default Quadros_eletricos;
