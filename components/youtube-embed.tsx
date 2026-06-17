import { VideoPlayer } from "@/components/video-player";
import type { Lesson } from "@/lib/types";

interface YouTubeEmbedProps {
  lesson: Lesson;
}

export function YouTubeEmbed({ lesson }: YouTubeEmbedProps) {
  return <VideoPlayer youtubeId={lesson.youtubeId} title={lesson.title} />;
}
