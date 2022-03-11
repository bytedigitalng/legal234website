export default function PageHeader(props){
    return (
        <>
            <div className={`container-fluid py-5 ${props.data.class}`}>
                <div className="row py-5">
                    <div className="col-md-12 p-5 text-white">
                        <h1 className="text-center display-2 font-bold">
                            {props.data.title}
                        </h1>
                        <h4 className="text-center">{props.data.subtitle}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}