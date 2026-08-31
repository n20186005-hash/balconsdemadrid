type Props = {
  text: string;
  className?: string;
  strongClassName?: string;
};

export default function RichInline({ text, className, strongClassName }: Props) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const content = part.slice(2, -2);
          return (
            <strong key={i} className={strongClassName || 'font-semibold'}>
              {content}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
