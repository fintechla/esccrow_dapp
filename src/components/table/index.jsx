export function TableRow({ className, data }) {
  const getFields = () => {
    return data.map((itm, idx) => {
      let value = itm;
      let rowspan = 1;
      let textAlign;
      let verticalAlign;

      if (typeof itm === "object") {
        value = itm.content;
        rowspan = itm.rowspan ?? 1;
        textAlign = itm.textAlign;
        verticalAlign = itm.verticalAlign;
      }

      return (
        <td
          style={{ textAlign, verticalAlign }}
          key={"td-" + idx}
          rowSpan={rowspan}
        >
          {value}
        </td>
      );
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
