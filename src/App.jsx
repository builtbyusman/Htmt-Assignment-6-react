import ApplyFor from "./components/ApplyFor";
import Information from "./components/Information";
import Qualification from "./components/Qualification";

export default function App() {
  return (
    <>
      <h2><u>STUDENT REGISTRATION FORM</u></h2>
      <form action="">
        <table>
          <Information />
        </table>
        <table>
          <Qualification />
        </table>
        <ApplyFor />
      </form>
    </>
  );
}