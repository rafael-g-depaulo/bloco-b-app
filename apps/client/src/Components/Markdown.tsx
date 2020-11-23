import React, { ElementType, FC } from "react"
import ReactMarkdown from "react-markdown"

import ImageMarkdown from "Components/ImageMarkdown"
import Text from "Components/Text"
import Link from "Components/Link"

export interface MarkdownProps {
  source: string,
  renderers?: { [nodeType: string]: ElementType<any>; },
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
      }}
    />
  )
}

export default Markdown
