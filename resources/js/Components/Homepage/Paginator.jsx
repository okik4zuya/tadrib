import { Link } from "@inertiajs/inertia-react";

export default function Paginator(props){
    console.log(props.meta)
    const prev = props.meta.links[0].url;
    const next = props.meta.links[props.meta.links.length - 1].url;
    const current = props.meta.current_page;
    return (
        <div className="btn-group">
            {prev && <Link href={prev} className="btn btn-outline">«</Link>}
            <button className="btn btn-outline">Page {current}</button>
            {next && <Link href={next} className="btn btn-outline">»</Link>}
        </div>
    )
}