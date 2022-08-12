async function articleView(id, headers = {}) {
  const response = await fetch(`http://localhost:8000/api/article/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
  });
  return response.json()
}

export default articleView