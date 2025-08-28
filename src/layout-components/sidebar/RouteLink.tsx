import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import PreviewIcon from "@mui/icons-material/Preview";

type LinkProps = {
  children ?: {  name: string; to: string; icon: React.ReactNode }[] | [];
  label:string,
  name?: string;
  icon?: React.ReactNode;
  to?: string;
}[];

export const Links : LinkProps= [
    {
        label: "Dashboard",
        icon: <CreditCardIcon />,
        to: "/dashboard",
    },
    {
        label: "Card Products",
        icon: <CreditCardIcon />,
        to: "/card-product",
        children: [
            {
                name: "Create Card Products",
                to: "/card-product/create-card-product",
                icon: <AddCardIcon />,
            },
            {
                name: "View Card Products",
                to: "/card-product/view-card-products",
                icon: <PreviewIcon />,
            },
        ],
    },
];