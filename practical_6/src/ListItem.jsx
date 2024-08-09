const ListItem = ({item}) => {
    return (
        <div className="p-2 flex flex-row space-between justify-center w-full justify-between">
            <div className="text-white">{item.id}1</div>
            <div className="text-white">{item.text}this is tmp text</div>
            <div className="flex flex-row justify-center">
                <div>
                    <button className="p-2 bg-green-500 text-white">Edit</button>
                    <button className="p-2 bg-red-500 text-white">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ListItem;