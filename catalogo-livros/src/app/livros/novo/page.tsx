"use client"; 
// Necessário porque este componente usa estados e eventos (client-side)

import { adicionarLivro } from "@/app/utils/localStorageLivros";
// Importa a função criada para salvar o livro

import { useState } from "react";

export default function NovoLivroPage() {
  // -----------------------------------------------------
  // Estados para guardar temporariamente os dados digitados
  // -----------------------------------------------------
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [progresso, setProgresso] = useState(0);
  const [avaliacao, setAvaliacao] = useState(0);
  const [citacoes, setCitacoes] = useState("");
  const [status, setStatus] = useState("lendo");

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const novoLivro = {
    titulo,
    autor,
    genero,
    progresso,
    avaliacao,
    citacoes,
    status,
  };

  // -------------------------------------------------------------
  // Salva no LocalStorage
  // -------------------------------------------------------------
  adicionarLivro(novoLivro);

  alert("📚 Livro salvo com sucesso!");

  // Limpando os campos após salvar
  setTitulo("");
  setAutor("");
  setGenero("");
  setProgresso(0);
  setAvaliacao(0);
  setCitacoes("");
  setStatus("lendo");
};


  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded">
      
      {/* Título da página */}
      <h1 className="text-2xl font-bold mb-4">Adicionar Novo Livro</h1>

      {/* Formulário principal */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        
        {/* Campo: Título */}
        <div>
          <label className="font-medium">Título</label>
          <input
            className="w-full p-2 border rounded"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} // atualiza o estado
            required
          />
        </div>

        {/* Campo: Autor */}
        <div>
          <label className="font-medium">Autor</label>
          <input
            className="w-full p-2 border rounded"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
        </div>

        {/* Campo: Gênero */}
        <div>
          <label className="font-medium">Gênero</label>
          <input
            className="w-full p-2 border rounded"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
        </div>

        {/* Campo: Progresso */}
        <div>
          <label className="font-medium">Progresso (%)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={progresso}
            onChange={(e) => setProgresso(Number(e.target.value))}
            min={0}
            max={100}
          />
          {/* Comentário: Number() converte a string digitada para número */}
        </div>

        {/* Campo: Avaliação */}
        <div>
          <label className="font-medium">Avaliação (0 a 5)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={avaliacao}
            onChange={(e) => setAvaliacao(Number(e.target.value))}
            min={0}
            max={5}
          />
        </div>

        {/* Campo: Citações favoritas */}
        <div>
          <label className="font-medium">Citações favoritas</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            value={citacoes}
            onChange={(e) => setCitacoes(e.target.value)}
          ></textarea>
          {/* Para armazenar textos maiores */}
        </div>

        {/* Campo: Status da leitura */}
        <div>
          <label className="font-medium">Status</label>
          <select
            className="w-full p-2 border rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="lendo">Lendo</option>
            <option value="lido">Lido</option>
            <option value="quero ler">Quero ler</option>
          </select>
        </div>

        {/* Botão de submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Salvar Livro
        </button>
      </form>
    </div>
  );
}
