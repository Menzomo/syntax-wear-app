
const menus = [
    { title: "Masculino", items: ["Casual", "Esporte", "Moderno", "Fututrista"] },
    { title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Fututrista"] },
    { title: "Outlet", items: ["Masculino", "Feminino"] },
    { title: "Sobre", items: ["Quem Somos", "Missão"] }
]


export const MenuItens = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-15">
            {menus.map(({ title, items }) => (
                <nav className="p-0 mt-6 sm:mt-0 sm:p-7">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <p className="font-normal text-surface-alt text-xl ">
                                {title}
                            </p>
                        </li>
                        {items.map((item) => (
                            <li key={item}>
                                <a href="#" className="font-medium hover:text-[#cccccc] transition-colors text-xl">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            ))}

        </div>
    )
}