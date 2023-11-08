import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
    return (
        <div>
            <div className="flex gap-5 justify-center items-center mt-20">
                <p className="text-2xl lg:text-2xl text-white font-semibold font-primary">Hi, nice to meet you!</p>
                <hr className="border-2 border-primary w-20" />
            </div>

            <div className="flex flex-col md:flex-row justify-around gap-16 lg:mx-20 lg:mt-12 items-center">
                <div className="font-primary">
                    <p className="text-white text-xl lg:text-2xl mt-5 px-3 leading-loose">I’m currently working as a freelance frontend developer. <br />I enjoy building web apps using

                        <motion.button className="mx-1 inline-flex items-baseline justify-center w-28 h-7 gap-1 rounded-full bg-slate-100 text-slate-800 font-bold text-lg"
                            whileHover={{ scale: 1.1 }}>
                            <Image src="/react.png" alt='React' width={25} height={20} className="!mt-1 !z-10" />
                            <span className=''>React</span>
                        </motion.button>

                        and

                        <motion.button className="mx-1 inline-flex justify-center items-baseline w-44 h-7 gap-1 rounded-full bg-slate-100 text-slate-800 font-bold text-lg"
                            whileHover={{ scale: 1.1 }}>
                            <Image src="/tailwind.png" alt='React' width={25} height={20} className="!mt-1" />
                            <span>TailwindCSS</span>
                        </motion.button>

                        <br />I like new things to learn, whether about the world of programming or design</p>
                </div>
                <div>
                    <Link passHref rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1uoz9MKLPQSs-gpESJfnj-2fEG8YaSe-d/view?usp=sharing">
                        <a target="_blank" rel="noopener noreferrer">
                            <motion.button className="w-64 py-3 rounded-full font-bold text-xl font-primary bg-gradient-to-r from-left to-right"
                                whileHover={{ y: -10 }}>Download Resume</motion.button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
