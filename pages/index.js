import React from 'react';
import Link from 'next/link';
import { useFetch } from '../useFetch';

export async function getStaticProps() {
  const { data: tokens } = await useFetch('https://franckgaudin.github.io/poc-tokens/tokens.json');

  return { props: { tokens } };
}

export default function Index({ tokens }) {
  // const [tokens, setTokens] = useState({props: []});

  // async function fetchTokenData() {
  //   const { data: tokens } = await useFetch('https://franckgaudin.github.io/poc-tokens/tokens.json')
  //   setTokens(tokens);
  // }

  // useEffect(() => {
  //   fetchTokenData();
  // }, []);

  // if(!tokens) {
  //   return (<div>loading ...</div>)
  // }

  const { props } = tokens;

  const tableBody = props.map((token, index) => (
    <tr key={index.toString()}>
      <td>
        <Link href="/token/[id]" as={`/token/${token.name}`}>
          <a>{token.name}</a>
        </Link>
      </td>
      <td>{token.value}</td>
      <td>{token.type}</td>
    </tr>
  ));

  return (
    <section>
      <h1>Tokens</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    </section>
  );
}
