import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={`prose prose-slate max-w-none ${className}`}
            components={{
                // Customize heading styles
                h1: ({ node, ...props }) => <h1 className="text-4xl font-serif font-bold text-slate-900 mt-8 mb-4" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-3xl font-serif font-bold text-slate-900 mt-6 mb-3" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-2xl font-serif font-bold text-slate-900 mt-5 mb-2" {...props} />,

                // Customize paragraph styles
                p: ({ node, ...props }) => <p className="text-slate-700 leading-relaxed mb-4" {...props} />,

                // Customize list styles
                ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 text-slate-700" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 text-slate-700" {...props} />,
                li: ({ node, ...props }) => <li className="mb-2" {...props} />,

                // Customize link styles
                a: ({ node, ...props }) => (
                    <a className="text-[#1D98C4] hover:text-[#1787b0] underline" {...props} />
                ),

                // Customize code blocks
                code: ({ node, inline, ...props }: any) =>
                    inline ? (
                        <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
                    ) : (
                        <code className="block bg-slate-100 text-slate-800 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4" {...props} />
                    ),

                // Customize blockquote
                blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-[#1D98C4] pl-4 italic text-slate-600 my-4" {...props} />
                ),

                // Customize images
                img: ({ node, ...props }) => (
                    <img className="rounded-lg my-6 max-w-full h-auto" {...props} />
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
