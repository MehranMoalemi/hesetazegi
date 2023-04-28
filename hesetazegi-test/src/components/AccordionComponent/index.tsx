import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { FcExpand } from 'react-icons/fc'
import parse from 'html-react-parser'

interface AccordionProps {
  summary: string;
  details: string;
  id: string;
}


const AccordionComponent = (props: AccordionProps) => {
  const { summary, details, id } = props

  const jsxSummary = parse(summary)
  const jsxdetail = parse(details)



 
  return (
    <>
      <Accordion
        sx={{ borderRadius: '8px',boxShadow: '0px 4px 16px rgba(137, 137, 137, 0.1)',maxHeight:'100%' }}
      >

        <AccordionSummary
          aria-controls={`acc${id} content`}
          id={`acc${id} header`}
          expandIcon={<FcExpand />}
          sx={{ display: 'flex', flexDirection: 'row', direction: 'rtl',border:'0' }}
        >
          <Typography sx={{ textAlign: 'right',color:"#3A3A3A",fontWeight:'900' }}>{jsxSummary}</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'right',color:"#656565",fontWeight:'400'}} >
            {jsxdetail}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AccordionComponent