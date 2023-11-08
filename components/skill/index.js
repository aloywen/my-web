import Image from "next/image"

export default function Index() {

    const logo = [
        { name: 'react.png', link: 'https://reactjs.org/' },
        { name: 'tailwind.png', link: 'https://tailwindcss.com/' },
        { name: 'bootstrap.png', link: 'https://getbootstrap.com/' },
        { name: 'laravel.png', link: 'https://laravel.com/' },
        { name: 'figma.png', link: 'https://www.figma.com/' },
    ]

    return (
        <div>
            <div className="flex gap-5 justify-center items-center mt-20">
                <p className="text-2xl lg:text-2xl text-white font-semibold font-primary">Skill</p>
                <hr className="border-2 border-primary w-20" />
            </div>

            <div className="flex flex-col lg:mx-44 lg:mt-8 items-center">
                <p className="text-white text-xl lg:text-2xl font-primary mt-5 px-3 leading-loose">I’ve spent about one years on improving my skills in website development using

                    <span className="px-4 h-7 mx-1 gap-1 inline-flex justify-center items-baseline rounded-full bg-slate-100 text-slate-800 font-bold text-lg">
                        <Image src="https://img.icons8.com/color/40/000000/javascript--v1.png" className="!mt-1" width={25} height={20} alt="javascript" />
                        <span>Javascript</span>
                    </span>
                    and
                    <span className="px-4 h-7 gap-1 mx-1 inline-flex justify-center items-baseline rounded-full bg-slate-100 text-slate-800 font-bold text-lg">
                        <Image src="https://img.icons8.com/external-those-icons-flat-those-icons/40/000000/external-PHP-programming-and-development-those-icons-flat-those-icons.png" className="!mt-1" width={25} height={20} alt="php" />
                        <span>PHP</span>
                    </span>

                    that I’m now pretty confident in building apps using these tools:</p>
                <div className="mt-8">
                    {
                        logo.map((d) => (
                            <a key={d.name} rel="noreferrer" target="_blank" href={d.link}><Image src={`/${d.name}`} width={70} height={70} alt={d.name} />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
