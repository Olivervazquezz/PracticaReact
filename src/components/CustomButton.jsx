import { Button } from "@mui/material";

const CustomButton = ({ children, ...props }) => {
  return <Button variant="outlined" color="secondary" {...props}>{children}</Button>;
};

export default CustomButton;
