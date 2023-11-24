import Main from "@/Layouts/Home/Main";
import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Index = () => {

    const [gambarIndex, setGambarIndex] = useState(0);
    const gambarList = [
        'https://source.unsplash.com/600x400?random',
        'https://res.cloudinary.com/cv-mekar-cutting-digital/image/upload/v1661406208/products/jsu1y3fs09bkvgvsxtrq.png',
        'https://res.cloudinary.com/cv-mekar-cutting-digital/image/upload/v1661153096/products/i4xtgsg8zngm5unfbh9e.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setGambarIndex((gambarIndex + 1) % gambarList.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [gambarIndex]);
    return (
        <>
            <main class="py-6 px-4 sm:p-6 md:py-10 md:px-5">
                <div class="mx-auto grid max-w-full grid-cols-1 lg:max-w-full lg:grid-cols-2 lg:gap-x-6">
                    <div class="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 dark:sm:text-white md:text-2xl">
                            Desain Interior
                        </h1>
                    </div>
                    <div class="col-start-1 col-end-3 row-start-1 grid gap-4 sm:mb-6 sm:grid-cols-4 lg:col-start-2 lg:row-span-6 lg:row-end-6 lg:mb-0 lg:gap-6">
                        <img src="https://res.cloudinary.com/ardianto/image/upload/v1667460283/portfolio/arfenaz_svtcfy.jpg"
                            alt="" class="h-60 w-full rounded-lg object-cover sm:col-span-2 sm:h-52 lg:col-span-full"
                            loading="lazy" />
                        <img src="https://res.cloudinary.com/ardianto/image/upload/v1667461279/portfolio/gbr1_syaped.jpg"
                            alt=""
                            class="hidden h-52 w-full rounded-lg object-cover sm:col-span-2 sm:block md:col-span-1 lg:col-span-2 lg:row-start-2 lg:h-32"
                            loading="lazy" />
                        <img src="https://res.cloudinary.com/ardianto/image/upload/v1667461282/portfolio/gbr2_e2vyvu.jpg"
                            alt=""
                            class="hidden h-52 w-full rounded-lg object-cover md:block lg:col-span-2 lg:row-start-2 lg:h-32"
                            loading="lazy" />
                    </div>
                    <dl
                        class="row-start-2 mt-4 flex items-center text-xs font-medium sm:row-start-3 sm:mt-1 md:mt-2.5 lg:row-start-2">
                        <dt class="sr-only">Reviews</dt>
                        {/* <dd class="flex items-center text-indigo-600 dark:text-indigo-400">
                            <svg width="24" height="24" fill="none" aria-hidden="true"
                                class="mr-1 stroke-current dark:stroke-indigo-500">
                                <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>4.89 <span class="font-normal text-slate-400">(128)</span></span>
                        </dd> */}
                        <dt class="sr-only">Location</dt>
                        <dd class="flex items-center">
                            <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="text-slate-300">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" class="mr-1 text-slate-400 dark:text-slate-500"
                                aria-hidden="true">
                                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                            </svg>
                            Indonesia
                        </dd>
                    </dl>
                    <div
                        class="col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6">
                        < button type="button"
                            class="rounded-lg bg-indigo-600 py-2 px-3 text-sm font-medium leading-6 text-white">Check
                            availability</button>
                    </div>
                    <p
                        class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400 sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6">
                        <b><i>Arfenaz Software</i></b> adalah media digital yang bergerak di bidang teknologi dan informasi. Media
                        digital dalam
                        bentuk cerita
                        yang menarik untuk dibaca dan juga informatif. Penyedia media informasi digital berupa bacaan yang tidak
                        membosankan. Bukan hanya media baca saja <b><i>Arfenaz Software</i></b> juga sebagai penyedia jasa pembuatan
                        website,
                        aplikasi dekstop dan pengembangan Prototype IOT di Purbalingga, Jawa Tengah Indonesia.
                        Portfolio sudah banyak kami punya hingga seluruh indonesia. Kami bekerja dengan tenaga kerja yang
                        profesional dan bertanggung jawab. Moto kami adalah Team Work, Profesional, and Perfect.
                    </p>
                </div>
            </main>
            {/* <div class="container">
                <figure class="rounded-xl dark:bg-slate-800 md:flex md:p-0">
                    <img class="mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-lg"
                        src="https://res.cloudinary.com/ardianto/image/upload/v1667460204/portfolio/bg_nur0d7.jpg" alt=""
                        width="384" height="512" />
                    <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
                        <blockquote>
                            <p class="text-lg font-medium">
                                “Work innovatively and creatively for the advancement of information technology in the present and
                                the future”
                            </p>
                        </blockquote>
                        <figcaption class="font-medium">
                            <div class="text-sky-500 dark:text-sky-400">
                                Ardianto Putra Pratomo
                            </div>
                            <div class="text-slate-700 dark:text-slate-500">
                                Chief Executive Officer of Arfenaz Software
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div> */}


            <h1 className="text-3xl font-bold text-center mt-5 mb-3 font-mono">Layanan Kami</h1>
            <div className="border-[1px] border-black w-[5%] mx-auto"></div>

            <div className="container mx-auto">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 mt-5">
                    {/* {layanan.map((data, i) => {
                    return (
                        <>
                            <Link href="#" key={i}>
                                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <img src="/img/mekarlaser.png" className="max-h-52 w-full" />
                                    <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.namaLayanan}</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.deskripsi}</p>
                                    <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </Link>
                        </>
                    )
                })} */}
                    <a href="#">
                        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img src="/img/mekarlaser.png" className="max-h-52 w-full" />
                            <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jasa pembuatan aplikasi desktop</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aplikasi desktop adalah aplikasi yang hanya berjalan di komputer itu sendiri secara lokal. Biasanya aplikasi desktip itu berupa aplikasi kasir yag ada di indomaret. Kecepatan yang diutamakan.</p>
                            <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </a>
                    <a href="#">
                        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img src="/img/mekarlaser.png" className="max-h-52 w-full" />
                            <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jasa pembuatan running text</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Running text adalah papan iklan promosi dan informasi yang terbuat dari led yang dapat di program menggunakan komputer untuk menampilkan tulisan, gambar dan animasi. Apakah tertarik?</p>
                            <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </a>
                    <a href="#">
                        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img src="/img/mekarlaser.png" className="max-h-52 w-full" />
                            <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jasa pembuatan desain grafis</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Desain grafis adalah salah satu bentuk seni lukis yang memiliki beberapa tujuan. Seperti untuk mengatur atau menciptakan elemen rupa. Contohnya foto, ilustrasi, tulisan dan garis di atas sebuah media.</p>
                            <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </a>
                </div>
            </div>

            <div className="py-6 px-4 sm:p-6 md:py-10 md:px-5">
                <h1 className="my-5 text-center text-3xl font-bold">Kontak</h1>
                <div className="block md:flex container">
                    <div className="w-full md:w-[50%] min-[300px]">
                        <div className="w-full h-72 border m-2">Maps</div>
                    </div>
                    <div className="w-full ml-3">
                        <ul className="text-2xl m-2">
                            <li>Phone: (+62) xxxxxxxxx</li>
                            <li>Email: example@gmail.com</li>
                            <li>Lokasi: jl.......</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
Index.layout = (page) => <Main children={page} />;
export default Index;
