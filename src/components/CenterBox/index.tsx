import { Box } from "@mui/material";

type BoxChildType = {
  children: React.ReactNode;
  gap?: string;
  flexDirection?: 'column' | undefined;
};

function CenterBox({ children, gap, flexDirection }: BoxChildType) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection={flexDirection}
      gap={gap}
      alignItems="center"
    >
      {children}
    </Box>
  );
}

export default CenterBox;
