import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import clsx from 'clsx';
import { FormikValues } from 'formik';
import React from 'react';
import { useDropzone } from 'react-dropzone'
import { IFieldProps, IMUIFileInputProps, MUIFileInput, TFile, ReadAsType, setValue, processFilesWithCallback } from 'react-forms'



export interface DropFileFieldProps {
	onDropFile?: (imgFiles: TFile[], remFiles?: File[]) => void
	loadFile?: (files: File[]) => Promise<File[]>
	readAs?: ReadAsType
	multiple?: boolean
	label?: string | JSX.Element
	accept?: string
	encoding?: string
	activeClass?: string
	defaultClass?: string
	/* 
	Active class contain rules that will take effect on dragging a file over the area.Eg.: backgroundColor, textColor, etc.,
	defaultClass is for class with rules that will not be affected by dragging a file over the area. Eg.: height, width, border, borderRadius, etc.
	 */
	fullWidth?: boolean
	acceptedFileArea?: string
	renderAccepted?: (files: File[]) => JSX.Element
}
export interface DropFileProps extends IFieldProps {
	fieldProps?: DropFileFieldProps
}

export const MUIDropFile: React.FC<DropFileProps> = (props: DropFileProps) => {
	const { fieldProps = {} as DropFileFieldProps, formikProps = {} as FormikValues } = props
	const classes = useStyles(fieldProps)
	const [files, setFiles] = React.useState<File[]>([])
	const handleDisplay = (files: File[]) => {
		console.log(files)
		return <Box display="flex" flexDirection='column' alignItems="center" justifyContent="center">{files.map((file: File, index: number) =>
			<Box className={classes.acceptedFile} m={1} p={2} key={file.name + index}>{file.name}</Box>)}</Box>
	}

	const {
		accept,
		onDropFile,
		multiple = true,
		defaultClass = classes.defaultClass,
		activeClass = classes.activeClass,
		label = "Drag and drop a file/files here",
		readAs,
		loadFile,
		encoding = 'utf-8',
		renderAccepted = handleDisplay,
		fullWidth = true,
		acceptedFileArea,
		...rest
	} = fieldProps
	const wrapWith = (input: JSX.Element) => (
		<Box display="flex" alignItems="center" justifyContent="center" minWidth={700} width={fullWidth ? '100%' : 600}>
			<Box m={2} {...getRootProps()} className={clsx(defaultClass, isDragActive ? activeClass : "")}
				display="flex" alignItems="center" justifyContent="center" >
				<Typography>{label}</Typography>
				{input}
			</Box>
			<Box width={300} className={acceptedFileArea}>
				{renderAccepted(files)}
			</Box>
		</Box>
	)
	const handleDrop = async (files: File[]) => {
		if (loadFile) {
			const res = await loadFile?.(files)
			setFiles(res)
			setValue(res, formikProps, fieldProps)
			return
		}
		setValue(files, formikProps, fieldProps);
		processFilesWithCallback(files, (prop: { imgs: TFile[], rem: any[] }) => {
			const { imgs, rem } = prop
			onDropFile?.(imgs, rem)
			setFiles(rem.concat(imgs as unknown as File[]))
		}, readAs, encoding)

	}


	const onDrop = React.useCallback(handleDrop, [])
	const { isDragActive, getRootProps, getInputProps } = useDropzone({ onDrop })

	return (
		<MUIFileInput fieldProps={{ ...rest, multiple, wrapWith, accept, readAs, nativeInputProps: { ...getInputProps() } } as IMUIFileInputProps} formikProps={formikProps} />
	)
}


const useStyles = makeStyles<Theme, Pick<DropFileFieldProps, 'fullWidth'>>((theme) => {
	return (createStyles({
		defaultClass: {
			border: '1px dashed grey', borderRadius: 8, minWidth: 400, height: 300, background: 'lightgrey', position: 'relative', flex: 1,
		},
		activeClass: { backgroundColor: 'transparent' },
		acceptedFile: { background: 'lightgrey', border: '1px dashed grey', margin: theme.spacing(1), padding: theme.spacing(1), minWidth: 200 }
	}))
})