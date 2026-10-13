
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function buscarPosts(): Promise<void> {
  try {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const posts: Post[] = await resposta.json();

    console.log("Status HTTP:", resposta.status);
    console.log("Total de posts:", posts.length);
    console.log("Primeiro post:", posts[0]);
  } catch (erro) {
    console.error("Falha na requisição:", erro);
  }
}

buscarPosts();
