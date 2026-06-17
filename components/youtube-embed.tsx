import { getLessonPoster } from "@/lib/media";
import type { Lesson } from "@/lib/types";

import { VideoPlayer } from "@/components/video-player";

interface YouTubeEmbedProps {
  lesson: Lesson;
  priority?: boolean;
}

export function YouTubeEmbed({ lesson, priority = false }: YouTubeEmbedProps) {
  return (
    <VideoPlayer
      youtubeId={lesson.youtubeId}
      title={lesson.title}
      posterSrc={getLessonPoster(lesson.topic)}
      kicker={lesson.kicker}
      duration={lesson.duration}
      priority={priority}
    />
  );
}
