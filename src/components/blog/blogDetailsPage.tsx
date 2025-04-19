import { useParams } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { cards } from "./cards";

// BlogDetailsPage component
export default function BlogDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  // Find the blog post by searching through all categories
  const blog = Object.values(cards)
    .flat()
    .find((card) => card.link === `/blog/${slug}`);

  if (!blog) {
    return <div className="text-center text-gray-500">Blog not found.</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <button
            onClick={() => window.history.back()}
            className="text-[#005FB8] hover:underline"
          >
            &larr; Back to Blog
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#525866] dark:text-white">
              {blog.date}
            </span>
            <span className="text-sm text-[#005FB8] font-medium">
              {blog.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">{blog.title}</h1>
          <div className="bg-gray-200 rounded-lg aspect-video w-full my-6" />
          <p className="text-[#525866] leading-7 max-w-3xl dark:text-white">
            {blog.description}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
