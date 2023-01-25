const Pet = ({pet, deletePet}) => {

    return(
        <div className="pet">
            <h3>Name: {pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>


            <div className="pet_button">
                <button
                    onClick={() => deletePet(pet.id)}>
                    Delete Pet
                </button>
            </div>
        </div>
    )
}

export default Pet;