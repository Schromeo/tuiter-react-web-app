import React, {useState} from 'react';
import {useSelector} from "react-redux";
import { BiMessageRounded } from "react-icons/bi"
import { AiOutlineRetweet } from "react-icons/ai"
import { RiHeartFill, RiHeartLine } from "react-icons/ri"
import { FiShare } from "react-icons/fi"

const TuitStats = ({replies,retuits,likes,liked}) => {

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
                    {isLiked ? (<RiHeartFill color="red" onClick={handleLike} />) :
                        (<RiHeartLine onClick={handleLike} />)}
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