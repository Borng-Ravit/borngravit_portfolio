import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

const Experience = () => {
  return (
    <div className='experience'>

      <VerticalTimeline lineColor='#3e4971'>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2017 - 2020' 
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>
            - My High School -
          </h3>
          <p>
            Studies at Hun Sen Krong Tepnimit High School (Pailin).
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2020 - Present' 
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>
            - My University -
          </h3>
          <p>
            Bachelor degree of Computer Science at Royal University of Phnom Penh 
            <br></br>
              " Computer Science "
          </p>
        </VerticalTimelineElement>

        {/* Work Experience */}
        {/* <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2014 - 2018' 
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>
            My Cool University, Vancouver, British Columbia
          </h3>
          <p>
            Computer Science
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2014 - 2018' 
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>
            My Cool University, Vancouver, British Columbia
          </h3>
          <p>
            Computer Science
          </p>
        </VerticalTimelineElement> */}

      </VerticalTimeline>
    </div>
  )
}

export default Experience