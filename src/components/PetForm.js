import { useState } from "react"

const PetForm = ({postPet}) => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);

    const [error, setError] = useState("");

    // Still able to input empty fields
    // Might want to do some error handling
    const handleValidation = () => {
        if(name === ""){
            setError("Please enter the Pet's name")
            return false;
        }
        if(type === ""){
            setError("Please enter the Pet's type")
            return false;
        }
        if(breed === ""){
            setBreed("Please enter the Pet's breed")
            return false;
        }
        return true;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(handleValidation()){
            const postBody = {
                name, type, breed, age
            }

            postPet(postBody);
            setName("");
            setType("");
            setBreed("");
            setAge(0);
        }
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <h2>Add a pet to the list</h2>
            <hr/>

            <input
            type="text"
            placeholder="Pet Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />

            <input
            type="text"
            placeholder="Pet Type"
            value={type}
            onChange={(event) => setType(event.target.value)}
            />

            <input
            type="text"
            placeholder="Pet Breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            />

            <input
            type="number"
            placeholder="Pet Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            />
            <button type="submit">Submit</button>
            <p>{error}</p>
        </form>
    )
}

export default PetForm;