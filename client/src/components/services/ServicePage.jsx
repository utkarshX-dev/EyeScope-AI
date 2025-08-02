export default function ServicePage() {
  return (
    <>
    <section>
      <div>
        <h1>Upload your retina image</h1>
        <p>Please upload a high-resolution image of your retina for analysis.</p>
        <form>
          <input type="file" accept="image/*" />
          <button type="submit">Upload</button>
        </form>
      </div>
    </section>
    </>
  )
}