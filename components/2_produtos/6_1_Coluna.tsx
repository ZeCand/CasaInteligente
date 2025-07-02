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






const Colunas = [
  {
    id: 1,
    name: "Wireless SB 550",
    price: "209,99€",
    imageUrl: "/1_Soundbar.jpg",
    url:"https://www.worten.pt/produtos/soundbar-wireless-jbl-sb-550-3-1-150-w-subwoofer-sem-fios-8057937",
    marca:"JBL"
  },
  {
    id: 2,
    name: "SONY 5.1 HT-S40R",
    price: "299.27€",
    imageUrl: "/2_Soundbar.jpg",
    url: "https://www.worten.pt/produtos/soundbar-sony-5-1-ht-s40r-5-1-600-w-7407096",
    marca:"Sony"
  },
  {
    id: 3,
    name: "Soundbar SAMSUNG Q-SERIES",
    price: "893.97€",
    imageUrl: "/3_Soundbar.jpg",
    url:"https://www.worten.pt/produtos/soundbar-samsung-q-series-hw-q990d-zf-11-1-4-canais-160-w-8025037",
    marca:"Samsung"
  },
];





const Produtos_Multimedia_Colunas = () => {





  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


  return (


    <div className="min-h-screen flex items-center justify-center py-12" id="Colunas" onClick={() => Desvantagens('Projetores')}>
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Multimédia - Som
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">

      
        {Colunas.map((ColunasData) => (
          <Card key={ColunasData.id} className="shadow-none overflow-hidden rounded-md">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-[290px] items-center flex justify-center translate-x-2 border-b">
                <img src={ColunasData.imageUrl} alt=""/>
              </div>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center gap-3 justify-between">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  {ColunasData.price}
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  {ColunasData.marca}
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                {ColunasData.name}
              </h3>


              <a href={ColunasData.url}>
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

export default Produtos_Multimedia_Colunas;
