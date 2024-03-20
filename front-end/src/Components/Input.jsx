export function Input({name, type}){
    return (
        <div  className="w-full max-w-72 ">
            <label htmlFor={name} className="text-sm text-stone-500">{name}</label>
            <input autoFocus type={type} id={name} placeholder={name} className="bg-transparent w-full p-2 border border-stone-300 outline-none rounded-md focus:ring-2"/>
        </div>
    )
}