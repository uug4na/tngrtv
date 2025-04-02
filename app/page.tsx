import Link from "next/link"
import Image from "next/image"
import { Users } from "lucide-react"

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Cyberpunk grid background */}
            <div className="fixed inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black"></div>
                <div className="absolute inset-0 bg-grid-small-white/[0.2] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 border-b border-purple-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                                TNGR.TV
                            </span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-6">
                            <Link href="#about" className="text-sm hover:text-cyan-400 transition-colors">
                                Бидний тухай
                            </Link>
                            <Link href="#team" className="text-sm hover:text-cyan-400 transition-colors">
                                Манай баг
                            </Link>
                            <Link href="#programs" className="text-sm hover:text-cyan-400 transition-colors">
                                Нэвтрүүлгүүд
                            </Link>
                            <Link href="#contact" className="text-sm hover:text-cyan-400 transition-colors">
                                Холбоо барих
                            </Link>
                        </nav>

                        <button className="md:hidden p-2 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                            <span className="sr-only">Цэс</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 py-20 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                                TNGR.TV
                            </span>
                            <br />
                            <span className="text-white">Дэвшилтэт шинэ медиа</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-8">
                            Олон ургалч үзэл санаа | Шинэ үеийн дуу хоолой | Чанартай агуулга | Итгэл хүлээсэн редакц | Хараат бус бие даасан |
                        </p>
                        <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-md text-lg flex items-center justify-center mx-auto">
                            Мэдээлэл авах
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/20 rounded-full filter blur-3xl"></div>
            </section>

            {/* About Us Section */}
            <section id="about" className="relative z-10 py-20 border-t border-purple-900/50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-md"></div>
                                <div className="relative bg-black/80 backdrop-blur-sm p-1 rounded-lg border border-purple-500/50">
                                    <div className="aspect-video rounded-lg overflow-hidden bg-black/90">
                                        <Image
                                            src="/banner.jpg"
                                            alt="TNGR.TV студи"
                                            className="w-full h-full object-cover mix-blend-lighten opacity-80"
                                            width={600}
                                            height={400}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-2 mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-cyan-400"
                                >
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                                <h2 className="text-xl font-semibold text-cyan-400">Бидний тухай</h2>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">TenGer TV: НИЙГМИЙН ИТГЭЛЦЛИЙГ СЭРГЭЭНЭ                            </h3>
                            <p className="text-gray-400 mb-4">
                                Про Медиа Нетворк ХХК-ийн эрхлэн явуулдаг TenGer TV нь 2022 онд телевизийн салбарт цоо шинэ өнгө төрх, дэвшилтэт агуулга, чанартай боловсон хүчний бодлоготойгоор үйл ажиллагаагаа эхлүүлсэн.

                            </p>
                            <p className="text-gray-400 mb-6">
                                Манай баг мэргэжлийн сэтгүүлч, бүтээлч хамт олны хүчээр нийгмийн хамгийн тод дуу хоолой, хамгийн итгэж болох редакц болох зорилготойгоор ажиллаж байна.
                            </p>
                            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-4 py-2 rounded-md flex items-center">
                                Дэлгэрэнгүй
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-2"
                                >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="relative z-10 py-20 border-t border-purple-900/50 bg-black/50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Users className="h-5 w-5 text-purple-400" />
                            <h2 className="text-xl font-semibold text-purple-400">Манай баг</h2>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Мэргэжлийн хамт олон</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Манай баг мэргэжлийн уран бүтээлчид, чадварлаг сэтгүүлчид, эрч хүчтэй залуусаар багаа бүрдүүлэн танд хамгийн чанартай, бүтээлч агуулгыг хүргэхээр зорин ажиллаж байна
                        </p>
                    </div>

                    {/* Management Team */}
                    <div className="mb-12">
                        <h4 className="text-2xl font-bold mb-6 text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                                Манай баг
                            </span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "А.Ундрал", role: "Гүйцэтгэх захирал", image: "./bsd/image.png" },
                                { name: "Ц.Батчулуун", role: "Ерөнхий найруулагч", image: "bsd/2.png" },
                                { name: "Ө.Энхгэрэл", role: "Үйл ажиллагаа хариуцсан захирал", image: "bsd/3.png" },
                                { name: "Б.Ариунцэцэг", role: "Мэдээний албаны ахлах продюсер", image: "bsd/4.png" },
                                { name: "Ж.Хулан", role: "Зөвлөх продюсер", image: "bsd/5.png" },
                                { name: "О. Ариунтуул", role: "Анкор, продюсер", image: "bsd/6.jpg" },
                                { name: "П.Доржпалам", role: "Контент бүтээгч, шинжлэх ухааны мэдээний продюсер", image: "bsd/7.png" },
                                { name: "Б.Ганцацрал", role: "Анкор", image: "bsd/8.png" },
                                { name: "Э.Энхбулган", role: "Анкор, гадаад мэдээний продюсер", image: "bsd/9.png" },
                                { name: "Г.Алтансүх", role: "Ахлах найруулагч, төслийн удирдагч", image: "bsd/10.png" },


                            ].map((member, index) => (
                                <div key={index} className="group">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="relative bg-black/80 backdrop-blur-sm p-1 rounded-lg border border-purple-500/50 overflow-hidden group-hover:border-cyan-400 transition-colors">
                                            <div className="aspect-square rounded-lg overflow-hidden bg-black/90">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                                                <div className="p-4">
                                                    <h4 className="text-lg font-bold text-white">{member.name}</h4>
                                                    <p className="text-cyan-400">{member.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Leadership Team */}
                    {/* <div>
                        <h4 className="text-2xl font-bold mb-6 text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-600">
                                Төлөөлөн удирдах зөвлөл
                            </span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Г.Бат-Эрдэнэ", role: "ТУЗ-ийн дарга", image: "/asd/1.png" },
                                { name: "Г.Уянга", role: "TenGerLeague Media Group-ийн ТУЗ-ийн дарга", image: "/asd/2.png" },
                                { name: "А.Ундрал", role: "Unread-ийн үүсгэн байгуулагч, гүйцэтгэх захирал", image: "/asd/3.png" },
                                { name: "Ж.Алтангүний", role: "Монголын эдийн засгийн чуулган ТББ-ын гүйцэтгэх захирал", image: "/asd/4.png" },
                                {
                                    name: "Д.Бат-Оюун", role: "Ori Studios-ийн гүйцэтгэх захирал", image: "./asd/5.png"
                                }
                            ].map((member, index) => (
                                <div key={index} className="group">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="relative bg-black/80 backdrop-blur-sm p-1 rounded-lg border border-purple-500/50 overflow-hidden group-hover:border-cyan-400 transition-colors">
                                            <div className="aspect-square rounded-lg overflow-hidden bg-black/90">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                                                <div className="p-4">
                                                    <h4 className="text-lg font-bold text-white">{member.name}</h4>
                                                    <p className="text-purple-400">{member.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </section>

            {/* Programs Section */}
            <section id="programs" className="relative z-10 py-20 border-t border-purple-900/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-cyan-400"
                            >
                                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                                <polyline points="17 2 12 7 7 2"></polyline>
                            </svg>
                            <h2 className="text-xl font-semibold text-cyan-400">Нэвтрүүлгүүд</h2>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Манай онцлох контент</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            TNGR.TV-ийн онцлох нэвтрүүлгүүдтэй танилцана уу. Бид технологи, шинжлэх ухаан, урлаг, соёлын мэдээллийг
                            хамгийн шинэлэг байдлаар хүргэж байна.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "БУУХИА", desc: "30 зочин, 30 өнцөг, 30 яриа, 30 өнгө", image: "/eds/buuhai.png" },
                            { title: "ГЭЖ ЮУ ВЭ?", desc: "Шинжлэх ухааныг хамгийн энгийн, хамгийн сонирхолтойгоор", image: "/eds/2.png" },
                            { title: "7:10 мэдээллийн хөтөлбөр", desc: "Бодит өнцөг, итгэлт эх сурвалж, шударга дуу хоолой", image: "/eds/3.png" },
                            { title: "БОДЛОГЫН МЭТГЭЛЦЭЭН", desc: "Улс төрийн боловсролыг хамгийн хүртээмжтэй байдлаар", image: "eds/4.png" },
                            { title: "Techworm", desc: "Технологийн ертөнцийн хамгийн сүүлийн үеийн мэдээ, мэдээллийг", image: "eds/5.png" },
                            { title: "TenGer Panel", desc: "Мэргэжлийн экспертүүдийн өнцөг, дуу хоолой, үзэл бодол", image: "eds/6.png" },
                        ].map((program, index) => (
                            <div key={index} className="group">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative bg-black/80 backdrop-blur-sm p-1 rounded-lg border border-purple-500/50 overflow-hidden group-hover:border-cyan-400 transition-colors">
                                        <div className="aspect-video rounded-lg overflow-hidden bg-black/90">
                                            <Image
                                                src={program.image}
                                                alt={program.title}
                                                className="w-full h-full object-cover"
                                                width={350}
                                                height={200}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-lg font-bold text-white mb-2">{program.title}</h4>
                                            <p className="text-gray-400">{program.desc}</p>
                                            <button className="text-cyan-400 flex items-center mt-2">
                                                Дэлгэрэнгүй
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="ml-1"
                                                >
                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative z-10 py-20 border-t border-purple-900/50 bg-black/50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-2 mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-purple-400"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <h2 className="text-xl font-semibold text-purple-400">Холбоо барих</h2>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Бидэнтэй холбогдоорой</h3>
                            <p className="text-gray-400 mb-6">
                                Та бидэнтэй холбогдож, санал хүсэлтээ илгээх, хамтран ажиллах боломжийн талаар ярилцаж болно. Бид таны
                                захидалд аль болох хурдан хариу өгөхийг хичээх болно.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-purple-400"
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Имэйл</p>
                                        <p className="text-white">Hello@tngr.tv</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-purple-400"
                                        >
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Хаяг</p>
                                        <p className="text-white">Улаанбаатар хот, Баянзүрх дүүрэг, 1-р хороо, TenGer TV-ийн байр</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                                    <Link
                                        key={social}
                                        href={`#${social}`}
                                        className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                                    >
                                        <span className="sr-only">{social}</span>
                                        <div className="w-5 h-5 bg-purple-400 mask-image" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-md"></div>
                                <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-lg border border-purple-500/50">
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm text-gray-400">
                                                    Нэр
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="w-full bg-black/50 border border-purple-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                    placeholder="Таны нэр"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm text-gray-400">
                                                    Имэйл
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="w-full bg-black/50 border border-purple-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                    placeholder="Таны имэйл"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm text-gray-400">
                                                Гарчиг
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                className="w-full bg-black/50 border border-purple-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                placeholder="Захидлын гарчиг"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm text-gray-400">
                                                Захидал
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={4}
                                                className="w-full bg-black/50 border border-purple-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                placeholder="Таны захидал"
                                            ></textarea>
                                        </div>
                                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-2 px-4 rounded-md">
                                            Илгээх
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-8 border-t border-purple-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <Link href="/" className="flex items-center gap-2">
                                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                                    TNGR.TV
                                </span>
                            </Link>
                            <p className="text-sm text-gray-500 mt-2">
                                © {new Date().getFullYear()} TNGR.TV. Бүх эрх хуулиар хамгаалагдсан.
                            </p>
                        </div>

                        <nav className="flex flex-wrap gap-4 md:gap-6 justify-center">
                            <Link href="#about" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                                Бидний тухай
                            </Link>
                            <Link href="#team" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                                Манай баг
                            </Link>
                            <Link href="#programs" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                                Нэвтрүүлгүүд
                            </Link>
                            <Link href="#contact" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                                Холбоо барих
                            </Link>
                            <Link href="#privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                                Нууцлалын бодлого
                            </Link>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    )
}
