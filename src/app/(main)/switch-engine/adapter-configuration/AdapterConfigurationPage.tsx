import FormikController from "@/components/mui-components/formik-controller/FormikController";
import GridContainer from "@/components/mui-components/grid/GridContainer";
import GridItem from "@/components/mui-components/grid/GridItem";
import CustomCard from "@/components/shared-ui/CustomCard";
import CustomGrid from "@/components/shared-ui/CustomGrid";
import MuiDialog from "@/components/shared-ui/MuiDialog";
import Header from "@/components/ui/Header";
import PageTitles from "@/helper-function/pageTitles";
import { Box } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";


const AdapterConfigurationPage = () => {
    const [rowData, setRowData] = useState([]);
    const [pageControl, setPageControl] = useState({ isOpen: false });
    const dialogTitle = 'Add Adapter Configuration'
    
    const columnDefs = [
        {
            field: 'adapterType',
            headerName: 'Adapter Type',
        },
        {
            field: 'adapterName',
            headerName: 'Adapter Name',
        },
        {
            field: 'serviceName',
            headerName: 'Service Name',
        },
        {
            field: "protocol",
            headerName: "Protocol",
        },
        {
            field: "tlsProfile",
            headerName: "tls Profile",
        },
        {
            field: "authorityOverride",
            headerName: "Authority Override",
        },
        {
            field: "serviceIdentity",
            headerName: "Service Identity",
        },
        {
            field: "tlsEnabled",
            headerName: "tls Enabled",
        },
        {
            field: "status",
            headerName: "Status",
        },
    ]
    const CreateFormFields = [
        {
            control: 'select',
            label: 'Adapter Type',
            name: 'adapterType',
            required: true,
        },
        {
            control: 'textField',
            label: 'Adapter Name',
            name: 'adapterName',
            required: true,
        },
        {
            control: 'textField',
            label: 'Service Name',
            name: 'serviceName',
            required: true,
        },
        {
            control: 'textField',
            label: 'Authority Override',
            name: 'authorityOverride',
            required: true,
        },
        {
            control: 'textField',
            label: 'Service Identity',
            name: 'serviceIdentity',
            required: true,
        },
        {
            control: 'textField',
            label: 'tls Profile',
            name: 'tlsProfile',
            required: true,
        },
        {
            control: 'switch',
            label: 'tls Enabled',
            name: 'tlsEnabled',
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
        adapterType: '',
        adapterName: '',
        serviceName: '',
        protocol: '',
        tlsProfile: '',
        serviceIdentity: '',
        tlsEnabled: false,
        status: false,
    };
    const handleSubmit = () => {

    }
    // const getAllRoutingOverride=async()=>{
    //     const res=await axios.post("http://localhost:8080/adapterConfig/create");
    //     console.log("response",res)
    // }
    // useEffect(()=>{
    //     getAllRoutingOverride();
    // },[]);

    return (
        <Box>
            <CustomCard>
                <Header name={PageTitles.adapterConfig} />
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
export default AdapterConfigurationPage;