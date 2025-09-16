import FormikController from "@/components/mui-components/formik-controller/FormikController";
import GridContainer from "@/components/mui-components/grid/GridContainer";
import GridItem from "@/components/mui-components/grid/GridItem";
import CustomCard from "@/components/shared-ui/CustomCard";
import CustomGrid from "@/components/shared-ui/CustomGrid";
import MuiDialog from "@/components/shared-ui/MuiDialog";
import Header from "@/components/ui/Header";
import PageTitles from "@/helper-function/pageTitles";
import { Box, IconButton } from "@mui/material";
import { ICellRendererParams } from "ag-grid-community";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
const RoutingOverrideRulePage = () => {
    const [rowData, setRowData] = useState([]);
    const [pageControl, setPageControl] = useState({ isOpen: false });
    const dialogTitle = 'Create Routing'
    const handleEdit = (row: any) => {
        setPageControl((prev) => ({ ...prev, isEdit: true, isOpen: true }));
    };
    const handleDelete = () => {
        
    };
    const columnDefs = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'institutionId',
            headerName: 'Institution ID',
        },
        {
            field: 'receivingInstitutionId',
            headerName: 'Receiving Institution ID',
        },
        {
            field: "transactionType",
            headerName: "Transaction Type",
        },
        {
            field: "merchantId",
            headerName: "Merchant Id",
        },
        {
            field: "source",
            headerName: "Source",
        },
        {
            field: "destination",
            headerName: "Destination",
        },
        {
            field: "binPattern",
            headerName: "Bin Pattern",
        },
        {
            field: "isIssuer",
            headerName: "Is Issuer",
        },
        {
            field: "status",
            headerName: "Status",
        },
        {
            field: "payeeCode",
            headerName: "Payee Code",
        },
        {
            field: "billerId",
            headerName: "Biller Id",
        },
        {
            field: "msgType",
            headerName: "Message Type",
        },
        {
            field: "priority",
            headerName: "Priority",
        },
        {
            field: "createdBy",
            headerName: "Created By",
        },
        {
            field: 'actions',
            headerName: 'Actions',
            filter: false,
            resizable: false,
            editable: false,
            sortable: false,
            cellRenderer: ActionRenderer,
            cellStyle: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
            cellRendererParams: {
                onEdit: handleEdit,
                onDelete: handleDelete,
            },
        },

    ]
    const CreateFormFields = [
        {
            control: 'textField',
            label: 'Transaction Type',
            name: 'transactionType',
            required: true,
        },
        {
            control: 'textField',
            label: 'Merchant Id',
            name: 'merchantId',
            required: true,
        },
        {
            control: 'textField',
            label: 'Source',
            name: 'source',
            required: true,
        },
        {
            control: 'textField',
            label: 'Destination',
            name: 'destination',
            required: true,
        },
        {
            control: 'textField',
            label: 'BIN Pattern',
            name: 'binPattern',
            required: true,
        },
        {
            control: 'textField',
            label: 'Payee Code',
            name: 'payeeCode',
            required: true,
        },
        {
            control: 'textField',
            label: 'Biller Id',
            name: 'billerId',
            required: true,
        },
        {
            control: 'textField',
            label: 'Message Type',
            name: 'msgType',
            required: true,
        },
        {
            control: 'switch',
            label: 'Is Issuer',
            name: 'isIssuer',
            required: false,
        },
        {
            control: 'switch',
            label: 'Status',
            name: 'status',
            required: false,
        },
    ];

    const handleCreate = () => {
        setPageControl((Prev) => ({ ...Prev, isOpen: true }));
    };
    const initialValues = {
        transactionType: '',
        merchantId: '',
        source: '',
        destination: '',
        binPattern: '',
        payeeCode: '',
        billerId: '',
        msgType: '',
        isIssuer: false,
        status: false,
    };
    const handleSubmit = () => {

    }
    // const getAllRoutingOverride=async()=>{
    //     const res=await axios.get("http://localhost:9091/xpay/routing-engine/routing-override/get-all");
    //     console.log("response",res)
    // }
    // useEffect(()=>{
    //     getAllRoutingOverride();
    // },[]);

    return (
        <Box>
            <CustomCard>
                <Header name={PageTitles.routingOverrideRule} />
                <CustomGrid
                    rowData={rowData}
                    columnDefs={columnDefs}
                    actionButton={{
                        handleActionButton: handleCreate,
                        label: 'Create',
                    }} />

                <Formik initialValues={initialValues} enableReinitialize onSubmit={handleSubmit}>
                    {
                        ({ resetForm, dirty }) => (
                            <MuiDialog width={700} open={pageControl?.isOpen} dialogTitle={dialogTitle} onClose={() => setPageControl((prev) => ({ ...prev, isOpen: false }))}>
                                <GridContainer>
                                    {CreateFormFields.map((item, index) => {
                                        return (
                                            <React.Fragment key={item.name}>
                                                <GridItem key={item.name} lg={6} xs={12}>
                                                    <FormikController control={item.control} label={item.label} name={item.name} required={item.required} />
                                                </GridItem>
                                            </React.Fragment>
                                        );
                                    })}
                                </GridContainer>
                            </MuiDialog>
                        )
                    }


                </Formik>
            </CustomCard>
        </Box>
    );
}
export default RoutingOverrideRulePage;