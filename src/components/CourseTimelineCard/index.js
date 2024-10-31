import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {details} = props
  const {tagsList, duration, description, courseTitle} = details
  const renderTagsList = () => {
    return (
      <ul className="tags-list-container">
        {tagsList.map(eachTag => (
          <p key={eachTag.id} className="tag-container">
            {eachTag.name}
          </p>
        ))}
      </ul>
    )
  }
  return (
    <div className="course-timeline-card-container">
      <div className="heading-container">
        <h1>{courseTitle}</h1>
        <div className="calender-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      {renderTagsList()}
    </div>
  )
}

export default CourseTimelineCard
