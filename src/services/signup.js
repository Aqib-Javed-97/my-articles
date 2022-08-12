async function signupService(data, headers = {}) {
  const response = await fetch('https://article-app-node.herokuapp.com/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(data)
  });
  return response.json()
}

export default signupService