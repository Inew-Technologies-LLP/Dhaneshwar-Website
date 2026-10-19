import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import { blogsData } from "../data/blogs";
import {
    ChevronLeft,
    ChevronRight,
    Calendar,
    Clock,
    User,
    CheckCircle2,
    Calculator,
    TrendingUp,
    ArrowLeft,
    ArrowRight,
    ExternalLink
} from "lucide-react";

const Blogs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const articleRef = useRef(null);

    const activeArticle = blogsData[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : blogsData.length - 1));
        if (articleRef.current) {
            articleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < blogsData.length - 1 ? prev + 1 : 0));
        if (articleRef.current) {
            articleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleSelectArticle = (index) => {
        setCurrentIndex(index);
        if (articleRef.current) {
            articleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Helper to format text and parse markdown links [label](url)
    const renderFormattedText = (text) => {
        if (typeof text !== "string") return text;
        const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
        if (!regex.test(text)) return text;

        regex.lastIndex = 0;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                parts.push(text.substring(lastIndex, match.index));
            }
            parts.push(
                <a
                    key={match.index}
                    href={match[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A5E9D] hover:text-[#B08A1E] font-medium underline underline-offset-2 transition-colors inline"
                >
                    {match[1]}
                </a>
            );
            lastIndex = regex.lastIndex;
        }

        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        return parts;
    };

    // Dynamic SEO document title, meta tags, and JSON-LD schema sync
    useEffect(() => {
        if (activeArticle) {
            // Update document title
            document.title = `${activeArticle.title} | Dhaneshwar Realty Knowledge Hub`;

            // Meta description
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement("meta");
                metaDesc.setAttribute("name", "description");
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute("content", activeArticle.metaDescription || activeArticle.subtitle || "");

            // Meta keywords
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement("meta");
                metaKeywords.setAttribute("name", "keywords");
                document.head.appendChild(metaKeywords);
            }
            if (activeArticle.seoKeywords && activeArticle.seoKeywords.length > 0) {
                metaKeywords.setAttribute("content", activeArticle.seoKeywords.join(", "));
            }

            // Open Graph tags
            const setMetaTag = (attr, attrVal, content) => {
                let tag = document.querySelector(`meta[${attr}="${attrVal}"]`);
                if (!tag) {
                    tag = document.createElement("meta");
                    tag.setAttribute(attr, attrVal);
                    document.head.appendChild(tag);
                }
                tag.setAttribute("content", content);
            };

            setMetaTag("property", "og:title", `${activeArticle.title} | Dhaneshwar Realty`);
            setMetaTag("property", "og:description", activeArticle.metaDescription || activeArticle.subtitle || "");
            setMetaTag("property", "og:type", "article");

            // JSON-LD Structured Data Schema for SEO
            let schemaScript = document.getElementById("blog-seo-schema");
            if (!schemaScript) {
                schemaScript = document.createElement("script");
                schemaScript.id = "blog-seo-schema";
                schemaScript.type = "application/ld+json";
                document.head.appendChild(schemaScript);
            }

            const schemaData = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: activeArticle.title,
                description: activeArticle.metaDescription || activeArticle.subtitle,
                keywords: activeArticle.seoKeywords ? activeArticle.seoKeywords.join(", ") : "",
                author: {
                    "@type": "Organization",
                    name: activeArticle.author || "Dhaneshwar Realty"
                },
                publisher: {
                    "@type": "Organization",
                    name: "Dhaneshwar Realty"
                },
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": window.location.href
                }
            };
            schemaScript.textContent = JSON.stringify(schemaData);
        }
    }, [activeArticle]);

    // Keyboard arrow keys navigation (Left/Right)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                handlePrev();
            } else if (e.key === "ArrowRight") {
                handleNext();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const prevIndex = currentIndex > 0 ? currentIndex - 1 : blogsData.length - 1;
    const nextIndex = currentIndex < blogsData.length - 1 ? currentIndex + 1 : 0;
    const prevArticle = blogsData[prevIndex];
    const nextArticle = blogsData[nextIndex];

    return (
        <Layout>
            {/* Pure Typographic Header - Completely Image-Free */}
            <div className="bg-[#192B3C] text-white py-12 sm:py-16 lg:py-20 border-b border-white/10">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BFECE8] block mb-3">
                            DHANESHWAR REALTY • KNOWLEDGE SERIES
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                            Articles &amp; Insights.
                        </h1>
                        <p className="mt-4 text-xs sm:text-sm lg:text-base text-white/80 font-light leading-relaxed max-w-2xl">
                            Essential guides on home loans, RERA legal rights, construction quality, and stamp duty for Pune homebuyers.
                        </p>
                    </div>
                </Container>
            </div>

            <section className="bg-[#FAFBFD] py-10 sm:py-16" ref={articleRef}>
                <Container>
                    {/* Top Navigation Control Bar with Arrow Buttons */}
                    <div className="bg-white border border-gray-200 shadow-xs rounded-xs p-3 sm:p-4 mb-8 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#192B3C] text-white text-xs font-semibold">
                                {currentIndex + 1}
                            </span>
                            <div className="leading-tight">
                                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block">
                                    Browsing Articles
                                </span>
                                <span className="text-xs sm:text-sm font-medium text-[#192B3C]">
                                    Article {currentIndex + 1} of {blogsData.length}
                                </span>
                            </div>
                        </div>

                        {/* Interactive Arrow Buttons */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handlePrev}
                                aria-label="Previous article"
                                className="group flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-gray-50 hover:bg-[#192B3C] text-gray-700 hover:text-white rounded-xs border border-gray-200 hover:border-[#192B3C] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                            >
                                <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
                                <span className="text-xs font-medium hidden sm:inline">Previous Article</span>
                            </button>

                            <button
                                onClick={handleNext}
                                aria-label="Next article"
                                className="group flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-[#192B3C] hover:bg-[#B08A1E] text-white rounded-xs border border-[#192B3C] hover:border-[#B08A1E] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                            >
                                <span className="text-xs font-medium hidden sm:inline">Next Article</span>
                                <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </div>

                    {/* Main Article Container - Pure Content Focused */}
                    <article className="bg-white border border-gray-200 rounded-xs shadow-sm overflow-hidden">
                        {/* Article Header */}
                        <div className="p-6 sm:p-10 lg:p-14 border-b border-gray-100 bg-gradient-to-b from-white to-[#F8FAFC]">
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                {(activeArticle.categories || [activeArticle.category]).map((cat, catIdx) => {
                                    const catName = typeof cat === "object" ? cat.name : cat;
                                    const catUrl = typeof cat === "object" ? cat.url : null;

                                    if (catUrl) {
                                        return (
                                            <a
                                                key={catIdx}
                                                href={catUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 bg-[#192B3C] hover:bg-[#B08A1E] text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-xs transition-colors"
                                            >
                                                <span>{catName}</span>
                                                <ExternalLink size={10} className="opacity-70" />
                                            </a>
                                        );
                                    }

                                    return (
                                        <span
                                            key={catIdx}
                                            className="inline-block bg-[#192B3C] text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-xs"
                                        >
                                            {catName}
                                        </span>
                                    );
                                })}
                                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium ml-1">
                                    <Calendar size={13} className="text-[#B08A1E]" />
                                    {activeArticle.date}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                                    <Clock size={13} className="text-[#B08A1E]" />
                                    {activeArticle.readTime}
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-[#192B3C] leading-tight tracking-tight">
                                {activeArticle.title}
                            </h1>

                            {activeArticle.subtitle && (
                                <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed max-w-4xl">
                                    {activeArticle.subtitle}
                                </p>
                            )}

                            {/* Author & Source Attribution */}
                            <div className="mt-6 pt-5 border-t border-gray-200/70 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-[#192B3C]/10 text-[#192B3C] flex items-center justify-center font-bold">
                                        <User size={13} />
                                    </div>
                                    <span>{activeArticle.author}</span>
                                </div>

                                {activeArticle.source && (
                                    <a
                                        href={activeArticle.source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-[#B08A1E] hover:underline font-medium"
                                    >
                                        <span>Original Source</span>
                                        <ExternalLink size={12} />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Key Metrics / Highlights Strip */}
                        {activeArticle.highlights && (
                            <div className="bg-[#192B3C] text-white p-6 sm:p-8">
                                <div className="flex items-center gap-2 mb-4 text-[#BFECE8] text-xs font-semibold uppercase tracking-widest">
                                    <TrendingUp size={15} />
                                    <span>Key Insights at a Glance</span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                                    {activeArticle.highlights.map((item, idx) => (
                                        <div key={idx} className="bg-white/5 border border-white/10 p-3.5 sm:p-4 rounded-xs">
                                            <p className="text-[11px] text-white/70 uppercase tracking-wider">
                                                {item.label}
                                            </p>
                                            <p className="text-sm sm:text-base lg:text-lg font-semibold text-white mt-1">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Article Body Content */}
                        <div className="p-6 sm:p-10 lg:p-14 space-y-10">
                            {/* Intro Paragraph */}
                            {activeArticle.intro && (
                                <div className="p-5 sm:p-6 bg-[#F8FAFC] border-l-4 border-[#B08A1E] rounded-r-xs space-y-3">
                                    {activeArticle.intro.split("\n\n").map((para, paraIdx) => (
                                        <p key={paraIdx} className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                                            {renderFormattedText(para)}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {/* Dynamic Sections */}
                            {activeArticle.sections.map((section, idx) => (
                                <div key={idx} className="space-y-4">
                                    <h2 className="text-xl sm:text-2xl font-normal text-[#192B3C] border-b border-gray-100 pb-2">
                                        {section.heading}
                                    </h2>

                                    {section.content && section.content.map((p, pIdx) => (
                                        <p key={pIdx} className="text-xs sm:text-sm lg:text-[15px] text-gray-600 leading-relaxed font-light">
                                            {renderFormattedText(p)}
                                        </p>
                                    ))}

                                    {/* Formula Box (if applicable) */}
                                    {section.formula && (
                                        <div className="my-6 p-4 sm:p-6 bg-[#F4F9FD] border border-[#0A5E9D]/20 rounded-xs flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
                                            <div className="p-2.5 rounded-full bg-[#0A5E9D] text-white shrink-0">
                                                <Calculator size={20} />
                                            </div>
                                            <div>
                                                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0A5E9D] block mb-0.5">
                                                    Calculation Formula
                                                </span>
                                                <span className="text-sm sm:text-base font-semibold text-[#192B3C] tracking-wide font-mono">
                                                    {section.formula}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {section.footerNote && (
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light italic">
                                            {renderFormattedText(section.footerNote)}
                                        </p>
                                    )}

                                    {/* Stat / Calculation Breakdown Box (if applicable) */}
                                    {section.statBox && (
                                        <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 border border-gray-200 p-4 sm:p-5 rounded-xs">
                                            <div>
                                                <span className="text-[11px] text-gray-500 uppercase tracking-wider block">Property / Loan</span>
                                                <span className="text-sm sm:text-base font-semibold text-[#192B3C]">{section.statBox.loanAmount}</span>
                                            </div>
                                            <div>
                                                <span className="text-[11px] text-gray-500 uppercase tracking-wider block">Rate / Male Duty</span>
                                                <span className="text-sm sm:text-base font-semibold text-[#192B3C]">{section.statBox.interestRate}</span>
                                            </div>
                                            <div>
                                                <span className="text-[11px] text-gray-500 uppercase tracking-wider block">Tenure / Female Duty</span>
                                                <span className="text-sm sm:text-base font-semibold text-[#192B3C]">{section.statBox.tenure}</span>
                                            </div>
                                            <div>
                                                <span className="text-[11px] text-gray-500 uppercase tracking-wider block">Impact / Savings</span>
                                                <span className="text-sm sm:text-base font-semibold text-[#0A5E9D]">{section.statBox.monthlyEmi}</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Points list */}
                                    {section.points && (
                                        <ul className="space-y-2.5 pt-2">
                                            {section.points.map((pt, ptIdx) => (
                                                <li key={ptIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#B08A1E] mt-2 shrink-0" />
                                                    <span>{renderFormattedText(pt)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Checklist with CheckCircle2 */}
                                    {section.checklist && (
                                        <div className="space-y-3 pt-3">
                                            {section.checklist.map((item, cIdx) => (
                                                <div key={cIdx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xs border border-gray-150">
                                                    <CheckCircle2 size={16} className="text-[#0A5E9D] shrink-0 mt-0.5" />
                                                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                                        {renderFormattedText(item)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* SEO Keywords & Topics Section */}
                            {activeArticle.seoKeywords && activeArticle.seoKeywords.length > 0 && (
                                <div className="mt-8 pt-6 border-t border-gray-150">
                                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-3">
                                        Related Topics &amp; SEO Keywords
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {activeArticle.seoKeywords.map((kw, kwIdx) => (
                                            <span
                                                key={kwIdx}
                                                className="inline-block text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-xs border border-slate-200 font-medium hover:border-[#B08A1E] transition-colors"
                                            >
                                                #{kw}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Disclaimer */}
                            {activeArticle.disclaimer && (
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed italic">
                                        {activeArticle.disclaimer}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Bottom Article Switcher Bar with Arrow Buttons */}
                        <div className="p-6 sm:p-8 bg-[#F8FAFC] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <button
                                onClick={handlePrev}
                                className="w-full sm:w-auto flex items-center gap-3 p-3 text-left hover:bg-white rounded-xs border border-transparent hover:border-gray-200 transition-all cursor-pointer group"
                            >
                                <div className="w-9 h-9 rounded-full bg-white border border-gray-200 group-hover:bg-[#192B3C] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                                    <ArrowLeft size={16} />
                                </div>
                                <div className="max-w-[280px]">
                                    <span className="text-[10px] uppercase font-semibold text-gray-400 block tracking-wider">
                                        Previous Article
                                    </span>
                                    <span className="text-xs font-medium text-[#192B3C] truncate block">
                                        {prevArticle.title}
                                    </span>
                                </div>
                            </button>

                            <div className="text-xs text-gray-400 font-medium hidden md:block">
                                Use ← / → keys to switch articles
                            </div>

                            <button
                                onClick={handleNext}
                                className="w-full sm:w-auto flex items-center justify-end gap-3 p-3 text-right hover:bg-white rounded-xs border border-transparent hover:border-gray-200 transition-all cursor-pointer group"
                            >
                                <div className="max-w-[280px]">
                                    <span className="text-[10px] uppercase font-semibold text-gray-400 block tracking-wider">
                                        Next Article
                                    </span>
                                    <span className="text-xs font-medium text-[#192B3C] truncate block">
                                        {nextArticle.title}
                                    </span>
                                </div>
                                <div className="w-9 h-9 rounded-full bg-white border border-gray-200 group-hover:bg-[#192B3C] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                                    <ArrowRight size={16} />
                                </div>
                            </button>
                        </div>
                    </article>

                    {/* All Articles Text-Only Grid / Quick Switcher */}
                    <div className="mt-14 sm:mt-20">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08A1E]">
                                    TABLE OF CONTENTS
                                </span>
                                <h3 className="text-xl sm:text-2xl font-light text-[#192B3C] mt-1">
                                    All Articles in This Series
                                </h3>
                            </div>
                            <span className="text-xs text-gray-500 font-medium">
                                {blogsData.length} Articles
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {blogsData.map((article, idx) => {
                                const isActive = idx === currentIndex;
                                return (
                                    <div
                                        key={article.id}
                                        onClick={() => handleSelectArticle(idx)}
                                        className={`group cursor-pointer rounded-xs p-6 border transition-all duration-300 flex flex-col justify-between bg-white ${
                                            isActive
                                                ? "ring-2 ring-[#B08A1E] shadow-md border-[#B08A1E]"
                                                : "border-gray-200 hover:border-[#192B3C]/40 hover:shadow-md"
                                        }`}
                                    >
                                        <div>
                                            <div className="flex items-center justify-between gap-3 mb-3">
                                                <span className="inline-block bg-gray-100 text-[#192B3C] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                                                    {article.category}
                                                </span>
                                                <span className="text-xs text-gray-400 font-medium">
                                                    Article {idx + 1}
                                                </span>
                                            </div>

                                            <h4 className="text-base sm:text-lg font-medium text-[#192B3C] leading-snug group-hover:text-[#B08A1E] transition-colors mb-2">
                                                {article.title}
                                            </h4>

                                            <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 leading-relaxed mb-4">
                                                {article.subtitle}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-3 text-gray-400">
                                                <span>{article.date}</span>
                                                <span>•</span>
                                                <span>{article.readTime}</span>
                                            </div>

                                            <span
                                                className={`font-semibold flex items-center gap-1.5 transition-colors ${
                                                    isActive ? "text-[#B08A1E]" : "text-[#192B3C] group-hover:text-[#B08A1E]"
                                                }`}
                                            >
                                                <span>{isActive ? "Currently Reading" : "Read Article"}</span>
                                                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    );
};

export default Blogs;
