/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  SelectProps,
  SelectChangeEvent,
} from "@mui/material";

interface SelectOption {
  value: string | number;
  label: string;
}

interface CustomSelectProps extends Omit<SelectProps, "error" | "color"> {
  label: string;
  name: string;
  options: SelectOption[];
  errorMessage?: string;
  onChange?: (event: SelectChangeEvent<any>, child?: React.ReactNode) => void;

  customColor?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "indigo";
}

const getInputSize = () => (window.innerWidth < 640 ? "small" : "medium");

const CustomSelect = forwardRef<HTMLDivElement, CustomSelectProps>(
  (
    {
      label,
      name,
      value,
      onChange,
      options = [],
      errorMessage,
      customColor = "primary",
      ...rest
    },
    ref
  ) => {
    const isIndigo = customColor === "indigo";

    return (
      <FormControl
        fullWidth
        error={!!errorMessage}
        size={getInputSize()}
        sx={{
          "& .MuiFormHelperText-root": {
            marginTop: "1px",
            lineHeight: "1.2",
            fontSize: "12px",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            borderColor: "#ccc",
            transition: "border-color 0.3s ease",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: isIndigo ? "#4f46e5" : undefined, // indigo-600
            },
          },
          "& .MuiInputLabel-root": {
            fontSize: "16px",
            "@media (max-width: 640px)": {
              fontSize: "14px",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: isIndigo ? "#4f46e5" : undefined, // indigo-600
          },
        }}
      >
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
        <Select
          ref={ref}
          labelId={`${name}-label`}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          label={label}
          color={!isIndigo ? (customColor as any) : undefined}
          {...rest}
        >
          {options.map((option) => (
            <MenuItem key={option.value.toString()} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
