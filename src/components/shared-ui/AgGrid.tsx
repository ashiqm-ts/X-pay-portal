import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry, SizeColumnsToContentStrategy, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy, Theme, themeBalham, themeQuartz } from 'ag-grid-community';
import { useCallback, useMemo, useRef } from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeBalham.withParams({
    // spacing: 12,
    accentColor: 'var(--color-secondary)',
    // headerTextColor: '#2A4947',
    headerBackgroundColor: '#9BBCC1',
    headerRowBorder: true,
    rowBorder: { style: 'solid', color: '#9BBCC1' },
    columnBorder: { style: 'solid', color: '#9BBCC1' },
});

const AgGrid: React.FC<any> = (props) => {
    const {leftActionButton}=props;
    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%", marginTop: "6px", className: "border border-[var(--color-secondary)] rounded-md" }), []);
    const defaultColDef = {
        // filter: true,
        resizable: true,
        sortable: true,
        WrapText: true,
        minWidth: 100,
        maxWidth: 800,
        flex: 1,
        headerStyle: { fontSize: '12px' },
        headerClass: 'custom-header-center',
        // cellStyle: { textAlign: "left", paddingTop: "5px" }
        cellStyle: (params: any) => {
            const isNumber = typeof params.value === 'number';
            return {
                textAlign: isNumber ? 'right' : 'left',
                paddingTop: '5px',
            };
        },
    }

    const theme = useMemo<Theme | "legacy">(() => {
        return myTheme;
    }, []);
    const gridRef = useRef<AgGridReact>(null);
    const pagination = true;

    const paginationPageSize = 10;

    const paginationPageSizeSelector = [10, 20, 50, 100];

    const autoSizeStrategy = useMemo<
        | SizeColumnsToFitGridStrategy
        | SizeColumnsToFitProvidedWidthStrategy
        | SizeColumnsToContentStrategy
    >(() => {
        return {
            type: "fitCellContents",
            defaultMaxWidth: 800,
            defaultMinWidth: 100,
        };
    }, []);

//     const autoSizeAll = useCallback((skipHeader: boolean) => {
//     const colIds: string[] = [];
//     gridRef.current!.api.getColumns()!.forEach((column) => {
//       colIds.push(column.getId());
//     });
//     gridRef.current!.api.autoSizeColumns({
//       colIds,
//       skipHeader,
//       defaultMaxWidth: 150,
//       defaultMinWidth: 80,
//     });
//   }, []);
    const onFilterTextChanged = useCallback(() => {
        gridRef.current!.api.setGridOption(
            "quickFilterText",
            (document.getElementById("filter-text-box") as HTMLInputElement).value,
        );
    }, []);
    return (
        <div style={containerStyle}>
            <div className="flex justify-between items-center">
                {leftActionButton ?? <div/>}
            <div className="flex justify-end text-right gap-2">
                <span className="text-[#538890] text-[14px]">Quick Search</span>
                <input type="text" placeholder="Search...." id="filter-text-box" onInput={onFilterTextChanged}
                    className="border border-[var(--color-secondary)] text-[14px] focus:outline-none focus:border-[var(--color-secondary)] hover:border-[var(--color-secondary)]" />
            </div>
            </div>
            <div style={gridStyle}>
                <AgGridReact
                    ref={gridRef}
                    defaultColDef={defaultColDef}
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                    theme={theme}
                    rowHeight={35}
                    headerHeight={35}
                    domLayout="autoHeight"
                    autoSizeStrategy={autoSizeStrategy}
                    overlayNoRowsTemplate="No Rows To Show"
                    suppressDragLeaveHidesColumns
                    suppressSizeToFit
                    {...props}
                />
            </div>
        </div>
    );
}
export default AgGrid;