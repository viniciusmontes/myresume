import { CardSkillsStyled } from "./style";
import { CardSkillsType } from "../../mock/card-skills";
import { Video } from "reactjs-media";

type Props = {
  cardSkills: CardSkillsType;
};

export default function CardSkills({ cardSkills }: Props) {
  function limitText(text: string) {
    return text.substring(0, 794).concat("...");

    return text;
  }
  return (
    <CardSkillsStyled>
      <div className="base-card">
        <div className="card-skills-title">
          <h1>{cardSkills.name}</h1>
          {cardSkills.icon}
        </div>
        <div className="card-skills-image-container">
          <Video
            controls={false}
            src={cardSkills.image}
            height={500}
            width={800}
            poster={cardSkills.poster}
            onTimeUpdate={(time) => console.log(time)}
          />
        </div>
        <p>{limitText(cardSkills.description)}</p>
      </div>
    </CardSkillsStyled>
  );
}
