import usePageTitle from "../../core/hooks/usePageTitle"
import FormList from "../features/FormList"
import DefaultLayout from "../layouts/Default/DefaultLayouts"



export default function Form() {

    usePageTitle('Posts')
   
    return  (
        <DefaultLayout>
            <FormList/>
        </DefaultLayout>
    )
}