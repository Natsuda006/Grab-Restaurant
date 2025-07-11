import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import Navbar from "../components/Navbar";

const Delete = () => {
    //1.Get Id from Url
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({
        title : '',
        type : '',
        img : '',
    });
    //2. Get Restaurant by ID
  useEffect(() => {
    fetch("http://localhost:3000/restaurants/" + id)
    .then((res)=>{
      //convert to json
      return res.json()
    })
    .then((response)=>{
      //save to state
      setRestaurant(response)
    }).catch((err)=> {
      //catch error
      console.log(err.message);
    }); 
  },[id])
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setRestaurant({...restaurant , [name]: value});
    };
    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:3000/restaurants/" + id,{
                method: "DELETE",
                body: JSON.stringify(restaurant)
            });
            if (response.ok){
                alert("Restaurant Delete sucessfully")
                setRestaurant({
                    title : '',
                    type : '',
                    img : '',
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="container mx-auto">
        <Navbar />
        <div>
        <h1 className="title justify-center text-3xl text-center m-5 p-5">
          Grab Restaurant Delete Form
        </h1>
        </div>
        <div className='flex flex-center justify-center'>
            <fieldset class="fieldset">
            <legend class="fieldset-legend">Restaurant Ttile:</legend>
            <input type="text" class="input flex items-center gap-2 w-2xl" 
            placeholder="Ttile..." onChange={handleChange} value={restaurant.title} name = "title" disabled />
            </fieldset>
        </div>
        <div className='flex flex-center justify-center'>
            <fieldset class="fieldset">
            <legend class="fieldset-legend">Restaurant Type:</legend>
            <input type="text" class="input flex items-center gap-2 w-2xl" 
            placeholder="Type..." onChange={handleChange} value={restaurant.type} name = "type" disabled />
            </fieldset>
        </div>
        <div className='flex flex-center justify-center'>
            <fieldset class="fieldset">
            <legend class="fieldset-legend">Restaurant Img:</legend>
            <input type="text" class="input flex items-center gap-2 w-2xl" 
            placeholder="Url..." onChange={handleChange} value={restaurant.img} name = "img" disabled />
            </fieldset>
        </div>
        <div className='flex flex-center justify-center'>
            {restaurant.img && (
        <img
          src={restaurant.img}
          alt="Restaurant preview"
          className="mt-4 max-w-xs max-h-64 object-contain border rounded"
          onError={(e) => {
            e.target.src = '';
          }}
        />
      )}
        </div>
      <div className="flex flex-center justify-center gap-4 mt-6">
        <a className="btn btn-outline btn-secondary" onClick={handleSubmit}>Delete</a>
        <a className="btn btn-outline btn-primary">Cancel</a>
      </div>
    </div>
  )
}

export default Delete