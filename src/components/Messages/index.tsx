import Toast from 'react-bootstrap/Toast';
import style from "./messages.module.css"

interface IProps {
    devName: string,
    message: string
}

export default function Messages({ devName, message }: IProps) {
    return (
        <Toast className={style.messageContainer}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{devName}</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
}
