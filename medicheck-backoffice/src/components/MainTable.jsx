import React from "react";

export const MainTable = ({ headers, mainData }) => {
  return (
    <div>
      <table className="w-full h-[90%] rounded-md mt-2">
        <thead>
          <tr className="bg-table-row-grey h-14 pl-2">
            {headers.map((header) => (
              <th className="text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mainData.map((data) => (
            <tr className="h-14 even:bg-table-row-grey odd:bg-white">
              {headers.map((header) => (
                <td>
                  {data[header] || (
                    <div>
                      <button className="text-[#0033CC] border-[1px] border-solid border-[#0033CC] py-1 px-2 rounded-md mr-2">
                        editar
                      </button>{" "}
                      <button className="text-[#FF1001] border-[1px] border-solid border-[#FF1001] py-1 px-2 rounded-md">
                        Eliminar
                      </button>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
