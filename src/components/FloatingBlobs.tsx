interface FloatingBlobsProps {
  className?: string;
}

export const FloatingBlobs = ({ className = "" }: FloatingBlobsProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="floating-blob absolute top-1/4 left-1/4 w-80 h-80 bg-primary/12 rounded-full" />
      <div className="floating-blob absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full" />
      <div className="floating-blob absolute bottom-1/4 left-1/2 w-72 h-72 bg-accent/12 rounded-full" />
      <div className="floating-blob absolute top-1/2 right-1/3 w-64 h-64 bg-pink/10 rounded-full" />
      <div className="floating-blob absolute top-1/3 left-3/4 w-56 h-56 bg-primary/8 rounded-full" />
    </div>
  );
};