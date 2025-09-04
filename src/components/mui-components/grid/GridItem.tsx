import { Grid } from '@mui/material';
import { ReactNode } from 'react';

type GridItemProps = {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

const GridItem: React.FC<GridItemProps> = ({ children, xs , sm, md, lg, xl, ...rest }) => {
  return (
    <Grid size={{ xs: xs, sm: sm, md: md, lg: lg }} {...rest}>
      {children}
    </Grid>
  );
};

export default GridItem;
