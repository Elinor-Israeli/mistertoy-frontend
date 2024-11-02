import { ToyPreview } from "./ToyPreview.jsx"

export function ToyList({ toys, onRemoveToy, onEditToy, addToCart }) {
    // console.log('toys:', toys)
    if (!toys) return <div>Loading</div>
    return (
        <ul className="toy-list">
            {toys.map(toy =>
                <li className="toy-preview" key={toy._id}>
                    <ToyPreview toy={toy} />

                    <div>
                        <button onClick={() => onRemoveToy(toy._id)}>x</button>
                        <button onClick={() => onEditToy(toy)}>Edit</button>
                    </div>

                    <button className="buy" onClick={() => addToCart(toy)}>
                        Add to Cart
                    </button>
                </li>)}
        </ul>
    )
}

ToyList.propTypes = {
    txt(props, propName, componentName) {
        if (!(propName in props)) {
            throw new Error(`missing ${propName}`)
        }
        if (props[propName].length < 6) {
            throw new Error(`${propName} was too short`)
        }
    }
}
