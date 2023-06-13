import React, {useState} from 'react';
import {useSelector} from "react-redux";
import { BiMessageRounded } from "react-icons/bi"
import { AiOutlineRetweet } from "react-icons/ai"
import { RiHeartFill, RiHeartLine } from "react-icons/ri"
import { FiShare } from "react-icons/fi"
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(tuit.liked);

    const handleLike = () => {
        if (isLiked){
            dispatch(updateTuitThunk({...tuit, likes: tuit.likes - 1 }))
        } else {
            dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1 }))
        }
        setIsLiked(!isLiked);
    };

    return (
        <div>
            <div className="row mt-3">
                <div className="col">
                    <BiMessageRounded/>
                    <span className="ms-2">{tuit.replies}</span>
                </div>
                <div className="col">
                    <AiOutlineRetweet/>
                    <span className="ms-2">{tuit.retuits}</span>
                </div>
                <div className="col">
                    <RiHeartFill color={isLiked && "red"} onClick={() => {handleLike()}} />
                    <span className="ms-2">{tuit.likes}</span>
                </div>
                <div className="col">
                    <FiShare/>
                </div>
            </div>
        </div>
    )
}
export default TuitStats;