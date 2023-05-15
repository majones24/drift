//import raft from "../assets/images/Component 1.png"
//import styles from "../styles/Login.module.css"
import Link from "next/link";

function Post() {

  return (
    <>
      <h1>Sign Up</h1>
      <form action="/api/userRegistration.js" method="POST">
        {/* <fieldset> */}
        <label htmlFor="name">Name: <input type="text" id="name" placeholder="Enter your name" required name="name"></input></label>
        <label htmlFor="email">Email: <input type="email" id="email" required name="email"></input></label>
        <label htmlFor="password">Password: <input type="password" id="password" required name="password"></input></label>
        <button type="submit">Submit</button>
        {/* </fieldset> */}
      </form>
      <div>
        <h2>Already have an account? <Link href="/login">Login</Link></h2>
      </div>
    </>
  );

};

export default Post;
