import { ContainerCard, ThumbCard } from './styles'

import { RiDeleteBin5Line, RiEdit2Fill } from 'react-icons/ri'

function Card({
    type,
    color,
    title,
    text,
    subText,
    content
}) {
    return (
        <>
            <ContainerCard type={type}>
                <ThumbCard color={color} type={type}>
                    <p>{title}</p>
                </ThumbCard>

                <div className="text-infos">
                    {type === "small" ?
                        <>
                            <p>{text ? text : null}</p>
                            <p>{subText ? subText : null}</p>
                        </>
                        :
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Nick</th>
                                <th>Ações</th>
                            </tr>
                            <tr>
                                <td>#0312</td>
                                <td>Brenin Rodrigues</td>
                                <td>
                                    <RiDeleteBin5Line />
                                    <RiEdit2Fill />
                                </td>
                            </tr>
                        </table>
                    }
                </div>
            </ContainerCard>
        </>
    )
}

export default Card