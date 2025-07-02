import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react";






const Televisao = [
  {
    id: 1,
    name: "Xiaomi TV A",
    price: "148,41€",
    imageUrl: "/1_Televisao.jpg",
    url:"https://amzn.eu/d/fSsFpCV",
    marca:"Xiaomi"
  },
  {
    id: 2,
    name: "SONY 5.1 HT-S40R",
    price: "299.27€",
    imageUrl: "/2_soundbar.jpg",
    url: "https://www.worten.pt/produtos/soundbar-sony-5-1-ht-s40r-5-1-600-w-7407096",
    marca:"Sony"
  },
  {
    id: 3,
    name: "LG CineBeam Laser HU85LS",
    price: "5.199,00€",
    imageUrl: "/3_projetor.jpg",
    url:"https://www.worten.pt/produtos/projetor-lg-cinebeam-laser-hu85ls-2700-lumens-4k-7141028",
    marca:"LG"
  },
];





const Produtos_Multimedia_Televisao = () => {





  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


  return (


    <div className="min-h-screen flex items-center justify-center py-12" id="Televisao" onClick={() => Desvantagens('Sensores')}>
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Multimédia
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">

      
        {Televisao.map((TelevisaoData) => (
          <Card key={TelevisaoData.id} className="shadow-none overflow-hidden rounded-md">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-[290px] items-center flex justify-center translate-x-2 border-b">
                <img src={TelevisaoData.imageUrl} alt=""/>
              </div>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center gap-3 justify-between">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  {TelevisaoData.price}
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  {TelevisaoData.marca}
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                {TelevisaoData.name}
              </h3>


              <a href={TelevisaoData.url}>
                <Button className="mt-6 shadow-none w-[120px]">
                Comprar <ChevronRight />
              </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Produtos_Multimedia_Televisao;
