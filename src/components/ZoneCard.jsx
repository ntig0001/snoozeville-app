import React from 'react'

const ZoneCard = ({ title, subtitle }) => {
  return (
    <div className="bg-white p-4 rounded border border-blue-500">
        <h5 className="font-semibold">{title}</h5>
        <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  )
}

export default ZoneCard
