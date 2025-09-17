type DropdownItem = Record<string, any>;

interface DropdownOptionsParams {
  items?: DropdownItem[];
  labelKey: string;
  valueKey?: string;
  mode?: 'default' | 'combo' | 'custom';
}

export const selectMenuItem = ({ items = [], labelKey, valueKey, mode = 'default' }: DropdownOptionsParams) => {
  return items.filter(Boolean).map((item) => {
    let label: any;
    let value: any;

    switch (mode) {
      case 'combo':
        label = labelKey && valueKey ? `${item[valueKey]} - ${item[labelKey]}` : item;
        value = valueKey ? item[valueKey] : item;
        break;

      default:
        label = labelKey ? item[labelKey] : item;
        value = valueKey ? item[valueKey] : item;
        break;
    }

    return { label, value };
  });
};

// optionsList: selectMenuItem({
//         items: dropdownData,
//         labelKey: 'label',
//         valueKey: 'name',
//       }),
