import { useFetch } from './useFetch';

export async function getToken(id) {
  const fetchTokens = await useFetch('https://franckgaudin.github.io/poc-tokens/tokens.json');
  const tokens = (fetchTokens.data.props);

  const token = tokens.find((t) => {
    if (t.name === id) { return true; }
  });

  return token;
}
