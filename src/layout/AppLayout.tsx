import React, {FC} from 'react';

import styles from './AppLayout.module.css';
import {Footer, Header, Sidebar} from "../components";
import {Routes} from "../routing";


export const AppLayout: FC = () => {
  return (
    <div className={styles.app__wrapper}>
      <Header />
        <div className={styles.app__main}>
            <Sidebar/>
            <Routes/>
        </div>
      <Footer />
    </div>
  );
};
