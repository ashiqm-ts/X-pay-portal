'use client';
import CardComponent from "@/components/shared-ui/CardDashboard";
import { Box, Grid, Typography } from "@mui/material";
// import Chart from "react-apexcharts";

const cardBoxStyle = {
  backgroundColor: 'var(--color-accent)',
  color: 'var(--color-primary)',
  height: '5rem',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
}
const options: any = {
  chart: {
    id: "basic-bar"
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
}
const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }
]

export default function DashboardPage() {
  return (
    <Box>
      <CardComponent>
        <Grid container spacing={2} justifyContent="center">
          <Grid size={3}>
            <Box sx={cardBoxStyle}>
              <Typography fontWeight="bold">562</Typography>
              <Typography >Card issued today</Typography>
            </Box>
          </Grid>
          <Grid size={3}>
            <Box sx={cardBoxStyle}>
              <Typography fontWeight="bold">2562</Typography>
              <Typography >Card issued today</Typography>
            </Box>
          </Grid>
          <Grid size={3}>
            <Box sx={cardBoxStyle}>
              <Typography fontWeight="bold">1562</Typography>
              <Typography >Card issued today</Typography>
            </Box>
          </Grid>
          <Grid size={3}>
            <Box sx={cardBoxStyle}>
              <Typography fontWeight="bold">2562</Typography>
              <Typography >Card issued today</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardComponent>

      <Grid container spacing={2} justifyContent="center">
        <Grid size={3}>
          <CardComponent sx={{ height: "300px" }}>
            {/* <Chart
    options={options}
    series={series}
    type="line"
    width="500"
  /> */}
          </CardComponent>
        </Grid>
        <Grid size={3}>
          <CardComponent sx={{ height: "300px" }}>
          </CardComponent>
        </Grid>
        <Grid size={3}>
          <CardComponent sx={{ height: "300px" }}>
          </CardComponent>
        </Grid>
        <Grid size={2}>
          <CardComponent sx={{ height: "300px" }}>
          </CardComponent>
        </Grid>
      </Grid>

    </Box>
  );
}
