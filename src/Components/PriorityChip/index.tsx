import { Chip } from "@mui/material";
import { useCallback } from "react";

const PriorityChip = ({ priorityLevel }: { priorityLevel: string }) => {
  const getPriorityColor = useCallback(() => {
    if (priorityLevel === "High") {
      return "error";
    }
    if (priorityLevel === "Medium") {
      return "warning";
    }
    return "info";
  }, [priorityLevel]);

  return <Chip label={priorityLevel} color={getPriorityColor()} />;
};

export { PriorityChip };
