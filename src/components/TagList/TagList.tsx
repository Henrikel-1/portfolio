import styles from "./TagList.module.css";

interface TagListProps {
  items: string[];
  label: string;
}

function TagList({ items, label }: TagListProps) {
  return (
    <ul className={styles.list} aria-label={label}>
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default TagList;