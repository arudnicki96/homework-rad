import './CommentItem.css'

export type CommentType = {
    text : string;
}

const CommentItem = (props: CommentType): JSX.Element => {
    const {text} = props
    return (
        <div className={'container'}>{text}</div>
    )
}

export default CommentItem