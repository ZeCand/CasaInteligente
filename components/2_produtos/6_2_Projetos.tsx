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






const Projetores = [
  {
    id: 1,
    name: "Freestyle 2nd Gen",
    price: "739,99€",
    imageUrl: "/1_projetor.jpg",
    url:"https://www.worten.pt/produtos/projetor-samsung-sp-lff3claxxxe-freestyle-2nd-gen-2023-lsp-3-led-smart-tv-branco-7850124",
    marca:"Samsung"
  },
  {
    id: 2,
    name: "Projetor L1 Pro",
    price: "283,96€",
    imageUrl: "/2_projetor.jpg",
    url: "https://www.worten.pt/produtos/videoprojecteur-xiaomi-projetor-inteligente-xiaomi-l1-pro-1920x1080-400ansi-lumens-2-x-5w-dolby-audio-google-tv-netflix-mrkean-6941812702048",
    marca:"Xiaomi"
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





const Produtos_Multimedia_Projetores = () => {




  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


  return (


    <div className="min-h-screen flex items-center justify-center py-12" id="Projetores" onClick={() => Desvantagens('conexoes')}>
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Multimédia - Projeção
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">

      
        {Projetores.map((ProjetoresData) => (
          <Card key={ProjetoresData.id} className="shadow-none overflow-hidden rounded-md">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-[290px] items-center flex justify-center translate-x-2 border-b">
                <img src={ProjetoresData.imageUrl} alt=""/>
              </div>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center gap-3 justify-between">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  {ProjetoresData.price}
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  {ProjetoresData.marca}
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                {ProjetoresData.name}
              </h3>


              <a href={ProjetoresData.url}>
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

export default Produtos_Multimedia_Projetores;
