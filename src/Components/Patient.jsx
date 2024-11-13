import turso from "../lib/tursodb";
function Patient() {  
  const handleSubmit=()=>{
            
    }
  return (
    <div className="flex place-items-center justify-center h-screen w-screen  ">
      <form className="flex flex-col text-center w-full h-full p-4   outline-slate-700 outline rounded-xl bg-slate-400" onSubmit={handleSubmit}>
        <span className="flex flex-col gap-7 justify-center">
          <label htmlFor="name"> Name</label>
          <input className="shadow-xl shadow-slate-700"type="text"></input>
        </span>
        <span className="flex flex-col gap-7 justify-center">
          <label htmlFor="email">email</label>
          <input className="shadow-xl shadow-slate-700"type="email"></input>
        </span>
        <span className="flex flex-col gap-7 justify-center">
          <label htmlFor="admitStatus">admitStatus</label>
          <span className="flex flex-row  justify-center text-center">
            <input className=""id="To Be Admitted" type="radio"></input>
            <label htmlFor="To Be admitted">To Be Admmitted</label>
          </span>
          <span className="flex  flex-row  justify-center text-center">
            <input className=""id="No Need To be Admitted" type="radio"></input>
            <label htmlFor="No need to be Admitted">
              No need to be Admitted
            </label>
          </span>
          <span className="flex flex-col gap-7 justify-center">
            <label htmlFor="comments">Comments </label>
            <textarea className="shadow-xl shadow-slate-700"type="text"></textarea>
          </span>
        </span>
        <span className="flex flex-col gap-7 justify-center">
          <label htmlFor="visitDate">visitDate</label>
          <input className="shadow-xl shadow-slate-700"type="text"></input>
        </span>
        <span className="flex flex-col gap-7 justify-center">
          <label htmlFor="address">address </label>
          <input className="shadow-xl shadow-slate-700" type="text"></input>
        </span>
        <button>Create Patient Profile</button>
      </form>
    </div>
  );
}

export default Patient;
