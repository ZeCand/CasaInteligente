"use client"
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpDown, ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "@/app/hero/background";
import Vantagens from "@/components/1_Paginas/Vantagens";
import Features02Page from "@/components/1_Paginas/AssistentesVoz";
import DesvantagensSection from "@/components/1_Paginas/Desvantagens";
import HomeAssistantIframe from "@/components/1_Paginas/home";
import Produtos_Lampadas from "@/components/2_produtos/2_Lampadas";
import Quadros_eletricos from "@/components/2_produtos/1_Quadros_Eletricos";
import Produtos_Tomadas from "@/components/2_produtos/3_Tomadas";
import Produtos_Seguranca from "@/components/2_produtos/5_seguranca";
import Produtos_Multimedia_Televisao from "@/components/2_produtos/6_0_Televisões";
import Produtos_Multimedia_Colunas from "@/components/2_produtos/6_1_Coluna";
import Produtos_Multimedia_Projetores from "@/components/2_produtos/6_2_Projetos";
import Produtos_Climatizacao from "@/components/2_produtos/4_climatizacao";
import AssistentesVoz from "@/components/1_Paginas/AssistentesVoz";
import ConexoesPagina from "@/components/3_Tendencias/Conexoes";
import HomeIoPage from "@/components/3_Tendencias/HomeIO";
import PaginaThread from "@/components/3_Tendencias/Thread";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import AssistentesVoz2 from "@/components/1_Paginas/AssistentesDeVoz2";



const Hero06 = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center px-6">
     
      <BackgroundPattern />
      

      <div className="relative z-10 text-center max-w-2xl">
        
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          A Casa Inteligente
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
O termo "domótica" deriva do latim "domus" (casa) e "robótica" (automação). A domótica não se limita a ligar e desligar luzes, mas sim a integrar e controlar centralizadamente uma série de sistemas e dispositivos.         </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" 
            className="rounded-full text-base" 
            onClick={() => scrollToSection('nova-seccao')}>
            Saiba Mais! <ArrowDown className="!h-5 !w-5" />
          </Button>
        </div>
      </div>
    </div>



    <Vantagens />

    <DesvantagensSection />


    <HomeAssistantIframe />


    
    <AssistentesVoz2 />


    <Quadros_eletricos />

    <Produtos_Lampadas />
    
    

    <Produtos_Tomadas />


    <Produtos_Climatizacao />

    <Produtos_Seguranca />


    <Produtos_Multimedia_Televisao />


  
    <Produtos_Multimedia_Colunas />



    <Produtos_Multimedia_Projetores />


    <ConexoesPagina />

  

    <PaginaThread />

    <HomeIoPage videoSrc={"/Video.mp4"} thumbnailSrc={""} />
        

    </>
  );
};

export default Hero06;
