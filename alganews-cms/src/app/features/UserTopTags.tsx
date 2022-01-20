import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components";
import { Metric } from "../../sdk/@types/Metric";
import MetricService from "../../sdk/services/Metric.service";
import CircleChart from "../components/CircleChart";

export default function UserTopTags() {

    const [ topTags, setTopTags] = useState<Metric.EditorTagRatio>([])

    useEffect(() => {

        MetricService.getTop3Tags()
        .then(setTopTags)
        
    },[])

    if(!topTags.length)

    return <UserTopTagWrapper >
        <Skeleton 
        width={88}
        height={88}
        circle/>
        <Skeleton 
        width={88}
        height={88}
        circle/>
        <Skeleton 
        width={88}
        height={88}
        circle/>
    </UserTopTagWrapper>


    return <UserTopTagWrapper>

            {
                topTags.map((tag, index) => {
                    
                    return <CircleChart
                    progress={tag.percentage}
                    caption={tag.tagName}
                    size={88}
                    theme={index === 0 ? 'primary' : 'default'}
                    />
                })
            }
        </UserTopTagWrapper>
}

const UserTopTagWrapper = styled.div`
    
display: flex;
justify-content: space-between;
width: 300px;
`