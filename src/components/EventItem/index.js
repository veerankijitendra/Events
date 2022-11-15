import './index.css'

const EventItem = props => {
  const {item, onClickIsClicked} = props
  const {imageUrl, name, location, registrationStatus} = item

  const selectedImageStatus = () => {
    // console.log('hi')
    onClickIsClicked(registrationStatus)
  }

  return (
    <li className="event-item-con">
      <button type="button" className="image-btn" onClick={selectedImageStatus}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

EventItem.defaultProps = {
  item: {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
}
export default EventItem
