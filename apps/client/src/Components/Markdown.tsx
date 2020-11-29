import React, { ElementType, FC } from "react"
import ReactMarkdown from "react-markdown"

import ImageMarkdown from "Components/ImageMarkdown"
import Text from "Components/Text"
import Link from "Components/Link"

// valid node types
export type NodeTypes =
  "root" | "text" | "break" | "paragraph" | "emphasis" | "strong" | "thematicBreak" | "blockquote"  |
  "link" | "image" | "linkReference" | "imageReference" | "list" | "listItem" | "definition" | "heading" |
  "inlineCode" | "code" | "html" | "virtualHtml" | "parsedHtml" | "delete" | "table" | "tableHead" |
  "tableBody" | "tableRow" | "tableCell"

// map of node types to react component used to render them
export type Renderers = {
  [key in NodeTypes]?: ElementType<any>
}

// this is the way ReactMarkdown expects a renderer to be
interface LazyRenderer {
  [nodeType: string]: ElementType<any>,
}
export interface MarkdownProps {
  source: string,
  renderers?: Renderers,
}
export type Renderer = ElementType<any>
export const Markdown: FC<MarkdownProps> = ({
  source = "",
  renderers = {}
}) => {
  return (
    <ReactMarkdown
      source={source}
      renderers={{
        paragraph: Text,
        link: Link,
        image: ImageMarkdown,
        ...renderers,
      } as LazyRenderer}
    />
  )
}

export default Markdown
