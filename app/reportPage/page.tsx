'use client'
import React, { useRef, useState } from 'react'
import { MaxWidthWrapper } from '../components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import ReportComponent from '../components/ReportComponent'
import ValueAssesment from '../components/ValueAssesment'
import ValueAssesmentTable from '../components/Tables/ValueAssesmentTable'
import ReportComponentPage2 from '../components/ReportComponentPage2'


const page = () => {
  const [loader,setLoader] = useState(false)
  const reportRef=useRef(null)
  const tableRef=useRef(null)
  const downloadPDF = async () => {
    const capture = reportRef.current as unknown as HTMLElement;
    setLoader(true)
     try {
      const canvas = await html2canvas(capture, {scale: 3})
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'px', 'a4', true)
      const margin = 15; // Define margin size
      const pageWidth = pdf.internal.pageSize.getWidth() - (margin * 2); 
      const pageHeight = pdf.internal.pageSize.getHeight() - (margin * 2); 
      const width = pageWidth;
      const height = (canvas.height * width) / canvas.width; 
      const finalHeight = height > pageHeight ? pageHeight : height;
      pdf.addImage(imgData, 'PNG', margin, margin, width, finalHeight, '', 'FAST');

      {/*Adding page two */}


      pdf.addPage()
      const tableCapture = tableRef.current as unknown as HTMLElement;
      const tableCanvas = await html2canvas(tableCapture, {scale: 3})
      const tableImgData = tableCanvas.toDataURL('image/png')
      const widthPage2=pageWidth
      const heightPage2 = (tableCanvas.height * widthPage2) / tableCanvas.width;
      const finalHeightPage2 = heightPage2 > pageHeight ? pageHeight : heightPage2;
      pdf.addImage(tableImgData, 'PNG', margin, margin, widthPage2, finalHeightPage2, '', 'FAST');
      pdf.save('report.pdf')
      setLoader(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MaxWidthWrapper className=' mx-auto'>
      <div ref={reportRef} className=' mb-5'>
      <ReportComponent/>
      </div>

       <div ref={tableRef}>
        <ReportComponentPage2/>
       </div>

      <Button className='mt-5' onClick={downloadPDF}
      disabled={!(loader===false)}
      >
      {
        loader ? 'Loading...' : 'Download Report'
      }
      </Button>
    </MaxWidthWrapper>
  )
}

export default page