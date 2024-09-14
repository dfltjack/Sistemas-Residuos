import React from "react";

const Table = ({ dados = [], columns = [], className = "table table-stripped" }) => {
  const CriarColunas = (columnType, value) => {
    switch (columnType) {
      case "texto":
        return value.name;
      case "timeonly":
        return value.name;
      case "time":
        return value.name;
      case "botao":
        return value.botoes.map((item, index) => (
          <span key={index}>{item.botao}</span>
        ));
      default:
        return null;
    }
  };

  return (
    <>
      <table style={{color: "white"}} className={className} id="tabela">
        <thead style={{color: "white"}}>
          <tr style={{color: "white"}}>
            {columns.map((column) => (
              <th style={{color: "white"}} key={column.name}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{color: "white"}}>
          {dados.map((dado, rowIndex) => (
            <tr style={{color: "white"}} key={`linha-${rowIndex}`}>
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


// import React, { useState } from "react";

// const Table = ({
//   dados = [],
//   columns = [],
//   className = "table table-stripped",
// }) => {
//   const CriarColunas = (columnType, value) => {
//     switch (columnType) {
//       case "texto":
//         return value.name;
//         break;
//       case "botao":
//         var botoes = [];
//         value.botoes.map((item) => {
//           botoes.unshift(item.botao);
//         });
//         return botoes;
//         break;
//     }
//   };

//   return (
//     <>
//       <table className={className} id="tabela">
//         <thead>
//           <tr>
//             {columns.map((column) => (
//               <th key={column.name}> {column.name}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {dados.map((dado, index) => (
//             <tr key={`linha-${index}`}>
//               {columns.map((col, index) => (
//                 <td>
//                   {columns.map((col, index) => (
//                     <td key={`col-${index}`}>
//                       {dado[index] == null
//                         ? ""
//                         : CriarColunas(col.columnType, dado[index])}
//                     </td>
//                   ))}
//                   {dado[index] == null
//                     ? ""
//                     : CriarColunas(col.columnType, dado[index])}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default Table;
