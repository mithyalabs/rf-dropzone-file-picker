import React from 'react';
import { IFieldProps } from 'react-forms';
export interface IMUIDropFileProps {
    onDropFile: (files: any) => void;
    readAs?: keyof Pick<FileReader, 'readAsBinaryString' | 'readAsDataURL'>;
    multiple?: boolean;
    activeClass?: string;
    label?: string | JSX.Element;
    accept?: string;
    defaultClass?: string;
}
export interface IProps extends IFieldProps {
    fieldProps?: IMUIDropFileProps;
}
export declare const MUIDropFile: React.FC<IProps>;
