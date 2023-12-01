import Main from "@/Layouts/Admin/Main";

const Index = ({ title }) => {
    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-xl">{title}</h1>
                <div><button className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg p-2">Tambah</button></div>
            </div>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-2 py-2">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nama Layanan
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Foto
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Kisaran Harga
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4">
                                DESAIN RUMAH MODERN
                            </td>
                            <td class="px-6 py-4">
                                <img src="#" alt="ini gambar ya" />
                            </td>
                            <td class="px-6 py-4">
                                10.000.000 - 20.000.000
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ml-1">Hapus</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

Index.layout = (page) => <Main children={page} />
export default Index;
