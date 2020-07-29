import React, { useState } from 'react';

const Form = () => {

    //Form state
    const [search, setSearch] = useState({
        city: '',
        country:''
    });
 
    const [error, setError] = useState(false);

    //Get city and country
    const {city, country} = search;

    //Function that places the elements in the state
    const handleChange = e => {
        //Updated state
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    // Submit form
    const handleSubmit = e => {
        e.preventDefault();

        if (city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        };
        setError(false);
    }


    return ( 
        <form 
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darken-4 error">All fields are required</p> : null }
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                /> 
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">
                        -- Select a country --
                    </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country: </label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Search weather"
                    className="waves-effect waves-light btn-large btn-block teal accent-4"
                />
            </div>
        </form>
    );
}
 
export default Form;