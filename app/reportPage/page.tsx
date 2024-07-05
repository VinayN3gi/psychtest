'use client'
import React, { useRef, useState } from 'react'
import { MaxWidthWrapper } from '../components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import ReportComponent from '../components/ReportComponent'


const page = () => {
  const [loader,setLoader] = useState(false)
  const reportRef=useRef(null)
  const downloadPDF = async () => {
    const capture = reportRef.current as unknown as HTMLElement;
    setLoader(true)

    try {
      const canvas = await html2canvas(capture, {scale: 3})
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'px', 'a4', true)
      const margin = 15; // Define margin size
      const pageWidth = pdf.internal.pageSize.getWidth() - (margin * 2); // Calculate new width with margins
      const pageHeight = pdf.internal.pageSize.getHeight() - (margin * 2); // Calculate new height with margins
      const width = pageWidth; // Use the adjusted width
      const height = (canvas.height * width) / canvas.width; // Adjust height to maintain aspect ratio
      // Ensure the image height does not exceed the page height
      const finalHeight = height > pageHeight ? pageHeight : height;
      pdf.addImage(imgData, 'PNG', margin, margin, width, finalHeight, '', 'FAST'); // Adjust position for margin
      pdf.save('report.pdf')
      setLoader(false)

      /*const canvas=await html2canvas(capture,{scale:3})
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'px', 'a4',true)
      const width=pdf.internal.pageSize.getWidth()
      const height=(canvas.height*width)/canvas.width
      pdf.addImage(imgData, 'PNG', 0, 0,width,height,'','FAST')  
      pdf.save('report.pdf')
      setLoader(false)*/
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <MaxWidthWrapper className=' mx-auto'>
      <div ref={reportRef} className=' mb-5'>
      <ReportComponent/>
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