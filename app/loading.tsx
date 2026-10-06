export default function Loading() {
  return (
    <div className="fixed inset-x-0 top-0 z-[90] h-[2px] w-full overflow-hidden bg-transparent">
      <div className="h-full w-1/3 animate-[loading_1.1s_ease-in-out_infinite] bg-blue-bright" />
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
