import { themeBalham } from 'ag-grid-community';

 export const agGridTheme = themeBalham.withParams({
  accentColor: 'var(--color-secondary)',
  headerBackgroundColor: 'var(--color-accent)',
  headerTextColor: 'var(--color-primary)',
  headerRowBorder: true,
  headerFontSize:13,
  headerColumnBorder:"none",
  headerFontFamily:'sans-serif'
  // rowBorder: { style: 'solid', color: '#9BBCC1' },
  // columnBorder: { style: 'solid', color: '#9BBCC1' },
});
