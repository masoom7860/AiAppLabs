/**
 * Renders a JSON-LD <script>. Server component — safe to drop anywhere.
 * Pass a fully-formed document (e.g. from `graph(...)`).
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
