'use client';
import { convertFileToUrl } from '@/lib/utils';
import Image from 'next/image';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type FilesUploadProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
}

const FieldUploader = ({ files, onChange}: FilesUploadProps) => {
  const onDrop = useCallback((acceptedFiles: File[] )=> {
    onChange(acceptedFiles)
  }, [])
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()} className='file-upload'>
      <input {...getInputProps()} />
      {
        files && files?.length > 0 ? (
          <Image 
            src={convertFileToUrl(files[0])} 
            alt='uploaded file' 
            width={1000} 
            height={1000} 
            className='max-h-[400px] overflow-hidden object-cover'
          />
        ) : (
          <>
            <Image 
              src='/assets/icons/upload.svg' 
              alt='upload icon' 
              width={40} 
              height={40} 
              className='max-h-[400px] overflow-hidden object-cover'
            />
            <div className='file-upload_label'>
              <p className='text-14-regular'>
                <span className='text-green-500'>Click to upload</span> or drag and drop your file
              </p>
              <p>SVG, PNG, JPG or GIF (max 800x400)</p>
            </div>
          </>
        )
      }
    </div>
  )
}

export default FieldUploader