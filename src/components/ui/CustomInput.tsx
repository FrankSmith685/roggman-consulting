import { forwardRef, useState } from "react";
import { TextField, IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import { IconType } from "react-icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


interface InputProps extends Omit<TextFieldProps, "color" | "error"> {
  label?: string;
  name: string;
  errorMessage?: string;
  icon?: IconType;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  countryCode?: string;
  isPhone?: boolean;
  isSearch?: boolean;
  multiline?: boolean;
  minRows?: number;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  pattern?: string;
  onSearchClick?: () => void;
  inputProps?: TextFieldProps["inputProps"];
}

const getInputSize = () => (typeof window !== "undefined" && window.innerWidth < 640 ? "small" : "medium");

const CustomInput = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      label,
      name,
      type = "text",
      placeholder,
      errorMessage,
      icon: Icon,
      size = getInputSize(),
      color = "primary",
      isPhone = false,
      isSearch = false,
      multiline = false,
      minRows = 1,
      pattern = "",
      onSearchClick,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showFlag, setShowFlag] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
      <div style={{ position: "relative", width: "100%" }}>
        

        <TextField
          ref={ref}
          id={name}
          name={name}
          label={label}
          type={inputType}
          placeholder={placeholder}
          fullWidth
          size={size}
          color={color}
          error={!!errorMessage}
          helperText={errorMessage}
          multiline={multiline}
          value={rest.value ?? ""}
          onChange={rest.onChange}
          minRows={multiline ? minRows : undefined}
          InputProps={{
            startAdornment: Icon && (
              <InputAdornment position="start">
                <Icon className="text-indigo-600" />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {isPassword && (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? (
                        <AiOutlineEyeInvisible className="text-indigo-600" />
                      ) : (
                        <AiOutlineEye className="text-indigo-600" />
                      )}
                    </IconButton>
                  </InputAdornment>
                )}
                {isSearch && (
                  <InputAdornment position="end" sx={{ padding: 0, margin: 0, zIndex: 2 }}>
                    <IconButton
                      onClick={onSearchClick}
                      edge="end"
                      sx={{
                        borderRadius: "0 8px 8px 0",
                        backgroundColor: "#4f46e5",
                        color: "#fff",
                        padding: size === "small" ? "10px" : "18px",
                        zIndex: 2,
                        "&:hover": {
                          backgroundColor: "#4338ca",
                        },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 2a8 8 0 015.292 13.707l4.5 4.5-1.414 1.414-4.5-4.5A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
                      </svg>
                    </IconButton>
                  </InputAdornment>
                )}
              </>
            ),
          }}
          onFocus={() => isPhone && setShowFlag(true)}
          onBlur={() => isPhone && setShowFlag(!!rest.value)}
          inputProps={{
            pattern: pattern,
            inputMode: rest.inputMode,
            onKeyDown: rest.onKeyDown as React.KeyboardEventHandler<HTMLInputElement>,
            maxLength: rest.inputProps?.maxLength,
            ...rest.inputProps,
          }}
          sx={{
            "& .MuiFormHelperText-root": {
              marginTop: "1px",
              lineHeight: "1.2",
              fontSize: "12px",
            },
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderRight: isSearch ? "none" : undefined,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc",
              },
              paddingLeft: isPhone && (showFlag || rest.value) ? "30px" : multiline ? "18px" : "0px",
              borderRadius: isSearch ? "8px 0 0 8px" : "8px",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4f46e5", // indigo-600
              },
              "& fieldset": {
                borderRadius: isSearch ? "8px" : "8px",
                borderColor: "#ccc",
                transition: "border-color 0.3s ease",
              },
              "& input::placeholder": {
                color: "#999",
              },
            },
            "& .MuiInputLabel-root": {
              fontSize: "16px",
              "@media (max-width: 640px)": {
                fontSize: "14px",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#4f46e5", // indigo-600
            },
          }}
          {...rest}
        />
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
