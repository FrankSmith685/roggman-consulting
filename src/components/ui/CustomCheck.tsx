import { Checkbox, FormControlLabel } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import { styled } from "@mui/material/styles";

interface CustomCheckProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledCheckbox = styled(Checkbox)(() => ({
  padding: 2,
  borderRadius: 2,
  color: "#4f46e5",
  "&.Mui-checked": {
    backgroundColor: "#4f46e5",
    color: "#fff",
    borderColor: "#4f46e5",
  },
  "&.Mui-checked:hover": {
    backgroundColor: "#4338ca",
  },
}));

const EmptyIcon = () => (
  <span
    style={{
      display: "inline-block",
      width: 18,
      height: 18,
      border: "2px solid #4f46e5",
      borderRadius: 2,
      boxSizing: "border-box",
    }}
  />
);

export default function CustomCheck({ label, checked, onChange }: CustomCheckProps) {
  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          icon={<EmptyIcon />}
          checkedIcon={<FaCheck size={14} />}
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
      sx={{
        marginLeft: 0,
        gap: 1.5,
        ".MuiFormControlLabel-label": {
          fontWeight: "500",
          marginLeft: "4px",
          color: checked ? "#4f46e5" : "#1f2937",
        },
      }}
    />
  );
}
