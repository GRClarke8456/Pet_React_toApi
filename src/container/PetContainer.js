import { useEffect, useState } from "react";
import PetList from "../components/PetList";
import PetForm from "../components/PetForm";

const SERVER_URL = "http://localhost:8080";

const PetContainer = () => {

    const [pets, setPets] = useState([]);
    const [error, setError] = useState("");

    // Linking api to react
    useEffect(() => {
        fetch(`${SERVER_URL}/pets`)
        .then((response) => response.json())
        .then((response) => setPets(response))
        .catch((err) => setError(err.message))
    }, [])

    // Interact with database

    // Post request functionality
    const postPet = (newPet) => {
        fetch(`${SERVER_URL}/pets`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPet)
        })
        .then((response) => response.json())
        .then((response) => {setPets([...pets, response])})
    }

    // Delete reqest functionality
    const deletePet = (id) => {
        fetch(`${SERVER_URL}/pets/${id}`,{
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        // Need to delete locally
        const newPets = pets.filter(pet =>
            pet.id !== id)
            setPets(newPets)
    }

    if(error !== "") return <p>Error! {error}</p>

    return(
        <body>
            <header>
                <h1>PETS!</h1>
            </header>
                <PetList
                pets={pets}
                deletePet={deletePet}/>
            <section className="pet-form">
                <PetForm
                postPet={postPet}/>
            </section>
        </body>
    )
}
export default PetContainer;