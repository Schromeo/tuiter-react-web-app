import React, {useState} from "react"
import {IconContext} from "react-icons"
import PropTypes from "prop-types"

import { AiOutlinePicture, AiOutlineFileGif } from 'react-icons/ai';
import { MdFormatListBulleted } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';
import { TbCalendarStats } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiBold, BiItalic } from 'react-icons/bi';

//import {createTuit} from "./reducers/tuits-reducer";
import {createTuitThunk} from "./services/tuits-thunks";
import {deleteTuit} from "./reducers/tuits-reducer";

import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {

        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening("");

    }
    return(

        <div className = "row">
            <div className="col-auto">
                <img src="/images/nasa.png" width={60}/>
            </div>

            <div className="col-10">
                <textarea value={whatsHappening}
                          placeholder="What's happening?"
                          className="form-control border-0"
                          onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>

                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                            Tuit
                    </button>

                    <div className="text-primary fs-2">
                        <i><AiOutlinePicture  className="me-3"/></i>
                        <i><AiOutlineFileGif className="me-3"/></i>
                        <i><MdFormatListBulleted className="me-3"/></i>
                        <i><BsEmojiSmile className="me-3"/></i>
                        <i><TbCalendarStats className="me-3"/></i>
                        <i><HiOutlineLocationMarker className="me-3"/></i>
                        <i><BiBold className="me-3"/></i>
                        <i><BiItalic className="me-3"/></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;