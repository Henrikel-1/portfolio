import styles from "./TagList.module.css";

interface TagListProps {
  items: string[];
  label: string;
  learningItems?: string[];
}

function TagList({ items, label, learningItems = [] }: TagListProps) {
  return (
    <ul className={styles.list} aria-label={label}>
      {items.map((item) => {
        const isLearning = learningItems.includes(item);

        return (
          <li
            key={item}
            className={
              isLearning ? `${styles.tag} ${styles.learning}` : styles.tag
            }
          >
            {item}
            {isLearning && (
              <span className={styles.learningLabel}>estudando</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default TagList;