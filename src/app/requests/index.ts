import {gql} from "@apollo/client";


const GQL_GET_ALL_POSTS = gql`
    query posts {
        all {
            title
        }
    }
`

export {
    GQL_GET_ALL_POSTS
}