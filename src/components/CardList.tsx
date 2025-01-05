import { useState } from "react";
import { IRobot } from "../types/Data.types";
import Card from "./Card";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";

const CardList = ({ robots }: { robots: IRobot[] }) => {
  const [searchfield, setSearchfield] = useState("");

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchfield(event.target.value);
  };

  return (
    <div>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {filteredRobots.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </Scroll>
    </div>
  );
};

export default CardList;
