export default function Projects() {
    const projects = [
        {
            title: "Rumah BUMN Makassar",
            description: "Website promosi untuk Rumah BUMN Makassar.",
            url: "https://rumahbumnmakassar.vercel.app",
            image: "/websiterb.png"
        }
    ];

    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-white dark:bg-black bg-center bg-cover dark:bg-galaxy">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800 dark:text-galaxyPurple drop-shadow-glow">
                🚀 Projects Website
            </h2>
            <div className="w-full max-w-screen-md space-y-6">
                {projects.map((project, index) => (
                    <a 
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-100 dark:bg-gray-800 border border-transparent hover:border-galaxyPurple p-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-galaxyPurple"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-48 object-cover rounded-md border border-gray-200 dark:border-gray-700"
                        />
                        <h3 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
