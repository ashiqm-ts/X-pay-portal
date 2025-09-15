import FormikController from '@/components/mui-components/formik-controller/FormikController';
import GridContainer from '@/components/mui-components/grid/GridContainer';
import GridItem from '@/components/mui-components/grid/GridItem';
import AgGrid from '@/components/shared-ui/AgGrid';
import CustomCard from '@/components/shared-ui/CustomCard';
import CustomGrid from '@/components/shared-ui/CustomGrid';
import MuiDialog from '@/components/shared-ui/MuiDialog';
import Header from '@/components/ui/Header';
import { createIssuerConfig, getAllIssuerConfigs, searchIssuerConfig } from '@/config/apiConfig';
import { useDialog } from '@/provider/DialogProvider';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import SearchFieldBox from '@/components/ui/SearchFieldBox';
import { useAuth } from '@/provider/AuthProvider';
import PageTitles from '@/helper-function/pageTitles';

const IssuerConfigurationPage = () => {
  const [rowData, setRowData] = useState([]);
  const { user } = useAuth();
  const [pageControl, setPageControl] = useState({ isOpen: false });
  const { handleResponse } = useDialog();
  const dialogTitle = 'Create Issuer Configuration';

  const columnDefs = [
    {
      field: 'issuerId',
      headerName: 'Issuer ID',
    },
    {
      field: 'issuerName',
      headerName: 'Issuer Name',
    },
    {
      field: 'isInternal',
      headerName: 'Is Internal',
    },

    {
      field: 'bankCode',
      headerName: 'Bank Code',
    },
    {
      field: 'bankEmail',
      headerName: 'Bank Email',
    },

    {
      field: 'bankPhone',
      headerName: 'Bank Phone No',
    },
    {
      field: 'bankAddress',
      headerName: 'Bank Address',
    },

    {
      field: 'settlementCurrency',
      headerName: 'Settlement Currency',
    },
    {
      field: 'status',
      headerName: 'Status',
    },
    {
      field: 'createdAt',
      headerName: 'Created DateTime',
    },
    {
      field: 'updatedAt',
      headerName: 'Modified DateTime',
    },
  ];
  const CreateFormFields = [
    {
      control: 'textField',
      label: 'Issuer Name',
      name: 'issuerName',
      required: true,
    },
    {
      control: 'textField',
      label: 'Bank Code',
      name: 'bankCode',
      required: true,
    },
    {
      control: 'textField',
      label: 'Bank Email',
      name: 'bankEmail',
      required: true,
    },
    {
      control: 'textField',
      label: 'Bank Phone',
      name: 'bankPhone',
      required: true,
    },
    {
      control: 'textField',
      label: 'Bank Address',
      name: 'bankAddress',
      required: true,
    },
    {
      control: 'textField',
      label: 'Settlement Currency',
      name: 'settlementCurrency',
      required: true,
    },

    {
      control: 'switch',
      label: 'Status',
      name: 'status',
      required: false,
    },
    {
      control: 'switch',
      label: 'Is Internal',
      name: 'isInternal',
      required: false,
    },
  ];

  const handleCreate = () => {
    setPageControl((Prev) => ({ ...Prev, isOpen: true }));
  };
  const handleSubmit = async (values: any) => {
    console.log(values);
    const data = {
      issuerName: values.issuerName,
      isInternal: values.isInternal,
      bankCode: values.bankCode,
      bankEmail: values.bankEmail,
      bankPhone: values.bankPhone,
      bankAddress: values.bankAddress,
      settlementCurrency: values.settlementCurrency,
      status: values.status,
    };
    const res = await createIssuerConfig(data);
    if (res.data.responseCode === 0) {
      handleResponse(res.data.data.message, false);
    } else {
      handleResponse(res.data.errors[0].message, true);
    }
    setPageControl((prev) => ({ ...prev, isOpen: false }));
  };
  const initialValues = {
    productCode: '',
    destination: '',
    stepOrder: '',
    externalSystemCode: '',
    targetModule: '',
    isOptional: false,
    declineOnFailure: false,
  };

  const SearchFormFields = [
    {
      control: 'textField',
      label: 'Issuer Name',
      name: 'issuerName',
      required: true,
    },
    {
      control: 'textField',
      label: 'Bank Code',
      name: 'bankCode',
      required: true,
    },
    {
      control: 'textField',
      label: 'Bank Email',
      name: 'bankEmail',
      required: true,
    },
  ];

  const handleSearch = async (values: any) => {
    console.log(values);
    const data = {
      issuerId: values.issuerId,
      issuerName: values.issuerName,
      bankCode: values.bankCode,
      bankEmail: values.bankEmail,
    };

    const res = await searchIssuerConfig(data);
    if (res.data.responseCode === 0) {
      setRowData(res.data.data);
    } else {
      handleResponse(res.data.errors[0].message, true);
    }
    setPageControl((prev) => ({ ...prev, isOpen: false }));
  };

  const getAllGridDetails = async () => {
    const data = { institutionId: user?.institutionId };
    const res = await getAllIssuerConfigs(data);
    if (res.data.responseCode === 0) {
      setRowData(res.data.data);
    } else {
      handleResponse(res.data.errors[0].message, true);
    }
  };
  // useEffect(() => {
  //   getAllGridDetails();
  // }, []);
  return (
    <Box>
      <CustomCard>
        <Header name={PageTitles.issuerConfig} />
        <Box mb={4}>
          <SearchFieldBox SearchFormFields={SearchFormFields} handleSubmit={handleSearch} />
        </Box>
        <CustomGrid
          rowData={rowData}
          columnDefs={columnDefs}
          actionButton={{
            handleActionButton: handleCreate,
            label: 'Create',
          }}
        />
        <Formik initialValues={initialValues} enableReinitialize onSubmit={handleSubmit}>
          {({ resetForm, dirty }) => (
            <MuiDialog width={700} open={pageControl?.isOpen} dialogTitle={dialogTitle} onClose={() => setPageControl((prev) => ({ ...prev, isOpen: false }))}>
              <GridContainer>
                {CreateFormFields.map((item, index) => {
                  const isLastTextField =
                    item.control === 'textField' &&
                    index === CreateFormFields.filter((f) => f.control === 'textField').length - 1 &&
                    CreateFormFields.filter((f) => f.control === 'textField').length % 2 !== 0;
                  return (
                    <React.Fragment key={item.name}>
                      <GridItem key={item.name} lg={6} xs={12}>
                        <FormikController control={item.control} label={item.label} name={item.name} required={item.required} />
                      </GridItem>

                      {isLastTextField && <GridItem lg={6} xs={6} />}
                    </React.Fragment>
                  );
                })}
              </GridContainer>
            </MuiDialog>
          )}
        </Formik>
      </CustomCard>
    </Box>
  );
};
export default IssuerConfigurationPage;
