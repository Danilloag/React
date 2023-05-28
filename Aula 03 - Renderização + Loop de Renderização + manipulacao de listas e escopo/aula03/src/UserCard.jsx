import styles from './UserCard.module.css'

function UserCard(props) {
    return (
        <div className={styles.box_user}>
            <p><strong>nome: </strong>{props.nome}</p>
            <p><strong>idade: </strong>{props.idade}</p>
            <p><strong>sexo: </strong>{props.sexo}</p>
            {props.isPremium ? <strong>Usuário Premium</strong> : <strong>Usuário comum</strong>}
        </div>
    );
}

export default UserCard;