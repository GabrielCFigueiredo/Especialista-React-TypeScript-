
import usePageTitle from "../../core/hooks/usePageTitle";
import ErrorBouny from "../components/ErrorBouny";
import EditorProfileFeature from "../features/EditorProfile";
import DefaultLayout from "../layouts/Default/DefaultLayouts";


export default function EditorProfile() {

    usePageTitle('Editor')

    return (
        <DefaultLayout>
            <ErrorBouny>
                
            <EditorProfileFeature hideData/>

            </ErrorBouny>
        </DefaultLayout>
    )
}


