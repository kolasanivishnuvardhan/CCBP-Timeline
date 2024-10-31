import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectUrl, projectTitle, imageUrl, duration, description} = details
  return (
    <div className="project-timeline-container">
      <img src={imageUrl} alt="PROJECT" className="project-img" />
      <div className="heading-container">
        <h1>{projectTitle}</h1>
        <div className="calender-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="visit">
        VISIT
      </a>
    </div>
  )
}

export default ProjectTimelineCard
