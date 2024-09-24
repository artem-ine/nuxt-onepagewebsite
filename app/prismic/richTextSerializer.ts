import { type HTMLRichTextMapSerializer } from '@prismicio/client';

const serializer: HTMLRichTextMapSerializer = {
  preformatted: ({ node }) => `<code>${JSON.stringify(node.text)}</code>`
}

export default serializer;