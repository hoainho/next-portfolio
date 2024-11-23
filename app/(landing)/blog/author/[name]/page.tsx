import { GetPostsByAuthorResponse, PostItem, TagItem } from '@/app/types';
import { GET_POSTS_BY_AUTHOR_QUERY } from '@/graphql/queries/post.query';
import client from '@/lib/apolloClient';
import React from 'react';
import BlogFeatured from '@/components/blog/BlogFeatured';
import BlogItem from '@/components/blog/BlogItem';
import BlogSubscribers from '@/components/blog/BlogSubscribers';
import BlogPlatform from '@/components/blog/BlogPlatform';
import Link from 'next/link';
import ImageLoader from '@/components/loader/ImageLoader';
interface AuthorProps {
  params: {
    name: string;
  };
}

const page = async ({ params }: AuthorProps) => {
  const postsResponse = await client.query({
    query: GET_POSTS_BY_AUTHOR_QUERY,
    variables: {
      author: params.name || 'hoainho',
      first: 20,
    },
    context: {
      fetchOptions: {
        next: { revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600) },
      },
    },
  });


  const author: GetPostsByAuthorResponse = postsResponse.data;

  const posts: PostItem[] = author.user.posts.nodes;

  const featuredPost = posts.find((post: PostItem) => post.tags.nodes.some((tag: TagItem) => tag.name === 'Popular'));

  const postsWithoutFeatured = posts.filter((post: PostItem) => post.postId !== featuredPost?.postId);
  return (
    <div>
      <div className='pt-10 px-6 !pb-0 bg-bg-default'>
        <div className='max-container-blog !min-h-fit flex justify-center items-center gap-x-3'>
          <ImageLoader
            src={`${process.env.NEXT_PUBLIC_AVATAR_URL || author.user.avatar.url}`}
            alt={author.user.name}
            width={100}
            height={100}
            className='rounded-md w-[200px] h-[200px] object-cover'
          />
          <div className='flex flex-col gap-y-3 items-start'>
            <p className='font-extrabold font-sans text-6xl mt-3 text-fg-default'>
              {author.user.firstName} {author.user.lastName}
            </p>
            <Link
              href='https://blogs.thnkandgrow.com/author/hoainho/'
              className='text-fg-muted text-base hover:underline hover:text-link italic'
            >
              @Th?nkAndGrow
            </Link>
            <p className='text-fg-muted text-base max-w-[600px] pb-5'>{author.user.description.replace(/&amp;/g, '&')}</p>
          </div>
        </div>
      </div>
      <div>
        <div className='max-container-blog py-5'>
          <div className='flex flex-col gap-y-5'>
            <div className='w-full'>
              <div className='flex items-center justify-between py-5 border-b border-gray-border mb-5'>
                <h2 className='text-2xl font-bold text-default'>Posts by this author</h2>
              </div>
              {featuredPost && <BlogFeatured post={featuredPost} isFullWidth />}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4'>
                {postsWithoutFeatured
                  .filter((post: PostItem) => post.postId !== featuredPost?.postId)
                  .map((post: PostItem, index: number) => (
                    <div className='col-span-1 border-t border-gray-border-3 pt-5' key={index}>
                      <BlogItem post={post} key={index} isReverse />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <BlogSubscribers />
        <BlogPlatform />
      </div>
    </div>
  );
};

export default page;
