import { Grid } from '@mui/material';
import { ReactNode } from 'react';

type GridContainerProps = {
  children: ReactNode;
  spacing?: number;
};

const GridContainer: React.FC<GridContainerProps> = ({ children, spacing = 2, ...rest }) => {
  return (
    <Grid container spacing={spacing} {...rest}>
      {children}
    </Grid>
  );
};

export default GridContainer;
