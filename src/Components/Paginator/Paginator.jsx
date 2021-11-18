import React, {useState} from "react";
import style from './Paginator.module.css'

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)



    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)

    let leftPartionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPartionPageNumber = portionNumber * props.portionSize
    // return (
    //     <div>
    //         {/*{*/}
    //         {/*    pages.map(p => <span*/}
    //         {/*        onClick={() => {*/}
    //         {/*            props.onPageChanged(p)*/}
    //         {/*        }}*/}
    //         {/*        className={props.currentPage === p ? style.selectedPage : ''}>{p}</span>)*/}
    //         {/*}*/}
    //     </div>
    // )
    return (
        <div className={style.paginator}>
            {
                portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Prev</button>}

            {

                pages.filter( (p) => (p >= leftPartionPageNumber && p <= rightPartionPageNumber) )

                    .map(p => <p className={style.page}><span
                        key={p}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                        className={props.currentPage === p ? style.selectedPage : ''}>{p}</span></p>)
            }

            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>
    )

}

export default Paginator