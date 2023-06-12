import React, {useState} from 'react';
import {useSelector} from "react-redux";
import { BiMessageRounded } from "react-icons/bi"
import { AiOutlineRetweet } from "react-icons/ai"
import { RiHeartFill, RiHeartLine } from "react-icons/ri"
import { FiShare } from "react-icons/fi"
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


const TuitStats = ({replies,retuits,likes,liked}) => {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(liked);
    const [likesCount, setLikesCount] = useState(likes);

    const handleLike = () => {
        if (isLiked){
            setLikesCount(likesCount -1);
        } else {
            setLikesCount(likesCount +1);
        }
        setIsLiked(!isLiked);
    };
//<div className="col">
//                    {isLiked ? (<RiHeartFill color="red" onClick={() => } />) :
//                        (<RiHeartLine onClick={handleLike} />)}
//                    <span className="ms-2">{likesCount}</span>
//                </div>

    return (
        <div>
            <div className="row mt-3">
                <div className="col">
                    <BiMessageRounded/>
                    <span className="ms-2">{replies}</span>
                </div>
                <div className="col">
                    <AiOutlineRetweet/>
                    <span className="ms-2">{retuits}</span>
                </div>
                <div className="col">
                    {isLiked ? (<RiHeartFill color="red" onClick={() => dispatch(updateTuitThunk({ likes: likesCount + 1 }))} />) :
                        (<RiHeartLine onClick={() => dispatch(updateTuitThunk({ likes: likesCount + 1 }))} />)}
                    <span className="ms-2">{likesCount}</span>
                </div>
                <div className="col">
                    <FiShare/>
                </div>
            </div>
        </div>
    )
}
export default TuitStats;