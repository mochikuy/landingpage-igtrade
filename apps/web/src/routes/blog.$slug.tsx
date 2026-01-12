import { useLoaderData, Link } from 'react-router';
import type { Route } from './+types/blog.$slug';
import { getPostBySlug } from '@/lib/blog.server';
import { MarkdownRenderer } from '@/components/markdown-renderer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { data } from 'react-router';

export async function loader({ params }: Route.LoaderArgs) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        throw data('Blog post not found', { status: 404 });
    }

    return { post };
}

export function meta({ data }: Route.MetaArgs) {
    if (!data?.post) {
        return [{ title: 'Post Not Found' }];
    }

    return [
        { title: `${data.post.title} - Infinity Globalindo Blog` },
        { name: 'description', content: data.post.description || data.post.title },
    ];
}

export default function BlogPost() {
    const { post } = useLoaderData<typeof loader>();

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Header */}
            <section className="py-12 px-4 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-[#1D98C4] hover:text-[#1787b0] font-medium mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 font-bold leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-slate-600">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                        {post.author && (
                            <span className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                {post.author}
                            </span>
                        )}
                    </div>

                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 text-sm font-medium bg-slate-100 text-slate-700 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Featured Image */}
            {post.image && (
                <section className="px-4 py-8">
                    <div className="max-w-4xl mx-auto">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>
                </section>
            )}

            {/* Content */}
            <section className="px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <article className="prose prose-lg max-w-none">
                        <MarkdownRenderer content={post.content} />
                    </article>
                </div>
            </section>

            {/* Back to Blog */}
            <section className="px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <Link
                        to="/blog"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#1D98C4] hover:bg-[#1787b0] text-white font-medium rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to All Posts
                    </Link>
                </div>
            </section>
        </div>
    );
}
