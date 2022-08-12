async function signinService(data, headers = {}) {
  const response = await fetch('https://article-app-node.herokuapp.com/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(data)
  });
  return response.json()
}

export default signinService