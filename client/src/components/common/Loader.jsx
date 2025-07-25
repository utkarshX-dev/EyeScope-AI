export default function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-primary-foreground">
      <div className="flex flex-col items-center gap-4">
        <div className="flex text-4xl sm:text-5xl font-extrabold tracking-widest">
          {"EyeScope AI".split("").map((char, idx) => (
            <span
              key={idx}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
        </div>
      </div>
    </div>
  );
}
