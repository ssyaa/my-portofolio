import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <section className="flex flex-col items-center justify-center text-center mt-10">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-2">
                    <Mail className="w-6 h-6 text-black" />
                    <a href="mailto:chacaaulia170204@gmail.com" className="text-black hover:underline">chacaaulia170204@gmail.com</a>
                </div>
                <div className="flex items-center space-x-2">
                    <Linkedin className="w-6 h-6 text-black" />
                    <a href="https://www.linkedin.com/in/tasya-aulia-putri/" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">Tasya Aulia Putri</a>
                </div>
                <div className="flex items-center space-x-2">
                    <Instagram className="w-6 h-6 text-black" />
                    <a href="https://www.instagram.com/ssyaa_._?igsh=MXNrZzdtaXk5eDR2Mw==" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">@ssyaa_._</a>
                </div>
            </div>
        </section>
    );
}
