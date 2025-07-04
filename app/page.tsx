"use client"
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpDown, ArrowUpRight, CirclePlay, Dot } from "lucide-react";
import { BackgroundPattern } from "@/app/hero/background";
import Vantagens from "@/components/1_Paginas/Vantagens";
import DesvantagensSection from "@/components/1_Paginas/Desvantagens";
import HomeAssistantIframe from "@/components/1_Paginas/home";
import Produtos_Lampadas from "@/components/2_produtos/2_Lampadas";
import Quadros_eletricos from "@/components/2_produtos/1_Quadros_Eletricos";
import Produtos_Tomadas from "@/components/2_produtos/3_Tomadas";
import Produtos_Seguranca from "@/components/2_produtos/5_seguranca";
import Produtos_Multimedia_Televisao from "@/components/2_produtos/6_0_Televisões";


import Produtos_Climatizacao from "@/components/2_produtos/4_climatizacao";
import ConexoesPagina from "@/components/3_Tendencias/Conexoes";
import HomeIoPage from "@/components/3_Tendencias/HomeIO";
import PaginaThread from "@/components/3_Tendencias/Thread";
import AssistentesVoz2 from "@/components/1_Paginas/AssistentesDeVoz2";
import Produtos_Sensores from "@/components/2_produtos/7_Sensores";
import Produtos_Tablets from "@/components/2_produtos/8_Tablets";



const Hero06 = () => {

  const Desvantagens = (id: string) => { // <--- Adicione ": string" aqui
  const element = document.getElementById(id);
  if (element) {
    // Usa scrollIntoView com comportamento 'smooth' para uma animação suave
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

  return (
    <>
    <div className="min-h-screen flex items-center justify-center px-6">
     
      <BackgroundPattern />
      

      <div className="relative z-10 text-center max-w-2xl justify-center flex flex-col items-center">
        
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          A Casa Inteligente
        </h1>
        <div className="flex justify-between flex-col w-[300px] px-4 items-center py-2">
          <strong>Trabalho Realizado por</strong>
          <div className="flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <p>Gonçalo Chora</p> 
            <Dot /> 
            <p>Luiz Pereira</p>
          </div>
            <div className="flex flex-row justify-between">
            <p>José Cândido</p> 
            <Dot /> 
            <p>Rafael Lopes</p>
          </div>
        </div>
            
          

        </div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <Button size="lg" 
            className="rounded-full text-base" 
            onClick={() => Desvantagens('nova-seccao')}>
            Ver mais <ArrowDown className="!h-5 !w-5" />
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


  
    <Produtos_Sensores />



    <Produtos_Tablets />


    <ConexoesPagina />

  

    <PaginaThread />

    <HomeIoPage videoSrc={"/Video.mp4"} thumbnailSrc={""} />
        

    </>
  );
};

export default Hero06;
