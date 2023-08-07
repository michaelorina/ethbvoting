import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            AGENDA A
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Audited Financial Statements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Audited Financial Statements including the Balance Sheet for the year ended 31st December 2022, together with the Directors and Auditors Reports thereon be and are hereby approved and adopted.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>AGENDA B</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Approve Director's Renumeration Report
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To approve the Directors’ Remuneration Report for the period ended 31st December 2022.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            AGENDA C
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Elect Directors
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b> Mr. Michael Joseph</b> retires in accordance with Article 69 of the Company’s Articles of Association, and being eligible, offers himself for <b>re-election.</b>
          </Typography>
          <Typography>
            Mr. John Ngumi retires in accordance with Article 69 of the Company’s Articles of Association, and being eligible, offers himself for <b>re-election.</b>
          </Typography>
          <Typography>
            Ms. Esther Koimett retires in accordance with Article 69 of the Company’s Articles of Association and being eligible, offers herself for <b>re-election.</b>
          </Typography>
          <Typography>
            Mr. Angus John Clarke retires in accordance with Article 69 of the Company’s Articles of Association, and being eligible, offers himself for <b>re-election.</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
