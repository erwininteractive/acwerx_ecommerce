import Header from '../../components/Header'
import Banner from '../../components/Banner'
import '../../styles/globals.css'

export const metadata = {
    title: 'A C Werx',
    description: 'sales of weird stuff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <Banner />
                {children}
            </body>
        </html>
    )
}
