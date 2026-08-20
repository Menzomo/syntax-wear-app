import galeriaHomem from "@/assets/images/card-imagem.jpg"
import galeriaModelo from "@/assets/images/galeria-modelo.jpg"
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg"
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg"
import galeriaTenisBrancoPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg"
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg"
import { Button } from "../Button"
import { Overlay } from "../Overlay"

export const Galery = () => {
    return (
        <div className="container">
            <section
                className="
                    grid grid-cols-2 grid-rows-[494px_190px_180.5px_180.5px_190px] gap-[10px]
                    [grid-template-areas:'highlight_highlight'_'sneaker-white_sneaker-white'_'model_sneaker-color'_'model_sneaker-silver'_'sneaker-purple_sneaker-purple']
                    md:grid-cols-4 md:grid-rows-[repeat(3,300px)] md:gap-[30px]
                    md:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple'_'highlight_highlight_model_sneaker-color'_'sneaker-white_sneaker-white_model_sneaker-silver']
                "
            >
                <div className="relative [grid-area:highlight] rounded-[20px] overflow-hidden">
                    <img src={galeriaHomem} alt="Homem sentado com os tênis da loja" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center text-[#EDEDED]">
                        <Overlay title="kripton One" subtitle="Estilo Urbano com Atitude" className="inset-0 justify-center ">
                            <div className="flex gap-3.5">
                                <Button variant="secondary" size="lg">
                                    Feminino
                                </Button>
                                <Button variant="secondary" size="lg">
                                    Masculino
                                </Button>

                            </div>
                        </Overlay>
                    </div>
                </div>

                <div className="[grid-area:sneaker-purple] rounded-[20px] overflow-hidden">
                    <img src={galeriaTenisRoxo} alt="Tênis roxo" className="w-full h-full object-cover" />
                </div>

                <div className="[grid-area:model] rounded-[20px] overflow-hidden">
                    <img src={galeriaModelo} alt="Modelo feminina usando tênis colorido" className="w-full h-full object-cover" />
                </div>

                <div className="[grid-area:sneaker-color] rounded-[20px] overflow-hidden">
                    <img src={galeriaTenisColorido} alt="Tênis colorido" className="w-full h-full object-cover" />
                </div>

                <div className="[grid-area:sneaker-white] rounded-[20px] overflow-hidden">
                    <img src={galeriaTenisBrancoPreto} alt="Tênis branco e preto" className="w-full h-full object-cover" />
                </div>

                <div className="[grid-area:sneaker-silver] rounded-[20px] overflow-hidden">
                    <img src={galeriaTenisCinza} alt="Tênis cinza" className="w-full h-full object-cover" />
                </div>
            </section>
        </div>
    )
}
