import DirectoryItem from "../directory-item/directory-item.component";

import './directory.scss';

import React from 'react'

 const Directory = ({categories}) => {
  return (
    <div className='directory-container'>
{
  
  categories.map( (category) => (
  <DirectoryItem Key ={category.id} category ={category} />

   ) )
}
    </div>
  );
}
  
export default Directory;

