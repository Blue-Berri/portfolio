import React, {useState} from 'react';


function Home(props) {

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favoriteClasses.includes(value)) {
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }
        console.log(favoriteClasses);
    }


    return (
        <div>
            <h1>Hello World!</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Favorite Class</label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">Add class</button>
            </form>
        </div>
    )

}

export default Home;