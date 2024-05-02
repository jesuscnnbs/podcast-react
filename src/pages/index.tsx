import PodcastList from "@/components/PodcastList/PodcastList";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <PodcastList />
    </main>
  );
}
