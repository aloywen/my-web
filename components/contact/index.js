import Image from "next/image";

export default function Index() {
    return (
        <div>
            <div className="mt-14 pb-20 w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-20">
                <div className="flex justify-center gap-3 items-center">
                    <p className="text-2xl lg:text-2xl text-white font-semibold font-primary">get in touch</p>
                    <Image src="https://img.icons8.com/office/60/000000/call-me.png" width={30} height={30} alt="call" />
                </div>
                <div className="flex justify-center gap-5">
                    <a rel="noreferrer" href="mailto: aliianwar7@gmail.com"><Image src="https://img.icons8.com/material-rounded/60/000000/mail.png" className="!bg-white !p-2 !rounded-full" width={60} height={60} alt="email" /></a>

                    <a rel="noreferrer" href="https://github.com/aloywen" target="_blank"><Image src="https://img.icons8.com/ios-glyphs/60/000000/github.png" className="!bg-white !p-2 !rounded-full" width={60} height={60} alt="github" /></a>
                </div>
            </div>

            <p className="flex justify-center items-center text-lg font-primary text-white pb-5">Made with <Image src="https://img.icons8.com/color/20/000000/filled-like.png" className="!px-1" width={30} height={25} alt="love" />
                | icon by <a rel="noreferrer" href="https://icons8.com/" target="_blank"><span className="mx-1 text-primary">icons8</span></a>
            </p>
        </div>
    )
}
