import CNavbar from "../../components/CNavbar";
import Gsidebar from "../../components/Gsidebar";
import clientPromise from "../../lib/mongoDB";

function createGroup() {
    // pseudo-code if a user is found with the userFind api print the email with a button that says add and then add all the userIds in an array
    // to 

}

function groupsPage() {
    return (
        <>
            <CNavbar />
            <h1>Groups</h1>
            <Gsidebar />
            <div>
                <h1>Create a new group: </h1>
                <form>
                    <label for="searchEmail">Search another user's email:
                        <input id="searchEmail" type="email" placeholder="Search" required></input>
                    </label>
                </form>
                <button onClick={createGroup()}>Add</button>
            </div>


        </>
    )
}

export default groupsPage;