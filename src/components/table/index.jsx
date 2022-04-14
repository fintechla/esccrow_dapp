export function TableRow({ className, data }) {
  const getFields = () => {
    return data.map((itm, idx) => {
      let value = itm;
      if (typeof itm === "object") {
        value = itm.content;
      }
      return <td key={"td-" + idx}>{value}</td>;
    });
  };
  return <tr className={className}>{getFields()}</tr>;
}

export function Table({ className, headers, children }) {
  const getHeader = () => {
    if (!headers) return;
    const row = headers.map((itm, idx) => <th key={"th" + idx}>{itm}</th>);
    return (
      <thead>
        <tr>{row}</tr>
      </thead>
    );
  };

  return (
    <table className={className}>
      {getHeader()}
      <tbody>{children}</tbody>
    </table>
  );
}
