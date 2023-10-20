import React from "react";
import Counter from "./Counter";

const CustomElements = ({ customElements, updateValues }) => {
  const setNewValue = (element, newValue) => {
    const newIndex = newValue * 2 + 1;
    updateValues(element, { index: newIndex });
  };
  return (
    <div>
      <table class="table-auto border-collapse w-full">
        <thead>
          <tr class="rounded-lg text-sm font-medium text-gray-700 text-left">
            <th class="px-4 py-2 bg-gray-200">Icon</th>
            <th class="px-4 py-2 bg-gray-200">Value</th>
            <th class="px-4 py-2 bg-gray-200">Index</th>
          </tr>
        </thead>
        <tbody class="text-sm font-normal text-gray-700">
          {customElements.map((element) => {
            return (
              <tr class="hover:bg-gray-100 border-b border-gray-200 py-10">
                <td class="px-4 py-4">{element.icon}</td>
                <td class="px-4 py-4">{element.value}</td>
                <td class="px-4 py-4">
                  <Counter
                    count={(element.index - 1) / 2}
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
