import hero from "@/assets/images/hero.png"
import galeriaHomem from "@/assets/images/card-imagem.jpg"
import { Button } from "../Button"
import { Overlay } from "../Overlay"
export const Hero = () => {
return (
    <div className="container">
<section className=" relative h-[657px] md:h-125 rounded-[20px] mb-10  ">
    <img src={galeriaHomem} alt="Homen sentado com os tenis da loja " className="md:hidden w-full h-full object-cover rounded-[20px] " />
    <img src={hero} alt="Homen sentado com os tenis da loja " className="hidden md:block w-full h-full object-cover rounded-[20px] " />
   
    <Overlay className="justify-end px-6 md:px-24 pb-32 " title="Kripton One" subtitle="Tranforme Qualquer Passo em Presença">
       <Button variant="secondary"  size={"sm"}>
            Ver Modelos
        </Button>
        <Button variant="primary"  size={"sm"}>
            Comprar
        </Button>
    </Overlay>
</section>
</div>


)


}