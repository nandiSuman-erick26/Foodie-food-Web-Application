import { Box, TextField } from "@mui/material";
// import React from "react";

const DynamicInput = ({
  lebel,
  name,
  type,
  register,
  multiline,
  rows,
  error,
  placeholder,
}: any) => {
  return (
    <Box>
      <TextField
        name={name}
        placeholder={placeholder}
        lebel={lebel}
        type={type}
        multiline={multiline}
        rows={rows}
        {...register(name)}
        helperText={error}
        error={error}
        fullWidth
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            backgroundColor: "#121a1d",
            color: "#fff",
          },
        }}
      />
      {/* {error && <span>{error.message}</span>} */}
    </Box>
  );
};

export default DynamicInput;
{
  /* <div>
  <label>{lebel}</label>
  <input type={type} id={name} placeholder={placeholder} {...register(name)} />
</div>; */
}
