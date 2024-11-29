import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import readingDuration from 'reading-duration';
import './style.scss';
import { format } from 'date-fns';
import { HiCalendar, HiOutlineClock } from 'react-icons/hi';
import { LuDot, LuGithub, LuLinkedin } from 'react-icons/lu';
import { FaMediumM } from 'react-icons/fa';
import { PostCategory, PostItem, PostSEO, TagItem } from '@/app/types';
import BlogHTML from '@/components/blog/BlogHTML';
import ScrollToTop from '@/components/buttons/ButtonScrollToTop';
import GenerateTableOfContent from '@/components/blog/GenerateTableOfContent';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import { TagDetail } from '@/components/blog/Tag';
import BlogAuthor from '@/components/blog/BlogAuthor';
import BlogBottomCategories from '@/components/blog/BlogCategories';
import BlogRelated from '@/components/blog/BlogRelated';
import client from '@/lib/apolloClient';
import BlogSubscribers from '@/components/blog/BlogSubscribers';
import {
  GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
  POST_DETAIL_QUERY,
  POST_DETAIL_SEO_QUERY,
} from '@/graphql/queries/post.query';
import ImageLoader from '@/components/loader/ImageLoader';
import NotFoundPage from '@/app/not-found';
import BlogCounterView from '@/components/blog/BlogCounterView';

type BlogDetailProps = {
  params: {
    blogId: string;
    slug: string;
  };
  searchParams: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  try {
    const fetchPost = await client.query({
      query: POST_DETAIL_SEO_QUERY,
      variables: { slug: params.slug },
    });

    const post: PostSEO = fetchPost.data.post;

    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'Post not found',
        openGraph: {
          title: 'Post Not Found',
          description: 'Post not found',
          url: '/blog',
          images: [],
        },
        twitter: { title: 'Post Not Found', description: 'Post not found', images: [] },
      };
    }

    return {
      title: `${post.title || 'The latest blog posts'} | Nick's Blog`,
      description: post.seo.metaDesc,
      robots: { 
        index: true, 
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      openGraph: {
        title: post.title,
        description: post.seo.metaDesc,
        url: post.seo.canonical,
        images: [
          {
            url: decodeURIComponent(post.seo.opengraphImage.sourceUrl),
            width: 1280,
            height: 720,
            alt: post.seo.opengraphImage.altText,
            type: 'image/png',
          },
        ],
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.seo.metaDesc,
        images: [
          {
            url: decodeURIComponent(post.seo.opengraphImage.sourceUrl),
            width: 1280,
            height: 720,
            alt: post.seo.opengraphImage.altText,
            type: 'image/png',
          },
        ],
        site: 'Hoài Nhớ' || post.seo.opengraphSiteName,
      },
    };
  } catch (error) {
    return { title: `Error fetching post data | Nick's Blog` };
  }
}

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const fetchPost = await client.query({
    query: POST_DETAIL_QUERY,
    variables: { slug: params.slug },
  });

  const post: PostItem = fetchPost.data.post;

  if (!post) {
    return <NotFoundPage />;
  }

  const readingTime = readingDuration(post.content, { wordsPerMinute: 250, emoji: false });

  const getPostsByCategory = post.categories.nodes.map((p: PostCategory) => {
    const postsByCategoryID = client.query({
      query: GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
      variables: { category: p.slug, author: 3, first: 3 },
    });
    return postsByCategoryID;
  });

  const postRefFilter = await Promise.all(getPostsByCategory);

  const referencePosts = Object.values(
    postRefFilter
      .flatMap((p) => p.data.posts.nodes)
      .reduce((acc: PostItem[], post) => {
        const exists = acc.some((p) => p.postId === post.postId);
        if (!exists && post.postId !== params.slug) {
          acc.push(post);
        }
        return acc;
      }, [])
  )
    .filter((p) => p.postId !== post.postId)
    .slice(0, 6);

  let breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];

  breadcrumbItems = breadcrumbItems.concat({ label: post.title, href: `/blog/${post.slug}` });

  return (
    <div className='blog'>
      <div className='blog-title relative bg-bg-default'>
        <div className='max-container-blog pt-10 !pb-0'>
          <Breadcrumb items={breadcrumbItems} />
          <h1 className='font-bold text-5xl mb-4 text-fg-default'>{post.title}</h1>
          <div className='text-[#ADBAA7] text-base mb-10' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <div className='relative min-h-[180px] xs:min-h-[250px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] h-full w-full z-10'>
            <ImageLoader
              width={1200}
              height={480}
              src={decodeURIComponent(post.featuredImage.node.sourceUrl)}
              alt={post.featuredImage.node.altText ?? post.title}
              className='aspect-[4/2.4] rounded-md h-fit w-full absolute top-0 left-0 right-0 z-1'
            />
          </div>
          <div className='bg-white h-24 w-full absolute bottom-0 left-0 right-0'></div>
        </div>
      </div>
      <div className='bg-white pt-2 md:pt-5 xl:pt-10'>
        <div className='max-container-blog bg-white px-0'>
          <div className='flex justify-between items-center py-5 border-b-2 border-[#545df0] mt-4 mb-8 text-sm text-gray-600 dark:text-gray-300'>
            <div className='flex flex-col gap-3 !font-mono'>
              <div className='flex items-center gap-1'>
                <span className='text-primary font-bold'>{post.author.node.name}</span>
                <LuDot className='inline-block text-base' />
                <Link href={`/blog/author/${post.author.node.slug}`} className='text-fg-default font-normal'>
                  @{post.author.node.slug}
                </Link>
              </div>
              <div className='flex items-start flex-wrap gap-1 flex-col sm:flex-row sm:items-center '>
                <div className='flex items-center gap-1'>
                  <HiCalendar className='inline-block text-base mr-2' />
                  <span className='text-fg-muted tracking-wide font-thin'>
                    {format(new Date(post.modified ?? post.date), 'MMMM dd, yyyy')}
                  </span>
                </div>
                <span className='hidden sm:block px-5'>|</span>
                <div className='flex items-center gap-1'>
                  <HiOutlineClock className='inline-block text-base mr-2' />
                  <p className='text-fg-muted tracking-wide font-thin'>{readingTime}</p>
                </div>
                <span className='hidden sm:block px-5'>|</span>
                <BlogCounterView postId={post.postId} viewCount={post.postViews.total} />
              </div>
            </div>
            <div className='flex justify-center items-center gap-3 flex-col sm:flex-row'>
              <h6 className='text-primary'>Share:</h6>
              <div className='flex gap-3 justify-center items-center'>
                <Link
                  target='_blank'
                  href='https://github.com/hoainho'
                  className='flex items-center p-2 border rounded-full '
                >
                  <LuGithub className='inline-block text-base' />
                </Link>
                <Link
                  target='_blank'
                  href={'https://medium.com/@hoainho.work/'}
                  className='flex items-center p-2 border rounded-full'
                >
                  <FaMediumM className='inline-block text-base' />
                </Link>
                <Link
                  target='_blank'
                  href={'https://www.linkedin.com/in/hoai-nho/'}
                  className='flex items-center p-2 border rounded-full gap-1'
                >
                  <LuLinkedin className='inline-block text-base' />
                </Link>
              </div>
            </div>
          </div>
          <div className='flex gap-10'>
            <div className='xl:max-w-[calc(100%-224px)] flex flex-col gap-y-5 w-full'>
              <BlogHTML content={post.content} />
              <BlogBottomCategories tags={post.tags.nodes.map((t) => t.name)} />
              <BlogAuthor author={post.author.node} />
            </div>
            <div className='hidden xl:flex flex-col gap-5 max-w-56'>
              <div className='w-full flex flex-wrap gap-1'>
                {post.tags.nodes.map((tag: TagItem) => (
                  <TagDetail key={tag.id}>{tag.name}</TagDetail>
                ))}
              </div>
              <GenerateTableOfContent referencePosts={referencePosts.slice(0, 3)} />
            </div>
          </div>
        </div>
      </div>
      {referencePosts.length > 0 && (
        <div className='bg-white flex justify-center items-center gap-3'>
          <BlogRelated posts={referencePosts} />
        </div>
      )}
      <BlogSubscribers />
      <ScrollToTop />
    </div>
  );
};

export default BlogDetail;
