import React from "react";

const Table = ({
  dados = [],
  columns = [],
  className = "table table-stripped",
}) => {
  const CriarColunas = (columnType, value) => {
    switch (columnType) {
      case "texto":
        return value.name;
      case "timeonly":
        return value.name;
      case "time":
        return value.name;
      case "botao":
        return (
          <div style={{display: "flex", gap: "5px"}}>
            {value.botoes.map((item, index) => (
              <span key={index}>{item.botao} </span>
            ))}
            
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <table style={{ color: "white" }} className={className} id="tabela">
        <thead style={{ color: "white" }}>
          <tr style={{ color: "white" }}>
            {columns.map((column) => (
              <th style={{ color: "white", marginLeft: "50px" }} key={column.name}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{ color: "white" }}>
          {dados.map((dado, rowIndex) => (
            <tr style={{ color: "white" }} key={`linha-${rowIndex}`}>
              {columns.map((col, colIndex) => (
                <td key={`col-${colIndex}`}>
                  {dado[colIndex] == null
                    ? ""
                    : CriarColunas(col.columnType, dado[colIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
