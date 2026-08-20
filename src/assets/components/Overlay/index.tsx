interface OverlayProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    className?: string;
}




export const Overlay = ({ children, title, subtitle, className }: OverlayProps) => {
    return (
       <div className={`absolute w-full bottom-0 flex  text-center items-center ${className}`}>
        <div className="flex flex-col w-[388px] items-center text-white">
            <h2 className="text-xl font-medium leading-normal tracking-wide mb-2.5 ">{title}</h2>
            <h1 className="text-2xl leading-9 tracking-widest mb-10 ">{subtitle}</h1>
            <div className="flex gap-3.5">
                {children}
            </div> 
        </div>
    </div>
    )
}