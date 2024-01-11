import React from "react";

export const MainTable = ({ headers, mainData }) => {
  return (
    <div className="overflow-auto w-full h-fit py-2 lg:overflow-scroll lg:w-screen  lg:ml-4 xl:overflow-scroll xl:ml-8 2xl:w-full 2xl:overflow-hidden 2xl:ml-3">
      <table
        onClick={() => console.log("Click")}
        className="w-[300%] h-[90%] rounded-md mt-2 ml-3 md:w-[150%] lg:w-[120%] md:ml-8 xl:w-[95%] shadow-main-shadow 2xl:w-full "
      >
        <thead>
          <tr className="bg-table-row-grey h-14 ">
            {headers.map((header) => (
              <th className="text-left pl-5" key={Math.random()}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mainData.map((data) => (
            <tr
              className="h-14 even:bg-table-row-grey odd:bg-white"
              key={data.id}
            >
              {Object.keys(data).map((key) => (
                <td className="pl-5" key={data[key]}>
                  {data[key] || (
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
              <td className="pl-5" key={data.id}>
                <div>
                  <button className="text-[#0033CC] border-[1px] border-solid border-[#0033CC] py-1 px-2 rounded-md mr-2">
                    editar
                  </button>{" "}
                  <button className="text-[#FF1001] border-[1px] border-solid border-[#FF1001] py-1 px-2 rounded-md">
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
