import BasicCancelBtn from "@/components/mui-components/button/components/BasicCancelBtn";
import IconBtn from "@/components/mui-components/button/components/IconBtn";
import SubmitBtn from "@/components/mui-components/button/components/SubmitBtn";
import BasicBtn from "@/components/mui-components/button/components/BasicBtn";
import GridBtn from "@/components/mui-components/button/components/GridBtn";

const MuiButton = (props: any) => {
  const { type, onClick, disabled, children, className, variant, size, isNoDirty, disableIsSubmit, sx, component } = props;
  switch (type) {
    case 'submit':
      return (
        <SubmitBtn disabled={disabled} className={className} variant={variant} size={size} disableIsSubmit={disableIsSubmit} sx={sx} component={component} isNoDirty={isNoDirty}>
          {children}
        </SubmitBtn>
      );
    case 'basic-btn':
      return (
        <BasicBtn disabled={disabled} className={className} variant={variant} size={size} sx={sx} component={component} onClick={onClick}>
          {children}
        </BasicBtn>
      );
    case 'cancel-btn':
      return (
        <BasicCancelBtn onClick={onClick} disabled={disabled} className={className} variant={variant} size={size}>
          {children}
        </BasicCancelBtn>
      );
     case 'grid-btn':
      return (
        <GridBtn onClick={onClick} disabled={disabled} className={className} variant={variant} size={size}>
          {children}
        </GridBtn>
      );
    case 'icon-btn':
      return (
        <IconBtn variant={variant} size={size} disabled={disabled} className={className} onClick={onClick} sx={sx}>
          {children}
        </IconBtn>
      );
    default:
      return null;
  }
};

export default MuiButton;
