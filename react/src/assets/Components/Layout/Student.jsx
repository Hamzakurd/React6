
export default function Student({
  name,
  age,
  major = "Computer Science",
  graduated = false,
}) {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-slate-800 p-6 shadow-xl border border-slate-700">
      <h2 className="text-2xl font-bold text-white">
        {name}
      </h2>

      <p className="mt-3 text-slate-300">
        Age: {age}
      </p>

      <p className="mt-2 text-slate-300">
        Major: {major}
      </p>

      <span
        className={`inline-block mt-5 rounded-full px-4 py-2 text-sm font-semibold text-white ${
          graduated ? "bg-emerald-600" : "bg-sky-600"
        }`}
      >
        {graduated ? "Graduated" : "Student"}
      </span>
    </div>
  );
}
