import React from "react";
import { withTheme } from "styled-components";

import Select from "react-select";

const defaultOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const getCustomStyles = (theme, accentColor, bg, border, indicator) => {
  return {
    dropdownIndicator: () => {
      return {
        display: !indicator && "none",
      };
    },
    indicatorSeparator: () => {},
    option: (provided, state) => {
      return {
        ...provided,
        color: state.isSelected ? theme.colors[accentColor] : theme.colors.dark,
        textAlign: "left",
        backgroundColor: bg,
      };
    },
    control: (provided, state) => {
      return {
        ...provided,
        border: !border
          ? "none"
          : state.menuIsOpen || state.isFocused
          ? `1px solid ${theme.colors[accentColor]} !important`
          : `1px solid ${theme.colors.border} !important`,
        borderRadius: 10,
        padding: "0.25rem 1rem",
        height: "50px",
        outline: "none",
        boxShadow: "none",
        textAlign: "left",
        backgroundColor: bg,
      };
    },
  };
};

const SelectStyled = ({
  theme,
  bg = "#fff",
  border = true,
  accentColor = "success",
  name = "item",
  indicator = true,
  options = defaultOptions,
  ...rest
}) => {
  return (
    <Select
      styles={getCustomStyles(theme, accentColor, bg, border, indicator)}
      defaultValue={options[1]}
      name={name}
      id="asdsad123"
      options={options}
      instanceId="sel234"
      {...rest}
    />
  );
};

export default withTheme(SelectStyled);
