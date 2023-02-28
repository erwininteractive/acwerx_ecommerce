import '../../../../styles/globals.css'

export const metadata = {
    title: 'A C Werx',
    description: 'sales of weird stuff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
