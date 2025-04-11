export default function About() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-6xl mx-auto">
            {/* Bagian Kiri - Teks */}
            <div className="floating-slow bg-white dark:bg-black/40 md:w-1/2 flex flex-col justify-center text-center md:text-left p-6 rounded-lg shadow-md shadow-purple-500/20 transition-all duration-300">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-purple-300">About Me</h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2 font-poppins leading-relaxed">
                    "I'm <span className='text-pink-400 font-bold'>Tasya Aulia Putri</span>, u can call me <span className='text-pink-400 font-bold'>Tasya</span>.
                    I'm interested in <span className='text-purple-500 font-bold'>Frontend Website Development</span>, 
                    <span className='text-blue-400 font-bold'> Data Analysis</span>, and 
                    <span className='text-pink-500 font-bold'> Digital Marketing</span>. 
                    I'm studying at <span className='text-indigo-400 font-bold'>Hasanuddin University</span>, Class of 2022, Informatics Engineering"
                </p>
            </div>

            {/* Bagian Kanan - Foto */}
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img 
            src="/tasya.jpeg" 
            alt="My Photo" 
            className="floating-slow rounded-full w-64 h-64 object-cover shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105" 
            />
            </div>
        </section>
    );
}
