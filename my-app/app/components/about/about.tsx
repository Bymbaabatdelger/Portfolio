const About = () => {
  return (
    <div className="flex gap-4">
      <img className="h-[300px] w-[240px]" src="/zurag.jpg" alt="picture" />
      <div className="flex w-full flex-col">
      <p className="text-[24px]">Summary</p>
      <div>
        <p className="text-[16px]">I dreamed that work in a technology industry since i was i little. I'm passioanate about this field and ready to be the part of the strong team. </p>
      </div>
        <p className="text-[24px]">Education</p>
        <div className="flex flex-col">
          <div className="flex justify-between text-[16px]">
            <p>Pinecone academy(Leap programm)</p>
            <p>2023.09-2024.05</p>
          </div>
          <div className="flex justify-between text-[16px]">
            <p>Grow with Google Mongolia(UX designer)</p>
            <p>2024.05-present</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;