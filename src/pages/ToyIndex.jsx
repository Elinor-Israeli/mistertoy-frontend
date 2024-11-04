import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { loadToys, removeToy } from "../store/actions/toy.actions.js"
import { ToyList } from "../cmps/ToyList.jsx"
import { useNavigate, useSearchParams } from "react-router-dom"
import { ToyFilter } from "../cmps/ToyFilter.jsx"
import { SET_FILTER_BY } from "../store/reducers/toy.reducer.js"
import { toyService } from "../services/toy.service.js"

export function ToyIndex() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const labels = useSelector(storeState => storeState.toyModule.labels)

    const [searchParams, setSearchParams] = useSearchParams()
    const defaultFilter = toyService.getFilterFromSearchParams(searchParams)

    useEffect(() => {
        onSetFilterBy(defaultFilter)
    }, [])

    useEffect(() => {
        setSearchParams(filterBy)
        loadToys()
            .catch(err => {
                console.log('Cannot load toys! ' + err)
            })
    }, [filterBy])

    function onSetFilterBy(filterBy) {
        dispatch({ type: SET_FILTER_BY, filterBy })
    }

    function onAddToy() {
        navigate('/toy/edit/')
    }

    function onRemoveToy(toyId) {
        const userConfirm = confirm('Please confirm to remove toy!')
        if (!userConfirm) return
        removeToy(toyId)
            .then(() => {
                console.log('Toy removed')
            })
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onEditToy(toyId) {
        navigate('/toy/edit/' + toyId)
    }

    function onToyDetails(toyId) {
        navigate('/toy/' + toyId)
    }

    return (
        <section className="toy-index">
            <ToyFilter onSetFilterBy={onSetFilterBy} filterBy={filterBy} labels={labels} />
            <button className="add-btn" onClick={onAddToy}>Add Toy</button>
            <ToyList toys={toys} onEditToy={onEditToy} onToyDetails={onToyDetails} onRemoveToy={onRemoveToy} />
        </section>
    )
}