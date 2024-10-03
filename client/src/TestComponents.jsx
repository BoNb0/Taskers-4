import { useEffect, useState } from "react";
import axios from "axios";

export default function TestComponents() {
  const url = "http://localhost:4000/api/name";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const url2 = "http://localhost:4000/api/add";

  const [numb1, setNum1] = useState("");
  const [numb2, setNum2] = useState("");

  const url3 = "http://localhost:4000/api/subtract";

  const [numSb1, setNumS1] = useState("");
  const [numSb2, setNumS2] = useState("");

  const handleName = async (e) => {
    e.preventDefault();

    const response = await axios.post(url, {
      firstName,
      lastName,
    });

    console.log(response.data.message);

    alert(response.data.message);
    setFirstName("");
    setLastName("");
    //console.log(`Your name is ${firstName} ${lastName}`);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const num1 = parseFloat(numb1);
    const num2 = parseFloat(numb2);

    const response = await axios.post(url2, {
      num1,
      num2,
    });

    console.log(response.data.message);

    alert(response.data.message);
    setNum1("");
    setNum2("");
  };

  const handleSub = async (e) => {
    e.preventDefault();
    const num1 = parseFloat(numSb1);
    const num2 = parseFloat(numSb2);

    const response = await axios.post(url3, {
      num1,
      num2,
    });

    console.log(response.data.message);

    alert(response.data.message);
    setNumS1("");
    setNumS2("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleAdd}>
          <h3>Addition form</h3>
          <label htmlFor="num1">Number 1</label>
          <input type="number" value={numb1} onChange={(e) => setNum1(e.target.value)} name="num1" id="num1" required />
          <br />
          <label htmlFor="num2">Number 2</label>
          <input type="number" value={numb2} onChange={(e) => setNum2(e.target.value)} name="num2" id="num2" required />
          <br />
          <button>Submit</button>
        </form>

        <br />
        <hr />
        <form onSubmit={handleName}>
          <h3>Name Form</h3>
          <label htmlFor="num1">First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <br />
          <label htmlFor="num2">Last Name </label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <br />
          <button>Submit</button>
        </form>

        <br />
        <hr />

        <form onSubmit={handleSub}>
          <h3>Subtraction Form</h3>
          <label htmlFor="num1">Number 1</label>
          <input type="number" value={numSb1} onChange={(e) => setNumS1(e.target.value)} name="num1" id="num1" required />
          <br />
          <label htmlFor="num2">Number 2</label>
          <input type="number" value={numSb2} onChange={(e) => setNumS2(e.target.value)} name="num2" id="num2" required />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
