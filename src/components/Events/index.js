import {Component} from 'react'

import './index.css'

import EventItem from '../EventItem'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const registrationStatuses = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class Events extends Component {
  state = {
    registrationStatus: registrationStatuses.initial,
  }

  updateRegistrationStatus = registrationStatus => {
    // console.log(registrationStatus)
    this.setState({registrationStatus})
  }

  initialRenderingComponent = () => (
    <div className="initial-con">
      <p className="initial">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  yetToRegisterRenderingComponent = () => (
    <div className="registration-status-con">
      <div className="diva">
        <div className="yet-to-rendering-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
            alt="yet to register"
            className="yet-image"
          />
          <p className="yet-para">
            A live performance brings so much to your relationship with dance
            live can often make you fall totally in love with this beautiful art
            form
          </p>
          <button type="button" className="yet-btn">
            Register Here
          </button>
        </div>
      </div>
    </div>
  )

  registeredRenderingComponent = () => (
    <div className="registration-status-con">
      <div className="diva">
        <div className="yet-to-rendering-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png  "
            alt="registered"
            className="registered-image"
          />
          <h1 className="registered-para">
            You have already registered for the event
          </h1>
        </div>
      </div>
    </div>
  )

  registersClosedRenderingComponent = () => (
    <div className="registration-status-con">
      <div className="diva">
        <div className="yet-to-rendering-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
            alt="registrations closed"
            className="registrations-closed-image"
          />
          <h1 className="registrations-closed-heading">
            Registrations Are Closed Now!
          </h1>
          <p className="registrations-closed-para">
            Stay tuned. We will reopen the registrations soon!
          </p>
        </div>
      </div>
    </div>
  )

  statusToBeRendered = () => {
    const {registrationStatus} = this.state

    switch (registrationStatus) {
      case registrationStatuses.initial:
        return this.initialRenderingComponent()
      case registrationStatuses.yetToRegister:
        return this.yetToRegisterRenderingComponent()
      case registrationStatuses.registered:
        return this.registeredRenderingComponent()
      case registrationStatuses.registrationsClosed:
        return this.registersClosedRenderingComponent()

      default:
        return this.initialRenderingComponent()
    }
  }

  render() {
    return (
      <div className="events-registration-status-con">
        <div className="events-bg-con">
          <h1 className="event-heading">Events</h1>
          <ul className="event-list-con">
            {eventsList.map(each => (
              <EventItem
                key={each.id}
                item={each}
                onClickIsClicked={this.updateRegistrationStatus}
              />
            ))}
          </ul>
        </div>
        {this.statusToBeRendered()}
      </div>
    )
  }
}

export default Events
