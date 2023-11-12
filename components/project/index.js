import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Index() {
    const data = [
        {
            title: 'Klinik Web App',
            desc: 'an application created for clinics and built with codeigniter 3',
            link: 'https://klinik-ku.000webhostapp.com/'
        },
        {
            title: 'Tumbas Shop',
            desc: 'Landing page e-commers platform, built with React and TailwindCSS',
            link: 'https://tumbass-shop.netlify.app/'
        },
        {
            title: 'Recipes Food',
            desc: 'Recipes food web app, built with React and TailwindCSS',
            link: 'https://resep-in.netlify.app/'
        },
        {
            title: 'Booking Online Box',
            desc: 'Booking online system, built with React and TailwindCSS',
            link: 'https://safen.netlify.app/'
        },
        // {
        //     title: 'Car Rental Site',
        //     desc: 'Landing page rental car, built with Html and TailwindCSS',
        //     link: 'https://coba-rental.netlify.app/'
        // },
        // {
        //     title: 'Mosque Website',
        //     desc: 'A static website build with HTML, Bootstrap and Javascript',
        //     link: 'https://simasjid.netlify.app/'
        // }
    ]
    return (
        <div>
            <p className="text-white text-2xl font-primary font-semibold text-center mt-32 mb-8">Project</p>

            <div className="flex flex-wrap lg:mx-44 justify-center gap-10">
                {
                    data.map((data) => (
                        <motion.div key={data.title} className="w-72 h-52 lg:w-96 lg:h-52 bg-slate-100 rounded-lg shadow-md shadow-right hover:bg-gradient-to-r from-left to-right flex flex-col px-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <p className="py-4 font-bold font-primary text-lg">{data.title}</p>
                            <hr />
                            <p className="pt-3 font-primary">{data.desc}</p>

                            <Link href={data.link} passHref>
                                <a rel="noreferrer" target="_blank" ><button className="mt-4 bg-primary text-white px-5 py-1 rounded-full"> View Live
                                </button></a>
                            </Link>

                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}
