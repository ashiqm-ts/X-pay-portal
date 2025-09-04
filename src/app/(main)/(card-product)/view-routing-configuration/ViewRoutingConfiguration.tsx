import AgGrid from '@/components/shared-ui/AgGrid';
import CardComponent from '@/components/shared-ui/CardAgGrid';
import { useState } from 'react';

export default function ViewRoutingConfiguration() {
  const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedesdjtjtyjnvbnb', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Mercedes', model: 'EQAfghrhrhfgby', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'model' },
    { field: 'price' },
    { field: 'make' },
    { field: 'model' },
    { field: 'price', resizable: false },
    // { field: "electric" },
  ]);
  return (
    <CardComponent>
      <AgGrid rowData={rowData} columnDefs={colDefs} />
    </CardComponent>
  );
}
