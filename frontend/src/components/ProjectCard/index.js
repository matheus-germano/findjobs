import { Button } from '../Button';

import './styles.scss';

export function ProjectCard({ data }) {
  return(
    <div className="projectCard">
      <div className="cardHeader">
        <img src={data.img} alt="Project logo" />
        <h1>{data.title}</h1>
        <p>{data.techs}</p>
      </div>
      <div className="cardBody">
        <p>{data.description}</p>

        <Button isOutlined>Tenho interesse</Button>
      </div>
    </div>
  );
}