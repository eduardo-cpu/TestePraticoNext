import React from 'react';
import { fetchPostBySlug } from '../../../lib/api';

export async function generateMetadata({ params }) {
  const post = await fetchPostBySlug(params.slug);
  return {
    title: post?.title || 'Post não encontrado',
    description: `Detalhes do post ${params.slug}`,
  };
}

export default async function PostPage({ params }) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
        <p>O post que você está procurando não existe.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose lg:prose-xl mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-8">
        <p className="text-sm text-gray-500">Post ID: {post.id}</p>
      </div>
    </div>
  );
}