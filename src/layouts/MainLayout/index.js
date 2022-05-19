import Content from 'components/Content';
import Footer from 'components/Footer';
import Header from 'components/Header';

import styles from './styles.module.scss';

const MainLayout = () => (
    <div className={styles.mainLayout}>
        <Header />

        <Content className={styles.content} />

        <Footer />
    </div>
);

export default MainLayout;
