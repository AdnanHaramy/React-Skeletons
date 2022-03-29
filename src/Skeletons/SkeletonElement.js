import React from 'react';
import './Skeleton.css'
const SkeletonElement = ({ type }) => {
    const dynamicClass = `skeleton ${type} `;
    return (
        <div className={dynamicClass}>
        </div>
    )
        ;
}
export default SkeletonElement;