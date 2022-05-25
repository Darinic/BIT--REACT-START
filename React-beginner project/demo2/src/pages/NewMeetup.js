import NewMeetupForm from "../components/layout/meetups/NewMeetupForm"
import { useNavigate } from 'react-router-dom'

function NewMeetupPage() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch('https://project-2613b-default-rtdb.europe-west1.firebasedatabase.app/newmeetup.json',
        {
            method: 'post',
            body: JSON.stringify(meetupData)
        }
        ).then(() => {
            navigate("/", {replace:true})
        })
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )

}

export default NewMeetupPage