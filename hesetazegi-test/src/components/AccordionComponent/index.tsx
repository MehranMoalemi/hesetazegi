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


  const [expanded, setExpanded] = useState<string | false>(false)

  // this function will help us to only one accordion expand at the time
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <Accordion
        expanded={expanded === `acc${id}`}
        onChange={(event, isExpanded) => handleChange(isExpanded, `acc${id}`)}
        sx={{ borderRadius: '8px',boxShadow: '0px 4px 16px rgba(137, 137, 137, 0.1)' }}
      >

        <AccordionSummary
          aria-controls={`acc${id} content`}
          id={`acc${id} header`}
          expandIcon={<FcExpand />}
          sx={{ display: 'flex', flexDirection: 'row', direction: 'rtl',border:'0' }}
        >
          <Typography sx={{ textAlign: 'right' }}>{jsxSummary}</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {jsxdetail}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AccordionComponent