import Pet from "./Pet";

const PetList = ({pets, deletePet}) => {

    const petComponents = pets.map((pet) => {
        return <Pet
        key={pet.id}
        pet={pet}
        deletePet={deletePet}/>
    })

    return(
        <>
        <h2>View Our Pet List</h2>
        <hr/>
        <section className="pet-list">
            {petComponents} 
        </section>
        </>
    )
}

export default PetList;