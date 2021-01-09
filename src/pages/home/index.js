
import Card from '../../components/Card'

import { ContainerCards } from './styles'

function Home() {
    return (
        <>
            <ContainerCards>
                <Card type="small" color="#6150c4" icon="" text="Brenin" subText="Rodrigues" />
                <Card type="small" color="#ff0062" icon="" text="Brenin" subText="Rodrigues" />
                <Card type="small" color="#006eff" icon="" text="Brenin" subText="Rodrigues" />
            </ContainerCards>
            <ContainerCards>
                <Card
                    type="large"
                    color="#6150c4"
                    title="Tabela de alguma coisa"
                    text="Brenin"
                    subText="Rodrigues" />
            </ContainerCards>
        </>
    )
}

export default Home