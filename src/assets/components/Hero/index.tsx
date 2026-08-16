import hero from "@/assets/images/hero.png"
import { Button } from "../Button"
export const Hero = () => {
return (
    <div className="container">
<section className=" relative h-125 rounded-[20px] mb-10 ">
    <img src={hero} alt="Homen sentado com os tenis da loja " className="w-full h-full object-cover rounded-[20px] " />
    <div className="absolute w-full bottom-0 flex justify-end items-center text-center px-6 md:px-24 pb-32 ">
        <div className="flex flex-col w-[388px] items-center text-white">
            <h2 className="text-xl font-medium leading-normal tracking-wide mb-2.5 ">Kripton One</h2>
            <h1 className="text-2xl leading-9 tracking-widest mb-10 ">Tranforme Qualquer Passo em Presença</h1>
            <div className="flex gap-3.5">
                <Button variant="secondary" size="sm">
                    Ver Modelos
                </Button>
                <Button variant="primary" size="md">
                    Comprar
                </Button>
            </div>
        </div>
    </div>
</section>
</div>


)


}