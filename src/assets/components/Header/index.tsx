import Logo from "@/assets/images/Logo.png";
import iconUser from "@/assets/images/icon-user.png";
import iconCart from "@/assets/images/icon-cart.png";
import iconAbout from "@/assets/images/icon-about.png";

export const Header = () => {
    return (
        <div className="relative">
            <header className="fixed top-10 left-0 right-0 z-10 mx-10">

                <div className=" bg-white items-center w-[1320px] mx-auto flex justify-between  py-3 px-7 rounded-2xl mt-5  ">
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
                </div>
            </header>
        </div>
    );

}