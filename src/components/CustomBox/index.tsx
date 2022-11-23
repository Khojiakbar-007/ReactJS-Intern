import { Box } from "@mui/material";

type BoxChildType = {
  children: React.ReactNode;
  gap?: string;
  flexDirection?: "column";
  justifyContent?: "flex-start" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "flex-end" | "center";
  className?: string;
};

function CustomBox({
  children,
  gap,
  flexDirection,
  justifyContent,
  alignItems,
  className,
}: BoxChildType) {
  return (
    <Box
      className={className}
      display="flex"
      justifyContent={justifyContent || "space-between"}
      flexDirection={flexDirection}
      gap={gap}
      alignItems={alignItems || "center"}
    >
      {children}
    </Box>
  );
}

export default CustomBox;
