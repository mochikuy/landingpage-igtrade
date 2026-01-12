import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description?: string;
    image?: string;
    author?: string;
    tags?: string[];
    content: string;
}

// Get all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
    try {
        const files = await fs.readdir(CONTENT_DIR);
        const posts: BlogPost[] = [];

        for (const file of files) {
            if (file.endsWith('.md')) {
                const slug = file.replace('.md', '');
                const post = await getPostBySlug(slug);
                if (post) {
                    posts.push(post);
                }
            }
        }

        // Sort by date descending
        return posts.sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    } catch (error) {
        console.error('Error reading blog posts:', error);
        return [];
    }
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const filePath = path.join(CONTENT_DIR, `${slug}.md`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        return {
            slug,
            title: data.title || 'Untitled',
            date: data.date || new Date().toISOString(),
            description: data.description,
            image: data.image,
            author: data.author,
            tags: data.tags,
            content,
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}

// Get excerpt from content (first 150 characters)
export function getExcerpt(content: string, length = 150): string {
    const plainText = content
        .replace(/^#+\s+/gm, '') // Remove markdown headings
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
        .replace(/[*_~`]/g, '') // Remove formatting
        .trim();

    if (plainText.length <= length) {
        return plainText;
    }

    return plainText.substring(0, length).trim() + '...';
}
