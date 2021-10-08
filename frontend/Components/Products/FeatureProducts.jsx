const FeatureProducts = () => {
    return (
        <section className=" bg-gray-100 section py-14">
            <div className="text-center center-block mb-16 text-5xl">
                <b className='capitalize italic border-b-8 rounded-b-3xl border-t-8 rounded-t-3xl border-pink-900 px-6 py-5'>
                    featured products
                </b>
            </div>
            <div className="section-center pt-10 sm:grid md:grid-cols-2 xl:grid-cols-1 grid">
                {[1, 2, 3, 4, 5, 6, 7].map((id) => {
                    return (
                        <div key={id} className="px-10 py-9 ">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                                <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" className="w-full align-middle rounded-t-lg" />

                                <blockquote className="relative p-8 mb-4">
                                    <svg height="110" className="-top-1/2 absolute left-0 w-full block h-95-px -top-94-px" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95">
                                        <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current pt-1"></polygon>
                                    </svg>
                                    <h4 className="capitalize text-4xl font-bold text-white  float-left "  >
                                        entertainment center
                                    </h4>
                                    <p className="capitalize text-2xl font-bold text-black float-right " >
                                        $599.99
                                    </p>
                                    <p className="text-md font-light mt-2 text-white">
                                        <footer >
                                            <b></b>

                                        </footer>
                                    </p>
                                </blockquote>
                            </div>

                            {/* <div className="container card-image ">
                                <img height="100%" width="100%"
                                    className="rounded-2xl " src="https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af"
                                    alt="entertainment center" />
                                <a className="link" href="/products/recNZ0koOqEmilmoz">
                                 
                                </a>
                            </div>
                            <footer>
                                <h5>entertainment center</h5>
                                <p>$599.99</p>
                            </footer> */}
                        </div>
                    )
                })}

                <article className="sc-bdfBwQ cIKpxU">
                    <div className="container">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f" alt="high-back bench" />
                        <a className="link" href="/products/recrfxv3EwpvJwvjq">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <footer>
                        <h5>high-back bench</h5>
                        <p>$399.99</p>
                    </footer>
                </article>
                <article className="sc-bdfBwQ cIKpxU">
                    <div className="container">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094" alt="modern bookshelf" />
                        <a className="link" href="/products/recoAJYUCuEKxcPSr">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <footer>
                        <h5>modern bookshelf</h5>
                        <p>$319.99</p>
                    </footer>
                </article>
                <article className="sc-bdfBwQ cIKpxU">
                    <div className="container">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064" alt="utopia sofa" />
                        <a className="link" href="/products/rec7JInsuCEHgmaGe">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <footer>
                        <h5>utopia sofa</h5>
                        <p>$799.99</p>
                    </footer>
                </article>
                <article className="sc-bdfBwQ cIKpxU">
                    <div className="container">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0" alt="vase table" />
                        <a className="link" href="/products/rec3jeKnhInKHJuz2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <footer>
                        <h5>vase table</h5>
                        <p>$1,209.99</p>
                    </footer>
                </article>
                <article className="sc-bdfBwQ cIKpxU">
                    <div className="container">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5" alt="wooden table" />
                        <a className="link" href="/products/rectfNsySwAJeWDN2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <footer>
                        <h5>wooden table</h5>
                        <p>$2,349.99</p>
                    </footer>
                </article>
            </div>
            <a className="btn" href="/products">all products</a>
        </section>
    );
}

export default FeatureProducts;