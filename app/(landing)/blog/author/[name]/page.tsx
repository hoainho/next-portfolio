import { PostItem, TagItem } from "@/app/types";
import { Metadata } from "next";
import { GET_POSTS_BY_AUTHOR_QUERY } from "@/graphql/queries/post.query";
import client from "@/lib/apolloClient";
import BlogItem from "@/components/blog/BlogItem";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogSubscribers from "@/components/blog/BlogSubscribers";
import NotFoundPage from "@/app/not-found";

interface Props {
  params: {
    name: string;
  };
}

interface GetPostsByAuthorResponse {
  user: {
    posts: {
      nodes: PostItem[];
    };
    name: string;
    description: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { data } = await client.query({
      query: GET_POSTS_BY_AUTHOR_QUERY,
      variables: { slug: params.name },
    });
    
    const author = data?.user;
    
    if (!author) {
      return {
        title: "Author Not Found",
        description: "The requested author could not be found.",
      };
    }

    return {
      title: `${author.name} | Thnkandgrow Blog Author`,
      description: author.description || `Articles written by ${author.name}`,
      openGraph: {
        title: `${author.name} | Thnkandgrow Blog Author`,
        description: author.description || `Articles written by ${author.name}`,
        type: "profile",
      },
    };
  } catch (error) {
    console.error("Error generating author metadata:", error);
    return {
      title: "Author Page",
      description: "Thnkandgrow blog author page",
    };
  }
}

export default async function AuthorPage({ params }: Props) {
  try {
    const { data } = await client.query({
      query: GET_POSTS_BY_AUTHOR_QUERY,
      variables: { slug: params.name },
      context: {
        fetchOptions: {
          next: { revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600) }
        },
      },
    });

    if (!data?.user) {
      return <NotFoundPage />;
    }

    const posts: PostItem[] = data.user.posts.nodes || [];

    if (!posts.length) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">No Posts Found</h2>
            <p className="text-gray-600">This author hasn't published any posts yet.</p>
          </div>
        </div>
      );
    }

    const featuredPost = posts.find((post: PostItem) =>
      post.tags.nodes.some((tag: TagItem) => tag.name === "Popular"),
    ) || posts[0];

    const otherPosts = posts.filter((post) => post.postId !== featuredPost.postId);

    return (
      <>
        <div className="bg-bg-default">
          <div className="fade-in-start max-container-centre py-2 px-5 lg:py-10">
            <div className="relative blog-hero flex flex-col">
              <div className="flex flex-col lg:flex-row w-full gap-x-10">
                <BlogFeatured post={featuredPost} />
                <div className="flex flex-col w-full lg:w-1/2 gap-5">
                  {otherPosts?.slice(0, 3)?.map((post, index) => (
                    <BlogItem post={post} key={post.uri || index} isDark />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {otherPosts.length > 3 && (
          <div className="bg-white py-10">
            <div className="max-container-centre px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {otherPosts?.slice(3)?.map((post, index) => (
                  <BlogItem post={post} key={post.uri || index} />
                ))}
              </div>
            </div>
          </div>
        )}
        <BlogSubscribers />
      </>
    );
  } catch (error) {
    console.error("Error fetching author posts:", error);
    return <NotFoundPage />;
  }
}
