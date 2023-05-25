//import raft from "../assets/images/Component 1.png"
//import styles from "../styles/Login.module.css"
import Link from "next/link";


function Post() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/userRegistration';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    console.log(response);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(result);

  };

  return (
    <>
      {/* if (response.status==200){
        
      } */}
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: <input type="text" id="name" placeholder="Enter your name" required name="name"></input></label>
        <label htmlFor="email">Email: <input type="email" id="email" required name="email"></input></label>
        <label htmlFor="password">Password: <input type="password" id="password" required name="password"></input></label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Already have an account? <Link href="/login">Login</Link></h2>
      </div>
    </>
  );

};



export default Post;
