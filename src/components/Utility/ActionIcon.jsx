import { Tooltip } from "@mui/material";
import React from "react";
import CustomButton from "./Button";

const CustomButtonButton = React.forwardRef(function ForwardRef(props, ref) {
  return <CustomButton ClickEvent={props.onClick} parentProps={props} innerRef={ref} isLink={props.isRedirected} iconName={props.icon} noClass noIconMargin path={props.path} />;
});

function ActionIcon({ remove, edit, disable, detailpath, detailClick, detail, deletePath, onDeleteClick, onEditClick, approvePath, rejectPath, onApproveClick, onRejectClick, Uniquekey, approve, decline, onClick, editPath = "/", isRedirected }) {
  // console.log(edit, editPath, onEditClick);
  return (
    <ul className="d-flex align-items-center gap-2 add-delete-icon" key={Uniquekey}>
      {disable && (
        <li>
          <Tooltip title="Disable" placement="top" arrow>
            <CustomButtonButton icon="fa-solid fa-ban" />
          </Tooltip>
        </li>
      )}
      {detail && (
        <li>
          <Tooltip title="Detail" placement="top" arrow>
            <CustomButtonButton click={detailClick} icon="ion-information" path={detailpath} />
          </Tooltip>
        </li>
      )}
      {edit && (
        <li>
          <Tooltip title="Edit" placement="top" arrow>
            <CustomButtonButton onClick={onEditClick} isRedirected={isRedirected} icon="ion-edit" path={editPath == "/" ? null : editPath} />
          </Tooltip>
        </li>
      )}
      {remove && (
        <li>
          <Tooltip title="Delete" placement="top" arrow>
            <CustomButtonButton icon="ion-close-circled" isRedirected={isRedirected} onClick={onDeleteClick} path={deletePath == "/" ? null : deletePath} />
          </Tooltip>
        </li>
      )}
      {approve && (
        <li>
          <Tooltip title="Approve" placement="top" arrow>
            <CustomButtonButton icon="fa-solid fa-thumbs-up" isRedirected={isRedirected} path={approvePath == "/" ? null : approvePath} onClick={onApproveClick} />
          </Tooltip>
        </li>
      )}
      {decline && (
        <li>
          <Tooltip title="Decline" placement="top" arrow>
            <CustomButtonButton icon="fa-solid fa-thumbs-down" isRedirected={isRedirected} path={rejectPath == "/" ? null : rejectPath} onClick={onRejectClick} />
          </Tooltip>
        </li>
      )}
    </ul>
  );
}

export default ActionIcon;
