import React from 'react';
import { useFetch } from '../../useFetch';
import { getToken } from '../../getToken';

export async function getStaticPaths() {
  const tokens = await useFetch('https://franckgaudin.github.io/poc-tokens/tokens.json');
  const { props } = tokens.data;

  const paths = props.map((token) => ({ params: { id: token.name } }));

  return ({ paths, fallback: false });
}

export async function getStaticProps({ params }) {
  const token = await getToken(params.id);
  return { props: { token } };
}

export default function Token({ token }) {
  return (
    <div>
      <h1>
        Token:
        {token.name}
      </h1>
      <h2>
        Type:
        {token.type}
      </h2>
      <div>
        <div style={{ width: '300px', height: '300px', backgroundColor: token.value }} />
        <p>{token.value}</p>
      </div>
    </div>
  );
}
