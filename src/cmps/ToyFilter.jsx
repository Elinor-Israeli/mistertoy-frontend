// const { useState, useEffect, useRef } = React

import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service.js"
import { toyService } from '../services/toy.service'

const toyLabels = toyService.getToyLabels()


export function ToyFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const debouncedOnSetFilter = useRef(utilService.debounce(onSetFilter, 300))

    useEffect(() => {
        debouncedOnSetFilter.current(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        if (type === 'select-multiple') {
            console.log(target.selectedOptions)
            value = Array.from(target.selectedOptions, option => option.value || [])
            console.log('value:', value)
        }
        value = (type === 'number') ? +value || '' : value
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    const { txt, inStock, labels } = filterByToEdit

    return (
        <section className="toy-filter full main-layout">
            <h2>Toys Filter - Sort</h2>
            <form onSubmit={onSubmitFilter}>
                {/* <label htmlFor="vendor">Vendor:</label> */}
                <input
                    value={txt}
                    type="txt"
                    placeholder="Search"
                    onChange={handleChange}
                />

                <select name="inStock" value={inStock || ''} onChange={handleChange}>
                    <option value="">All</option>
                    <option value="true">In Stock</option>
                    <option value="false">Not in stock</option>
                </select>

                <select
          multiple
          name="labels"
          value={labels || []}
          onChange={handleChange}
        >
          <option value="">Labels</option>
          {toyLabels.map(label => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>

            </form>

        </section>
    )
}