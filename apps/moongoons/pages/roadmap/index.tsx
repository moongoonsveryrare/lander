import styles from './index.module.css';

/* eslint-disable-next-line */
export interface RoadmapProps {}

export function Roadmap(props: RoadmapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Roadmap!</h1>
    </div>
  );
}

export default Roadmap;
