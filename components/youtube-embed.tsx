import type { Lesson } from "@/lib/types";

interface YouTubeEmbedProps {
  lesson: Lesson;
  comingSoonLabel?: string;
}

export function YouTubeEmbed({ lesson, comingSoonLabel = "Video coming soon" }: YouTubeEmbedProps) {
  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border border-white/20 bg-deepearth/90 shadow-[0_24px_60px_rgba(36,25,21,0.24)]"
      aria-label={lesson.title}
      role="region"
    >
      <div className="relative aspect-video w-full">
        {lesson.youtubeId ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?rel=0`}
            title={lesson.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-deepearth/80 px-6 text-center">
            <p className="text-lg font-semibold text-cloudwhite">{comingSoonLabel}</p>
            {lesson.mediaNote ? <p className="mt-3 max-w-xl text-sm leading-6 text-cloudwhite/85">{lesson.mediaNote}</p> : null}
          </div>
        )}
      </div>
    </div>
  );
}
