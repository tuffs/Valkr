export default function Title({ title, subtitle }) {
  return (
    <div
      data-testid="Title"
      id="title"
      className="mb-6"
    >
      <h1 className="text-4xl pb-0 font-bold text-yellow-400">
        {title}
      </h1>
      <h3 className="text-md text-yellow-300">
        {subtitle}
      </h3>
    </div>
  );
}