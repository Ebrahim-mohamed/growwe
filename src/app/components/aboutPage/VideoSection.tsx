export function VideoSection() {
  return (
    <div className="p-[var(--section-Padding)] w-full">
      <iframe
        className="w-full h-[800px] rounded-lg"
        src="https://www.youtube.com/embed/DRphzO38cN4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
