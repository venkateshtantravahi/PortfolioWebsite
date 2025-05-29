import React, { useEffect, useState } from "react";
import axios from "axios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import type { BlogPost, MediumApiItem } from '../types/blogposts';

const stripHtml = (html: string): string => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const extractImageFromHtml = (html: string): string => {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : "https://via.placeholder.com/600x300?text=No+Image";
};

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  // Initialize keen only when posts are loaded
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    posts.length > 0
      ? {
          loop: true,
          drag: true,
          mode: "free-snap",
          slides: {
            perView: "auto", // relies on child widths (which we’ll define below)
            spacing: 24,
          },
          defaultAnimation: {
            duration: 500,
            easing: (t) => t,
          },
          breakpoints: {
            "(max-width: 640px)": {
              slides: { perView: 1.2, spacing: 16 },
            },
            "(min-width: 641px) and (max-width: 1023px)": {
              slides: { perView: "auto", spacing: 20 },
            },
          },
        }
      : undefined
  );


  useEffect((): void => {
    const fetchPosts = async (): Promise<void> => {
      const res = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vtantravahi"
      );
      const items: MediumApiItem[] = res.data.items;

      const filtered = items
        .filter((item) => item.categories.length > 0)
        .map((item) => {
          const content = item.content || item.description || "";
          return {
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            thumbnail: extractImageFromHtml(content),
            description: stripHtml(content).slice(0, 160),
          };
        });

      setPosts(filtered);
    };

    fetchPosts();
  }, []);

  return (
    <section
      id="blogposts"
      className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        Latest Blogposts
      </h2>

      <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto px-4">
        {/* Left Arrow */}
        <button
          onClick={() => slider.current?.prev()}
          className="text-black dark:text-white backdrop-blur-md bg-white/30 dark:bg-gray-800/40 shadow-md p-2 rounded-full hover:scale-110 transition"
        >
          ←
        </button>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="keen-slider flex-1 overflow-x-hidden min-h-[400px]"
        >
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="keen-slider__slide min-w-[260px] max-w-[300px] sm:min-w-[280px] sm:max-w-[320px] lg:min-w-[340px] lg:max-w-[360px] transform transition duration-500 hover:scale-[1.02]"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group"
              >
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-[220px] md:h-[250px] lg:h-[260px] object-cover rounded-t-2xl transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-60 text-white px-4 text-sm text-center">
                  {post.description}
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => slider.current?.next()}
          className="text-black dark:text-white backdrop-blur-md bg-white/30 dark:bg-gray-800/40 shadow-md p-2 rounded-full hover:scale-110 transition"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default BlogPosts;
