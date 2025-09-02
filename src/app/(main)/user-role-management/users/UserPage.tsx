"use client";
import BasicBtn from "@/components/mui-components/button/components/BasicBtn";
import AgGrid from "@/components/shared-ui/AgGrid";
import CardComponent from "@/components/shared-ui/CardAgGrid";
import { Box, IconButton } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useState } from "react";
import type { ICellRendererParams } from 'ag-grid-community';
import MuiDialog from "@/components/shared-ui/MuiDialog";
import MuiButton from "@/components/mui-components/button/MuiButton";

const ActionRenderer = (params: ICellRendererParams & { onEdit: (data: any) => void; onDelete: (data: any) => void }) => {
  const { data, onEdit, onDelete } = params;
  return (
    <Box className="flex justify-center justiffy-around">
      <IconButton onClick={() => onEdit(data)}>
        <EditOutlinedIcon sx={{ fontSize: '18px', color: "var(--color-primary)" }} />
      </IconButton>
      <IconButton onClick={() => onDelete(data)} >
        <DeleteOutlinedIcon sx={{ fontSize: '18px', color: "var(--color-red)" }} />
      </IconButton>
    </Box>
  );
};

export default function UserPage() {
  const [pageControl, setPageControl] = useState({
    isEdit: false,
    isOpen: false,
  });
  const [rowData, setRowData] = useState([
    { roleName: "Admin", loginUsername: "John Smith", userId: 64951, email: "john.smith@gmail.com", userStatusId: 64950, createdDatetime: "August 5,2021", lastUpdatedDatetime: "March 21,2025" },
    { roleName: "User", loginUsername: "Daniel Smith", userId: 64952, email: "john.smith@gmail.com", userStatusId: 64950, createdDatetime: "March 12,2023", lastUpdatedDatetime: "March 12,2025" },
    { roleName: "User", loginUsername: "John warren", userId: 64953, email: "john.smith@gmail.com", userStatusId: 64950, createdDatetime: "March 12,2023", lastUpdatedDatetime: "March 12,2025" },
    { roleName: "Guest", loginUsername: "Mark wilberg", userId: 64954, email: "john.smith@gmail.com", userStatusId: 64950, createdDatetime: "March 12,2023", lastUpdatedDatetime: "March 12,2025" },
    { roleName: "Admin", loginUsername: "John Smith", userId: 64955, email: "john.smith@gmail.com", userStatusId: 64950, createdDatetime: "March 12,2023", lastUpdatedDatetime: "March 12,2025" },
    { roleName: "User", loginUsername: "John Smith", userId: 64956, email: "john.smith@gmail.com", userStatusId: 64950, createdDatetime: "March 12,2023", lastUpdatedDatetime: "March 12,2025" },
    { roleName: "Guest", loginUsername: "John Smith", userId: 64957, email: "john.smith@gmail.com", userStatusId: 64950, createdDatetime: "March 12,2023", lastUpdatedDatetime: "March 12,2025" },
    { roleName: "Moderator", loginUsername: "John Smith", userId: 64958, email: "john.smith@gmail.com", userStatusId: 64950, createdDatetime: "March 12,2023", lastUpdatedDatetime: "March 12,2025" },
   { roleName: "Admin", loginUsername: "John Smith", userId: 64959, email: "john.smith@gmail.com", userStatusId: 64950, createdDatetime: "August 5,2021", lastUpdatedDatetime: "March 21,2025" },
    { roleName: "User", loginUsername: "Daniel Smith", userId: 64962, email: "john.smith@gmail.com", userStatusId: 64950, createdDatetime: "March 12,2023", lastUpdatedDatetime: "March 12,2025" },]);

  const handleEdit = (row: any) => {
    setPageControl((prev) => ({ ...prev, isEdit: true, isOpen: true }));
  };
  const handleDelete = (row: any) => {
    const updatedRow = rowData.filter((item: any) => item.userId !== row.userId);
    setRowData(updatedRow);
  };
  let columnDefs = [
    {
      field: 'userId',
      headerName: 'ID',
    },
    {
      field: 'loginUsername',
      headerName: 'FullName',
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 180,
    
    },
    {
      field: 'roleName',
      headerName: 'Role Name',
    },
    {
      field: 'userStatusId',
      headerName: 'Status',
    },
    {
      field: 'createdDatetime',
      headerName: 'Created DateTime',
    },
    {
      field: 'lastUpdatedDatetime',
      headerName: 'Modified DateTime',
    },
    {
      field: 'action',
      headerName: 'Actions',
      filter: false,
      resizable: false,
      editable: false,
      sortable: false,
      cellRenderer: ActionRenderer,
      cellRendererParams: {
        onEdit: handleEdit,
        onDelete: handleDelete,
      },
    },
  ];

  const handleAdd = (action: any) => {
    console.log(`${action} executed`);
  }
  return (
    <Box>
      <CardComponent>
        <MuiButton type="basic-btn" sx={{ marginBottom: "-40px" }} onClick={() => handleAdd("Add")}>ADD</MuiButton>
        <AgGrid rowData={rowData} columnDefs={columnDefs} />
      </CardComponent>
      {pageControl.isOpen && (
        <>
          <MuiDialog
            open={pageControl.isOpen}
            onClose={() => setPageControl(prev => ({ ...prev, isOpen: false }))}
            width="500px">
          </MuiDialog>

        </>
      )}
    </Box>
  );
}
