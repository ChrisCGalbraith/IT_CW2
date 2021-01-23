const Row = ({speaker, subject, room}) => {

    return (
        <>
            <tr>
                <td>{speaker}</td>
                <td>{subject}</td>
                <td>{room}</td>
            </tr>
        </>
    )

}

export default Row;