import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";

const quadrosData = [
  {
    id: 1,
    name: "eMylo Smart",
    price: "34,55€",
    imageUrl: "/Quadro1.jpg",
    url: "https://www.amazon.es/dp/B0BK8FF4FB/ref=asc_df_B0BK8FF4FB?language=pt_PT&mcid=cf9b5a528c163a4183a97c4908b2717a&tag=ptgogshpadde-21&linkCode=df0&hvadid=718167262518&hvpos=&hvnetw=g&hvrand=8337373438288041042&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1011771&hvtargid=pla-2019721361406&psc=1&language=pt_PT&gad_source=1" // Imagem de exemplo
  },
  {
    id: 2,
    name: "16A DIY interruptor",
    price: "20,32€",
    imageUrl: "/Quadro2.jpg",
    url: "https://www.amazon.es/dp/B0B7MYYT2V/ref=asc_df_B0B7MYYT2V?language=pt_PT&mcid=32cc3acbfe41382f8419d370a0b83b01&tag=ptgogshpadde-21&linkCode=df0&hvadid=718167262518&hvpos=&hvnetw=g&hvrand=8337373438288041042&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1011771&hvtargid=pla-1953215427078&gad_source=1&th=1" // Imagem de exemplo
 // Imagem de exemplo
  },
  {
    id: 3,
    name: "TONGOU Medidor de consumo",
    price: "27,85€",
    imageUrl: "/Quadro3.jpg", // Imagem de exemplo
    url:"https://amzn.eu/d/bz9WPjB"
  },
];

const Quadros_eletricos = () => {

  const Desvantagens = (id) => {
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
          Quadros Eletricos
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">

          {quadrosData.map((quadroData) => (
    <Card key={quadroData.id}>
      <CardHeader>
        <h2 className="text-2xl font-bold">Quadros Elétricos</h2>
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
