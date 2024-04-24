import Image from "next/image";
import PodcastList from '@/components/PodcastList/PodcastList'
import PodcastItem from '@/components/PodcastItem/PodcastItem'
import styles from "./page.module.css";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
     <PodcastList component={PodcastItem}/>
    </main>
  );
}
