import Storage from "./Storage";
const CardPlans = ({ title, description }) => {
  return (
    <div className="h-[220px] bg-secondary mx-4 rounded-xl mt-20 p-3">
      <h2 className="font-bold">{title}</h2>
      <p className="italic text-sm">{description}</p>
      <Storage
        content={{
          title: "Almacenamiento",
          available: "23.5 GB / 1 TB",
          percentage: 80,
        }}
      />
      <Storage
        content={{
          title: "Banda Mensual",
          available: "3.4 TB / 5 TB",
          percentage: 60,
        }}
      />
      <button className="mt-5 bg-primary font-bold text-white px-3 py-1 rounded-xl">
        Administrar Plan
      </button>
    </div>
  );
};

export default CardPlans;
