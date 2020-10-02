import React from 'react';
import { IFieldProps } from 'react-forms';
export interface DropFileFieldProps {
    onDropFile: (files: any) => void;
    readAs?: keyof Pick<FileReader, 'readAsBinaryString' | 'readAsDataURL'>;
    multiple?: boolean;
    activeClass?: string;
    label?: string | JSX.Element;
    accept?: string;
    defaultClass?: string;
}
export interface DropFileProps extends IFieldProps {
    fieldProps?: DropFileFieldProps;
}
export declare const MUIDropFile: React.FC<DropFileProps>;
