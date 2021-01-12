import React, { FC } from "react"
import styled from "styled-components"
import StrapiAsset from "Utils/StrapiAsset"

const PoemVideo = styled.video`
  margin: auto;
  height: auto;
  max-height: 95vh;
  max-width: 100%;
`

export interface VideoProps {
  onClick?: (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => void,
  video: StrapiAsset,
}

export const Video: FC<VideoProps> = ({
  onClick,
  video,
}) => {
  return (
    <PoemVideo autoPlay muted onClick={onClick}>
      <source src={video.url} type={video.mime || "video/mp4"} />
    </PoemVideo>
  )
}

export default Video
