import { ToyPreview } from "./ToyPreview.jsx"

export function ToyList({ toys, onEditToy, onToyDetails, onRemoveToy }) {

    return (
        <section className="toy-list list-layout">
            {toys.map(toy => {
                return (<div key={toy._id} className="toy-preview">
                    <ToyPreview toy={toy} key={toy._id} />
                    <div>

                        <button onClick={() => onToyDetails(toy._id)}>details</button>
                        <button onClick={() => onEditToy(toy._id)}>edit</button>
                        <button onClick={() => onRemoveToy(toy._id)}>remove</button>
                    </div>

                </div>)
            })}
        </section>
    )
}