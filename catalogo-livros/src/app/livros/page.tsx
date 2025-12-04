"use client"; 
//Necessário porque para acessar o LocalStorage (somente no cliente)

import { useEffect, useState } from "react";
import { getLivros } from "@/app/utils/localStorageLivros";

export default function LivrosPage() {
  const [livros, setLivros] = useState<any[]>([]);

  useEffect(() => {
    // -----------------------------------------------------
    // Quando a página carrega, busca os livros salvos
    // -----------------------------------------------------
    const data = getLivros();
    setLivros(data);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Meus Livros</h1>

      {/* Caso não haja livros, mostra uma mensagem */}
      {livros.length === 0 && <p>Nenhum livro cadastrado ainda.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {livros.map((livro) => (
          <div
            key={livro.id}
            className="bg-white p-4 shadow rounded border"
          >
            <h2 className="text-xl font-semibold">{livro.titulo}</h2>
            <p className="text-gray-700">Autor: {livro.autor}</p>
            <p className="text-gray-700">Gênero: {livro.genero}</p>

            <p className="mt-2 text-sm">
              <strong>Status:</strong> {livro.status}
            </p>

            <p className="text-sm">
              <strong>Progresso:</strong> {livro.progresso}%
            </p>

            {/* Futuramente, esse card vai ter botão para detalhes */}
          </div>
        ))}
      </div>
    </div>
  );
}
