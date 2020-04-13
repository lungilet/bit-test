export interface DefaultSettings {

    name?: string;
    title?: string;
    type?: string;
    color?: string;
    rounded?: boolean;
    outline?: boolean;
    id: string;
    gradient?: string;
    size?: string;
    showIcon?: boolean;
    icon?: string;
    showSpinner?: boolean;
    spinnerColor?: string;
    spinnerType?: string;
    floating?: boolean;
    autoClose?: boolean;
    dropup?: boolean;
    dropupDefault?: boolean;
    dynamicPosition?: boolean;
    isOpen?: boolean;
    placement?: string;
    triggers?: string;
    formControlName?: any;
    className?: string;
    inputBlockClass?: string;
    placeholder?: string;
    label?: string;
    block?: boolean;
    linkUrl?: string;
    showLink?: boolean;
    linkTitle?: string;
    description?: string;
    disabledBtn?: boolean;
    multiple?: boolean;
    highlightFirst?: boolean;
    filterEnabled?: boolean; /** For the search inside the Select COmponent */
    showDropupBtn?: boolean;
    inline?: boolean;
    indeterminate?: boolean;
    checked?: boolean;
    highlightTextColor?: boolean;
    notFoundMsg?: string;
    filterPlaceholder?: string;
    highlightColor?: string;
    allowClear?: boolean;
    filledIn?: boolean;
    showiconBtn?: boolean; /** this option is for Buttons: to show only the Icon with the heading */
    value?: boolean; /** this is more for radio button, if you want to set the value using variable instead of Form Control */
    showSpinnerOnly?: boolean; /** for the loader/spinner */
    mandotoryField?: boolean;
    showDivider?: boolean;
    showHeading?: boolean;
}
