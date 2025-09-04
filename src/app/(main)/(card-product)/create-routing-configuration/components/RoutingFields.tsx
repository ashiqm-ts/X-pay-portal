import FormikController from '@/components/mui-components/formik-controller/FormikController';
import GridContainer from '@/components/mui-components/grid/GridContainer';
import GridItem from '@/components/mui-components/grid/GridItem';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';


const RoutingFields = ({ form, remove }: { form: any; remove: any }) => {
  return (
    <Box>
      {form.values.routingConfig?.map((_: any, index: number) => (
        <Box key={index} mb={2} p={2} border={1} borderRadius={2} borderColor="grey.300" position="relative" overflow="visible">
          <IconButton
             
            // onClick={() => remove(index)}
            size="small"
            sx={{
              position: 'absolute',
              top: -12,
              right: -12,
              backgroundColor: 'white',
              border: '1px solid #e0e0e0',
              '&:hover': { backgroundColor: 'red', color: 'white' },
              borderRadius: '50%',
              boxShadow: 1,
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          <GridContainer spacing={2}>
            <GridItem lg={3} md={6}>
              <FormikController control="textField" name={`routingConfig[${index}].productCode`} label="Product Code" />
            </GridItem>
            <GridItem lg={3} md={6}>
              <FormikController control="textField" name={`routingConfig[${index}].destination`} label="Destination" />
            </GridItem>
            <GridItem lg={3} md={6}>
              <FormikController control="textField" name={`routingConfig[${index}].stepOrder`} label="Step Order" />
            </GridItem>
            <GridItem lg={3} md={6}>
              <FormikController control="textField" name={`routingConfig[${index}].externalSystemCode`} label="External System Code" />
            </GridItem>
            <GridItem lg={3} md={6}>
              <FormikController control="textField" name={`routingConfig[${index}].targetModule`} label="Target Module" />
            </GridItem>
            <GridItem lg={3} md={6}>
              <FormikController control="switch" name={`routingConfig[${index}].declineOnFailure`} label="Decline On Failure" />
            </GridItem>
            <GridItem lg={3} md={6}>
              <FormikController control="switch" name={`routingConfig[${index}].isOptional`} label="Is Optional" />
            </GridItem>
          </GridContainer>
        </Box>
      ))}
    </Box>
  );
};

export default RoutingFields;
