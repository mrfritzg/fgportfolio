export default function Contact() {
    return (
        <>
            <h1 className="text-center mb-0 pb-0">SEND ME A MESSAGE</h1>
            <div className="row justify-content-center my-5 emailform">
                <div className="col-md-8">
                    <form action="">
                        <label htmlFor="email" className="fw-bold form-label">Email:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-envelope-at-fill"></i>
                            </span>
                            <input type="email" id="email" placeholder="e.g. mario@example.com" required className="form-control" />
                        </div>

                        <label htmlFor="subject" className="fw-bold form-label">Subject:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-chat-right-dots-fill"></i>
                            </span>
                            <input type="text" id="subject" placeholder="e.g. Hi there" required className="form-control" />


                        </div>

                        <div className=" form-floating mb-4 mt-5 input-group">
                            <textarea id="message" className="form-control" aria-label="With textarea" style={{ height: "200px" }}required ></textarea>
                            <label htmlFor="message" className="fw-bold">Message...</label>
                        </div>
                        <div className="mb-4 text-center">
                            <button type="submit" className="btn forEmail">SEND</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}