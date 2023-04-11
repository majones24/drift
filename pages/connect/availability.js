import CNavbar from "../../components/CNavbar";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";


function availibilityPage() {
    return (
        <>
            <CNavbar />
            <h1>Availability</h1>
            <div>
                <p>When are you free?</p>
            </div>
            <form>
                <DatePicker
                    multiple
                    plugins={[
                        <DatePanel />
                    ]}
                />
                <input></input>
            </form>



        </>
    )
}

export default availibilityPage;