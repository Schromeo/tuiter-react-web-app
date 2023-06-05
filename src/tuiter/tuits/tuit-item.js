import React from "react";
import {TbDiscountCheckFilled} from "react-icons/tb";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer"
import {RxCross1} from "react-icons/rx"

const TuitItem = ({tuit}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {dispatch(deleteTuit(id));}
    return(
        <li className="list-group-item">
            <div className="row">
            <div className="col-auto">
                            <img width={50} className=" mt-2 rounded-5" src={require(`../images/${tuit.image}`)}/>
                        </div>
            <div className="col-10">

                <div className="row">
                    <div>
                        <span className="fw-bolder">{tuit.userName}</span>
                        <TbDiscountCheckFilled color="#0492C2" className="ms-2" size={21}/>
                        <span className=""> {tuit.handle} · {tuit.time} </span>
                        <span className="float-end" onClick={() => deleteTuitHandler(tuit._id)}>
                            <RxCross1/>
                        </span>

                    </div>

                    <div>{tuit.tuit}</div>
                    <div>
                        <TuitStats
                            replies={tuit.replies}
                            retuits={tuit.retuits}
                            likes={tuit.likes}
                            liked={tuit.liked}
                        />
                    </div>
                </div>
            </div>
            </div>

        </li>
    )
};
export default TuitItem;