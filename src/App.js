// import logo from "./logo.svg";
import "./App.css";

const nums = [1, 2, 3, 4, 5, 6];

const person = {
  name: "David",
  age: 45,
  occupation: "Government employee",
};

const people = {
  peeps: [
    { name: "David", occupation: "Government Employee", age: 45 },
    { name: "Kevin", occupation: "Web Developer", age: 46 },
    { name: "Eric", occupation: "Dog Recuer", age: 39 },
  ],
};
// console.log(people.peeps[2].name);

const { name, age, occupation } = person;
const [one, two, three, four, five, six] = nums;

const numbers = [...nums, 7, 8];

const totalNumbers = numbers.reduce((sum, num) => sum + num, 0);
console.log(totalNumbers);

const totalPeopleAge = people.peeps.reduce((sum, peep) => sum + peep.age, 0);
console.log("totalPeopleAge = ", totalPeopleAge);

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {nums.map((num) => (
        <div key={num}>
          {num > 2 ? (
            <span className="blue">{num}</span>
          ) : (
            <span className="red">{num}</span>
          )}
        </div>
      ))}

      {Object.entries(person).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}

      <div>{numbers.join(", ")}</div>
    </div>
  );
}

export default App;
