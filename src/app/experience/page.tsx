import React from "react";
import { Briefcase, Users } from "lucide-react";

interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string;
    }

    const experiencesWork: Experience[] = [
    {
        title: "Leader Digital Marketing",
        company: "Rumah BUMN BRI Makassar",
        duration: "2025 - sekarang",
        description: "Membuat Website promosi (Frontend & Backend) dan mengajak UMKM untuk display barang di Rumah BUMN.",
    },
    {
        title: "Gojek Campus Ambassador",
        company: "Gojek",
        duration: "2023",
        description: "Membantu mempromosikan produk dan layanan Gojek di lingkungan kampus.",
    },
    ];

    const experiencesOrg: Experience[] = [
    {
        title: "Mentor Academy",
        company: "Fakultas Teknik, Universitas Hasanuddin",
        duration: "2023 - Sekarang",
        description: "Membimbing mahasiswa dalam pengembangan akademik dan profesional.",
    },
    {
        title: "Panitia PIMTEK",
        company: "Universitas Hasanuddin",
        duration: "2023",
        description: "Bertanggung jawab dalam divisi kompetisi untuk menyelenggarakan acara PIMTEK.",
    },
    {
        title: "Panitia MOC 2024",
        company: "Universitas Hasanuddin",
        duration: "2024",
        description: "Menjadi bagian dari divisi humas untuk menjalin komunikasi dan promosi acara.",
    },
    ];

    const ExperiencePage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-purple-300">Experience</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Pengalaman Organisasi */}
            <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800 dark:text-blue-400">
                <Users className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" /> Organization Experience
            </h2>
            <div className="space-y-6">
                {experiencesOrg.map((exp, index) => (
                <div
                    key={index}
                    className="flex items-start space-x-4 p-6 border border-gray-200 dark:border-blue-800 rounded-lg shadow-md bg-white dark:bg-black/40 backdrop-blur-sm transition-all duration-300"
                >
                    <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full">
                    <Users className="h-6 w-6 text-blue-500 dark:text-blue-300" />
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-300">{exp.company}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Pengalaman Kerja */}
            <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800 dark:text-green-400">
                <Briefcase className="w-6 h-6 mr-2 text-green-500 dark:text-green-300" /> Internship Experience
            </h2>
            <div className="space-y-6">
                {experiencesWork.map((exp, index) => (
                <div
                    key={index}
                    className="flex items-start space-x-4 p-6 border border-gray-200 dark:border-green-800 rounded-lg shadow-md bg-white dark:bg-black/40 backdrop-blur-sm transition-all duration-300"
                >
                    <div className="p-3 bg-green-100 dark:bg-green-800 rounded-full">
                    <Briefcase className="h-6 w-6 text-green-500 dark:text-green-300" />
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-300">{exp.company}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

        </div>
        </div>
    );
};

export default ExperiencePage;
