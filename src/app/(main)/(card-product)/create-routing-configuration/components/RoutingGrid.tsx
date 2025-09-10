import React, { memo, useState, useEffect } from 'react';
import { Box, IconButton, useTheme, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FormikController from '@/components/mui-components/formik-controller/FormikController';

type Column = {
  label: string;
  field: string;
  type: 'textField' | 'switch' | 'action';
};

type RoutingGridProps = {
  form: any;
  remove: (index: number) => void;
  columns?: Column[];
  columnWidth?: number;
  rowHeight?: number;
  pageSize?: number; // default 10
};

const DEFAULT_COLUMNS: Column[] = [
  { label: 'Product Code', field: 'productCode', type: 'textField' },
  { label: 'Destination', field: 'destination', type: 'textField' },
  { label: 'Step Order', field: 'stepOrder', type: 'textField' },
  { label: 'External System Code', field: 'externalSystemCode', type: 'textField' },
  { label: 'Target Module', field: 'targetModule', type: 'textField' },
  { label: 'Decline On Failure', field: 'declineOnFailure', type: 'switch' },
  { label: 'Is Optional', field: 'isOptional', type: 'switch' },
  { label: 'Remove', field: 'remove', type: 'action' },
];

const DEFAULT_COLUMN_WIDTH = 160;
const DEFAULT_ROW_HEIGHT = 50;

const GridRow = memo(({ row, rowIndex, columns, columnWidth, remove }: { row: any; rowIndex: number; columns: Column[]; columnWidth: number; remove: (index: number) => void }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        borderBottom: '1px solid #e5e7eb',
        backgroundColor: rowIndex % 2 === 0 ? '#ffffff' : '#f9fafb',
        '&:hover': { backgroundColor: '#f1f5f9' },
        alignItems: 'center',
        minHeight: DEFAULT_ROW_HEIGHT,
      }}
    >
      {columns.map((col) => (
        <Box
          key={col.field}
          sx={{
            flex: `0 0 ${columnWidth}px`,
            px: 3,
            display: 'flex',
            alignItems: 'center',
            borderRight: '1px solid #e5e7eb',
            textAlign: col.type === 'action' ? 'center' : 'left',
          }}
        >
          {col.type === 'action' ? (
            <IconButton color="error" onClick={() => remove(rowIndex)} size="small" aria-label="remove row" sx={{ padding: 0.5 }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          ) : (
            <FormikController control={col.type} name={`routingConfig[${rowIndex}].${col.field}`} />
          )}
        </Box>
      ))}
    </Box>
  );
});

const RoutingGrid: React.FC<RoutingGridProps> = ({ form, remove, columns = DEFAULT_COLUMNS, columnWidth = DEFAULT_COLUMN_WIDTH, pageSize = 10 }) => {
  const theme = useTheme();
  const rows = form?.values?.routingConfig || [];
  const rowCount = rows.length;

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(rowCount / pageSize) || 1;

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [rowCount, totalPages, page]);

  const startIndex = (page - 1) * pageSize;
  const currentRows = rows.slice(startIndex, startIndex + pageSize);

  return (
    <Box
      sx={{
        border: '1px solid #d1d5db',
        borderRadius: 2,
        width: '100%',
        maxHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
    >
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <Box sx={{ minWidth: columns.length * columnWidth, display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              position: 'sticky',
              top: 0,
              zIndex: 10,
              backgroundColor: '#f9fafb',
              borderBottom: '2px solid #cbd5e1',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            }}
          >
            {columns.map((col) => (
              <Box
                key={col.field}
                sx={{
                  flex: `0 0 ${columnWidth}px`,
                  px: 1,
                  py: 1,
                  fontWeight: 600,
                  fontSize: 12,
                  color: '#374151',
                  borderRight: '1px solid #e5e7eb',
                  textAlign: col.type === 'action' ? 'center' : 'left',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {col.label}
              </Box>
            ))}
          </Box>

          {currentRows.length > 0 ? (
            currentRows.map((row: any, rowIndex: number) => (
              <GridRow key={startIndex + rowIndex} row={row} rowIndex={startIndex + rowIndex} columns={columns} columnWidth={columnWidth} remove={remove} />
            ))
          ) : (
            <Box sx={{ textAlign: 'center', py: 2, color: '#9ca3af', fontStyle: 'italic', fontSize: 14 }}>No routing configuration added.</Box>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1,
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.default,
          fontSize: 13,
          color: theme.palette.text.secondary,
        }}
      >
        <span>
          Showing {rowCount > 0 ? startIndex + 1 : 0}–{Math.min(startIndex + pageSize, rowCount)} of {rowCount}
        </span>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button size="small" variant="outlined" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Prev
          </Button>
          <span>
            Page {page} of {totalPages}
          </span>
          <Button size="small" variant="outlined" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RoutingGrid;
