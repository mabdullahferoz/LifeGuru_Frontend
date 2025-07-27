interface FloatingBlobsProps {
  className?: string;
}

export const FloatingBlobs = ({ className = "" }: FloatingBlobsProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="floating-blob absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full" />
      <div className="floating-blob absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full" />
      <div className="floating-blob absolute bottom-1/4 left-1/2 w-80 h-80 bg-accent/30 rounded-full" />
    </div>
  );
};