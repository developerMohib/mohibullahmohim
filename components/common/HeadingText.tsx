
interface HeadingTextProps {
  intro?: string;
  mainTitle: string;
  highlightTitle?: string;
  mainDescription?: string;
  highlightDescription?: string;
  classNamePolish?: string;
}

export default function HeadingText({
  intro,
  mainTitle,
  highlightTitle,
  mainDescription,
  highlightDescription,
  classNamePolish
}: HeadingTextProps) {
  return (
    <div className={ `w-full px-4 mx-auto ${classNamePolish ? classNamePolish : "text-center"} `}>
      {intro && (
        <div className="mb-4">
          <code className="text-sm text-slate-500">{intro}</code>
        </div>
      )}

      <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
        {mainTitle}{" "}
        {highlightTitle && (
          <span className="text-red-500">{highlightTitle}</span>
        )}
      </h2>

      {(mainDescription || highlightDescription) && (
        <p className="mt-4 text-slate-600 leading-relaxed">
          {mainDescription}
          {highlightDescription && (
            <span className="font-semibold text-red-500">
              {" "}<br/>
              {highlightDescription}
            </span>
          )}
        </p>
      )}
    </div>
  );
}