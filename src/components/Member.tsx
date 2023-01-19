interface Props {
  name: string;
  position: string;
  skills: string[];
  major: string;
  img: string;
  desc: string;
}

export default function Member({ name, position, skills, desc, img }: Props) {
  return (
    <div class="mt-40 flex justify-around items-center max-w-3xl w-full">
      <div>
        <img class="rounded-full mb-4" src={`/${img}.jpg`} width="150" />
        <div class="flex items-center justify-center gap-4 w-[150px]">
          {skills.map((skill) => {
            return <img src={skill} width="50" />;
          })}
        </div>
      </div>
      <div>
        <h2 class="text-center font-bold text-2xl">{name}</h2>
        <p class="mb-4 text-center">{position}</p>
        <p class="max-w-sm text-sm">{desc}</p>
      </div>
    </div>
  );
}
