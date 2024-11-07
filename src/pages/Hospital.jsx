import { useEffect, useState } from "react";


export default function Hospital() {
    //for just passing a default value in the Selected tag for dropdown
    let [DefaultValue, setDefaultValue] = useState(" ")
    //setting district according to the selection
    let [District, setDistrict] = useState('Choose Your District')
    let [HospitalName, setHospitalName] = useState('Choose Your Hospital')
    //input state of the selection
    let [inputState, setInputState] = useState('District')
    //for hospital and patient login click
    let [loginClick, setLoginClick] = useState(null)
    //reset if any error occurs
    const ResetButton = () => {
    setDistrict('Choose Your District')
    setHospitalName('Choose Your Hospital')
    setInputState('District')
    setLoginClick(null)
    }
    const ErrorBound = () => {<>
    <p>something is not right please contact admin or refresh the page</p> 
    <button onClick={ResetButton}></button>
    </>
}

    const Districts = [
        {
            name: "Bilaspur",
            hospitals: ['Govt Civil Hospital Bilaspur', ' Dr. Rajendra Prasad Government Medical College Hospital']
        },
        {
            name: "Chamba",
            hospitals: ['Govt Civil Hospital Chamba', ' Dr. Rajendra Prasad Government Medical College Hospital']
        },
        {
            name: "Hamirpur",
            hospitals: ['Govt Civil Hospital Hamirpur', ' Dr. Radha Krishan Government Medical College Hospital']
        },
        {
            name: "Kangra",
            hospitals: ['Govt Civil Hospital Kangra', ' Dr. Rajendra Prasad Government Medical College Hospital']
        },
        {
            name: "Kinnaur",
            hospitals: ['Govt Civil Hospital Kinnaur', ' Dr. Rajendra Prasad Government Medical College Hospital']
        },
        {
            name: "Kullu",
            hospitals: ['Govt Civil Hospital Kullu', 'Dr. Yashwant Singh Parmar Government Medical College Hospital']
        },
        {
            name: "Lahaul & Spitti",
            hospitals: ['Govt Civil Hospital Lahaul & Spitti', ' Keylong Civil Hospital']
        },
        {
            name: "Mandi",
            hospitals: ['Govt Civil Hospital Mandi', 'Dr. Rajendra Prasad Government Medical College Hospital']
        },
        {
            name: "Shimla",
            hospitals: ['Govt Civil Hospital Shimla', ' Indira Gandhi Medical College Hospital, Shri Lal Bahadur Shastri Government Hospital']
        },
        {
            name: "Sirmaur",
            hospitals: ['Govt Civil Hospital Sirmaur', 'Dr. Yashwant Singh Parmar Government Medical College Hospital']
        },
        {
            name: "Solan",
            hospitals: ['Govt Civil Hospital Solan', 'Dr. Yashwant Singh Parmar Government Medical College Hospital']
        },
        {
            name: "Una",
            hospitals: ['Govt Civil Hospital Una', 'Dr. Yashwant Singh Parmar Government Medical College Hospital']
        }
    ]
    //it checks if input state is set to a value or not if it is then it concludes the value and chooses the right option for it
    const handleclick = () => {
        if (inputState === 'District') {
            setInputState("Hospital")
        } else if (inputState === "Hospital") {
            setInputState("Authentication")
        } else {
            alert("something is wrong with the Server please refresh the Page")
        }

    }
    const handleLoginClick = (param) => {
        setLoginClick(param)
        console.log(param)

    }
    //for managing something that is necessary to be listened after every frame
    useEffect(() => {

    }, [])
    return (

        <div className="flex flex-col place-items-center justify-center gap-5 p-4 " >
            {
                inputState === 'District' ?
                    // what i really want to do is to create a route where user enters first it will ask for district when it chooses district it ask to select  
                    <div className=" flex flex-col justify-center gap-5 place-items-center">
                        <select required={true} value={District} aria-placeholder="Choose Your District" onChange={(e) => { setDistrict(District = e.target.value) }} >
                            <option value="Choose Your District">Choose Your District</option>
                            {Districts.map((district, index) => {
                                return <option key={index} value={district.name} >{district.name}</option>
                            })}
                        </select>

                        {District !== "Choose Your District" ?
                            (<button onClick={handleclick}> Next</button>)
                            :
                            (null)}

                    </div> : inputState === 'Hospital' ?
                        <div className=" flex flex-col justify-center gap-5 place-items-center">
                            <select name="hospital" required={true} onChange={(e) => setHospitalName(e.target.value)}>
                                <option selected value="Choose Your Hospital">Choose Your Hospital</option>
                                {
                                    //here i want to get the district fromuser selection and filter out hospitals from that particular district object
                                    // i think i can use .map and  find to filter out the hospitals from that object

                                    //district contains all the array to the District

                                    //district.name compares with the user Selected District 


                                    Districts.find(d => d.name === District)?.hospitals.map((hospital, index) => (
                                        <option key={index} value={hospital}>{hospital}</option>
                                    ))}


                            </select>
                            {
                                HospitalName !== "Choose Your Hospital" ?
                                    (<button onClick={handleclick}> Next</button>)
                                    :
                                    (null)
                            }
                        </div>
                        : inputState === "Authentication" ?

        <div className="flex flex-col  md:flex-row justify-around gap-8 place-items-center">
            {
                loginClick === null  ?
                                
                                           (
                                           <div>
                                           <div className="flex flex-col place-items-center justify-center gap-8">
                                                <button onClick={()=>handleLoginClick('HospitalLogin')}>
                                                    Hospital  Login
                                                </button>
                                            </div>

                                            <div className="flex flex-col place-items-center justify-center gap-8 ">
                                                <button onClick={()=>handleLoginClick('PatientLogin')}>
                                                    Patient Login
                                                </button>
                                            </div>
                                        </div>
                                        )
                                        : loginClick === 'HospitalLogin'?
                                         <div>
                                              
                                             <form>
                                                <label>Username</label>
                                                <input placeholder="username_here" type='text' ></input>
                                                <label>Password</label>
                                                <input placeholder="password here" type="password"></input>
                                             </form>
                                             </div> 
                                         :loginClick === 'PatientLogin'?<div>
                                             <form>

                                            </form> </div> 
                                         : ErrorBound
}

        </div>
                            : ErrorBound

            }




        </div>
    );
}

