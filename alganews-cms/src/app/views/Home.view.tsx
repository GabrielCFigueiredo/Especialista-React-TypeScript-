
import usePageTitle from "../../core/hooks/usePageTitle"
import usePosts from "../../core/hooks/usePosts"
import ErrorBouny from "../components/ErrorBouny"
import PostsList from "../features/PostsLists"
import UserMetrics from "../features/UserPerformace"
import UserTopTags from "../features/UserTopTags"
import UserValue from "../features/UserValue"
import DefaultLayout from "../layouts/Default/DefaultLayouts"



export default function Home() {

    usePageTitle('Home')

   const { paginated, loading, fetchPosts } = usePosts()

    return (
        <DefaultLayout>

            <button onClick={() => {
                fetchPosts({page: 1})
            }}>
                açao
            </button>

            {loading ? 'carregando' : 'finalizado'}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                <UserTopTags />
                <UserValue />
            </div>
            <ErrorBouny component="performance">
                <UserMetrics />
            </ErrorBouny>
            <ErrorBouny component="lista de posts">
                <PostsList />
            </ErrorBouny>
        </DefaultLayout>
    )
}