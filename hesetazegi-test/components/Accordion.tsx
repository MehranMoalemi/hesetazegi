import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { FcExpand } from 'react-icons/Fc'


interface AccordionProps {
  summary: string;
  details: string;
  id: string;
}


export const Accordion = (props: AccordionProps) => {
  const { summary, details,id } = props

  const [expanded, setExpanded] = useState<string | false>(false)

  // this function will help us to only one accordion expand at the time
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <Accordion
        expanded={expanded === `acc${id}`}
        onChange={(event, isExpanded) => handleChange(isExpanded, `acc${id}`)}>

        <AccordionSummary
          aria-controls={`acc${id} content`}
          id={`acc${id} header`}
          expandIcon={<FcExpand />}>
          <Typography>{summary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {details}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}