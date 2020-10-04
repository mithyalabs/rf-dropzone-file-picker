import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import clsx from 'clsx';
import { FormikValues } from 'formik';
import React from 'react';
import { useDropzone } from 'react-dropzone'
import { IFieldProps, IMUIFileInputProps, MUIFileInput, ReadAsType, setValue } from 'react-forms'


export interface DropFileFieldProps {
	onDropFile: (files: File[]) => void
	multiple?: boolean
	activeClass?: string
	label?: string | JSX.Element
	accept?: string, 
	readAs: ReadAsType
	/* 
	Active class contain rules that will take effect on dragging a file over the area.Eg.: backgroundColor, textColor, etc.,
	defaultClass is for class with rules that will not be affected by dragging a file over the area. Eg.: height, width, border, borderRadius, etc.
	 */
	defaultClass?: string
}
export interface DropFileProps extends IFieldProps {
	fieldProps?: DropFileFieldProps
}

export const MUIDropFile: React.FC<DropFileProps> = (props: DropFileProps) => {
	const classes = useStyles()
	const { fieldProps = {} as DropFileFieldProps, formikProps = {} as FormikValues } = props
	const {
		accept,
		onDropFile,
		multiple = true,
		defaultClass = classes.defaultClass,
		activeClass = classes.activeClass,
		label = "Drag and drop a file/files here",
		readAs, ...rest
	} = fieldProps
	const wrapWith = (input: JSX.Element) => (
		<Box {...getRootProps()} className={clsx(defaultClass, isDragActive ? activeClass : "")}
			display="flex" alignItems="center" justifyContent="center" >
			<Typography>{label}</Typography>
			{input}
		</Box>
	)
	const handleDrop = (files: File[]) => {
		setValue(files, formikProps, fieldProps);
		onDropFile?.(files)
	}
	const onDrop = React.useCallback(handleDrop, [])
	const { isDragActive, getRootProps, getInputProps } = useDropzone({ onDrop })

	return (<>
		<MUIFileInput fieldProps={{ ...rest, multiple, wrapWith, accept, readAs, nativeInputProps: { ...getInputProps() } } as IMUIFileInputProps} formikProps={formikProps} />

	</>
	)
}

const useStyles = makeStyles<Theme>(() => createStyles({
	defaultClass: { border: '1px dashed grey', borderRadius: 8, width: 900, height: 300, background: 'lightgrey', position: 'relative' },
	activeClass: { backgroundColor: 'transparent' }
}))
