export default function About() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-6xl mx-auto">
            {/* Bagian Kiri - Teks */}
            <div className="bg-white md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-600">About Me</h2>
                <p className="text-gray-700 mt-2 font-poppins">
                    "I'm <span className='text-pink-400 font-bold'>Tasya Aulia Putri</span>, u can call me <span className='text-pink-400 font-bold'>Tasya</span>. I'm interested in <span className='text-gray-500 font-bold'>Frontend Website Development</span>, <span className='text-gray-500 font-bold'>Data Analysis</span>, and <span className='text-gray-500 font-bold'>Digital Marketing</span>. I'm studying at <span className='text-gray-500 font-bold'>Hasanuddin University</span>, Class of 2022, Informatics Engineering"
                </p>
            </div>

            {/* Bagian Kanan - Foto */}
            <div className="md:w-1/2 flex justify-center">
                <img src="/profile.jpg" alt="My Photo" className="rounded-lg w-64 h-64 object-cover" />
            </div>
        </section>
    );
}