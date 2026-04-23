export default function Divider() {
  return (
    <div className="flex items-center gap-4 py-4">
      <div
        className="flex-1 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)',
        }}
      />
      <div
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: '#e879a0' }}
      />
      <div
        className="flex-1 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)',
        }}
      />
    </div>
  );
}