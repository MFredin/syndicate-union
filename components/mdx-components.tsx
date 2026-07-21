import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mt-10 font-heading text-2xl tracking-wide" {...props} />,
  h3: (props) => <h3 className="mt-8 font-heading text-xl tracking-wide" {...props} />,
  p: (props) => <p className="mt-4 leading-relaxed text-muted-foreground" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  a: ({ href, ...props }) => (
    <Link
      href={href ?? "#"}
      className="font-medium text-primary underline decoration-gold underline-offset-4 hover:text-primary/80"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  table: (props) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="border-b border-border text-left" {...props} />,
  th: (props) => <th className="px-3 py-2 font-heading text-xs uppercase tracking-wide text-gold" {...props} />,
  td: (props) => <td className="border-b border-border px-3 py-2 text-muted-foreground" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 border-gold pl-4 italic text-muted-foreground" {...props} />
  ),
};
