import { useState } from "react";
import { ArrowLeft, ArrowRight, Clock, User, Calendar, Tag, ShieldCheck, Mail, Phone } from "lucide-react";
import { BLOG_ARTICLES, FIRM_DETAILS } from "../data";
import { BlogArticle } from "../types";

interface BlogViewProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedBlogSlug: string | null;
  setSelectedBlogSlug: (slug: string | null) => void;
}

export default function BlogView({
  activeTab,
  setActiveTab,
  selectedBlogSlug,
  setSelectedBlogSlug
}: BlogViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const handleReadArticle = (slug: string) => {
    setSelectedBlogSlug(slug);
    setActiveTab("blog-details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedBlogSlug(null);
    setActiveTab("blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConsultationClick = () => {
    setActiveTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Compile unique lists of tags/keywords for filter filter pills
  const allTags = ["all", ...Array.from(new Set(BLOG_ARTICLES.flatMap((art) => art.tags)))];

  // Filter criteria criteria
  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag === "all" || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const activeArticle = BLOG_ARTICLES.find(art => art.slug === selectedBlogSlug);

  // 1. SINGLE BLOG ARTICLE DETAILS TEMPLATE
  if (activeArticle) {
    return (
      <div id="single-blog-article-page" className="py-12 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Trigger */}
          <button
            onClick={handleBackToList}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gold-600 hover:text-gold-500 mb-8 uppercase tracking-wider group cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Legal Resource Index</span>
          </button>

          {/* Article Header Card */}
          <article className="bg-white rounded-2xl border border-gold-500/10 shadow-xl overflow-hidden mb-12" id="blog-content-card">
            <img
              src={activeArticle.imageUrl}
              alt={activeArticle.title}
              className="w-full h-[400px] object-cover border-b border-gold-500/10"
            />
            
            <div className="p-8 sm:p-12 space-y-6">
              {/* Metadata strip */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-b border-slate-150 pb-4">
                <span className="text-gold-600 font-bold uppercase tracking-wider bg-gold-400/10 px-2.5 py-1 rounded">
                  {activeArticle.category}
                </span>
                <span className="flex items-center gap-1">
                  <User size={12} /> {activeArticle.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {activeArticle.publishDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {activeArticle.readTime}
                </span>
              </div>

              {/* Title display display */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-navy-950 tracking-tight leading-snug">
                {activeArticle.title}
              </h1>

              {/* Core Text Paragraph Renderer */}
              <div className="space-y-6 text-slate-700 leading-relaxed font-light text-base" id="article-body">
                {activeArticle.content.map((para, idx) => {
                  // Subheadings simulation for layout rhythm
                  if (para.startsWith("First:") || para.startsWith("Second:") || para.startsWith("Third:") || para.startsWith("Fourth:") || para.startsWith("1.") || para.startsWith("2.") || para.startsWith("3.")) {
                    return (
                      <div key={idx} className="space-y-2 pt-4">
                        <h3 className="font-serif text-lg font-bold text-navy-950">{para.split(".")[0]}</h3>
                        <p>{para.replace(/^(First:|Second:|Third:|Fourth:|1\.|2\.|3\.)\s*/, "")}</p>
                      </div>
                    );
                  }
                  
                  return <p key={idx}>{para}</p>;
                })}
              </div>

              {/* Tag display list */}
              <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-2">
                {activeArticle.tags.map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-slate-150 px-2.5 py-1 rounded border border-slate-200">
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Consultation Sidebar / Bottom Card */}
          <div className="bg-navy-900 text-white rounded-xl border border-gold-500/20 p-8 text-center space-y-4 shadow-xl">
            <h3 className="font-serif text-xl font-bold text-gold-400">Do you have physical injuries related to this topic?</h3>
            <p className="text-white/70 font-light text-xs max-w-xl mx-auto">Our Longview, Texas office serves plaintiffs statewide. Tell Keith L. Langston about your crash or injury today for a complete confidential, no cost legal files audit.</p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center font-mono">
              <button
                onClick={handleConsultationClick}
                className="bg-gold-500 hover:bg-gold-400 text-navy-950 py-3 px-6 rounded text-xs font-bold uppercase transition duration-150"
              >
                Request Free Evaluator Callback
              </button>
              <a
                href={`tel:${FIRM_DETAILS.phoneRaw}`}
                className="border border-white/20 hover:border-white px-6 py-3 rounded text-xs text-white text-center"
              >
                Call Hotline: {FIRM_DETAILS.phone}
              </a>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // 2. MAIN BLOG INDEX VIEW LISTING
  const featuredArticle = BLOG_ARTICLES[0];

  return (
    <div id="blog-index-page" className="py-12 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section titles */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold">Texas Legal Resources</div>
          <h1 className="text-4xl font-serif font-extrabold text-navy-950 tracking-tight sm:text-5xl">The Legal Education Library</h1>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2"></div>
          <p className="text-slate-600 font-light text-base leading-relaxed">
            Attorney Keith L. Langston writes expert breakdowns concerning Texas personal injury statutes, evidentiary rules, and strict mass tort certification checklists.
          </p>
        </div>

        {/* FEATURED ARTICLES HERO CARD BLOCK */}
        {searchQuery === "" && selectedTag === "all" && featuredArticle && (
          <div className="bg-white rounded-2xl border border-gold-500/10 overflow-hidden shadow-xl mb-16" id="blog-featured-banner">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 h-[300px] lg:h-auto min-h-[300px]">
                <img
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-gold-600 bg-gold-400/10 px-2.5 py-1 rounded">
                    Featured Resource Article
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 leading-snug">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-400 font-mono">
                    <Calendar size={12} />
                    <span>{featuredArticle.publishDate}</span>
                  </div>
                  <button
                    onClick={() => handleReadArticle(featuredArticle.slug)}
                    className="text-gold-600 hover:text-gold-500 font-mono font-bold uppercase tracking-wider text-[11px] flex items-center gap-1"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SEARCH & FILTERS CONTROLS STRIP */}
        <div className="bg-white rounded-xl border border-gold-500/10 p-6 shadow-sm mb-12" id="blog-filter-strip">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Search Input casing */}
            <div className="md:col-span-4 relative">
              <input
                type="text"
                placeholder="Search legal keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded p-2.5 text-xs text-navy-950 placeholder-slate-400 focus:bg-white focus:border-gold-500 outline-none"
              />
            </div>
            
            {/* Tag pills list list */}
            <div className="md:col-span-8 flex flex-wrap gap-1.5 justify-start md:justify-end" id="blog-tags-nav">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-widest font-semibold cursor-pointer ${
                    selectedTag === tag
                      ? "bg-navy-950 text-gold-400 border border-gold-500"
                      : "bg-slate-100 text-slate-600 hover:bg-gold-500 hover:text-navy-950"
                  }`}
                >
                  {tag === "all" ? "All Tags" : tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" id="blog-cards-deck">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden border border-gold-500/10 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="font-bold text-gold-600 uppercase tracking-widest">{article.category}</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock size={10} /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-navy-950 leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-light line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">{article.publishDate}</span>
                <button
                  onClick={() => handleReadArticle(article.slug)}
                  className="text-gold-600 hover:text-gold-500 font-mono font-bold uppercase tracking-wider text-[11px] flex items-center gap-1 cursor-pointer"
                >
                  <span>Evaluate Article</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}

          {filteredArticles.length === 0 && (
            <div className="col-span-1 md:col-span-3 text-center p-12 bg-white rounded-xl border border-dashed border-slate-300">
              <p className="text-sm text-slate-500 font-light">No educational resources match your filters. Please click empty searching.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedTag("all"); }}
                className="mt-4 inline-block text-xs font-mono font-bold text-gold-600 hover:underline"
              >
                Clear Search Fields &rarr;
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
