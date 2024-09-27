import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image"; // Import Image from next/image

const Blog = async () => {
  // Fetch blog data from the file system (server-side)
  const blogDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(blogDir);

  const blogs = files.map((fileName) => {
    const filePath = path.join(blogDir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: fileName.replace(".md", ""), // Assuming the files are markdown files
    };
  });

  return (
    <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden dark:border-2"
          >
            {/* Blog post image using Next.js Image component */}
            <Image
              src={blog.image}
              alt={blog.title}
              width={500} // Adjust as necessary
              height={300} // Adjust as necessary
              className="w-full h-64 object-cover"
            />

            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

              {/* Blog post description */}
              <p className="mb-4">{blog.description}</p>

              {/* Blog post author and date */}
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> |{" "}
                <span>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Link to the full blog post */}
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "outline" })}
              >
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;