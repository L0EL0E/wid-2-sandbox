export default function App() {
  /*
   *
   *    JAVASCRIPT hier
   * 
   */

  //console.log("Test2");

  //const a = "Test"; //var möglich, aber veraltet // let ermöglicht Variabeländerungen, const nicht

  /*
  if (typeof a === "number") {
    console.log("A ist eine Nummer");
  } else if (typeof a === "string") {
    console.log("A ist ein String");
  } else if (typeof a === "boolean") {
    console.log("A ist ein Boolean");
  } else if (typeof a === "object" && a === null) {
    console.log("A ist null");
  } else {
    console.log("A ist komisch");
  }
  */

  const isTheTruth = true;

  return (
    /*
     *
     *    HTML hier
     *    + JavaScript in {} möglich
     *
     */
  <div>  
    <div>Hallo Welt</div>
    <p style={{color: isTheTruth ? "green" : "red"}}>Die Erde ist rund.</p>
  </div>
    /*
     *
     */
  );
}
