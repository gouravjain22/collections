
export default function Cards({ title, description, img, price, ReadMore }) {

    return (
        <>

            <div className="card" style={{ width: "20rem", margin: "15px" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title"> {title}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                    <a href={ReadMore} className="card-link">ReadMore</a>
                </div>

            </div>

    
        </>
    )
}