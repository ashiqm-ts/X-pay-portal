"use client";
import AgGrid1 from "@/components/shared-ui/AgGrid1";
import CardComponent from "@/components/shared-ui/CardAgGrid";
import { Box, Grid, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import type { ICellRendererParams } from 'ag-grid-community';
import MuiDialog from "@/components/shared-ui/MuiDialog";
import { Formik } from "formik";
import FormikController from "@/components/mui-components/formik-controller/FormikController";
import MuiButton from "@/components/mui-components/button/MuiButton";

const ActionRenderer = (params: ICellRendererParams & { onEdit: (data: any) => void; onDelete: (data: any) => void }) => {
  const { data, onEdit, onDelete } = params;
  return (
    <Box className="flex justify-center justiffy-around">
      <IconButton onClick={() => onEdit(data)}>
        <EditIcon sx={{ fontSize: '18px', color: "var(--color-primary)" }} />
      </IconButton>
      <IconButton onClick={() => onDelete(data)} >
        <DeleteIcon sx={{ fontSize: '18px', color: "var(--color-primary)" }} />
      </IconButton>
    </Box>
  );
};
const ViewRenderer = ( ) => {
  // const { data, onEdit, onDelete } = params;
  return (
    <Box >
      {/* <button>View</button> */}
      <MuiButton type="grid-btn">View</MuiButton>
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
       cellStyle: { textAlign: 'left' },
    },
    {
      field: 'loginUsername',
      headerName: 'FullName',
    },
    {
      field: 'email',
      headerName: 'Email',
      // minWidth: 180,

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
      cellStyle: { display: 'flex', justifyContent: 'center', alignItems: 'center'},
      cellRendererParams: {
        onEdit: handleEdit,
        onDelete: handleDelete,
      },
    },
    {
      field: 'button',
      headerName: 'User Detail',
      filter: false,
      resizable: false,
      editable: false,
      sortable: false,
      cellStyle: { display: 'flex', justifyContent: 'center', alignItems: 'center'},
      cellRenderer: ViewRenderer,
    },
  ];

  const handleAdd = () => {
    setPageControl((prev) => ({ ...prev, isEdit: false, isOpen: true }));
  }
  const initialValues = {

  }
  const handleSubmit = () => {

  }
  return (
    <Box>
      <CardComponent>
        <AgGrid1 rowData={rowData} columnDefs={columnDefs} 
        actionButton={{
            handleActionButton: handleAdd,
            label:'Add'
          }}
          // leftActionButton={
          // <MuiButton type="basic-btn" onClick={handleAdd}>Add</MuiButton>}
        />
      </CardComponent>
      {pageControl.isOpen && (
        <>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <MuiDialog
              open={pageControl.isOpen}
              onClose={() => setPageControl(prev => ({ ...prev, isOpen: false }))}
              width="700px"
              dialogTitle={pageControl.isEdit ? "Edit User" : "Add User"}
              >   
              <Grid container spacing={3} justifyContent="center">
                <Grid size={{ xs: 6 }}>
                  <FormikController
                    control="textField"
                    label="User Name"
                    name="userName"
                    required
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <FormikController
                    control="textField"
                    label="User Name"
                    name="userName"
                    required
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <FormikController
                    control="textField"
                    label="User Name"
                    name="userName"
                    required
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <FormikController
                    control="textField"
                    label="User Name"
                    name="userName"
                    required
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <FormikController
                    control="textField"
                    label="User Name"
                    name="userName"
                    required
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <FormikController
                    control="textField"
                    label="User Name"
                    name="userName"
                    required
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <FormikController
                    control="textField"
                    label="User Name"
                    name="userName"
                    required
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <FormikController
                    control="textField"
                    label="User Name"
                    name="userName"
                    required
                  />
                </Grid>
              </Grid>
            </MuiDialog>
          </Formik>
        </>
      )}
    </Box>
  );
}
