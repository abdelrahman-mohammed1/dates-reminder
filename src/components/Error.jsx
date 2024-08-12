import Alert from 'react-bootstrap/Alert';

export default function Error({ children }) {
    const style = { padding: '10px 5px', marginTop: '5px' }

    return <Alert style={style} variant={'danger'}>{children}</Alert>

}