export default function Footer(props) {
    const {showModal, handleToggleModal, data} = props
    
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>Today's APOD Data</h2>
                <h1>{data?.title}</h1>
            </div>  
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}
