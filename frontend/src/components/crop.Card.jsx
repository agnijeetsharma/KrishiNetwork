export const CropCard = (c) => {
    console.log(c)
  const { title, description } = c.crop;
//   console.log(title,description)
  return (
    <div>
      <div className="h-56 w-48 bg-green-400 border border-red-800 gap-2">
        <h1>{title}</h1>
        <h1>{description}</h1>
      </div>
    </div>
  );
};
