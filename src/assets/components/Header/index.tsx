import Logo from "@/assets/images/Logo.png";
import iconUser from "@/assets/images/icon-user.png";
import iconCart from "@/assets/images/icon-cart.png";
import iconAbout from "@/assets/images/icon-about.png";
import iconMenu from "@/assets/images/icon-menu.svg";

export const Header = () => {
    return (
        <div className="relative">
            <header className="fixed top-10 left-0 right-0 z-10 mx-2.5 md:mx-10">

                <div className=" bg-white items-center w-full max-w-[1320px] mx-auto flex justify-between py-2.5 px-5 md:py-3 md:px-7 rounded-2xl mt-5 shadow-lg ">
                    <img src={Logo} alt="Logo" className="h-8 w-32 md:w-36" />

                    <nav className="hidden md:block">
                        <ul className="flex gap-4">
                            <li><a href="#">Masculino</a></li>
                            <li><a href="#">Feminino</a></li>
                            <li><a href="#">Outlet</a></li>
                        </ul>
                    </nav>
                    <nav className="hidden md:block">
                        <ul className="flex gap-4">
                            <li><a href="#">Nossas Lojas</a></li>
                            <li><a href="#">Sobre </a></li>
                            <li><a href="#"><img src={iconUser} alt="Usuário" /></a></li>

                            <li><a href="#"><img src={iconAbout} alt="Sobre" /></a></li>
                            <li><a href="#"><img src={iconCart} alt="Carrinho" /></a></li>
                        </ul>
                    </nav>

                    <button type="button" aria-label="Abrir menu" className="md:hidden flex items-center justify-center rounded-full border border-gray-200 p-3">
                        <img src={iconMenu} alt="" className="w-6 h-6" />
                    </button>
                </div>
            </header>
        </div>
    );

}