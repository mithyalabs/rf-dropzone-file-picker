import React from 'react';
import { attachField } from 'react-forms';
import { MUIDropFile } from './MUIDropFile';
export * from './MUIDropFile'

attachField('drop-file', <MUIDropFile />)
