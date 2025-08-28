import BasicCancelBtn from "@/components/mui-components/button/components/BasicCancelBtn";
import BasicSubmitBtn from "@/components/mui-components/button/components/BasicSubmitBtn";
import IconBtn from "@/components/mui-components/button/components/IconBtn";
import SubmitBtn from "@/components/mui-components/button/components/SubmitBtn";


const MuiButton = (props: any) => {
  const { type, onClick, disabled, children, className, variant, size, isNoDirty, disableIsSubmit, sx, component } = props;
  console.log('disabled', disabled);
  switch (type) {
    case 'submit':
      return (
        <SubmitBtn disabled={disabled} isNoDirty={isNoDirty} className={className} variant={variant} size={size} disableIsSubmit={disableIsSubmit} sx={sx} component={component}>
          {children}
        </SubmitBtn>
      );
    case 'basicSubmit':
      return (
        <BasicSubmitBtn onClick={onClick} disabled={disabled} className={className} variant={variant} size={size}>
          {children}
        </BasicSubmitBtn>
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
