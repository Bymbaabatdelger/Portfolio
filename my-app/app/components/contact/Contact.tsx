const Contact = () => {
  const contact = [
    {
      name: "Phone:",
      value: "85950108",
    },
    {
      name: "Email:",
      value: "bymbaabatdelger0108gmail.com",
    },
    {
      name: "GITHUB:",
      value: "Bymbaabatdelger",
    },
  ];

  return (
    <div className="flex flex-col border-2 rounded-2xl p-4 hover:border-purple-400">
      {contact &&
        contact.map((el) => (
          <div className="flex gap-4 text-slate-200 text-[7px] lg:text-[24px]">
            <p>{el.name}</p>
            <p>{el.value}</p>
          </div>
        ))}
    </div>
  );
};

export default Contact
