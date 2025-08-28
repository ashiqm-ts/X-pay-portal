import { Card } from "@mui/material";

const CardComponent:React.FC<any>=(props)=>{
    const {children,...rest}=props
    return(
        <Card variant="outlined" sx={{width: 'auto',padding: 4,m: 4,borderRadius: 0, minHeight: '150px'}} {...rest}>
            {children}
        </Card>
    );
}
export default CardComponent;