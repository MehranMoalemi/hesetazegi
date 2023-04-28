import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material'
import { FcExpand } from 'react-icons/fc'
import parse from 'html-react-parser'
import { accordionStyle, accordionSummary, descStyle, headerStyle } from '../accordionStyles';

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
        sx={accordionStyle}
      >

        <AccordionSummary
          aria-controls={`acc${id} content`}
          id={`acc${id} header`}
          expandIcon={<FcExpand />}
          sx={accordionSummary}
        >
          <Typography sx={headerStyle}>{jsxSummary}</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={descStyle} >
            {jsxdetail}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AccordionComponent