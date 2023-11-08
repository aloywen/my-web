import { motion } from 'framer-motion'

export default function Index() {
    return (
        <div className='flex items-center pb-12 flex flex-col md:flex-row'>
            <motion.img className='rounded-full border-8 border-white w-64 h-64 mt-16 mx-auto' src="/profile.png" alt=""
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
            />
            <motion.div class="w-full lg:w-3/5"
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
            >
                <div className="flex flex-col items-center text-center mt-5 lg:-ml-44 lg:mt-8">
                    <p className="text-3xl font-bold font-secondary text-white">Ali Anwar</p>

                    <p
                        className="text-slate-800 text-center text-2xl font-bold bg-gradient-to-r from-left to-right w-80 px-2 py-2 mt-4 rounded-full shadow-lg font-primary">
                        Front End
                        Developer</p>
                </div>
            </motion.div>
        </div>
    )
}
