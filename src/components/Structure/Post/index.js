import Content from './Content';
import Share from './Share';
import styles from './styles.module.css';

export default function Post({ content, date, summary, title }) {
  return (
    <div className={styles.post}>
      <Share title={title} />
      <Content content={content} date={date} summary={summary} />
    </div>
  );
}
