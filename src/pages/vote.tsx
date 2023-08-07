import React from "react";
import {Accordion, AccordionItem, Avatar, Divider, Card, CardBody} from "@nextui-org/react";
import ModaL from "../../components/ModaL";
import NavBar from '../../components/NavBar'
import SideNavbar from "../../components/Sidebar";

export default function Vote() {

return (
  <div>
    <div className="flex p-4">
      <div className="flex-auto w-1/4">
      </div>
      <div className="flex-auto w-3/4">
        <Accordion selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="issueOne"
            startContent={
              <Avatar
                isBordered
                color="primary"
                radius="lg"
                src="/1.jpg"
              />
            }
            subtitle="for the year ended 31st Dec, 2022"
            title="Audited Financial Statements"
          >
            <div className="p-4 flex">
                <p className="flex-1">
                    Audited Financial Statements including the Balance Sheet for the year ended 31st December 2022, together with the Directors and Auditors Reports thereon be and are hereby approved and adopted.
                </p>
                <ModaL/>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="issueTwo"
            startContent={
              <Avatar
                isBordered
                color="success"
                radius="lg"
                src="2.jpg"
              />
            }
            subtitle="for the period ended 31st Dec, 2022"
            title="Approve Director's Renumeration Report"
          >
            <div className="flex p-4">
              <p className="flex-1">
                  To approve the Directors’ Remuneration Report for the period ended 31st December 2022. (As required by the Companies Act, 2015, the Shareholders will be requested to vote at the meeting or in advance of the meeting as set out below
              </p>
              <ModaL/>
            </div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="issueThree"
            startContent={
              <Avatar
                isBordered
                color="warning"
                radius="lg"
                src="3.jpg"
              />
            }
            subtitle={
              <p>
                4 directors to elect!
              </p>
            }
            title="Elect Directors"
          >
            <div className="p-4">
              <div className="flex">
                <p className="flex-1">
                    a) Mr. Michael Joseph retires in accordance with Article 69 of the Company’s Articles of Association, and being eligible, offers himself for re-election.
                </p>
                <ModaL/>
              </div>
              <div className="flex">
                <p className="flex-1">
                    b) Mr. John Ngumi retires in accordance with Article 69 of the Company’s Articles of Association, and being eligible, offers himself for re-election.
                </p>
                <ModaL/>
              </div>
              <div className="flex">
                <p className="flex-1">
                  c) Ms. Esther Koimett retires in accordance with Article 69 of the Company’s Articles of Association and does not offer herself for re-election.
                </p>
                <ModaL/>
              </div>
              <div className="flex"> 
                <p className="flex-1">
                  d) Mr. Angus John Clarke having been appointed in accordance with Article 67 of the Company’s Articles of Association, retires in accordance with Article 69(2)(i) of the Company’s Articles of Association, and being eligible, offers himself for election
                </p>
                <ModaL/>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
  );
}
