import './PostItem.css'
import {useState} from "react";
import CommentItem, {CommentType} from "./CommentItem.tsx";

export type PostItemType = {
    content: string;
    likes: number;
    createdAt: string;
    comments: CommentType[];
    imageIndex: number;
    fullName: string;
}
const PostItem = (props: PostItemType): JSX.Element => {
    const {likes, createdAt, comments, imageIndex, fullName} = props;
    const [showComments, setShowComments] = useState<boolean>(false)
    const commentsLabel = !showComments ? 'Show comments' : 'Hide comments'
    return (<>
        <div className={'post-container'} key={fullName}>
            <div className={'image'}>
            <img src={`https://picsum.photos/id/${imageIndex}/250/200/`}/>
            </div>
            <div className={'name-container'}>
            <h3>{fullName}</h3><h4>{createdAt}</h4>
            </div>
            <div className={'likes-container'}>
                <img src={require('../assets/icone-noire-noir.png')} width={20} height={20}/>
                <p>{likes}</p>
            </div>
            <div className={'comments'}>
                <p>Comments</p>
                <div onClick={()=> setShowComments(!showComments)}>
                <p>{commentsLabel}</p>
                </div>
            </div>
            {showComments ? comments.map(item => {
                return <CommentItem text={item.text}/>
            }) : null}
        </div>


            </>

    )
}
export default PostItem