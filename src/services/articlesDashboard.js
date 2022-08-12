async function articlesService(page, headers = {}) {
  const response = await fetch(` https://article-app-node.herokuapp.com/api/articles/${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
  });
  return response.json()
}

export default articlesService