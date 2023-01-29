import Link from "next/link"

export const Header: React.FC = () => {
    return <header>
        <nav className="bg-gray-dark border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">


                <Link href="/" className="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">KING BULK</span>
                </Link>
                <div className="flex items-center lg:order-2">
                    <Link href="/terms" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">利用規約</Link >
                    <Link href="/privacy_policy" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">プライバシーポリシー</Link >
                    <Link href="https://forms.gle/oMv4ciKDSiUoL7bi7" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">お問い合わせ</Link >
                </div>
            </div>
        </nav>
    </header>
}