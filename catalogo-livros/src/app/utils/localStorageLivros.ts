// ------------------------------------------------------------
// Função: Buscar todos os livros salvos no LocalStorage
// ------------------------------------------------------------
export function getLivros() {
  // LocalStorage existe apenas no lado do cliente.
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("livros");

  // Se não houver nada salvo, retorna uma lista vazia.
  return data ? JSON.parse(data) : [];
}

// ------------------------------------------------------------
// Função: Salva lista completa de livros
// ------------------------------------------------------------
export function salvarLivros(listaLivros: any[]) {
  localStorage.setItem("livros", JSON.stringify(listaLivros));
}

// ------------------------------------------------------------
// Função: Adiciona um único livro à lista existente
// ------------------------------------------------------------
export function adicionarLivro(novoLivro: any) {
  const livrosAtuais = getLivros(); // pega os já existentes

  // adiciona o novo livro ao array atual
  livrosAtuais.push({
    ...novoLivro,
    id: Date.now(), // cria um ID único
  });

  // salva novamente no LocalStorage
  salvarLivros(livrosAtuais);
}
