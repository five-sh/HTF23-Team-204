const IndiItem = (props)=>
{
    const {details} = props
    const {sub,pre} = details
    const classs = pre? "presentCLass":"absentClass"
    return(
        <p className={pre}>{sub}</p>
    )
}

export default IndiItem