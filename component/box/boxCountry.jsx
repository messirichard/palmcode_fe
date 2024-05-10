import {useEffect, useState} from "react";

export default function BoxCountry(props) {
    const {countryData, value, setIdClicked, setBox, setLabelChange, setCodeCountry, setIdCountry} = props
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        const result = countryData.data.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase()));
        setFilteredData(result)
    }, [value]);

    const handleClick = (id) => {
        const result = countryData.data.filter(item => item.id === id);
        setIdClicked(result[0].id)
        setLabelChange(result[0].name)
        setCodeCountry(result[0].code)
        setIdCountry(result[0].id)
        setBox(false)
    }

    return (
        <>
            {filteredData.length > 0 ?
                <>
                    {filteredData.map((country, index) => (
                        <div key={index} className="items-data" onClick={() => handleClick(country.id)}>
                            <label className="text-white flex justify-start items-center gap-2">
                                <img src={`https://flagsapi.com/${country.code.toUpperCase()}/flat/64.png`} alt="" /> {country.name}
                            </label>
                        </div>
                    ))}
                </>
                :
                <>
                    <div className="items-data">
                        <label className="text-white flex justify-start items-center gap-2">
                            Country not Found
                        </label>
                    </div>
                </>
            }
        </>
    )
}
