import React from "react";
import Counter from "./Counter";

const CustomElements = ({ customElements, updateValues }) => {
  const setNewValue = (element, newValue) => {
    updateValues(element, { index: newValue });
  };
  return (
    <div>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
            <th className="px-4 py-2 bg-gray-200">Icon</th>
            <th className="px-4 py-2 bg-gray-200">Value</th>
            <th className="px-4 py-2 bg-gray-200">Index</th>
          </tr>
        </thead>
        <tbody className="text-sm font-normal text-gray-700">
          {customElements.map((element) => {
            return (
              <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                <td className="px-4 py-4">{element.icon}</td>
                <td className="px-4 py-4">
                  {element.subscript != 1
                    ? `${element.value}_${element.subscript}`
                    : element.value}
                </td>
                <td className="px-4 py-4">
                  <Counter
                    count={element.index}
                    setNewValue={(newValue) => {
                      setNewValue(element, newValue);
                    }}
                  ></Counter>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomElements;

/*
[
  { icon: iconsTypes.upArrow, index: 1, value: "q" },
  { icon: iconsTypes.upArrow, index: 11, value: "q" },
];
*/
