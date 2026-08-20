import tenisCasual from "@/assets/images/tênis casual.jpg"
import tenisEsportivo from "@/assets/images/tenis exportivo.jpg"
import tenisModerno from "@/assets/images/tênis colorido.jpg"
import tenisFuturista from "@/assets/images/tênis futurista.jpg"
import { Button } from "../Button"

const categories = [
    { label: "Casual", image: tenisCasual },
    { label: "Esporte", image: tenisEsportivo },
    { label: "Moderno", image: tenisModerno },
    { label: "Futurista", image: tenisFuturista },
]

export const Categories = () => {
    return (
        <div className="container mb-10 md:mb-20">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide 
            gap-[10px] 
            md:gap-[30px] md:overflow-visible">
                {categories.map(({ label, image }) => (
                    <div
                        key={label}
                        className="relative w-[318px] shrink-0 md:w-0 md:shrink md:flex-1 h-[500px] rounded-[20px] overflow-hidden"
                    >
                        <img src={image} alt={label} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Button variant="secondary" size="lg">
                                {label}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
