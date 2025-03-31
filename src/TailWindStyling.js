import "./TailWind.css";

export default function TailWindStyle() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="border rounded bg-blue-500 p-4 text-white">
          Tailwind
        </div>
        <div className="border rounded bg-blue-500 p-4 text-white">
          Tailwind
        </div>
        <div className="border rounded bg-blue-500 p-4 text-white">
          Tailwind
        </div>
      </div>
      <div>
        <input className="border p-2 w-full" />

        <label className="font-bold mb-2">Name</label>

        <button className="hover:bg-green-900 bg-blue-500 text-white text-lg p-2 border rounded">
          Submit
        </button>
      </div>
      <div className="p-4 rounded shadow max-w-md">
        <h3 className="font-bold text-xl mb-2">card title</h3>
        card content
        <button className="hover:bg-red-500 bg-blue-500 text-white p-2 block mt-4 mx-auto">
          call to action
        </button>
      </div>
    </>
  );
}
