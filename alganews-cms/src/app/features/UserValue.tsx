import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { User } from "../../sdk/@types/User";
import UserService from "../../sdk/services/User.service";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserValue() {

    const [ earnings, setEarnings] = useState<User.Detailed>()
    

    useEffect(() => {

        UserService.getDetailedUser(7)
        .then(setEarnings)


    },[])

    if(!earnings)

    return <UserValueWrapper style={{ height: 123}}>
        <Skeleton width={150} height={40}/>
        <Skeleton width={150} height={40}/>
        <Skeleton width={150} height={40}/>
        <Skeleton width={150} height={40}/>
    </UserValueWrapper>

    return <UserValueWrapper>
        < ValueDescriptor
        label={'ganho no mês'}
        value={earnings?.metrics.monthlyEarnings}
        isCurrency={true}
        color={'primary'}
        />
        < ValueDescriptor
        label={'ganho na semana'}
        value={earnings.metrics.weeklyEarnings}
        isCurrency={false}
        color={'primary'}
        />
        < ValueDescriptor
        label={'ganho de sempre'}
        value={earnings.metrics.lifetimeEarnings}
        isCurrency={true}
        color={'default'}
        />
        < ValueDescriptor
        label={'total de palavras'}
        value={earnings.metrics.lifetimeWords}
        isCurrency={false}
        color={'default'}
        />
    </UserValueWrapper>
}

const UserValueWrapper = styled.div`
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
`