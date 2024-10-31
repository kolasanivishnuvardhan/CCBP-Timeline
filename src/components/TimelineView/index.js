import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderItems = timelineItemsList.map(eachList => {
    if (eachList.categoryId === 'COURSE') {
      return {
        title: eachList.title,
        cardTitle: <CourseTimelineCard details={eachList} />,
      }
    }
    return {
      title: eachList.title,
      cardTitle: <ProjectTimelineCard details={eachList} />,
    }
  })

  return (
    <div className="timeline-view-bg-container">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono items={renderItems} mode="VERTICAL_ALTERNATING" />
    </div>
  )
}

export default TimeLineView
