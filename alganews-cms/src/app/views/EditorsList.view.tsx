import DefaultLayout from "../layouts/Default/DefaultLayouts";
import usePageTitle from "../../core/hooks/usePageTitle";
import EditorList from "../features/EditorList";


export default function EditorsList() {
    usePageTitle('Lista de editores')
    return <DefaultLayout>
        <EditorList/>
    </DefaultLayout>
}