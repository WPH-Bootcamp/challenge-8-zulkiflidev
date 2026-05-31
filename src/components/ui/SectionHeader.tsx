
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string; // Untuk custom margin (misal: my-16, mb-8)
}

const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center w-full ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-neutral-25">
        {title}
      </h2>
      {subtitle && (
        <h3 className="text-neutral-400 dark:text-neutral-400 font-medium transition-colors duration-300 mt-2">
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default SectionHeader;