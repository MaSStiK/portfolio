import { Fira_Code } from "next/font/google"
import { ContextProvider } from "@/components/Context/Context";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./styles/style.scss"

const fira_Code = Fira_Code({ subsets: ["latin"] });

export const metadata = {
    title: "Portfolio",
    description: "MaSStiK Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={fira_Code.className}>
                <ContextProvider >
                    <Header />
                    <main>
                        <article>
                            {children}
                        </article>
                    </main>
                    <Footer />
                </ContextProvider>
            </body>
        </html>
    );
}
