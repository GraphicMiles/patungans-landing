/**
 * Placeholder — stands in for every image in the design.
 *
 * Swap each usage for a real <img /> (or asset) later; every slot is also
 * tagged with `data-placeholder="<label>"` in the DOM so you can find them
 * quickly with devtools or `document.querySelectorAll('[data-placeholder]')`.
 *
 * See PLACEHOLDERS.md for the full checklist.
 */
export default function Placeholder({
  label = 'image',
  showLabel = true,
  dark = false,
  className = '',
  style,
}) {
  const tone = dark
    ? 'border-gray-600 bg-gray-800 text-gray-400' // for dark surfaces (navbar logo, icons, badges…)
    : 'border-gray-300 bg-gray-200 text-gray-500'; // for light surfaces (phones, avatars…)

  return (
    <div
      data-placeholder={label}
      role="img"
      aria-label={`Placeholder: ${label}`}
      style={style}
      className={`flex items-center justify-center border border-dashed p-1 text-center text-[9px] font-medium uppercase leading-tight tracking-wider ${tone} ${className}`}
    >
      {showLabel ? label : null}
    </div>
  );
}
