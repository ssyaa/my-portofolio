import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <section className="flex flex-col items-center justify-center text-center min-h-[50vh] py-12 px-4 bg-white dark:bg-black dark:bg-galaxy">
            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-galaxyPurple drop-shadow-glow">
                📬 Contact Me
            </h2>
            <div className="mt-6 space-y-4 text-base">
                <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-gray-700 dark:text-galaxyPurple" />
                    <a href="mailto:chacaaulia170204@gmail.com" className="text-gray-800 dark:text-white hover:underline">
                        chacaaulia170204@gmail.com
                    </a>
                </div>
                <div className="flex items-center space-x-3">
                    <Linkedin className="w-6 h-6 text-gray-700 dark:text-galaxyPurple" />
                    <a 
                        href="https://www.linkedin.com/in/tasya-aulia-putri/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-800 dark:text-white hover:underline"
                    >
                        Tasya Aulia Putri
                    </a>
                </div>
                <div className="flex items-center space-x-3">
                    <Instagram className="w-6 h-6 text-gray-700 dark:text-galaxyPurple" />
                    <a 
                        href="https://www.instagram.com/ssyaa_._?igsh=MXNrZzdtaXk5eDR2Mw==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-800 dark:text-white hover:underline"
                    >
                        @ssyaa_._
                    </a>
                </div>
            </div>
        </section>
    );
}
