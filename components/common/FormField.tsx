"use client";
interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
}

const inputClass =
  "w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-sky-500";

export default function FormField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  textarea = false,
  rows = 3,
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1">
        {label}
      </label>

      {textarea ? (
        <textarea
          rows={rows}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={(event) => onChange(event.target.value)}
          className={`${inputClass} font-sans leading-relaxed`}
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={(event) => onChange(event.target.value)}
          className={inputClass}
        />
      )}
    </div>
  );
}