export default function SectionTitle({ title, className = "" }) {
  return (
    <h2
      className={`text-3xl font-bold pb-2 mb-12 relative inline-block ${className}`}
    >
      {title}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
    </h2>
  );
}
