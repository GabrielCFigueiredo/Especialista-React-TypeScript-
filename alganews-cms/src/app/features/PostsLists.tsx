import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { useEffect, useMemo, useState } from "react"
import { Column, usePagination, useTable } from "react-table"
import { Posts } from "../../sdk/@types/Posts"
import PostService from "../../sdk/services/Post.service"
import Table from "../components/Table/Table"
import { format } from 'date-fns'
import Skeleton from "react-loading-skeleton"
import Loading from "../components/Loading/Loading"
import PostPreview from "./PostPreview"
import modal from "../../core/utilis/modal"





export default function PostsList() {

  const [posts, setPosts] = useState<Posts.PostsPaginated>()
  const [error, setError] = useState<Error>()
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  


  useEffect(() => {

    setLoading(true)
      


    PostService.getAllPosts({
      page,
      size: 7,
      showAll: true,
      sort: ['createdAt', 'desc']
    })
      .then(setPosts)
      .catch((error) => {
        setError(new Error(error.message))
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page])

  if (error)
    throw error



  const columns = useMemo<Column<Posts.PostSummary>[]>(

    () => [

      {

        Header: '',

        accessor: 'id', // accessor is the "key" in the data

        Cell: () => <Icon path={mdiOpenInNew} size={'14px'} color={'#09f'} />

      },

      {

        Header: () => <div style={{ textAlign: 'left', padding: '0 8px' }}>Titulo</div>,

        accessor: 'title', // accessor is the "key" in the data

        Cell: (props) => <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img width={'24px'} height={'24px'}
            src={props.row.original.editor.avatarUrls.small}
            alt={props.row.original.editor.name}
            title={props.row.original.editor.name}
          />
          <a href={`/posts/${props.row.original.id}`}
          onClick={e => {
            e.preventDefault();
            modal({
              children: <PostPreview
              postId={props.row.original.id}
              />
            })
          }}
          >
            {props.value}
          </a>

          
          
        </div>


        



      },

      {

        Header: () => <div style={{ textAlign: 'right', padding: '0 8px' }}>Criação</div>,

        accessor: 'createdAt',

        Cell: (props) => <div style={{ textAlign: 'center', fontWeight: 700 }}>{format(new Date(props.value), 'dd/MM/yyyy - kk:mm')}</div>

      },

      {

        Header: () => <div style={{ textAlign: 'center', padding: '0 8px' }}>Ultima atualização</div>,

        accessor: 'updatedAt',

        Cell: (props) => <div style={{ display: 'flex', gap: '8px', fontFamily: 'Roboto mono, monospace' }}>
          <span style={{ color: '#09f' }}>{format(new Date(props.value), 'dd/MM/yyyy - kk:mm')}</span>
        </div>

      },

      {
        id: Math.random().toString(),

        accessor: 'published',
        Header: () => <div style={{ textAlign: 'right', padding: '0 8px' }}>Ações</div>,
        Cell: (props) => <div style={{ textAlign: 'right' }}>

          {
            props.value ? 'Publicado' : 'Privado'
          }

        </div>
      },

    ],

    []

  )

  const instance = useTable<Posts.PostSummary>(
    {
      columns,
      data: posts?.content || [],
      manualPagination: true,
      pageCount: posts?.totalPages,
      initialState: { pageIndex: 0 }
    },
    usePagination
  )

  if (!posts)
    return <div>
      <Skeleton height={32} />
      <Skeleton height={40} />
      <Skeleton height={40} />
      <Skeleton height={40} />
      <Skeleton height={40} />
      <Skeleton height={40} />
      <Skeleton height={40} />
      <Skeleton height={40} />
    </div>

  return (
    <div>
    
      <Loading show={loading} />
      <Table
        instance={instance}
        onPaginete={setPage}
      />
    </div>
  )


}
