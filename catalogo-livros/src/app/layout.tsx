import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Catálogo de Livros",
  description: "Gerencie suas leituras",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100 text-gray-900">
        <nav className="bg-white shadow p-4 mb-4">
          <div className="container mx-auto flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/livros">Livros</Link>
            <Link href="/livros/novo">Adicionar Livro</Link>
          </div>
        </nav>

        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
