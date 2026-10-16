import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { X, Clock, ArrowRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const getTagColorClass = (color: BlogPost['tagColor']) => {
    switch (color) {
      case 'cyan':
        return 'text-[#4cd7f6] bg-black/70 border border-[#4cd7f6]/30';
      case 'pink':
        return 'text-[#f751a1] bg-black/70 border border-[#f751a1]/30';
      case 'amber':
        return 'text-[#ffb95f] bg-black/70 border border-[#ffb95f]/30';
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-20" id="blog-bolumu">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-[#4cd7f6] uppercase tracking-widest">İNTERNET KÜLTÜRÜ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f8fafc] tracking-tight mt-1">
              Blogdan Öne Çıkanlar
            </h2>
          </div>
          <span className="text-sm font-bold text-[#4cd7f6] flex items-center gap-1 hover:underline cursor-pointer">
            Tüm Blog Yazıları (25+) →
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="bg-[#141226] border border-white/5 rounded-3xl overflow-hidden shadow-xl flex flex-col group hover:bg-[#1f1e2f] hover:border-white/10 hover:-translate-y-1 transition-all cursor-pointer text-left"
            >
              <div className="relative w-full aspect-video bg-[#29283a] overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider backdrop-blur-md ${getTagColorClass(
                    post.tagColor
                  )}`}
                >
                  {post.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-[#64748b] font-medium">{post.subtitle}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#4cd7f6] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#4cd7f6]">
                  <span className="flex items-center gap-1 text-[#64748b] font-normal">
                    <Clock size={14} /> {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Devamını Oku <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#141226] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col gap-5 text-left">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#1f1e2f] text-[#94a3b8] hover:text-white transition-all cursor-pointer z-10"
            >
              <X size={18} />
            </button>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141226] via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-xl text-xs font-black bg-black/70 text-[#4cd7f6] border border-white/10">
                {activeArticle.tag}
              </div>
            </div>

            <div>
              <span className="text-xs text-[#f751a1] font-bold uppercase tracking-wider">
                {activeArticle.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 leading-tight">
                {activeArticle.title}
              </h2>
            </div>

            <div className="flex flex-col gap-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-[#64748b]">Yazar: Meme Yarışması Editör Masası</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-xl bg-[#29283a] text-white text-xs font-bold hover:bg-[#39374a] transition-all cursor-pointer"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
