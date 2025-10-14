export function SecondSectionBox({ text }: { text: string }) {
  return (
    <div className="bg-[#F8F9FB] rounded-[1.5rem] [box-shadow:0_8px_12px_6px_rgba(0,0,0,0.15),_0_4px_4px_0_rgba(0,0,0,0.30)] text-[#387023] text-[1.8rem] font-black flex-1 h-auto py-3 px-6">
      <div
        className={`${
          text === "Reduce Soil Erosion" ? " max-w-[12rem] " : " max-w-[9rem] "
        }`}
      >
        {text}
      </div>
    </div>
  );
}
