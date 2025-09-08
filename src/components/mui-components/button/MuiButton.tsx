import BasicCancelBtn from "@/components/mui-components/button/components/BasicCancelBtn";
import IconBtn from "@/components/mui-components/button/components/IconBtn";
import SubmitBtn from "@/components/mui-components/button/components/SubmitBtn";
import BasicBtn from "@/components/mui-components/button/components/BasicBtn";

const MuiButton = (props: any) => {
  const { type, onClick, disabled, children, className, variant, size, isNoDirty, disableIsSubmit, sx, component } = props;
  console.log('disabled', disabled);
  switch (type) {
    case 'basic-btn':
      return (
        <BasicBtn disabled={disabled} className={className} variant={variant} size={size} sx={sx} component={component} onClick={onClick}>
          {children}
        </BasicBtn>
      );
    case 'submit':
      return (
        <SubmitBtn disabled={disabled}  className={className} variant={variant} size={size} disableIsSubmit={disableIsSubmit} sx={sx} component={component}>
          {children}
        </SubmitBtn>
      );
    case 'cancel-btn':
      return (
        <BasicCancelBtn onClick={onClick} disabled={disabled} className={className} variant={variant} size={size}>
          {children}
        </BasicCancelBtn>
      );
    case 'icon-btn':
        return(
            <IconBtn variant={variant} size={size} disabled={disabled} className={className} onClick={onClick} sx={sx}>
                {children}
            </IconBtn>
        )
    default:
      return null;
  }
};

export default MuiButton;
