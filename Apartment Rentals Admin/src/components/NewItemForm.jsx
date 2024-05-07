import { useState } from "react";
// import RentalListfrom "./RentalList";

function NewItemForm(rentals){
    const {rental, setRental} = useState({
        country:"",
        city:"",
        name:"",
        property_type:"",
        description:""
    })
    setRental([
        ...rentals,
        {...rental, id: (rental.lenght + 1).toString()}

    ])
    return(
        <form>
            <label htmlFor="country">
                Country
                <input 
                    type="text"
                    name="country"
                    id="country"
                />
            </label>
            <label>
                City
                <input 
                     type="text"
                     name="city"
                     id="city"/>
            </label>
            <label>
                Name
                <input 
                     type="text"
                     name="name"
                     id="name"/>
            </label>
            <label>
                Property type
                <input 
                     type="text"
                     name="property_type"
                     id="property_type"/>
            </label>
            <label>
                Description
                <textarea
                     name="description"
                     id="description"
                     rows="10"
                     cols="40"/>
            </label>
            <input 
                type="submit"
                value="Add new rental"
            />
        </form>
    )
}

export default NewItemForm