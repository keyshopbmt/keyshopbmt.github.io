import * as React from "react";
import PropTypes from "prop-types";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useUpdateMany, useNotify, useUnselectAll, Button } from "react-admin";

const ResetViewsButton = ({ resource, selectedIds, crudUpdateMany }) => {
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const [updateMany, { loading }] = useUpdateMany(
    resource,
    selectedIds,
    { views: 0 },
    {
      action: crudUpdateMany,
      onSuccess: () => {
        notify(
          "ra.notification.updated",
          "info",
          { smart_count: selectedIds.length },
          true
        );
        unselectAll(resource);
      },
      onFailure: (error) =>
        notify(
          typeof error === "string"
            ? error
            : error.message || "ra.notification.http_error",
          "warning"
        ),
      undoable: true,
    }
  );

  return (
    <Button
      label="simple.action.resetViews"
      disabled={loading}
      onClick={updateMany}
    >
      <VisibilityOff />
    </Button>
  );
};

ResetViewsButton.propTypes = {
  basePath: PropTypes.string,
  label: PropTypes.string,
  resource: PropTypes.string.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ResetViewsButton;
