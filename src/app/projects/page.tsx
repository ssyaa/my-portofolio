export default function Projects() {
    const toolIcons = {
        react: { src: "/react.png", size: "w-9 h-8" },
        nextjs: { src: "/nextjs.png", size: "w-11 h-11" },
        tailwind: { src: "/tailwind.png", size: "w-12 h-8" },
        firebase: { src: "/firebase.png", size: "w-11 h-11" },
        cloudinary: { src: "/cloudinary.png", size: "w-14 h-14" },
        html: { src: "/html.png", size: "w-10 h-10" },
        css: { src: "/css.png", size: "w-10 h-10" },
        firestore: { src: "/firestore.png", size: "w-7 h-7" },
        vsc: { src: "/vsc.png", size: "w-9 h-9" },
        androstud: { src: "/androstu.png", size: "w-9 h-9" },
        authfirebase: { src: "/authfirebase.png", size: "w-7 h-7" },
        js: { src: "/js.png", size: "w-11 h-11" },
        laravel: { src: "/laravel.png", size: "w-18 h-7" },
        kotlin: { src: "/kotlin.png", size: "w-13 h-14" },
        github: { src: "/github.png", size: "w-8 h-8" },
    };

    const webProjects = [
        {
            title: "Rumah BUMN Makassar (Client)",
            description: "Website promosi untuk Rumah BUMN Makassar, yang menjelaskan benefit umkm ketika bergabung menjadi binaan Rumah BUMN Makassar",
            url: "https://rumahbumnmakassar.vercel.app",
            image: "/websiterb.png",
            tools: ["vsc", "react", "nextjs", "tailwind", "firebase", "cloudinary", "github"]
        },
        {
            title: "Rumah BUMN Makassar (Admin)",
            description: "Website untuk mengatur data 'PRODUK UMKM' sebagai salah satu sarana promosi, dan mengatur hal lain seperti contact personal",
            url: "#",
            image: "/adminrb.png",
            tools: ["vsc", "react", "nextjs", "tailwind", "firebase", "cloudinary", "github"]
        },
        {
            title: "My Recipe Cake",
            description: "Project Website individu dari mata kuliah Pemrograman web dan Rekayasa web",
            url: "#",
            image: "/websitecake.png",
            tools: ["vsc", "html", "css", "js", "laravel", "github"]
        },
        {
            title: "Admin Sistem Informasi Website Pengajuan Sidang",
            description: "Project tim dari mata kuliah sistem informasi",
            url: "#",
            image: "/websitesidang.png",
            tools: ["vsc", "react", "nextjs", "tailwind", "firebase", "github"]
        },
        {
            title: "Sarynthelebel",
            description: "Project Tim dari matakuliah Rekayasa Perangkat unak (Cloud Computing & Big data). Website E-commerce sederhana untuk mitra.",
            url: "#",
            image: "/saryn.png",
            tools: ["vsc", "react", "nextjs", "tailwind", "laravel", "github"]
        }
    ];

    const mobileProjects = [
        {
            title: "BRIX",
            description: "Project Tim 'Aplikasi E-commerce Mobile Bahan Bangunan' dari mata kuliah Sistem Informasi",
            url: "#",
            image: "/brix.png",
            tools: ["androstud", "kotlin", "firebase", "github"]
        }
    ];

    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-white dark:bg-black bg-center bg-cover dark:bg-galaxy">
            {/* Website Projects */}
            <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800 dark:text-galaxyPurple drop-shadow-glow">
                Projects Website
            </h2>
            <div className="w-full max-w-screen-xl flex flex-wrap justify-center gap-8 mb-20">
                {webProjects.map((project, index) => (
                    <a 
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[600px] bg-gray-100 dark:bg-gray-800 border border-transparent hover:border-galaxyPurple p-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-galaxyPurple"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-64 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
                        />
                        <h3 className="text-3xl font-semibold mt-6 text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                            {project.description}
                        </p>
                        {project.tools.length > 0 && (
                            <div className="flex flex-wrap items-center mt-4">
                                <span className="text-gray-600 dark:text-gray-400 mr-2 font-semibold">Tools:</span>
                                {project.tools.map((tool, idx) => (
                                    <img 
                                        key={idx}
                                        src={toolIcons[tool as keyof typeof toolIcons].src}
                                        alt={tool}
                                        className={`${toolIcons[tool as keyof typeof toolIcons].size} mr-2 hover:scale-110 transition-transform`}
                                        title={capitalizeFirstLetter(tool)}
                                    />
                                ))}
                            </div>
                        )}
                    </a>
                ))}
            </div>

            {/* Mobile App Projects */}
            <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800 dark:text-galaxyPurple drop-shadow-glow">
                Projects Aplikasi Mobile
            </h2>
            <div className="w-full max-w-screen-md flex flex-wrap justify-center gap-8">
                {mobileProjects.map((project, index) => (
                    <a 
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[600px] bg-gray-100 dark:bg-gray-800 border border-transparent hover:border-galaxyPurple p-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-galaxyPurple"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-60 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
                        />
                        <h3 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                            {project.description}
                        </p>
                        {project.tools.length > 0 && (
                            <div className="flex flex-wrap items-center mt-4">
                                <span className="text-gray-600 dark:text-gray-400 mr-2 font-semibold">Tools:</span>
                                {project.tools.map((tool, idx) => (
                                    <img 
                                        key={idx}
                                        src={toolIcons[tool as keyof typeof toolIcons].src}
                                        alt={tool}
                                        className={`${toolIcons[tool as keyof typeof toolIcons].size} mr-2 hover:scale-110 transition-transform`}
                                        title={capitalizeFirstLetter(tool)}
                                    />
                                ))}
                            </div>
                        )}
                    </a>
                ))}
            </div>
        </section>
    );
}

function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
