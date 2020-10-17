import React from 'react';
// import matter from 'gray-matter';
import parseMD from 'parse-md';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'avatar' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const { default: fileContents } = await import(`../../content/${slug}.md`);
  const { metadata, content } = parseMD(fileContents);

  return { props: { content, metadata } };
  // return { props: { content, data } };
}

export default function Styles({ content, metadata }) {
  // console.log('content', content);
  return (
    <div>
      <h1>{metadata.title}</h1>

      <ReactMarkdown source={content} escapeHtml={false} />
    </div>
  );
}
