import type { Lesson } from "@/lib/types";

interface YouTubeEmbedProps {
  lesson: Lesson;
}

export function YouTubeEmbed({ lesson }: YouTubeEmbedProps) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/20 bg-deepearth/90 shadow-[0_24px_60px_rgba(36,25,21,0.24)]">
      <div className="relative aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?rel=0`}
          title={lesson.title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
