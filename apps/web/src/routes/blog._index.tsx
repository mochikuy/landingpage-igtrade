import { Link, useLoaderData } from 'react-router';
import type { Route } from './+types/blog._index';
import { getAllPosts, getExcerpt } from '@/lib/blog.server';
import { Calendar, User, ArrowRight } from 'lucide-react';

export async function loader({ }: Route.LoaderArgs) {
    const posts = await getAllPosts();
    return { posts };
}

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Blog - Infinity Globalindo' },
        {
            name: 'description',
            content: 'Latest news, insights, and updates from Infinity Globalindo.'
        },
    ];
}

export default function BlogIndex() {
    const { posts } = useLoaderData<typeof loader>();

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Header */}
            <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 font-bold">
                        Blog
                    </h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Latest news, insights, and updates from Infinity Globalindo
                    </p>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {posts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-slate-500 text-lg">No blog posts yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link
                                    key={post.slug}
                                    to={`/blog/${post.slug}`}
                                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    {post.image && (
                                        <div className="aspect-video overflow-hidden bg-slate-100">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </span>
                                            {post.author && (
                                                <span className="flex items-center gap-1">
                                                    <User className="w-4 h-4" />
                                                    {post.author}
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1D98C4] transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-600 leading-relaxed mb-4">
                                            {post.description || getExcerpt(post.content)}
                                        </p>
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <div className="flex items-center text-[#1D98C4] font-medium text-sm group/btn">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
