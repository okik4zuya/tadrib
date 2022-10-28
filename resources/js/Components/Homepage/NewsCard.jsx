export default function NewsCard(props){
    return (
        <div data-theme="cupcake" className="card w-96 bg-base-100 shadow-xl flex-1 h-full">
            <figure><img src={props.data.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.data.title}</h2>
                <p>{props.data.description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    )
}