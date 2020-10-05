import React from 'react';
import { IFieldProps, ReadAsType } from 'react-forms';
export interface DropFileFieldProps {
    onDropFile?: (files: File[]) => void;
    multiple?: boolean;
    activeClass?: string;
    label?: string | JSX.Element;
    accept?: string;
    readAs?: ReadAsType;
    defaultClass?: string;
    fullWidth?: boolean;
}
export interface DropFileProps extends IFieldProps {
    fieldProps?: DropFileFieldProps;
}
export declare const MUIDropFile: React.FC<DropFileProps>;
