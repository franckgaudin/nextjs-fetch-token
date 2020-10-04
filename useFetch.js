import https from 'https';

export async function useFetch(path) {
  if (!path) {
    return null;
  }

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const response = await fetch(path, { agent });
  const data = await response.json();

  return {
    data,
  };
}
