import { useState } from "react";


export default function Hospital() {
    let [DefaultValue, setDefaultValue] = useState(" ")
    let [District, setDistrict] = useState(null)

    const Districts = [
        "Bilaspur",
        "Chamba",
        "Hamirpur",
        "Kangra",
        "Kinnaur",
        "Kullu",
        "Lahaul & Spitti",
        "Mandi",
        "Shimla",
        "Sirmaur",
        "Solan",
        "Una",
    ]


    return (

        <div className="flex flex-col place-items-center justify-center gap-5 p-4 ">

            {

                // what i really want to do is to create a route where user enters first it will ask for district when it chooses district it ask to select  
                <div>
                    <select required onChange={(e) => { setDistrict(e.target.value)}} >
                            {Districts.map((district, index) => {
                            return <option key={index} value={district} >{district}</option>
                        })}
                    </select>
                    <button >Next</button>
                </div>
            }




            {/* <select name="hospital" required="true" value={DefaultValue}>
  
    <option>hospital1</option>
    <option>hospital2</option>
    <option>hospital3</option>
    <option>hospital4</option>
</select> */}



        </div>
    );
}

