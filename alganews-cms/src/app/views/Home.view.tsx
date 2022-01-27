import usePageTitle from "../../core/hooks/usePageTitle"
import ErrorBouny from "../components/ErrorBouny"
import PostsList from "../features/PostsLists"
import UserMetrics from "../features/UserPerformace"
import UserTopTags from "../features/UserTopTags"
import UserValue from "../features/UserValue"
import DefaultLayout from "../layouts/Default/DefaultLayouts"



export default function Home() {

    usePageTitle('Home')
    return (
        <DefaultLayout>
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