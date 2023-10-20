import React from "react";

const CustomElements = ({ customElements }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Value</th>
            <th>Index</th>
            <th>Array Index</th>
          </tr>
        </thead>
        <tbody>
          {customElements.map((element) => {
            return (
              <tr>
                <td>{element.icon}</td>
                <td>{element.value}</td>
                <td>{element.index}</td>
                <td>{(element.index - 1) / 2}</td>
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
