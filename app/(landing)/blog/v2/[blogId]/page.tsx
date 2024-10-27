import { AuthorType, BlogType } from '@/app/types';
import React from 'react';
import { HiCalendar, HiOutlineClock } from 'react-icons/hi';
import { format } from 'date-fns';
import { LuDot, LuGithub, LuLinkedin } from 'react-icons/lu';
import { FaMediumM } from 'react-icons/fa';
import BlogHTML from '@/components/blog/BlogHTML';
import ScrollToTop from '@/components/buttons/ButtonScrollToTop';
import GenerateTableOfContent from '@/components/blog/GenerateTableOfContent';
import { Metadata } from 'next';
import './style.scss';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { TagDetail } from '@/components/blog/Tag';
import BlogAuthor from '@/components/blog/BlogAuthor';
import BlogBottomCategories from '@/components/blog/BlogCategories';
import BlogRelated from '@/components/blog/BlogRelated';

type BlogDetailProps = {
  params: {
    blogId: string;
  };
  searchParams: {
    blogId: string;
  };
};

const url = process.env.NEXT_PUBLIC_BLOG_API;

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  try {
    const res = await fetch(`${url}/posts/${params.blogId}`);
    if (res.status === 404) {
      return { title: 'Post Not Found' };
    }

    const post: BlogType = await res.json();
    return {
      title: `${post.yoast_head_json?.og_title || post.title.rendered} | Nick's Blog`,
      description: post.yoast_head_json?.og_description || '',
      openGraph: {
        title: post.yoast_head_json?.og_title,
        description: post.yoast_head_json?.og_description,
        url: post.yoast_head_json?.og_url,
        images: [{ url: post.yoast_head_json?.og_image[0]?.url }],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.yoast_head_json?.og_title,
        description: post.yoast_head_json?.og_description,
        images: post.yoast_head_json?.og_image[0]?.url,
      },
    };
  } catch (error) {
    return { title: `Error fetching post data | Nick's Blog` };
  }
}

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const getBlogDetail = await fetch(`${url}/posts/${params.blogId}?author=3`, {
    next: { revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600) },
  });

  if (getBlogDetail.status === 404) {
    return (
      <div className='absolute top-1/2 right-1/2 translate-x-1/2 flex flex-col justify-center items-center gap-x-5'>
        <span className='font-bold text-[60px]'>404</span>
        <h1 className='flex justify-center items-center text-xl'>Post not found</h1>
      </div>
    );
  }
  //TODO: need a certain api to fetch posts for references
  const getPosts = await fetch(`${url}/posts?author=3`, {
    next: { revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS ?? 3600) },
  });

  const getAuthor = await fetch(`${url}/users/3`);

  const post: BlogType = await getBlogDetail.json();

  const author: AuthorType = await getAuthor.json();

  const posts: BlogType[] = await getPosts.json();

  const referencePosts = posts
    .filter((p) => p?.categories?.some((category) => post.categories?.includes(category) && p.id !== post.id))

  let breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];

  breadcrumbItems = breadcrumbItems.concat({ label: post.title.rendered, href: `/blog/${post.id}` });

  return (
    <div className='blog'>
      <div className='blog-title bg-bg-default'>
        <div className='max-container-blog pt-10 px-6 !pb-0'>
          <Breadcrumb items={breadcrumbItems} />
          <h1 className='font-bold text-5xl mb-4 text-fg-default'>{post.title.rendered}</h1>
          <div className='text-[#ADBAA7] text-base mb-10' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <div className='relative min-h-[560px] h-full w-full'>
            <Image
              width={post.yoast_head_json?.og_image?.[0]?.width ?? 1200}
              height={post.yoast_head_json?.og_image?.[0]?.height ?? 480}
              src={post.yoast_head_json?.og_image?.[0].url}
              alt={post.yoast_head_json?.og_image?.[0].type ?? post.yoast_head_json.title}
              title={post.yoast_head_json?.og_title}
              className='aspect-[4/2.4] rounded-md h-[650px] w-full absolute top-0'
            />
          </div>
        </div>
      </div>
      <div className='bg-white pt-24'>
        <div className='max-container-blog bg-white px-0'>
          <div className='flex justify-between items-center py-5 border-b-2 border-[#545df0] mt-4 mb-8 text-sm text-gray-600 dark:text-gray-300'>
            <div className='flex flex-col gap-3 !font-mono'>
              <div className='flex items-center gap-1'>
                <span className='text-primary font-bold'>{post.yoast_head_json.author}</span>
                <LuDot className='inline-block text-base' />
                <Link
                  target='_blank'
                  href={'https://blogs.thnkandgrow.com/author/hoainho/'}
                  className='text-fg-default font-normal'
                >
                  @hoainho
                </Link>
              </div>
              <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                  <HiCalendar className='inline-block text-base mr-2' />
                  <span className='text-fg-muted tracking-wide font-thin'>
                    {format(new Date(post.modified ?? post.date), 'MMMM dd, yyyy')}
                  </span>
                </div>
                <span className='px-5'>|</span>
                <div className='flex items-center gap-1'>
                  <HiOutlineClock className='inline-block text-base mr-2' />
                  <p className='text-fg-muted tracking-wide font-thin'>
                    {post.yoast_head_json.twitter_misc['Est. reading time']}
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
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
            <div className='flex flex-col gap-y-5'>
              <BlogHTML post={post} />
              <BlogBottomCategories tags={post.yoast_head_json.schema?.['@graph']?.[0].articleSection || []} />
              <BlogAuthor author={author} />
            </div>
            <div className='flex flex-col gap-5'>
              <div className='max-w-56 flex flex-wrap gap-1'>
                {post.yoast_head_json.schema?.['@graph']?.[0].articleSection?.map((tag: string) => (
                  <TagDetail key={tag}>{tag}</TagDetail>
                ))}
              </div>
              <GenerateTableOfContent referencePosts={referencePosts.slice(0, 2)} />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white flex justify-center items-center gap-3'>
        <BlogRelated posts={referencePosts}/>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default BlogDetail;
