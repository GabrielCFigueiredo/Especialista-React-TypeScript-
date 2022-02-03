import { useParams } from "react-router-dom"
import usePageTitle from "../../core/hooks/usePageTitle"
import FormList from "../features/FormList"
import DefaultLayout from "../layouts/Default/DefaultLayouts"



export default function PostEditView() {

    const params = useParams()

    usePageTitle('Post-Edit')
   
    return  (
        <DefaultLayout>
            <FormList postId={Number(params.id)}/>
        </DefaultLayout>
    )
}