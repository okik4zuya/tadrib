import {Navbar, NewsCard, Paginator} from "@/Components"
export default function Homepage(props){
    console.log(props.news);
    return (
        <div className="bg-gray-700 text-white min-h-screen flex flex-col justify-center">
            <Navbar></Navbar>
            <div className="w-full text-center font-bold text-xl">{props.title}</div>
            <div className="text-center mb-6">{props.description}</div>
            <div className="flex flex-wrap justify-center">
            {props.news ? props.news.data.map((data, i)=>(
                <div key={i} className="mb-4 mr-4 h-full flex flex-col">
                    <NewsCard data={data}/>
                </div>
            )) : <div>Saat ini belum ada berita</div>}
            </div>
            <div className="flex justify-center">
            <Paginator meta={props.news.meta}/>
            </div>
        </div>
    )
}