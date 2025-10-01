import Cardlist from "../components/Posts/Cardlist"
import styles from "./postPage.module.css"
const Posts = () => {
    return (
        <>
            <h1 className={styles.bgBlue}>APACOBA KALI</h1>
            <Cardlist>
                    <h2>Post 1</h2>
                    <h2>Post 2</h2>
                    <h2>Post 3</h2>
            </Cardlist>
        </>
    )
}

export default Posts