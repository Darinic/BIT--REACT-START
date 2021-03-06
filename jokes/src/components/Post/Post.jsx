const Post = (props) => {
    return (  
        <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                    <div class="bg-white rounded shadow-sm"><img src="https://pbs.twimg.com/media/EI136QeW4AU4oXr.jpg" alt="" class="img-fluid card-img-top"></img>
                        <div class="p-4">
                            <h5> <button class="text-dark">{props.type}</button></h5>
                            <p class="small text-muted mb-0">{props.setup}{props.joke}<br/>{props.delivery}</p>
                            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                <p class="small mb-0"><i class="fa fa-picture-o mr-2"></i><span class="font-weight-bold">JPG</span></p>
                                <div class="badge badge-danger px-3 rounded-pill font-weight-normal">{props.category}</div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
 
export default Post;