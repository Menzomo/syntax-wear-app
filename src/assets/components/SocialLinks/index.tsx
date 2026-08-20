
import iconInstagram from "@/assets/images/icon-intagram.png"
import iconFacebook from "@/assets/images/icon-facebook.png"
import iconTiktok from "@/assets/images/icon-tiktok.png"
import iconWhatsap from "@/assets/images/icon-whatsap.png"


const socialMediaIcons = [
    { href: "#", icon: iconInstagram, name: "Icone do Instagram" },
    { href: "#", icon: iconFacebook, name: "Icone do Facebook" },
    { href: "#", icon: iconTiktok, name: "Icone do Tiktok" },
    { href: "#", icon: iconWhatsap, name: "Icone do Whatsap" }
]


export const SocialLinks = () => {

    return (
        <div>
            <p className="mb-4 text-xl font-medium text-surface-alt"> Redes Sociais  </p>
            <ul className="flex gap-5">
                {socialMediaIcons.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label={name}>
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )

}