import NotFound from '../../assets/not_found.svg'

export default function ImageNotFound() {
    return <div>
        <img src={NotFound} alt= 'Imagem não encontrada'/>
    </div>
}