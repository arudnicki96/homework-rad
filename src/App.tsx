import './App.css';
import SearchInput from "./components/SearchInput.tsx";
import RangeSlider from "./components/Slider.tsx";
import mockedData from './mocked_data/mockedData.json'
import PostItem, {PostItemType} from "./components/PostItem.tsx";
import {useEffect, useState} from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [likesRange, setLikesRange] = useState<number[]>([1,100])
  const [posts, setPosts] = useState<PostItemType[]>(mockedData)
  const filterByTerm = (data: PostItemType[]) => {
    const filteredData = data.filter(item => {
      const {post} = item
      const {comments} = post
      return comments.filter(comment => comment.text.includes(searchTerm)).length > 0 ;
    }
    )
    return filteredData
  }
  const filterByLikes = (data: PostItemType[]) => {
    const filteredData = data.filter(item => {
      const {likes} = item.post
      return likes >= likesRange[0] && likes <= likesRange[1]
    })
    return filteredData
  }
  useEffect(() => {
    const filteredBySearchTerm = filterByTerm(mockedData);
    const filteredByLikes=filterByLikes(filteredBySearchTerm)
    setPosts(filteredByLikes)

  }, [searchTerm, likesRange])
  return (
    <div className="App">
      <SearchInput setValue={setSearchTerm} value={searchTerm} />
        <RangeSlider value={likesRange} setValue={setLikesRange}/>
        <div className={'post-list'}>
        {posts.map((item, index)=> {

            const {fullName, post} = item;
            const {content, likes, createdAt, comments, imageNumber} = post
            return (
                <div key={index}>
                    <PostItem fullName={fullName} content={content} likes={likes} createdAt={createdAt} comments={comments} imageIndex={imageNumber}/>
                </div>
                   )

        })}
        </div>
    </div>
  );
}

export default App;
