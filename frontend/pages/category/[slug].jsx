// export const getStaticPaths = async (props) => {
//     console.log('slug', props)

//     return {
//         paths: ['Cloths'],
//         fallback: false
//     }
// }

export const getServerSideProps = async (props) => {
    let { slug } = props.query
    console.log('slug Props', slug)
    return {
        props: {
            slug
        }
    }
}



const Category = ({ slug}) => {
    return (
        <div className="container">
            Category is {slug}
        </div>
    );
}

export default Category;