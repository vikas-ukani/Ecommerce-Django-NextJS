const SectionTitle = ({ title }) => {
    return (
        <div className="text-center center-block mb-16 text-5xl">
            <b className='capitalize italic border-b-8 rounded-b-3xl border-t-8 rounded-t-3xl border-pink-900 px-6 py-5'>
                {title}
            </b>
        </div>
    );
}

export default SectionTitle;