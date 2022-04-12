export function DataComponent({ className, field, value }) {
  return (
    <div className={className}>
      <span>{field}</span>
      <span>{value}</span>
    </div>
  );
}
