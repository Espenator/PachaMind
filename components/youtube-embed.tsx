import { VideoPlayer } from "@/components/video-player";
import type { Lesson } from "@/lib/types";

interface YouTubeEmbedProps {
  lesson: Lesson;
  comingSoonLabel?: string;
}

export function YouTubeEmbed({
  lesson,
  comingSoonLabel = "Video coming soon",
}: YouTubeEmbedProps) {
  if (!lesson.youtubeId) {
    return (
      <div
        className="overflow-hidden rounded-[1.75rem] border border-white/20 bg-deepearth/90 shadow-[0_24px_60px_rgba(36,25,21,0.24)]"
        aria-label={lesson.title}
        role="region"
      >
        <div className="relative flex aspect-video w-full flex-col items-center justify-center bg-deepearth/80 px-6 text-center">
          <p className="text-lg font-semibold text-cloudwhite">{comingSoonLabel}</p>
          {lesson.mediaNote ? (
            <p className="mt-3 max-w-xl text-sm leading-6 text-cloudwhite/85">
              {lesson.mediaNote}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return <VideoPlayer youtubeId={lesson.youtubeId} title={lesson.title} />;
}
