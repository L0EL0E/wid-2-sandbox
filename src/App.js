export default function App() { //ist eine Komponente, eine Funktion, die HTML zurückgibt
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
  

  const isTheTruth = true;
  
  function multiply(a, b=2){
    if (typeof a !== "number" || typeof b !== "number") {
      console.log("A oder B ist keine Nummer");
      return "A oder B ist keine Nummer";
    }
    return a * b;
  }

  const leerzeichen = (wordOne, wordTwo) => wordOne + " " + wordTwo;

  const isNull = (number) => {
    if (number === 0) {
      return 0;
    } else if (number < 0) {
      return -1;
    } else if (number > 0) {
      return 1;
    } else {
      console.log("Du Hund, gah mal in Matheunterricht und lern was en Zahl isch.");
      return "Du Hund, gah mal in Matheunterricht und lern was en Zahl isch.";
    }
  };
  
  const array = [1, 2, 3, "vier", false, [], undefined, "letztesElement"];
  const element = array[array.length-1];
  console.log(array.length);
  */

  //Array = Liste von Elementen / Werten
  //Arrays = geordnet
  //Array = Element werden über ihren Index gefunden
  const users = ["Tim", "Anna", "Admin", "Lisa"];
  const usersTransformed = users.map((user) => user + "_user"); //mittels Arrow-Funktion innhehalb von .map()-> hat immer gleich viele Elemente in der Ausgabe 
  console.log(users);
  console.log(usersTransformed);

  const filterdUsers = users.filter((user) => user !== "Admin"); //verringert die Anzhahl der Elemente
  console.log(users);
  console.log(filterdUsers);
  
  //Objekt = Liste von Schlüssel-Wert-Paaren
  //Objekte = nicht geordnet
  //Objekt = Element werden über ihren Schlüssel gefunden 
  const object ={
    meinString: "User",
    meineNummer: 3,
    meinArray: [],
    meinObject: {},
  };
  
  return (
    /*
     *
     *    HTML hier
     *    + JavaScript in {} möglich
     *  
  <div>  
    <div>Hallo Welt</div>3
    <p style={{color: isTheTruth ? "green" : "red"}}>Die Erde ist rund.</p>
  </div>
  <div>{isNull("g")}</div>
     
    <div>
      <div>Hallo Welt</div>
      {element}
      {array}
    </div>
    */
  <div>
   <div>Hallo Welt</div>
   {users.map((user) => <li>{user}</li>)}
   <div>{object.meinString}</div>
   <div>{object["meineNummer"]}</div>
  </div>

  );
}
