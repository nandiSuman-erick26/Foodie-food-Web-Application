// import React from 'react'

import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select,
} from "@mui/material";


interface DropDownOption {
  value: string | number;
  label: string;
}

interface DynamicDropDownInputProps {
  name: string;
  label: string;
  catagory?: DropDownOption[];
  register: any;
  error?: any;
}

const DynamicDropDownInput = ({
  name,
  label,
  catagory = [],
  register,
  error,
}: DynamicDropDownInputProps) => {
  return (
    <FormControl
      fullWidth
      size="small"
      error={error}
      sx={{
        // container style
        "& .MuiOutlinedInput-root": {
          borderRadius: 3,
          backgroundColor: "#121a1d",
          color: "#fff",
        },
        // target the native select element
        "& .MuiSelect-native": {
          color: "#fff",
          height: 40,
          lineHeight: "20px",
        },
        // style the select element inside
        "& select": {
          padding: "10px",
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
        },
        // style option elements (not perfect cross-browser but helps)
        "& option": {
          backgroundColor: "#1a121d",
          color: "#898989ff",
          padding: "8px",
        },
      }}
    >
      <InputLabel></InputLabel>
      <Select
        native
        {...register(name)}
        input={<OutlinedInput notched={false} />}
        sx={{
          height: 40,
          "& select": {
            padding: "10px",
          },
        }}
      >
        <option
          style={{ color: "#9a9a9a", backgroundColor: "#121a1d" }}
          disabled
          hidden
          value=""
        >
          Select {label}
        </option>
        {catagory?.map((item) => (
          <option
            key={item.value}
            value={item.value}
            style={{
              color: "#717171ff",
              backgroundColor: "#121a1d",
              padding: "8px",
            }}
          >
            {item.label}
          </option>
        ))}
      </Select>

      {error && <FormHelperText>{error?.message}</FormHelperText>}
    </FormControl>
  );
};
//   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magni nemo veniam alias. Ut, atque nisi? Alias neque facilis sapiente sunt fuga! Debitis esse asperiores incidunt doloribus numquam eaque. Laborum.
export default DynamicDropDownInput;
