import Toast from 'react-bootstrap/Toast';
import style from "./messages.module.css"

interface IProps {
    devName: string,
    message: string,
    image: string
}

export default function Messages({ devName, message, image }: IProps) {
    return (
        <Toast className={style.messageContainer}>
            <Toast.Header>
                <img src={image} className={style.devImage} alt="" />
                <strong className="me-auto">{devName}</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body className={style.message}>{message}</Toast.Body>
        </Toast>
    );
}
