export function TableRow({ className, data }) {
  const getFields = () => {
    return data.map((itm, idx) => <td key={"td-" + idx}>{itm}</td>);
  };
  return <tr className={className}>{getFields()}</tr>;
}

export function Table({ className, headers, children }) {
  const getHeader = () => {
    return headers.map((itm, idx) => <th key={"th" + idx}>{itm}</th>);
  };

  return (
    <table className={className}>
      <thead>
        <tr>{getHeader()}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
