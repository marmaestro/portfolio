import { visit } from 'unist-util-visit';

/**
 * Shifts every heading in MDX content down by `by` levels (default 2), capped
 * at h6, so authors can write `#`/`##` naturally while the page chrome around
 * `<Content/>` (which already renders its own <h1>/<h2>) keeps a correct,
 * non-duplicated heading outline.
 */
export default function rehypeShiftHeadings(by = 2) {
    return (tree) => {
        visit(tree, 'element', (node) => {
            const match = /^h([1-6])$/.exec(node.tagName);
            if (!match) return;
            const level = Math.min(6, Number(match[1]) + by);
            node.tagName = `h${level}`;
        });
    };
}
