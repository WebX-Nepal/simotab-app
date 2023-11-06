import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled: false,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} className="border bg-black" />
        <p>Drag n drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default MyDropzone;
