export const getServerSideProps = async (props) => {
    let { slug } = props.query
    return {
        props: {
            slug
        }
    }
}



const Category = ({ slug }) => {
    return (
        <div className="container">
            Category is {slug}
        </div>
    );
}

export default Category;