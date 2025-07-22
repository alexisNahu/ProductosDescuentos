import React, { useState, type FormEvent } from 'react'

interface Props<T> {
    filterLogic: (searchValue: string) => T[],
    completeList: T[]
    setShowingValues: React.Dispatch<React.SetStateAction<T[]>>;
}

function SearchForm<T>({ filterLogic, completeList, setShowingValues }: Props<T>) {
    const [searchInput, setSearchInput] = useState<string>('')

    
    const handleSearchSubmit = (e: FormEvent) => {
        e.preventDefault()
        
        const filteredResults = filterLogic(searchInput.trim())

        console.log(filteredResults)

        if (!filteredResults.length) {
            alert('No hay resultados con ese descuento buscado')
            setShowingValues(completeList)
            return
        }

        setShowingValues(filteredResults)
    }



    return (
        <form className="flex items-center gap-2 w-full max-w-md mx-auto" onSubmit={(e) => handleSearchSubmit(e)}>
            <div className="relative w-full">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
                </span>
                <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Buscar descuento..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
            >
                Buscar
            </button>
            <button
                type="button"
                onClick={() => setShowingValues(completeList)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
            >
                Ver Todos
            </button>
        </form>

    )
}



export default SearchForm