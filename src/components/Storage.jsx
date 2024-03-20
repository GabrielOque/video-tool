const Storage = ({ content }) => {
  return (
    <>
      <div className="flex w-full justify-between mt-3">
        <p>{content.title}</p>
        <p className="text-[10px] pt-1.5">{content.available}</p>
      </div>
      <div className="w-full h-2 bg-[#D8D8D8] rounded-xl">
        <div
          className={`h-full  bg-primary rounded-xl`}
          style={{ width: content.percentage + "%" }}
        ></div>
      </div>
    </>
  );
};

export default Storage;
