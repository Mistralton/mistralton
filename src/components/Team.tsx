import { createSignal } from "solid-js";
import Member from "./Member";

export default function Team() {
  const [member, setMember] = createSignal("Kyle");

  const members = [
    ["Kyle Leung", "Reagan Vu", "Wesley Nguyen"],
    ["Geography: Data Science", "Computer Science & Software Engineering"],
    ["Kyle", "Reagan", "Wesley"],
    [
      "Senior at UW, studying Geography Data Science",
      "3rd Year Student at UW studying Computer Science & Software Engineering.",
      "Recent UW undergraduate with a Bachelor's in Geography: Data Science. Aspiring frontend or full-stack engineer currently seeking employment.",
    ],
    ["Frontend Engineer", "UI/UX Engineer", "Fullstack Engineer"],
  ];
  const skills = [
    ["/ts.png", "/react.png", "/next.png"],
    ["/C++.png", "/Premiere.png", "/Java.png"],
    ["/ts.png", "/react.png", "/next.png"],
  ];

  return (
    <div class="flex flex-col items-center">
      <div class="team flex items-center justify-center mt-20 gap-8">
        <div onMouseEnter={() => setMember("Kyle")}>
          <img class="rounded-full" src="/Kyle.jpg" width="150" />
        </div>
        <div onMouseEnter={() => setMember("Reagan")}>
          <img class="rounded-full" src="/Reagan.jpg" width="150" />
        </div>
        <div onMouseEnter={() => setMember("Wesley")}>
          <img class="rounded-full" src="/Wesley.jpg" width="150" />
        </div>
      </div>
      {member() === "Kyle" && (
        <Member
          name={members[0][0]}
          major={members[1][0]}
          skills={skills[0]}
          img={members[2][0]}
          desc={members[3][0]}
          position={members[4][0]}
        />
      )}
      {member() === "Reagan" && (
        <Member
          name={members[0][1]}
          major={members[1][1]}
          skills={skills[1]}
          img={members[2][1]}
          desc={members[3][1]}
          position={members[4][1]}
        />
      )}
      {member() === "Wesley" && (
        <Member
          name={members[0][2]}
          major={members[1][0]}
          skills={skills[2]}
          img={members[2][2]}
          desc={members[3][2]}
          position={members[4][2]}
        />
      )}
    </div>
  );
}
