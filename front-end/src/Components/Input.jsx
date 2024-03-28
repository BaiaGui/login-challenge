export function Input({ name, type, isFirst, placeholder, loading }) {
  return (
    <div className="w-full max-w-72 ">
      <label htmlFor={name} className="text-sm text-stone-500">
        {name}
      </label>
      <input
        autoFocus={isFirst}
        name={name.toLowerCase()}
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={loading}
        className="bg-transparent w-full p-2 border border-stone-300 outline-none rounded-md focus:ring-2 disabled:bg-stone-100"
      />
    </div>
  );
}
