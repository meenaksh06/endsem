import styles from "../css/MovieCard.module.css";
export default function MovieCard({movie}){
    return (
        <div>

            <div className={styles.card} >
                <img src={movie.thumbnail}/>
            </div>
        </div>
    )
}