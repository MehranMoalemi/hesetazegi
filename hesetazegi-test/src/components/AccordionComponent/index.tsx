import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material'
import { AiOutlineDown } from 'react-icons/ai'
import parse from 'html-react-parser'
import { accordionStyle, accordionSummary, descStyle, headerStyle } from '../accordionStyles';

interface AccordionProps {
  summary: string;
  details: string;
  id: string;
  index: number;
}


const AccordionComponent = (props: AccordionProps) => {
  const { summary, details, id,index } = props

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
          expandIcon={<AiOutlineDown style={{color:'#3A3A3A',fontSize:'16px'}}/>}
          sx={accordionSummary}
        >
          <Typography sx={headerStyle}>{index}. {jsxSummary}</Typography>

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