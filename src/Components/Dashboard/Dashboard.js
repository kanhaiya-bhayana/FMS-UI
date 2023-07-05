import React from 'react'
import styles from './Dashboard.module.css'

export default function Dashboard() {
    return (
        <div className={styles.main}>
            <h1 className='p-4'>Dashboard</h1>
            <div className='row'>
                <div className='col-4 p-2'>
                    <div className="form-group">
                        <label htmlFor="exampleInputFileName" className='p-2'>Filename</label>
                        <input type="text" className="form-control" id="exampleInputFileName" placeholder="Enter file name..." />
                    </div>
                </div>
                <div className='col-4 p-2'>
                    <div className="form-group">
                        <label htmlFor="exampleInputSourcePath" className='p-2'>Source Path</label>
                        <input type="text" className="form-control" id="exampleInputSourcePath" placeholder="Enter source path..." />
                    </div>
                </div>
                <div className='col-4 p-2'>
                    <div className="form-group">
                        <label htmlFor="exampleInputDestinationPath" className='p-2'>Dest Path</label>
                        <input type="text" className="form-control" id="exampleInputDestinationPath" placeholder="Enter destination path..." />
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-4'>
                    <select className="custom-select btn" style={{"margin-top": "45px"}}>
                        <option selected>file type</option>
                        <option value="1">.csv</option>
                        <option value="2">.pdf</option>
                        <option value="3">.docs</option>
                    </select>
                </div>
                <div className='col-4'>
                    <div className="form-group">
                        <label htmlFor="exampleInputVendorName" className='p-2'>Vendor Name</label>
                        <input type="text" className="form-control" id="exampleInputVendorName" placeholder="Enter vendor name..." />
                    </div>
                </div>
                <div className='col-4'>
                <div className="form-group">
                        <label htmlFor="exampleInputVendorName" className='p-2'>Vendor Name</label>
                        <input type="text" className="form-control" id="exampleInputVendorName" placeholder="Enter vendor name..." />
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-4'>
                <div className="form-group">
                        <label htmlFor="exampleInputTemplateDownload" className='p-2'>Template Download</label>
                        <input type="file" className="form-control" id="exampleInputTemplateDownload"  />
                    </div>
                </div>
                <div className='col-4'>
                <div className="form-group">
                        <label htmlFor="exampleInputTemplateUpload" className='p-2'>Template Upload</label>
                        <input type="file" className="form-control" id="exampleInputTemplateUpload"  />
                    </div>
                </div>
                <div className='col-4'>
                <div className="form-group">
                        <label htmlFor="exampleInputSampleSourceFile" className='p-2'>Sample Source File</label>
                        <input type="text" className="form-control" id="exampleInputSampleSourceFile" placeholder="Enter vendor name..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
