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
        <section className="flex flex-col items-center justify-center min-h-screen px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Projects Website</h2>
            <div className="w-full max-w-screen-md">
                {projects.map((project, index) => (
                    <a 
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300 text-center"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h3 className="text-xl font-bold mt-3 text-white">{project.title}</h3>
                        <p className="text-gray-400">{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
