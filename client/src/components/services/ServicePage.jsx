export default function ServicePage() {
  return (
  <section className="h-screen flex items-center justify-center p-0 m-0">
  <div className="shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col items-center border border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2 text-center">Upload your retina image</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">Please upload a high-resolution image of your retina for analysis.</p>
        <form className="w-full flex flex-col gap-4">
          <input type="file" accept="image/*" className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 dark:file:bg-gray-800 dark:file:text-indigo-300 dark:hover:file:bg-gray-700 transition" />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition">Upload</button>
        </form>
      </div>
    </section>
  )
}